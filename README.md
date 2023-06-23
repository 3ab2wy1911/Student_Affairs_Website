# Student Affairs Website
Made by: ***[Mohamed Ahmed](https://github.com/3ab2wy1911) -[Shrouk Heshmat](https://github.com/shroukheshmat1) - [Adham Khaled](https://github.com/Adham-K-Fahmy) - [Sara Adel](https://github.com/saraadel6) - [Ahmed Shaban](https://github.com/sh3boo) - [Mai Mohammed](https://github.com/MaiMuhammad)*** 

This is a student affairs website that allows users to manage student information efficiently. The website provides various functionalities to add, update, delete, search for students, assign departments, view student data, and change student statuses. It offers a user-friendly interface with a well-designed navigation bar for easy access to different pages.

## Table of Contents

- [Introduction](#introduction)
- [Functionalities](#functionalities)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Introduction

The Student Affairs Website is designed to streamline the management of student data. It provides a centralized platform where administrators can perform various tasks related to student information. The website offers an intuitive user interface that allows for easy navigation and efficient data handling.

## Functionalities

1. **Add a new student**: Users can add a new student to the system by providing essential information such as ID, name, date of birth, GPA, gender, level, status, department, email, and mobile number.

2. **Update student information**: Users can update existing student information, excluding the department field, which is disabled for editing.

3. **Delete student data**: Users can delete a student's data through the edit student data page. A confirmation dialogue is displayed to ensure the action is intentional before deletion occurs.

4. **Search for active students**: Users can search for "active" students by name. The website will display a table of students with similar names and an active status.

5. **Assign department to a student**: Users can select a specific student from the search results and assign a department to them. The student's ID, name, and a dropdown list of available departments are displayed on the student's department assignment page. This action is only applicable for students with a level of 3. If the student's level is different, an error message is shown.

6. **View active/inactive students**: Users can view all active or inactive students on separate pages. The student data is displayed in a table format with a related set of attributes.

7. **Change student status**: Users can change the status of a student from active to inactive or vice versa directly from the table view of all students.

8. **Navigation**: The website features a well-designed navigation bar that allows users to easily navigate between pages and access all available functionalities.

## Installation

To run the Student Affairs Website locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/student-affairs-website.git

2. Install the necessary dependencies:
   ```bash
   cd student-affairs-website
   npm install
   
3. Start the development server:
    ```bash
    npm start
    
4. Access the website through your browser:
    ```bash
    http://localhost:3000
    
5. Customize the configuration:

       Modify the database connection settings in the config.js file to match your database credentials.
       Adjust any other configuration settings as needed in the respective configuration files.

6. Build the production-ready assets (optional):
      ```bash
      npm run build


7. Deploy the website:

     *Upload the contents of the build directory to your web server or hosting platform.*
     *Configure the server environment and dependencies according to your hosting environment.*


8. Ensure the backend API is properly configured and connected to the website for complete functionality.
  
    
## Usage

1. **Add a new student**: Navigate to the "Add Student" page and fill in the required information for the new student. Click the "Submit" button to add the student to the system.

2. **Update student information**: Go to the "Edit Student" page and modify the student's details as needed, except for the department field, which is disabled. Click the "Update" button to save the changes.

3. **Delete a student**: Open the "Edit Student" page and click the "Delete" button. A confirmation dialogue will appear to confirm the deletion. Click "OK" to proceed with the deletion or "Cancel" to abort.

4. **Search for active students**: Access the "Search Students" page and enter the name of the student you want to search for. The website will display a table of students with similar names and an active status.

5. **Assign department to a student**: After searching for a student and viewing the results, click on the student's name to access the department assignment page. Select a department from the dropdown list and click "Submit" to assign it. If the student's level is not 3, an error message will be shown.

6. **View active/inactive students**: Navigate to the "View Students" page. Active and inactive students are displayed in separate tables, showing relevant attributes.

7. **Change student status**: On the "View Students" page, locate the student in the table and click the status toggle button to change their status from active to inactive or vice versa.

8. **Navigation**: The website includes a well-designed navigation bar that allows easy access to all pages and functionalities.

## Screenshots

### Home Page
![Screenshot (571)](https://github.com/3ab2wy1911/Student_Affairs_Website/assets/91838581/29a242a7-6851-499c-8639-0cae837517b1)
*Homepage of the Student Affairs Website*

### Sign Up
![Screenshot (575)](https://github.com/3ab2wy1911/Student_Affairs_Website/assets/91838581/a0947566-ebf5-4608-9855-9a291c8efb48)
*User's Registeration*

### Login
![Screenshot (576)](https://github.com/3ab2wy1911/Student_Affairs_Website/assets/91838581/76a8d9e3-1c89-4ea7-9d21-d7975cf73943)
*User Login*

### Add Student
![Screenshot (578)](https://github.com/3ab2wy1911/Student_Affairs_Website/assets/91838581/297d3d71-a8b2-4bbe-a607-e1ad9cb18679)
*Adding a new student to the system*

### Search Student
![Screenshot (579)](https://github.com/3ab2wy1911/Student_Affairs_Website/assets/91838581/95f41714-31bc-4a4d-b26f-fa85e87d7584)
*Searching for active students*

### View Students
![Screenshot (580)](https://github.com/3ab2wy1911/Student_Affairs_Website/assets/91838581/cea847ca-97f9-421b-bfee-623a195064cc)
*Viewing active and inactive students*

### Edit Student Info
![Screenshot (581)](https://github.com/3ab2wy1911/Student_Affairs_Website/assets/91838581/a8dff146-1cf8-4241-b889-597b33b030b3)
*Editing student's info*

### Select Department
![Screenshot (582)](https://github.com/3ab2wy1911/Student_Affairs_Website/assets/91838581/6df3a07d-d27d-433f-89a4-9ac0bbbf77f0)
*Selecting Student's Department*

###

## Contributing

Contributions to the Student Affairs Website are welcome! If you have any suggestions, improvements, or bug fixes, please submit a pull request. For major changes, please open an issue first to discuss the proposed changes.

