from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Post
from .serializers import PostSerializer

# chatbot import
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from PyPDF2 import PdfReader
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.vectorstores import Chroma
import joblib
import os
import json
import time
import requests
from dotenv import load_dotenv


@api_view(['GET'])
def get_posts(request):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)


# chatbot view
load_dotenv()
API_TOKEN = os.getenv("HF_API_TOKEN")
API_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3"

def query_huggingface(payload):
    headers = {"Authorization": f"Bearer {API_TOKEN}"}
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

def process_pdf():
    reader = PdfReader("data/fine_tune_data.pdf")
    raw_text = ""
    for page in reader.pages:
        text = page.extract_text()
        if text:
            raw_text += text
    return raw_text

def get_vectorstore(texts):
    embeddings_file = "./data/genderviolence.joblib"
    if os.path.exists(embeddings_file):
        embeddings = joblib.load(embeddings_file)
    else:
        embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
        joblib.dump(embeddings, embeddings_file)

    vectorstore = Chroma.from_texts(texts, embeddings, persist_directory=None)
    return vectorstore.as_retriever()

@csrf_exempt
def chatbot_view(request):
    print("Hello World!")
    if request.method == "POST":
        data = json.loads(request.body)
        user_query = data.get("query", "")
        if not user_query:
            return JsonResponse({"error": "Query is required"}, status=400)

        # Process the PDF and create context
        raw_text = process_pdf()
        text_splitter = CharacterTextSplitter(separator="\n", chunk_size=350, chunk_overlap=20, length_function=len)
        texts = text_splitter.split_text(raw_text)
        retriever = get_vectorstore(texts)
        documents = retriever.get_relevant_documents(user_query)
        context = "\n".join([doc.page_content for doc in documents])

        # Prepare prompt
        template = """
        <s>[INST] <<SYS>>
        You are a helpful AI assistant who has to act as an advocate in the case of gender-based violence in Nepal. 
        Answer based on the context provided. Do not answer unnecessarily if you don't find the context.
        <</SYS>>
        {context}
        Question: {question}
        Helpful Answer: [/INST]
        """
        full_prompt = template.format(context=context, question=user_query)

        # Query Hugging Face model
        payload = {
            "inputs": full_prompt,
            "parameters": {"max_new_tokens": 500, "temperature": 0.7, "context_length": 2048},
        }

        try:
            start_time = time.time()
            api_response = query_huggingface(payload)
            response_time = round(time.time() - start_time, 2)

            response_text = api_response[0].get("generated_text", "Sorry, no response generated.")
            response_start = response_text.find("[/INST]")
            response_text = response_text[response_start + len("[/INST]") :].strip() if response_start != -1 else "Sorry, no valid answer generated."

            return JsonResponse({"response": response_text, "response_time": response_time})

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request method"}, status=405)