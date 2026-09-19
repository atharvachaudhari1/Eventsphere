# EventSphere 🎉

> AI-Powered Event Planning Platform — Built for iQOO Hackathon 2026 by **Team Arka**

EventSphere is a modern, AI-assisted event planning web app that helps users plan weddings, birthdays, corporate events, and more with intelligent vendor recommendations powered by Google Gemini AI.

---

## 🚀 Features

- 🤖 **AI Event Planner** — Chat with Gemini AI to get personalized event recommendations
- 🎨 **Beautiful UI** — Elegant dark-themed design with gold accents
- 📦 **Vendor Marketplace** — Browse caterers, decorators, photographers, makeup artists & more
- 📊 **Budget Tracker** — Plan and track event expenses in real-time
- 🗓️ **Event Timeline** — Visual timeline for managing event milestones
- 📍 **City-wise Filtering** — Find vendors in your city across Tamil Nadu
- ✅ **Verified Vendors** — Trust badges for verified service providers

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **React 19** | Frontend UI framework |
| **Vite 8** | Lightning-fast build tool |
| **Google Gemini AI** | AI-powered event planning assistant |
| **CSS-in-JS** | Inline styling with design tokens |

---

## ⚡ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/atharvachaudhari1/Eventsphere.git
cd Eventsphere
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env
```
Edit `.env` and add your [Gemini API key](https://aistudio.google.com/).

### 4. Run locally
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

---

## 🌐 Deploy on Render

| Setting | Value |
|---|---|
| **Type** | Static Site |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |
| **Environment Variable** | `VITE_GEMINI_API_KEY` = your key |

---

## 📁 Project Structure

```
Eventsphere/
├── App.jsx          # Main application component (all features)
├── main.jsx         # React entry point
├── index.html       # HTML template
├── index.css        # Global styles
├── vite.config.js   # Vite configuration
├── .env.example     # Environment variable template
└── package.json     # Dependencies & scripts
```

---

## 🔒 Security Note

The Gemini API key is used client-side. Please restrict your API key to your domain in [Google AI Studio](https://aistudio.google.com/) settings.

---

## 👥 Team

**Team Arka** — iQOO Hackathon 2026

---

## 📄 License

MIT License — feel free to use and modify!
