from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Post
from .serializers import PostSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.utils import timezone
import time

@api_view(['GET'])
def get_posts(request):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)

class ChatbotAPIView(APIView):
    def post(self, request, *args, **kwargs):
        # Get the query from the incoming JSON request
        query = request.data.get('query')
        # Simulate processing the query and generating a response
        if query:
            # Start tracking response time
            start_time = time.time()

            # Here you can process the query, e.g., with a chatbot model or predefined logic
            response = "This is a dummy response for the query: " + query
            
            # Calculate response time
            response_time = round(time.time() - start_time, 2)

            # Return the response and response time
            return Response({
                'response': response,
                'response_time': response_time,
            }, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Query is required'}, status=status.HTTP_400_BAD_REQUEST)
