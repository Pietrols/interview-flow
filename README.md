# InterviewFlow - Interview Practice Platform

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-yellow?style=for-the-badge)](https://interview-flow-sable.vercel.app/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Chingu%20V59-lightgrey?style=for-the-badge)](./LICENSE)

**A comprehensive, AI-powered interview preparation platform built during Chingu Voyage 59.**

[Live Demo](https://interview-flow-sable.vercel.app/) · [Report Bug](https://github.com/chingu-voyages/V59-tier2-team-22/issues) · [Request Feature](https://github.com/chingu-voyages/V59-tier2-team-22/issues)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Core Features Documentation](#core-features-documentation)
  - [Authentication System](#authentication-system)
  - [Interview Practice Flow](#interview-practice-flow)
  - [Daily Challenges](#daily-challenges)
  - [AI Chatbot Assistant](#ai-chatbot-assistant)
  - [Content Pages](#content-pages)
- [Environment Configuration](#environment-configuration)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Team](#team)

---

## Overview

InterviewFlow is a full-featured interview preparation platform that helps users practice role-specific technical interview questions with real-time AI-powered guidance. It provides a low-pressure, anonymous environment to build confidence and sharpen skills before real interviews.

Built collaboratively by a three-person team during **Chingu Voyage 59**, the project demonstrates strong React architecture, AI integration, and a focus on user experience across the entire interview journey, from role selection to score review.

---

## Screenshots

> **Note for contributors:** Replace each placeholder path below with actual screenshots before publishing.

### Home Page

![Home Page Logged Out](./public/Screenshot%202026-02-20%20at%209.14.52 PM.png)

![Home Page Logged In](./public/Screenshot%202026-02-20%20at%209.15.12 PM.png)

### Roles Selection

![Roles Page](./public/Screenshot%202026-02-20%20at%209.15.38 PM.png)

### Interview Practice Session

![Questions Page](./public/Screenshot%202026-02-20%20at%209.16.53 PM.png)

### Score Summary & Review

![Summary Page](./public/Screenshot%202026-02-20%20at%209.32.43 PM.png)

### Daily Challenges

![Challenges Page](./public/Screenshot%202026-02-20%20at%209.15.50 PM.png)

### AI Chatbot Assistant

![Chat Widget](./public/Screenshot%202026-02-20%20at%209.18.04 PM.png)

---

## Features

- **User Authentication** - Email/password sign-up and login with persistent localStorage sessions
- **Role-Based Practice** - Browse and select from multiple job roles, each with a curated question pool
- **Randomised Question Sets** - Each session draws 20 unique questions at random, keeping practice fresh
- **Progress Tracking** - Real-time progress bar, per-question navigation (Previous / Next), and answer persistence within a session
- **Score Summary** - Percentage score, correct/incorrect breakdown, time taken, and a full question-by-question review with explanations
- **Session History** - Last 3 completed sessions saved and displayed on the dashboard
- **Daily Challenges** - Filterable bank of behavioral and technical challenges with expert tips
- **AI Chatbot Assistant** - Google Gemini-powered chat widget for platform navigation help and question hints (without revealing answers)
- **Blog** - Interview preparation articles with images, authors, and summaries
- **FAQ** - Accordion-style answers to common platform questions
- **Contact** - Team member cards with GitHub and LinkedIn links
- **Fully Responsive** - Mobile-first layout that works cleanly on all screen sizes

---

## Tech Stack

| Category           | Technology                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| Framework          | [React](https://react.dev/) 19.2                                                                                    |
| Build Tool         | [Vite](https://vitejs.dev/) 7.2                                                                                     |
| Routing            | [React Router](https://reactrouter.com/) 7.13                                                                       |
| Styling            | [Tailwind CSS](https://tailwindcss.com/) 4.1                                                                        |
| AI Integration     | [Google Gemini API](https://ai.google.dev/) (Flash)                                                                 |
| Icons              | [Lucide React](https://lucide.dev/)                                                                                 |
| Markdown Rendering | [react-markdown](https://github.com/remarkjs/react-markdown) + [remark-gfm](https://github.com/remarkjs/remark-gfm) |
| State Management   | React Context API                                                                                                   |
| Testing            | [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react)                          |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm or yarn
- A Google Gemini API key (free tier - 15 req/min, 1,500/day)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/chingu-voyages/V59-tier2-team-22.git
   cd V59-tier2-team-22
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your API key:

   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

   Get a free key at: [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:5173](http://localhost:5173)

---

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── AuthForm.jsx          # Login/signup form
│   │   └── AuthModal.jsx         # Modal wrapper for auth form
│   ├── cards/
│   │   ├── QuestionCard.jsx      # Single question display
│   │   └── RoleCard.jsx          # Role selection card
│   ├── chat/
│   │   └── ChatWidget.jsx        # AI chatbot interface
│   └── layout/
│       ├── Footer.jsx            # Page footer
│       ├── Header.jsx            # Navigation header
│       └── Layout.jsx            # Root layout wrapper
├── context/
│   ├── AuthContext.jsx           # Authentication state
│   ├── ChatContext.jsx           # Chatbot state & Gemini integration
│   └── InterviewContext.jsx      # Interview session management
├── data/
│   ├── blogPosts.js              # Blog post content
│   ├── challenges.js             # Daily challenges data
│   └── questions.js              # Interview question bank
├── pages/
│   ├── BlogPage.jsx              # Blog listing
│   ├── BlogPostPage.jsx          # Individual blog post
│   ├── ChallengesPage.jsx        # Daily challenges browser
│   ├── ContactUsPage.jsx         # Team contact info
│   ├── FAQsPage.jsx              # FAQ accordion
│   ├── HomePage.jsx              # Dashboard / landing page
│   ├── QuestionsPage.jsx         # Interview practice session
│   ├── RolesPage.jsx             # Role selection
│   └── SummaryPage.jsx           # Results & review
├── tests/
│   ├── setup.js
│   ├── components/
│   │   └── QuestionCard.test.jsx
│   ├── pages/
│   │   ├── BlogPage.test.jsx
│   │   ├── BlogPostPage.test.jsx
│   │   └── QuestionsPage.test.jsx
│   └── utils/
│       └── questionHelpers.test.js
├── utils/
│   └── questionHelper.js         # Question data utilities
├── App.jsx                       # Root component & route definitions
├── index.css                     # Global styles
└── main.jsx                      # Application entry point
```

---

## Core Features Documentation

### Authentication System

**Location:** `src/context/AuthContext.jsx`, `src/components/auth/`

InterviewFlow uses a localStorage-based authentication system suitable for development and prototyping. The auth flow is triggered from the header and presented inside a modal overlay.

**User Flow:**

1. User clicks **Sign In** in the header
2. A modal appears with a toggle between Login and Sign Up
3. User enters credentials (password minimum 6 characters)
4. On success, the session is persisted to localStorage and the modal closes
5. Authenticated users gain access to practice sessions and the personalised dashboard

**Storage Keys:**

| Key                       | Contents                |
| ------------------------- | ----------------------- |
| `interview_prep_user`     | Current active session  |
| `interview_prep_users_db` | Registered user records |

> **Security Note:** Passwords are stored in plain text for development only. A production deployment must use a backend auth server, bcrypt/argon2 password hashing, JWT or session tokens, and HTTPS.

---

### Interview Practice Flow

**Location:** `src/context/InterviewContext.jsx`, `src/pages/QuestionsPage.jsx`

**1. Role Selection** - `/roles`

Users browse all available job roles. Each `RoleCard` displays the role name and focus area. Clicking a card navigates to that role's practice session.

**2. Practice Session** - `/questions/:role`

- 20 questions are randomly selected from the role's question pool on each session start
- One question is displayed at a time with A-D options
- A progress bar shows completion percentage
- Answered questions can be reviewed with Previous/Next navigation
- Selecting an answer on the final question triggers `finishInterview()` and redirects to the summary

**3. Results Summary** - `/summary`

- Percentage score displayed prominently
- Correct / incorrect / time breakdown
- Full question-by-question review with the user's choice, the correct answer, and a written explanation
- Options to retry the same role or pick a new one

**Session Data Shape:**

```javascript
{
  role: "Frontend Developer",
  questions: [...],           // 20 randomly selected questions
  answers: { questionId: "A" },
  startTime: "2026-02-12T10:00:00.000Z",
  endTime: "2026-02-12T10:15:00.000Z",
  score: {
    correct: 17,
    incorrect: 3,
    total: 20,
    percentage: 85
  },
  isComplete: true
}
```

**Key Context Functions:**

| Function                          | Purpose                                     |
| --------------------------------- | ------------------------------------------- |
| `startInterview(role, questions)` | Initialise session with random question set |
| `saveAnswer(questionId, answer)`  | Record user's selected option               |
| `finishInterview()`               | Calculate score and mark session complete   |
| `resetInterview()`                | Clear session for a new attempt             |
| `isAnswerCorrect(questionId)`     | Check if a specific answer was correct      |
| `getRecentSessions(limit)`        | Retrieve last N sessions from history       |

**Adding Questions:**

Edit `src/data/questions.js` using this structure:

```javascript
{
  role: "Role Name",
  focus: "Brief description of the role focus",
  flashcards: [
    {
      id: 1,
      question: "Your question text?",
      options: {
        A: "Option A",
        B: "Option B",
        C: "Option C",
        D: "Option D"
      },
      answer: "B",
      rationale: "Explanation of why B is correct."
    }
  ]
}
```

---

### Daily Challenges

**Location:** `src/data/challenges.js`, `src/pages/ChallengesPage.jsx`

A filterable library of interview challenges displayed on the `/challenges` route and surfaced as a widget on the authenticated home dashboard.

**Filters available:**

- **Type** - Behavioral or Technical
- **Difficulty** - Easy, Medium, Hard
- **Category** - Dynamic list derived from challenge data

Each `ChallengeCard` shows the challenge prompt, type, difficulty, estimated time, and an expandable expert tip. The dashboard widget selects a random daily challenge via `getRandomChallenge()`.

---

### AI Chatbot Assistant

**Location:** `src/context/ChatContext.jsx`, `src/components/chat/ChatWidget.jsx`

A floating chat widget powered by **Google Gemini** that provides contextual assistance without spoiling answers.

**What it does:**

- Explains how to navigate and use platform features
- Provides question hints using frameworks (STAR method, etc.)
- Asks for the question number if not specified
- **Never reveals the correct answer (A, B, C, or D)**

**Technical Details:**

| Setting                | Value                                              |
| ---------------------- | -------------------------------------------------- |
| Model                  | Gemini Flash                                       |
| Free tier limits       | 15 req/min, 1,500/day                              |
| Client-side rate limit | 50 messages/minute                                 |
| Chat history storage   | `localStorage` (key: `interviewflow_chat_history`) |

**Context-Awareness:**

The system prompt is dynamically constructed on each message and includes the current route, authentication status, and - on the questions page - all question texts (without answers) so the AI can give informed hints.

**Error Handling:**

| Scenario              | User-facing message                                       |
| --------------------- | --------------------------------------------------------- |
| Rate limit exceeded   | "Please wait a moment before sending another message..."  |
| API quota reached     | "I've reached my daily limit. Please try again tomorrow." |
| Network / other error | "I'm currently unavailable. Please try again later."      |

**UI Features:**

- Floating button (bottom-right) with a live activity pulse indicator
- Typing indicator (bouncing dots) while waiting for a response
- Copy button on assistant messages
- Clear chat history option
- Auto-clears on logout
- Fully responsive on mobile

---

### Content Pages

#### Blog - `/blog`

Rendered from `src/data/blogPosts.js`. Each post card displays a cover image, title (linked to the full post), publication date, author, and summary. Individual posts render at `/blog/:slug` using `react-markdown` with GitHub Flavored Markdown support.

#### Daily Challenges - `/challenges`

See [Daily Challenges](#daily-challenges) above.

#### FAQ - `/faq`

Accordion-style page with 12 common questions covering platform basics, practice sessions, scoring, tips, and support. Only one item is expanded at a time.

#### Contact - `/contact-us`

Team member cards with gradient header blocks, name, role, and GitHub / LinkedIn icon links. Includes a general contact section.

---

## Environment Configuration

Create a `.env` file in the project root (use `.env.example` as a template):

```env
# Required - Google Gemini AI
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

> **Important:** Never commit `.env` to version control. The file is gitignored by default. Each developer needs their own API key.

---

## Development

### Available Scripts

```bash
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Production build → dist/
npm run preview      # Preview production build locally
npm run test         # Run test suite
npm run lint         # Run ESLint
```

### Code Conventions

- Functional components with hooks throughout
- Global state via React Context API (no external state library)
- Tailwind utility classes for all styling
- PropTypes for runtime type checking on components
- Component files co-located with their concerns

---

## Testing

Tests are written with **Vitest** and **React Testing Library**, following the philosophy of testing user behaviour rather than implementation details.

```bash
npm run test             # Run all tests
npm run test -- --watch  # Watch mode
```

**Current test coverage:**

| Area              | File                                     |
| ----------------- | ---------------------------------------- |
| Utility functions | `tests/utils/questionHelper.test.jsx`    |
| Question display  | `tests/components/QuestionCard.test.jsx` |
| Practice page     | `tests/pages/QuestionsPage.test.jsx`     |

**Testing Guidelines:**

- Mock `localStorage` and external API calls
- Test from the user's perspective (interactions and visible output)
- Prioritise critical paths: question flow, answer selection, score calculation

Reference: [Robin Wieruch's Vitest + RTL guide](https://www.robinwieruch.de/vitest-react-testing-library/)

---

## Deployment

The project is deployed on **Vercel**.

### Deploy Your Own

1. Push your fork to GitHub
2. Sign up at [vercel.com](https://vercel.com) and import the repository
3. Configure build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Add environment variables in **Project Settings → Environment Variables:**
   - `VITE_GEMINI_API_KEY`
5. Deploy — Vercel handles CI/CD automatically on every push to `main`

---

## Team

Built with 💛 by the Chingu Voyage 59 Tier 2 Team 22:

| Name                 | Role          | GitHub                                              | LinkedIn                                                     |
| -------------------- | ------------- | --------------------------------------------------- | ------------------------------------------------------------ |
| Ogechi Ogharandukun  | Scrum Master  | [Mide02-Project](https://github.com/Mide02-Project) | [LinkedIn](https://www.linkedin.com/in/ogechi-ogharandukun/) |
| Peter Kabamba        | Web Developer | [Pietrols](https://github.com/Pietrols)             | [LinkedIn](https://linkedin.com/in/peter-kabamba-959a061b9)  |
| Lawrence Narh-Lawson | Web Developer | [lawlawson](https://github.com/lawlawson)           | [LinkedIn](https://www.linkedin.com/in/lawlawson/)           |

---

## Acknowledgements

- [Chingu](https://www.chingu.io/) for the collaborative learning voyage structure
- [Google AI Studio](https://aistudio.google.com/) for the free Gemini API tier
- [Robin Wieruch](https://www.robinwieruch.de/) for the Vitest + RTL testing guide
- All open-source libraries that made this possible
