# 🍉 Fruit Guru

An AI-powered web application that answers any question about fruits in
a fun, educational, and interactive way.

---

## 🧠 Overview

Fruit Guru is a fullstack application that allows users to ask questions
about fruits and receive intelligent, formatted responses powered by AI.

The project was originally built using a Backend-as-a-Service approach
and later refactored into a fully custom backend, demonstrating
end-to-end ownership of the application stack.

---

## 🏗️ Tech Stack

### Frontend

- React
- JavaScript (ES6+)
- CSS

### Backend

- Node.js
- Express

### AI Integration

- OpenAI API

### Database

- PostgreSQL (Neon)

### Deployment

- Frontend: Netlify
- Backend: Render

---

## ⚙️ Features

- 🍓 Ask questions about any fruit
- 🤖 AI-generated responses with personality
- 🎨 HTML-formatted answers with emojis
- ⚡ Fast API-based architecture (no polling)
- 🧾 Request logging in database
- 🔐 Environment-based configuration

---

## 📡 API

### POST `/fruitguru`

**Request:**

```json
{
  "prompt": "Is banana healthy?"
}
```

**Response:**

```json
{
  "result": "<html><body>...</body></html>"
}
```

---

## 🧪 Local Setup

### 1. Clone repo

```bash
git clone https://github.com/your-username/fruit-guru.git
cd fruit-guru
```

### 2. Install frontend

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file:

```env
REACT_APP_API_BASE=http://localhost:3000
```

### 4. Run frontend

```bash
npm start
```

---

## 🔐 Environment Variables

### Frontend

- `REACT_APP_API_BASE`

### Backend

- `OPENAI_KEY`
- `OPENAI_MODEL`
- Database connection string

---

## 🧼 Best Practices Applied

- Separation of frontend and backend
- Secure environment variable handling
- Removal of sensitive data from repository
- Clean CI/CD setup
- Modular service architecture

---

## 🚀 Future Improvements

- Streaming responses (typing effect)
- Chat history
- Analytics dashboard
- Multi-language UI

---

## 👨‍💻 Author

Built as part of a professional portfolio project.

---

## ⭐ Final Note

This project demonstrates the transition from a low-code backend
solution to a fully custom, scalable architecture using modern
technologies.
