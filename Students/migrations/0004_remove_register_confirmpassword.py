# Generated by Django 4.2.1 on 2023-05-22 21:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Students', '0003_register_confirmpassword_alter_register_password'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='register',
            name='confirmPassword',
        ),
    ]