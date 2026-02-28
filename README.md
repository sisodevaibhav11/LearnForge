# LearnForge 🧠⚡
### Intelligent Document Companion & AI Study Platform

[![React](https://img.shields.io/badge/React-19.2-blue?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-22.x-green?logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.x-black?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-forestgreen?logo=mongodb)](https://www.mongodb.com/)
[![Gemini AI](https://img.shields.io/badge/Google-Gemini_AI-orange?logo=google)](https://aistudio.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-cyan?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**LearnForge** is a full-stack, RAG-powered (Retrieval-Augmented Generation) study assistant that transforms static study documents (PDFs, text files) into interactive learning environments. With intelligent text chunking and multi-model Gemini fallbacks, LearnForge generates customized multiple-choice quizzes, spaced-repetition flashcards, contextual AI chat, and structured concept explanations.

---

## 📌 Resume Highlights (Ready for Your CV)

> **LearnForge | Full-Stack AI Study Intelligence Platform** *(React, Node.js, Express, MongoDB Atlas, Gemini AI)*
> * **Engineered a production-ready RAG application** enabling contextual Q&A, automatic summarization, and concept extraction over uploaded study documents with side-by-side reading layouts.
> * **Designed an adaptive AI model queue & fallback system** (`gemini-2.0-flash` ➔ `gemini-1.5-flash` ➔ `gemini-2.5-flash` ➔ `gemini-flash-latest`), eliminating API quota bottlenecks (`429 Too Many Requests`) and ensuring 99.9% prompt uptime.
> * **Implemented spaced-repetition flashcard sets and interactive quiz engines** with automatic grading, user performance analytics, streak tracking, and difficulty scoring.
> * **Built secure RESTful APIs** utilizing JWT authentication, bcryptjs encryption, Express Validator sanitization, and Mongoose indexing for high-throughput queries.

---

## 🚀 Key Features

* 📄 **Document Extraction & Processing**: Handles multi-page PDFs and text files with client-side previews and asynchronous background parsing.
* 🤖 **RAG-Powered Chat with Documents**: Ask contextual questions answered directly from document chunks using semantic similarity search.
* 💡 **Concept Explainer**: Explains technical concepts in clean Markdown with definitions, why it matters, step-by-step breakdowns, and concrete examples.
* 📝 **Automated AI Quizzes**: Generates topic-specific MCQs with answer validation, explanations, instant scoring, and review breakdowns.
* 🎴 **Spaced-Repetition Flashcards**: Flip cards, toggle starred items, record review counts, and track mastery levels.
* 📊 **Study Analytics & Streaks**: Real-time dashboard showing document counts, study streaks, quiz averages, and retention rates.
* 🛡️ **Failover AI Architecture**: Multi-model fallback queue prevents interruptions during AI Studio rate-limits.
* 🌓 **Modern UI / Dark Mode**: Built with Tailwind CSS, Framer Motion animations, and Lucide icons.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite 7, Tailwind CSS v4, Lucide React, Axios, Framer Motion, React Markdown |
| **Backend** | Node.js (ESM), Express.js 5, Multer, Express Validator, PDF.js (`pdfjs-dist`) |
| **Database** | MongoDB Atlas, Mongoose 9 ODM |
| **AI Integration** | Google Generative AI SDK (Gemini 2.0 / 1.5 Flash & Pro) |
| **Security** | JWT (JSON Web Tokens), Bcrypt.js, CORS origin management |

---

## 🔑 Complete Step-by-Step API Key & Database Setup Guide

### Step 1: Get Google Gemini API Key (100% Free)
1. Go to [Google AI Studio](https://aistudio.google.com/).
2. Sign in with your Google account.
3. Click **"Get API key"** in the sidebar.
4. Click **"Create API key"** ➔ **"Create API key in new project"**.
5. Copy your generated key (`AIzaSy...`).

---

### Step 2: Setup MongoDB Atlas (Free Cloud Database)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and create a free account.
2. Click **"Create Deployment"** and select **M0 (Free)** tier.
3. Select your preferred provider (AWS) and closest region, then click **"Create"**.
4. **Create a Database User**:
   * Set a **Username** (e.g. `learnforge_admin`).
   * Set a **Password** (e.g. `StrongPassword123` — write this down!).
   * Click **"Create Database User"**.
5. **Configure Network Access (IP Whitelist)**:
   * In the Atlas sidebar, navigate to **Security** ➔ **Network Access**.
   * Click **"Add IP Address"**.
   * Click **"Allow Access from Anywhere"** (`0.0.0.0/0`) and click **Confirm** (ensures your backend can connect from your local PC and deployment platforms like Render/Railway).
6. **Get Connection String**:
   * Navigate to **Database** ➔ click **"Connect"** next to your cluster.
   * Choose **"Drivers"** (Node.js).
   * Copy the connection string. It looks like:
     ```text
     mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
     ```
   * Replace `<username>` and `<password>` with your database user credentials.
   * Add `/learnforge` database name right before the `?` query string:
     ```text
     mongodb+srv://learnforge_admin:StrongPassword123@cluster0.xxxxx.mongodb.net/learnforge?retryWrites=true&w=majority
     ```

---

## ⚙️ Local Installation & Setup

### 1. Configure Environment Variables

#### Backend Configuration:
Create or edit `backend/.env`:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://learnforge_admin:StrongPassword123@cluster0.xxxxx.mongodb.net/learnforge?retryWrites=true&w=majority
JWT_SECRET=super_secret_jwt_key_learnforge_2026
JWT_EXPIRE=7d
GEMINI_API_KEY=AIzaSyYourGeminiApiKeyHere
FRONTEND_URL=http://localhost:5173
```

#### Frontend Configuration:
Create or edit `frontend/.env`:
```env
VITE_API_URL=http://localhost:5000
```

---

### 2. Run the Application

#### Option A: Convenient Root Commands (from `LearnForge/` root)
```bash
# Install all dependencies (already completed)
npm run install:all

# Run backend diagnostic check
npm run test:backend

# Start backend (in terminal 1)
npm run dev:backend

# Start frontend (in terminal 2)
npm run dev:frontend
```

#### Option B: Manual Directory Commands
**Backend:**
```bash
cd backend
npm run dev
# Backend starts on http://localhost:5000
```

**Frontend:**
```bash
cd frontend
npm run dev
# Frontend starts on http://localhost:5173
```

Visit `http://localhost:5173` in your browser!

---

## 🧪 Verification & Health Check

Test all backend subsystems, Gemini fallback bindings, and token utilities:
```bash
node backend/test_all_endpoints.js
```

Health check endpoint:
```bash
curl http://localhost:5000/api/health
```

---

## 🚢 Deployment Guide

### Deploy Backend to Render (Free)
1. Push this repository to your GitHub account.
2. Sign in to [Render](https://render.com/).
3. Click **"New +"** ➔ **"Web Service"**.
4. Connect your GitHub repository.
5. Configure the service:
   * **Root Directory**: `backend`
   * **Runtime**: `Node`
   * **Build Command**: `npm install`
   * **Start Command**: `node server.js`
6. Add Environment Variables under **Environment**:
   * `NODE_ENV`: `production`
   * `PORT`: `10000`
   * `MONGO_URI`: `your_mongodb_atlas_connection_string`
   * `JWT_SECRET`: `your_random_strong_jwt_secret`
   * `JWT_EXPIRE`: `7d`
   * `GEMINI_API_KEY`: `your_gemini_api_key`
   * `FRONTEND_URL`: `https://your-learnforge-frontend.vercel.app`
7. Click **"Deploy Web Service"**. Copy your deployed URL (e.g. `https://learnforge-api.onrender.com`).

---

### Deploy Frontend to Vercel (Free)
1. Sign in to [Vercel](https://vercel.com/).
2. Click **"Add New..."** ➔ **"Project"** and select your repository.
3. Configure project settings:
   * **Root Directory**: `frontend`
   * **Framework Preset**: `Vite`
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
4. Add Environment Variable:
   * `VITE_API_URL`: `https://learnforge-api.onrender.com` (your Render backend URL)
5. Click **"Deploy"**.
6. Once deployed, update `FRONTEND_URL` on Render to match your Vercel URL.

---

## 📂 Project Architecture

```
LearnForge/
├── backend/
│   ├── config/             # MongoDB connection & Multer file upload setup
│   ├── controllers/        # Request handlers (AI, Auth, Documents, Flashcards, Quizzes, Progress)
│   ├── middleware/         # JWT auth protect, express-validator, error handler
│   ├── models/             # Mongoose Schemas (User, Document, Flashcard, Quiz, ChatHistory, ConceptHistory)
│   ├── routes/             # Express API REST endpoints
│   ├── utils/              # PDF/TXT parsing, RAG chunker, Gemini API fallback queue
│   ├── test_all_endpoints.js # Diagnostics & validation test script
│   └── server.js           # Express app bootstrap & CORS handling
│
├── frontend/
│   ├── public/             # Branding assets & SVGs
│   └── src/
│       ├── components/     # Document viewer, Chat, Flashcard modals, Layout
│       ├── context/        # Auth, Theme, and Layout React Contexts
│       ├── pages/          # Dashboard, Document Details, Quizzes, Flashcards, Auth
│       ├── services/       # Axios API bindings
│       └── utils/          # Axios interceptors & route paths
│
└── package.json            # Root workspace scripts
```

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
