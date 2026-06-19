# YouTube Study Tracker 📚🎥

A Chrome Extension that monitors YouTube activity and tracks study time separately from other content.

## 🚀 Project Goal

Build a productivity tool that tracks:

* YouTube video title
* YouTube video URL
* Video play activity
* Video pause activity
* Total watch time

Future versions will categorize videos into:

* 📚 Study Videos
* 🎬 Entertainment Videos

and generate daily and weekly analytics.

---

## 🏗️ Technologies Used

* JavaScript
* Chrome Extension (Manifest V3)

Upcoming:

* React
* Node.js
* Express.js
* MongoDB

---

## ✅ Day 1 - Chrome Extension Setup & YouTube Data Detection

### Features Implemented

* Created the Chrome Extension project structure.
* Configured `manifest.json`.
* Added `content.js`.
* Loaded the extension in Chrome.
* Detected YouTube video title.
* Detected YouTube video URL.
* Understood YouTube Single Page Application (SPA) behavior.

### Current Flow

Open YouTube

↓

Chrome reads `manifest.json`

↓

Run `content.js`

↓

Get video title

↓

Get video URL

---

## ✅ Day 2 - Video Activity Detection & Watch Time Tracking

### Features Implemented

* Detected the YouTube video element.
* Detected when a video starts playing.
* Detected when a video is paused.
* Implemented watch-time tracking.
* Calculated total watch time.
* Fixed the `NaN` issue.

### Current Flow

Open Video

↓

Get Title

↓

Get URL

↓

Detect Play

↓

Start Timer

↓

Detect Pause

↓

Stop Timer

↓

Calculate Watch Time

---

## 📌 Current Progress

* [x] Chrome Extension Setup
* [x] Detect Video Title
* [x] Detect Video URL
* [x] Detect Play Event
* [x] Detect Pause Event
* [x] Track Watch Time

---

## 🎯 Upcoming Features

* Detect video changes automatically.
* Handle YouTube SPA navigation.
* Save data to a backend.
* Store data in MongoDB.
* Build React analytics dashboard.
* Categorize Study vs Entertainment videos.

---

Created as a personal productivity project to monitor YouTube study habits.

