
from django.urls import path
from . import views

urlpatterns = [
    path('add', views.AddStudentPage, name='Add'),
    path('Register/',views.RegisterPage,name='Register'),
    path('list_student',views.ListStudentPage,name='List'),
    path('search',views.search_view,name='search'),
    path('studentinfo', views.update_student, name='studentinfo'),
    path ('login/',views.login_page,name = 'loginpage'),
    path ('home/',views.HomePage,name = 'HomePage'),
    path('',views.MainHomePage , name = 'MainHome'),
    path('afterlogin/',views.AfterLoginPage , name = 'AfterLogin')

]
