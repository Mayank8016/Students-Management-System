# 📚 Students Management System

A RESTful API for managing student records built with **Node.js**, **Express.js**, and **MongoDB**.

This project provides endpoints to **create**, **read**, **update**, and **delete** student data — perfect as a backend for a student management dashboard or for learning full-stack CRUD APIs.

---

## 🚀 Tech Stack

- **Node.js**
- **Express.js** (Web framework)
- **MongoDB** (Database)
- **Mongoose** (MongoDB ODM)


---

## 📦 Features

✅ Create new student profiles  
✅ Read all students or single student by ID  
✅ Update student information  
✅ Delete student records  
✅ Custom middlewares (error handling, validation)  
✅ Modular folder structure for maintainability

---

## 📁 Project Structure

├── config/ # Database & environment config
├── controllers/ # Business logic
├── middlewares/ # Custom middleware
├── models/ # Mongoose schemas
├── routes/ # Express routes
├── utils/ # Helpers/utilities
├── app.js # App entrypoint
├── package.json
├── .gitignore
└── README.md


---

## ⚙️ Installation

1. **Clone the repository**

`
git clone https://github.com/Mayank8016/Students-Management-System.git
cd Students-Management-System
Install dependencies

npm install
Create a .env file
Create a .env in the root with something like:

ini
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your secret key
Run the server

npm start
Your server should now run at http://localhost:3000.

🛠️ API Endpoints
Methods might vary depending on your actual route files, but here’s a typical set:

Method	Endpoint	Description
authentication api:-
POST	/api/signup Signup a new user
POST	/api/login Login a existing user


student api-(admin only)
GET	/api/students	Get all students
POST	/api/students	Create a new student
PUT	/api/students/:id	Update student by ID
DELETE	/api/students/:id	Delete student by ID

course api:-
GET /api/courses Get all courses
POST /api/courses Create a new courses(admin only)

enrollment api:-
POST /api/enrollments/enroll/:courseId Student can enroll there course(student only)
POST /api/enrollments/my-courses Stident cab view there course(Student only)



You can confirm your routes in routes/ folder and update this section accordingly.

🧪 Testing
You can test the API using tools like:

Postman

Insomnia

cURL

HTTPie

👨‍💻 Contributing
Contributions are welcome! If you’d like to improve the project:

Fork the repo

Create a branch: git checkout -b feature/YourFeature

Commit your changes: git commit -m 'Add some feature'

Push to branch: git push origin feature/YourFeature

Open a Pull Request ✨

📝 License
This project is open-source and free to use.

🙌 Contact
Created by Mayank — feel free to reach out for feedback or collaborations!


