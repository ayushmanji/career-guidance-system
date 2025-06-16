# 🎯 Career Compass – Full Stack Career Guidance System

Career Compass is a full-stack career guidance platform that empowers students to explore ideal career paths through smart quizzes, personalized dashboards, and relevant college recommendations based on their interests and location. It includes admin functionality to manage colleges.

---

## 🚀 Project Summary

Career Compass helps students:
- Discover career paths through a tailored aptitude quiz  
- Visualize their progress with interactive dashboards  
- Get AI-like suggestions for careers and colleges  
- Filter colleges based on location and career interests  
- Explore up-to-date analytics and insights on skills

It also includes:
- A secure login/register system with JWT
- Admin panel to manage college data dynamically

---

## ⚙️ Setup Instructions

### 📦 Prerequisites
- Node.js + npm
- MongoDB (local or Atlas)
- Optional: Oracle DB (if used)
- Git

### 🔧 Installation

```bash
# 1. Clone the repo
git clone https://github.com/ayushmanji/career-guidance-system.git
cd career-guidance-system

# 2. Install backend dependencies
cd backend
npm install

# 3. Add your environment variables
touch .env

.env file example:
MONGO_URI=mongodb://localhost:27017/career-guidance
JWT_SECRET=your_jwt_secret
ORACLE_USER=your_oracle_user
ORACLE_PASSWORD=your_oracle_password
ORACLE_CONNECT=your_oracle_connection_string

# 4. Seed database (optional but recommended)
node seed.js

# 5. Start backend
node server.js

# 6. Open frontend
Open frontend/index.html in your browser
```

## 💻 Tech Stack

| Layer        | Technology                                 |
|--------------|--------------------------------------------|
| Frontend     | HTML, Tailwind CSS, Vanilla JavaScript     |
| Backend      | Node.js, Express.js                        |
| Database     | MongoDB with Mongoose                      |
| Auth         | JWT (JSON Web Token)                       |
| Admin Panel  | Role-based access control                  |
| Deployment   | Render (backend), Netlify (frontend)       |

## 🔐 Demo Login (Admin)
```bash
Email: admin@example.com
Password: admin123
```
ℹ️ This account is seeded via seed.js for admin access

## 🌍 Deployment Links

| Component              | Link                                                                 |
|------------------------|----------------------------------------------------------------------|
| 🔗 Frontend (Netlify)  | _Coming Soon_                                                        |
| 🔗 Backend (Render)    | _Coming Soon_                                                        |
| 📂 GitHub Repo         | [GitHub - ayushmanji/career-guidance-system](https://github.com/ayushmanji/career-guidance-system) |

## 📂 Folder Structure
```bash
career-guidance-system/
│
├── .vscode/
│
├── backend/
│   ├── data/
│   │   ├── careers.json
│   │   ├── quizzes.json
│   │   ├── dashboard.json
│   │   └── colleges.json
│   ├── db/
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── isAdminMiddleware.js
│   ├── models/
│   │   ├── Career.js
│   │   ├── Quiz.js
│   │   └── user.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── careers.js
│   │   ├── quiz.js
│   │   ├── user.js
│   │   ├── colleges.js
│   │   └── adminColleges.js
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   ├── seed.js
│   └── server.js
│
├── frontend/
│   ├── admin.html
│   ├── careers.html
│   ├── college-form.html
│   ├── dashboard.html
│   ├── index.html
│   ├── login.html
│   ├── quiz.html
│   ├── register.html
│   └── styles.css
│
├── node_modules/
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## ✨ Features to Explore
- Quiz engine with category scoring
- Dynamic dashboards personalized per user
- College recommendations using career-field mapping
- Admin routes secured with JWT and role checks
- Reusable backend with RESTful API structure

## 🙌 Contribution & License

This is a student-level learning project built by Ayushman Sharma (B.Tech CSE, SPSU).
Feel free to fork, improve, and share your contributions!

🪪 MIT License | 🌐 Open Source

## 📌 Author

**Ayushman Sharma**  
B.Tech CSE, SPSU Udaipur  
📧 [ayushmanji@gmail.com](mailto:ayushmanji@gmail.com)  
🔗 [GitHub - @ayushmanji](https://github.com/ayushmanji)
