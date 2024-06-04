from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from . import views
from django.urls import path, include, re_path


urlpatterns = [
    path('admin/', admin.site.urls),
    path('upload-audio/', views.upload_audio, name='upload-audio'),
    path('process-action/', views.process_action, name='process-action'),
    path('projeto-form/', views.projeto_form, name='projeto-form'),
    path('api/v1/auth/', include('djoser.urls')),
    path('api/v1/auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),

]
