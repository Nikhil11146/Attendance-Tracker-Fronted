# 🎓 Attendance Tracker

A modern attendance management application that helps students track attendance, manage subjects, and monitor attendance percentages through a clean and intuitive interface.

🌐 Live Demo: : https://attendance-tracker-application.netlify.app

🔗 Backend Repository: https://github.com/Nikhil11146/Attendance-Tracker-Backend

---

## ✨ Features

### 📚 Subject Management
- Create new subjects
- Edit existing subjects
- Delete subjects with confirmation dialogs
- Store faculty information
- Store department information
- Store subject credits

### 📊 Attendance Tracking
- Mark classes as attended
- Mark classes as missed
- Automatic attendance percentage calculation
- Real-time UI updates
- Instant attendance statistics

### 🔐 Authentication
- User Registration
- User Login
- Protected Routes
- Persistent User Sessions
- Secure JWT-based Authentication

### 🎨 Modern User Interface
- Clean SaaS-inspired design
- Responsive layout
- Light Theme
- Dark Theme
- Modal-based interactions
- Smooth animations
- Minimal and distraction-free experience

### 👤 User Features
- Profile Page
- Settings Page
- Theme Preferences
- Attendance Dashboard

---

## 🚀 Live Application

Try the application here:

👉 :contentReference[oaicite:2]{index=2}

---

## 🏗️ Tech Stack

### Frontend

- ⚛️ React
- ⚡ Vite
- 🧭 React Router DOM
- 📝 React Hook Form
- 🎨 CSS3
- 🔄 Context API
- 🌐 Axios

### Backend

- 🟢 Node.js
- 🚂 Express.js
- 🍃 MongoDB
- 🔐 JWT Authentication
- 🔑 bcrypt

Backend Repository:

👉 :contentReference[oaicite:3]{index=3}

---

## 📂 Project Structure

```bash
src
│
├── api
│   └── axios.js
│
├── assets
│   ├── app-logo-main-v2.png
│   ├── delete-icon.png
│   ├── edit-icon.png
│   ├── settings.jpg
│   └── test-account.jpg
│
├── components
│   ├── CreateWindow.jsx
│   ├── EditForm.jsx
│   ├── Footer.jsx
│   ├── Modal.jsx
│   ├── Navbar.jsx
│   └── SubjectCard.jsx
│
├── context
│   ├── AuthContext.jsx
│   ├── SettingsContext.jsx
│   └── SubjectContext.jsx
│
├── pages
│   ├── About.jsx
│   ├── Auth.jsx
│   ├── Home.jsx
│   ├── Profile.jsx
│   └── Settings.jsx
│
├── styles
│   └── index.css
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone <your-frontend-repository-url>

cd frontend
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
VITE_API_URL=your_backend_url
```

Example:

```env
VITE_API_URL=http://localhost:5000
```

---

### Start Development Server

```bash
npm run dev
```

Application will be available at:

```bash
http://localhost:5173
```

---

## 🔐 Authentication Flow

```text
User Registration/Login
          │
          ▼
    Backend API
          │
          ▼
    JWT Generated
          │
          ▼
 Token Stored Client-Side
          │
          ▼
 Access Protected Routes
```

---

## 📈 Attendance Calculation

Attendance percentage is automatically calculated using:

```text
Attendance % =
(Attended Classes / Total Classes) × 100
```

Example:

```text
Attended Classes = 24
Total Classes    = 30

Attendance = 80%
```

---

## 🎨 Theme Support

### ☀️ Light Theme

- Clean and minimal design
- Soft backgrounds
- Comfortable reading experience

### 🌙 Dark Theme

- Reduced eye strain
- Modern dashboard appearance
- Consistent contrast levels

Theme preferences can be switched directly from the Settings page.

---

## 📱 Responsive Design

The application is optimized for:

- 💻 Desktop
- 📱 Mobile Devices
- 📟 Tablets
- 🖥️ Large Screens

---

## 🎯 Future Improvements

- 📅 Attendance Calendar
- 📊 Analytics Dashboard
- 📈 Attendance Trends
- 🔔 Attendance Alerts
- 📤 Export Attendance Reports
- 📥 Import Subjects
- ☁️ Cloud Synchronization
- 📱 Progressive Web App (PWA)
- 🎓 Semester Management
- 📚 Subject Categorization

---

## 👨‍💻 About the Developer

Hi! I'm **Nikhil**, a Computer Science student passionate about software development, backend engineering, and building practical applications that solve real-world problems.

Attendance Tracker was developed to simplify attendance management while exploring modern web technologies including React, Express, MongoDB, authentication systems, state management, and full-stack application architecture.

This project continues to evolve as I learn and experiment with new technologies and software design patterns.

---

## 🤝 Contributing

Contributions, suggestions, and feedback are always welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Add new feature"
```

4. Push changes

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

## ⭐ Support

If you find this project useful:

- ⭐ Star the repository
- 🍴 Fork the project
- 🛠️ Suggest improvements
- 📢 Share feedback

---


<div align="center">

### 🎓 Attendance Tracker

Track Attendance • Stay Consistent • Study Smarter 🚀

</div>
