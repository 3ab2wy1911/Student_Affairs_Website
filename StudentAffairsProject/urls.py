
from django.contrib import admin
from django.urls import path, include
from Students import views
from django.conf import settings
from django.conf.urls.static import static
# from Students import search_view

urlpatterns = [
    path('add', views.AddStudentPage, name='AddStudentPage'),
    path('add_student/', views.AddingSent, name='AddingSent'),
    path('register/', views.RegisterPage, name='RegisterPage'),
    path('register/sent/', views.RegisterSent, name='RegisterSent'),
    path('list/', views.ListStudentPage, name='ListStudentPage'),
    path('search',views.search_view,name='search'),
    path ('login/',views.login_page,name='loginpage'),
    path('login/Login_validation', views.Login_validation, name='Login_validation'),
    path('home/', views.HomePage, name='HomePage'),
    path('',views.MainHomePage , name = 'MainHome'),
    path('afterlogin/',views.AfterLoginPage , name = 'AfterLogin')

]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

