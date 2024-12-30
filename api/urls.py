from django.urls import path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')), 
    path('posts/', views.get_posts, name='get_posts'),
    path("chatbot/",views.chatbot_view, name='chatbot')
]
