# 📝 Task Manager App (MERN Stack)

A simple and modern Full-Stack MERN Task Manager application built using React, Node.js, Express.js, and MongoDB.

This application allows users to add, view, and delete tasks with a clean responsive user interface and REST API integration.

---

# 🚀 Features

✅ Add New Tasks  
✅ View All Tasks  
✅ Delete Tasks  
✅ REST API Integration  
✅ MongoDB Database  
✅ Responsive Modern UI  
✅ React Frontend  
✅ Express + Node Backend  

---

# 🛠 Technologies Used

## Frontend
- React.js
- Axios
- CSS3

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

# 📁 Project Structure

```bash
Assignment_3/
│
├── backend/
│   ├── models/
│   │   └── Task.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTask.jsx
│   │   │   └── TaskList.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/devzarmeen/Notes_app.git
```

---

# 📦 Backend Setup

## Go to backend folder

```bash
cd backend
```

## Install dependencies

```bash
npm install
```

## Create `.env` file

```env
MONGO_URI=mongodb://127.0.0.1:27017/taskdb
```

## Start backend server

```bash
npm start
```

Server runs on:

```bash
http://localhost:5000
```

---

# 💻 Frontend Setup

## Open new terminal

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Start frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Add new task |
| DELETE | `/api/tasks/:id` | Delete task |

---

# 📌 API Testing

You can test APIs using:
- Postman
- Thunder Client
- Browser

Example:

```bash
GET http://localhost:5000/api/tasks
```

---

# 🎨 UI Features

- Modern Responsive Design
- Gradient Buttons
- Mobile Friendly Layout
- Clean Task Cards
- Interactive Hover Effects

---

# 📷 Project Output

- Add Task Functionality
- Delete Task Functionality
- Dynamic Task Count
- MongoDB Data Storage

---

# 👩‍💻 Author

**Zarmeen Rasool**

---

# 📄 License

This project is created for educational purposes and university assignment submission.
