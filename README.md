# ICAI NY – Official Website (Client Project)

## 📖 Overview
This project is the official website for the **Institute of Chartered Accountants of India – New York Chapter**.  
It serves as a central hub for members, prospective members, and visitors to explore upcoming and past events, learn about membership benefits, view gallery images, and get in touch with the chapter.  

The site is built using **React.js** with **Tailwind CSS** for styling, and fetches event & content data from a backend API.  
This README provides development setup details. **Note:** Some content is still pending and will be added as per client requirements.

---

## 🎯 Purpose
- Provide a modern, responsive online presence for ICAI NY.
- Keep members informed about events and activities.
- Facilitate event registrations and show status (Open/Closed).
- Provide membership information and application.
- Display gallery of past events.
- Allow easy contact with the chapter team.

---

## ✨ Features
- **Responsive Design** – Optimized for desktop, tablet, and mobile.
- **Event Listings** – Upcoming & past events with registration status.
- **Search Functionality** – Real-time search for events by title.
- **Event Details Page** – Dedicated page for each event.
- **Gallery** – Display images of past events.
- **Membership Page** – Details on joining and benefits.
- **Contact Form** – Integrated with [Web3Forms](https://web3forms.com/) for sending inquiries via email.
- **Social Media Links** – Direct links to ICAI NY profiles.

---

## 🛠 Tech Stack
**Frontend**
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- React Icons

**Backend**
- Node.js + Express.js
- MongoDB
- REST API

**Utilities**
- Web3Forms API (for contact form submission)
- Environment variables via `.env` file

---

## 📂 Folder Structure

client/
│
├── public/ # Static assets
├── src/
│ ├── components/ # Reusable UI components (Header, Footer, etc.)
│ ├── pages/ # Page components (Home, Events, Contact, etc.)
│ ├── assets/ # Images, icons
│ ├── App.jsx # Main app component
│ ├── main.jsx # Entry point
│ └── styles/ # Global styles
│
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md

yaml
Copy
Edit

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone <repo-url>
cd client
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Setup Environment Variables
Create a .env file in the project root:

env
Copy
Edit
VITE_API_URL=https://your-backend-api-url/
4️⃣ Run the Development Server
bash
Copy
Edit
npm run dev
5️⃣ Build for Production
bash
Copy
Edit
npm run build
🔗 API Requirements
The backend API must provide:

GET /admin/events/fetch → Returns all events with _id, title, location, image, and date.

GET /admin/events/:id → Returns a single event's details.

📜 Development Notes
Search is handled in the Header component with real-time popup results.

Event registration button shows "Register Now" for upcoming events and "Registration Closed" for past events (based on date field).

Contact form is integrated with Web3Forms; backend processing is not required for this form.

🚀 Deployment
Frontend can be deployed to:

Netlify

Vercel

Backend can be deployed to:

Render

Heroku

📌 Status
Development: In progress

Content: Additional text/images to be added per client instructions

Testing: Ongoing on staging server

