# YouTube Study Tracker

A Chrome Extension + React Dashboard that tracks YouTube watch time and classifies videos into **Study 📚** and **Entertainment 🎮** categories.

The application automatically monitors YouTube videos, stores watch history, and displays analytics in a modern dashboard.

---

##  Features

*  Tracks YouTube videos automatically
*  Measures watch time
*  Detects Study videos
*  Detects Entertainment videos
*  Stores watch history
*  Displays analytics dashboard
*  Real-time updates
*  Chrome Extension integration
*  Fast React UI

---

##  Tech Stack

### Frontend

* React.js
* Vite
* Axios
* CSS3

### Backend

* Node.js
* Express.js

### Browser Extension

* Chrome Extension (Manifest V3)

### Data Storage

* JSON (`videos.json`)

---

## 📂 Project Structure

```text
youtube-study-tracker/

backend/

├── server.js
├── videos.json
├── package.json

frontend/

├── src/
│   ├── App.jsx
│   └── App.css

chrome-extension/

├── content.js
└── manifest.json
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/dubeyankur2005/youtube-study-tracker.git

cd youtube-study-tracker
```

---

## 2️⃣ Backend Setup

```bash
cd backend

npm install

node server.js
```

Backend runs on:

```text
http://localhost:5000
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 4️⃣ Chrome Extension Setup

Open:

```text
chrome://extensions
```

Enable:

```text
Developer Mode
```

Click:

```text
Load unpacked
```

Select the:

```text
chrome-extension
```

folder.

---

## 🎯 How It Works

1. User opens YouTube.
2. The Chrome extension detects the video.
3. Watch time is tracked.
4. The video is categorized as Study or Entertainment.
5. Data is sent to the Node.js backend.
6. The backend stores the data inside `videos.json`.
7. React displays the analytics dashboard.

---

## 📈 Future Improvements

* 📊 Pie Chart Analytics
* 📈 Weekly Graph
* 🏆 Most Watched Category
* 🔥 Study Streak Counter
* 📅 Daily Reports
* 📥 Export CSV

---

## 🧠 Learning Outcomes

Through this project, I learned:

* React.js
* Node.js
* Express.js
* Chrome Extension Development
* REST APIs
* Fetch API
* Axios
* Frontend and Backend Integration

---

## 👨‍💻 Author

Ankur Dubey

⭐ If you like this project, give it a star.
