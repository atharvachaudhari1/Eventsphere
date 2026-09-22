# 🎉 EventSphere

> **On-Device AI Celebration Copilot for Indian Events**  
> Built by **Team ARKA!**

EventSphere is a phone-first, AI-assisted event planning platform designed to simplify the planning and management of Indian celebrations such as weddings, birthdays, engagements, festivals and other social events.

Instead of coordinating vendors, budgets, deadlines and event decisions across calls, chats and spreadsheets, EventSphere brings everything into one intelligent workspace.

The platform combines **AI event planning, vendor discovery, budget management, event timelines and disruption recovery** into a single experience.

---

## ✨ What is EventSphere?

Planning an Indian celebration often involves coordinating multiple vendors such as:

- 🍽️ Caterers
- 🌸 Decorators
- 📸 Photographers
- 💄 Makeup artists
- 👗 Costume providers
- 🎁 Gift providers
- 💍 Jewellery and other event services

EventSphere brings these workflows together and uses AI to help users make decisions, manage their event and respond when plans change.

### Core Idea

```text
User
  ↓
Create Event
  ↓
AI Understands Requirements
  ↓
Vendor Discovery
  ↓
Budget Planning
  ↓
Event Timeline
  ↓
AI Event Planner
  ↓
Disruption Recovery
  ↓
Successful Event
```

---

# 🚀 Features

## 🤖 AI Event Planner

Chat with the AI event planner to receive personalized recommendations based on:

- Event type
- Location
- Budget
- Guest count
- Vendors
- Timeline
- Event preferences

The planner maintains event context so recommendations are relevant to the user's specific event.

---

## 🏪 Vendor Marketplace

Browse vendors across multiple categories.

### Categories

- 🍽️ Catering
- 🎨 Decoration
- 📸 Photography
- 💄 Makeup
- 👗 Costumes
- 🎁 Gifts

Users can search, filter and compare vendors based on available information.

---

## 💰 Smart Budget Tracker

Track event spending across vendors and categories.

The system helps users understand how individual vendor selections affect the overall event budget.

```text
Total Budget
     ↓
Venue
Catering
Decoration
Photography
Makeup
Costumes
Gifts
     ↓
Remaining Budget
```

---

## 🗓️ AI Event Timeline

EventSphere generates a milestone-based event timeline using information such as:

- Event date
- Event type
- Guest count
- Selected vendors
- Planning requirements

The timeline helps users identify important tasks and deadlines before the event.

---

## 🚨 Disruption Recovery

One of EventSphere's key capabilities is handling unexpected vendor cancellations.

```text
Vendor Cancellation
        ↓
Identify affected tasks
        ↓
Calculate timeline impact
        ↓
Find alternatives
        ↓
Generate recovery plan
        ↓
Update event plan
```

Instead of forcing the user to restart the planning process, the AI generates alternative options and a deadline-driven recovery plan.

---

## 🎨 AI Design Studio

Users can generate ideas for:

- 💌 Invitations
- 🎭 Stage decoration
- 🌿 Mehendi
- 👗 Dresses
- 🍽️ Menus
- 🎁 Gifts
- 💎 Jewellery
- 📸 Albums

The goal is to provide creative assistance alongside logistical event planning.

---

## 👥 Vendor Dashboard

Vendors can manage their event-related activity through a dedicated workflow.

The dashboard supports:

- Order management
- Order status
- Vendor profiles
- Planner communication
- Confirmation tracking

### Order Status

```text
Pending
   ↓
Confirmed
   ↓
Sample Sent
   ↓
Completed
```

EventSphere is designed as a **two-sided platform**, supporting both customers and local vendors.

---

# 📱 Phone-First AI

The iQOO-focused version of EventSphere is designed around the smartphone as the primary interaction surface.

### 🎙️ Voice-First Planning

Users can describe their event naturally instead of filling long forms.

Example:

> "Plan a wedding in Mumbai for 300 guests with a budget of ₹5 lakh."

The system can convert the request into structured event requirements.

### 📷 Camera-Based Understanding

The planned phone-first experience can use the camera to understand:

- Venues
- Decorations
- Outfits
- Invitation designs
- Event inspiration

### 🧠 On-Device AI

The iQOO-focused development roadmap includes integrating a local/open-source model for lightweight event-planning tasks, with cloud AI available as a fallback for heavier reasoning.

```text
              📱 iQOO PHONE
                    │
          ┌─────────┴─────────┐
          │                   │
       🎙️ Voice            📷 Camera
          │                   │
          └─────────┬─────────┘
                    ↓
             🧠 Local AI
                    │
          ┌─────────┴─────────┐
          │                   │
      Event Planner      Event Intelligence
          │                   │
          └─────────┬─────────┘
                    ↓
             ☁️ Cloud AI
              (Fallback)
```

