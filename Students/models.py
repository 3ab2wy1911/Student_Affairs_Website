#here, we set the models field of our class
from django.db import models

class Student(models.Model):
    Gender_Choices=[
        ('Select Gender','Select Gender'),
        ('Male','Male'),
        ('Female','Female')
    ]

    Status_Choices=[
        ('Select Status','Select Status'),
        ('Active','Active'),
        ('Inactive','Inactive')
    ]

    Level_Choices=[
        ('Select Level','Select Level'),
        ('1','1'),
        ('2','2'),
        ('3','3'),
        ('4','4')
    ]

    Dept_Choices=[
        ('Select Dept','Select Dept'),
        ('General','General'),
        ('Computer Science', 'Computer Science'),
        ('Information Systems', 'Information Systems'),
        ('Artificial Intelligence', 'Artificial Intelligence'),
        ('Information Technology', 'Information Technology'),
        ('Data Scince','Data Scince'),
        ('CyberSecurity','CyberSecurity'),
        ('BioInformatics','BioInformatics'),
        ('Decision Support','Decision Support'),
        ('Scientific Computing','Scientific Computing')
    ]

    name = models.CharField(max_length=50)
    student_id = models.CharField(max_length=8, unique=True)
    gpa = models.DecimalField(max_digits=3, decimal_places=2)
    phone_number = models.CharField(max_length=11)
    email = models.EmailField()
    birth_date = models.DateField()
    gender = models.CharField(max_length=13, choices=Gender_Choices)
    level = models.IntegerField(choices=Level_Choices)
    status = models.CharField(max_length=13, choices=Status_Choices)
    department = models.CharField(max_length=23, choices=Dept_Choices)

    def __str__(self):
        return self.name


class Register(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    password = models.CharField(max_length=20)
    confirmPassword = models.CharField(max_length=20)
    phoneNumber = models.CharField(max_length=11)
  
    def __str__(self):
        return self.name
