from django.urls import path
from . import views
from .views import ChatbotAPIView



urlpatterns = [
    path('posts/', views.get_posts, name='get_posts'),
    path('chatbot/', ChatbotAPIView.as_view(), name='chatbot'),

]
