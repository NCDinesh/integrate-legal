# admin.py

from django.contrib import admin
from .models import Post  # Ensure this is the correct import

# Register your models here.
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'updated_at')  # Columns to show in the admin list
    search_fields = ('title', 'content')  # Make the title and content searchable
    list_filter = ('created_at',)  # Add filters based on creation date

# Register the Post model with the custom admin interface
admin.site.register(Post, PostAdmin)
