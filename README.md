# Contact Manager – MERN Stack Application

A simple **Contact Management Web Application** built using the **MERN stack** to demonstrate core full-stack development fundamentals such as form handling, REST APIs, database integration, validation, and deployment.

---

## 🔹 Features

- Add a new contact with:
  - Name (required)
  - Email (validated)
  - Phone number (validated)
  - Message (optional)
- Client-side validation with user-friendly messages
- Submit button disabled for invalid input
- View all submitted contacts instantly (no page reload)
- Delete contacts
- Persistent storage using MongoDB
- Responsive and clean UI

---

## 🔹 Tech Stack

**Frontend**
- React.js
- Axios
- CSS

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB Atlas

**Deployment**
- Backend: Render
- Frontend: Netlify

---

## 🔹 Live Demo

Frontend (Netlify):  
👉 https://guileless-figolla-b2fa13.netlify.app/

Backend API (Render):  
👉 https://contact-manager-mem-app.onrender.com

---

## 🔹 API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/contacts` | Create a new contact |
| GET | `/api/contacts` | Fetch all contacts |
| DELETE | `/api/contacts/:id` | Delete a contact |

---

## 🔹 Project Structure
