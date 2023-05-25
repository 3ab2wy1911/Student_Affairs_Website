
from django.urls import path
from . import views

urlpatterns = [
    path('add', views.AddStudentPage, name='Add'),
    path('Register/', views.RegisterPage, name='Register'),
    path('list_student', views.ListStudentPage, name='List'),
    path('search', views.search_view, name='search'),
    path('StudentInfo/<int:student_id>/',
         views.StudentInfo, name='StudentInfoPage'),
    path('login/', views.login_page, name='loginpage'),
    path('home/', views.HomePage, name='HomePage'),
    path('', views.MainHomePage, name='MainHome'),
    path('afterlogin/', views.AfterLoginPage, name='AfterLogin'),
    path('selectdepartment/<int:student_id>', views.SelectDepartment,
         name='SelectDepartmentPage'),
]
