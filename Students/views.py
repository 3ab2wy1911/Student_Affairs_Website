from pyexpat.errors import messages
from django.contrib import messages
from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from .models import Student
from . models import Register
import re
import datetime
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.hashers import check_password


def AddStudentPage(request):
    return render(request, 'add_student.html')


def AddingSent(request):
    # the following if condition means that if you sent the HTML page to the server "ie:you POSTED it"
    if request.method == 'POST':
        # the following lines are bringing the HTML page INPUTS using POST.get method also what are inside () are the "name" of every attribute in the html, we need it for storing and for validation too
        name = request.POST.get("name")
        id = request.POST.get("ID")
        gpa = request.POST.get("GPA")
        phone_number = request.POST.get("phoneno")
        email = request.POST.get("email")
        birth_date = request.POST.get("date")
        gender = request.POST.get("Gender")
        Status = request.POST.get("status")
        level = request.POST.get("Level")
        department = request.POST.get("Departement")

        # # if not valid,nothing happen,just reload
        if not validate_data(name, id, gpa, phone_number, email, birth_date, gender, Status, level, department):
            return redirect('AddStudentPage')

        # Check if student with the same ID already exists
        if Student.objects.filter(student_id=id).exists():
            response_data = []
            response_data.append(
                "Couldn't add this student to our system; This Student ID already exists.")
            return render(request, 'add_student.html', {'response_data': response_data, 'name': name, 'gpa': gpa,
                                                        'phone_number': phone_number, 'email': email,
                                                        'birth_date': birth_date, 'gender': gender,
                                                        'Status': Status, 'level': level, 'department': department})

        else:
            # Save the valid data to the database
            student = Student(
                name=name,
                student_id=id,
                gpa=gpa,
                phone_number=phone_number,
                email=email,
                birth_date=birth_date,
                status=Status,
                gender=gender,
                level=level,
                department=department
            )
            student.save()
            saved_message = []
            saved_message.append(
                "Student is Added to our System Successfully!")
            return render(request, 'add_student.html', {'saved_message': saved_message})


def validate_data(name, id, gpa, phone_number, email, birth_date, gender, Status, level, department):
    # Name validation
    name_regex = r'^([a-zA-Z]+)\s([a-zA-Z]+)$'
    if not re.match(name_regex, name):
        return False

    # ID validation
    id_regex = r'^\d{8}$'
    if not re.match(id_regex, id):
        return False

    # GPA validation
    gpa_regex = r'^[0-5]\.\d{2}$'
    if not re.match(gpa_regex, gpa):
        return False

    # Phone number validation
    phone_regex = r'^01[1250]\d{8}$'
    if not re.match(phone_regex, phone_number):
        return False

    # Email validation
    email_regex = r'^[^\s@]+@[^\s@]+\.[^\s@]+\.[^\s@]+\.[^\s@]+$'
    if not re.match(email_regex, email):
        return False

    # Birth date validation
    min_date = datetime.date(1999, 1, 1)
    max_date = datetime.date(2006, 12, 31)
    birth_date = datetime.datetime.strptime(birth_date, '%Y-%m-%d').date()
    if birth_date < min_date or birth_date > max_date:
        return False

    # Department validation
    level = int(level)
    if level < 3 and department != "general":
        return False
    elif level >= 3 and department == "general":
        return False

    return True

# Register Page


def RegisterPage(request):
    return render(request, 'signup.html')


def RegisterSent(request):
    if request.method == 'POST':
        name = request.POST.get("name")
        email = request.POST.get("email")
        password = request.POST.get("password")
        confirmPassword = request.POST.get("confirmPassword")
        phoneNumber = request.POST.get("phoneNumber")

        if validateRegister(name, email, password, confirmPassword, phoneNumber):
            register = Register.objects.create(
                name=name,
                email=email,
                password=password,
                confirmPassword=confirmPassword,
                phoneNumber=phoneNumber,
            )
            register.save()
            messages.success(request, 'Registration successful!')
            return redirect('RegisterPage')
        else:
            messages.error(
                request, 'Registration failed. Please check your input.')
            return redirect('RegisterPage')
  # If the request method is GET, simply render the registration page
    return render(request, 'signup.html')


def validateRegister(name, email, password, confirmPassword, phoneNumber):
    # Name validation
    name_regex = r'^([a-zA-Z]+)\s([a-zA-Z]+)$'
    if not re.match(name_regex, name):
        return False

    # Email validation
    email_regex = r'^[^\s@]+@[^\s@]+\.[^\s@]+\.[^\s@]+\.[^\s@]+$'
    if not re.match(email_regex, email):
        return False

    # Password validation
    if password != confirmPassword:
        return False

    # Phone number validation
    phone_regex = r'^01[1250]\d{8}$'
    if not re.match(phone_regex, phoneNumber):
        return False

    return True


def ListStudentPage(request):
    students = Student.objects.all()

    if request.GET.get('gender'):
        students = students.filter(gender=request.GET['Gender'])
    if request.GET.get('level'):
        students = students.filter(level=request.GET['level'])
    if request.GET.get('department'):
        students = students.filter(department=request.GET['department'])
    if request.GET.get('status'):
        students = students.filter(status=request.GET['status'])

    context = {'students': students}
    return render(request, 'StudentList.html', context)


def search_view(request):
    # Get the search query from the request's GET parameters
    search_query = request.GET.get('search')

    # Get the search option (name or ID) from the request's GET parameters
    search_option = request.GET.get('searchTag')

    # Perform the search based on the search query and option
    if search_option == 'NAME':
        students = Student.objects.filter(name__icontains=search_query)
    elif search_option == 'ID':
        students = Student.objects.filter(student_id__icontains=search_query)
    else:
        students = []
    students = Student.objects.all()
    context = {'students': students}
    return render(request, 'search.html', context)


def login_page(request):
    return render(request, 'loginpage.html')


def Login_validation(request):
    if request.method == 'POST':
        email = request.POST.get("email")
        password = request.POST.get("password")
        register = Register.objects.all()
        for x in register:
            if email == x.email:
                if password == x.password:
                    messages.success(request, 'Login successful!')
                    return redirect('AfterLogin')
        messages.error(request, 'Invalid email or password.')
        return redirect('loginpage')

    return render(request, 'loginpage')


def HomePage(request):
    return render(request, 'home.html')


def MainHomePage(request):
    return render(request, 'mainhome.html')


def AfterLoginPage(request):
    return render(request, 'afterlogin.html')