> **Note:** On-device AI, advanced camera integration and native Android capabilities are part of the iQOO-focused development direction and should not be confused with the current web prototype.

---

# 🧠 AI Architecture

```text
User Input
   │
   ├── Text
   ├── Voice
   └── Camera
        │
        ↓
┌─────────────────────┐
│ Context Builder     │
│ Event Details       │
│ Vendor Information  │
│ Budget              │
│ Preferences         │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ AI Processing Layer │
│ Event Planning      │
│ Vendor Suggestions  │
│ Timeline Generation │
│ Budget Assistance   │
│ Design Assistance   │
│ Disruption Recovery │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Structured Results  │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Phone-First UI      │
│ Cards / Chat /      │
│ Timeline / Vendors  │
└─────────────────────┘
```

---

# 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **React 19** | Frontend UI framework |
| **Vite 8** | Build and development tool |
| **Google Gemini AI** | AI-powered event planning |
| **JavaScript** | Application logic |
| **CSS / Design Tokens** | UI styling |
| **Web APIs** | Planned voice and browser-based interaction |
| **Local/Open-Source AI** | Planned on-device AI direction |

---

# 📁 Project Structure

```text
EventSphere/
├── App.jsx
├── main.jsx
├── index.html
├── index.css
├── vite.config.js
├── .env.example
├── package.json
└── README.md
```

---

# ⚡ Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/atharvachaudhari1/Eventsphere.git
cd Eventsphere
```

## 2. Install dependencies

```bash
npm install
```

## 3. Configure environment variables

```bash
cp .env.example .env
```

Add your Gemini API key:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
```

## 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

# 🏗️ Production Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The production files will be generated in:

```text
dist/
```

---

# 🌐 Deployment

EventSphere can be deployed as a static React/Vite application on:

- Render
- Vercel
- Netlify
- Other static hosting platforms

### Example Render configuration

| Setting | Value |
|---|---|
| Type | Static Site |
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |
| Environment Variable | `VITE_GEMINI_API_KEY` |

---

# 🔒 Security

The current prototype uses the Gemini API from the frontend.

For production deployment:

- Restrict API keys to approved domains.
- Avoid exposing unrestricted API keys in client-side code.
- Prefer a server-side/serverless proxy for sensitive API calls.
- Rotate compromised keys immediately.
- Apply usage and quota restrictions.

> The current frontend API-key approach is suitable for prototyping but should be hardened before production use.

---

# 🗺️ Roadmap

## Phase 1 — Current Prototype

- [x] AI event planner
- [x] Vendor marketplace
- [x] Budget tracking
- [x] Event timeline
- [x] Vendor dashboard concepts
- [x] Disruption recovery
- [x] AI design assistance

## Phase 2 — Phone-First Experience

- [ ] Android/PWA optimization
- [ ] Voice-first event creation
- [ ] Camera-based event understanding
- [ ] Improved mobile interactions
- [ ] Phone-native notifications

## Phase 3 — On-Device AI

- [ ] Local/open-source language model
- [ ] Lightweight on-device planning
- [ ] Offline-capable core flows
- [ ] Cloud AI fallback
- [ ] Device-optimized inference

## Phase 4 — Platform Expansion

- [ ] Vendor registration
- [ ] Node.js backend
- [ ] PostgreSQL database
- [ ] Payments
- [ ] Real-time notifications
- [ ] WhatsApp vendor communication
- [ ] Regional-language support
- [ ] More cities and verified vendors

---

# 🎯 Why EventSphere?

EventSphere focuses on a common real-world problem:

> **Planning a celebration should not require managing dozens of vendors, chats, spreadsheets and last-minute decisions separately.**

Our goal is to turn the smartphone into a personal event-planning assistant that can understand the user's requirements, help make decisions and recover when plans change.

---

# 👥 Team

## Team ARKA!

Built by:

- **Atharva Chaudhari**
- **Allan Fernandes**

Team ARKA! has experience across:

- 🤖 AI & LLM applications
- 💻 Full-stack development
- 🔌 IoT & embedded systems
- 🏆 Hackathon prototyping
- 📱 Product development

The team previously won **Smart India Hackathon 2025 — Hardware Edition** and has participated in multiple hackathons and technical competitions.

---

# 🏆 Hackathon

### iQOO Hackathon 2026 — Hyderabad

**Track:** Open Innovation

**Project:** EventSphere

**Team:** ARKA!

---

# 📄 License

This project is released under the **MIT License**.

See `LICENSE` for details.

---

# 🎉 EventSphere

### From vendor chaos to one calm dashboard.

**Plan. Coordinate. Adapt. Celebrate.**
