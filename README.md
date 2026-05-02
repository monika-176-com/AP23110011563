# Campus Notification System

A full-stack evaluation project that implements a **Logging Middleware** and a **Notification System UI** with priority-based sorting and filtering.

---

## 🚀 Project Overview

This project is built in two stages:

### 🔹 Stage 1

* Fetch notifications from API
* Apply priority logic:

  * Placement > Result > Event
* Sort notifications based on:

  1. Priority
  2. Timestamp (latest first)
* Return **Top 10 notifications**
* Integrate **Logging Middleware**

---

### 🔹 Stage 2

* Build a responsive **React UI**
* Display all notifications
* Add filtering:

  * Event
  * Result
  * Placement
* Implement pagination
* Highlight important notifications
* Use **Material UI**
* Maintain logging across frontend

---

## 🧠 Tech Stack

* ⚛️ React (Vite)
* 🎨 Material UI
* 🌐 Fetch API
* 🪵 Custom Logging Middleware
* 🔐 Token-based Authentication

---

## 📁 Project Structure

```plaintext
src/
│
├── components/
│   ├── NotificationCard.jsx
│   ├── NotificationList.jsx
│   └── FilterBar.jsx
│
├── pages/
│   └── Home.jsx
│
├── services/
│   ├── auth.js
│   └── notifications.js
│
├── utils/
│   └── logger.js
│
├── App.jsx
└── main.jsx
```

---

## 🔐 Authentication

* Access token generated using:

  * `clientId`
  * `clientSecret`
* Token is passed in API requests:

```http
Authorization: Bearer <access_token>
```

---

## 🪵 Logging Middleware

Reusable logging function:

```javascript
Log(stack, level, package, message)
```

### ✔ Features:

* Logs API calls, errors, and actions
* Sends logs to external logging service
* Helps debugging and monitoring

---

## 📊 Priority Logic

```plaintext
Placement > Result > Event
```

* Notifications are sorted using:

  * Priority weight
  * Timestamp (latest first)

---

## 📸 Output Screenshots

### 🔹 Stage 1

![Top Notifications](assets/ss_1.png)
![Logs Success](assets/ss_2.png)

---

### 🔹 Stage 2

![All Notifications](assets/all.png)
![Pagination](assets/all_1.png)
![Event Filter](assets/event.png)
![Result Filter](assets/result.png)
![Placement Filter](assets/placement.png)

---

## ▶️ Run the Project

```bash
npm install
npm run dev
```

Open in browser:

```plaintext
http://localhost:5173
```

---

## ⚠️ Important Notes

* Logging Middleware is used **throughout the application**
* No database is used (API-driven)
* No hardcoded notifications
* Token must be valid (regenerate if expired)

---

## ✅ Features Checklist

✔ Logging Middleware integrated
✔ Token-based authentication
✔ Priority-based sorting
✔ Top 10 notifications (Stage 1)
✔ React UI (Stage 2)
✔ Filtering + Pagination
✔ Clean and modular structure

---

## 📌 Conclusion

This project demonstrates:

* Strong understanding of **API handling**
* Effective use of **logging systems**
* Clean **frontend architecture**
* Real-world **debugging and observability practices**

---

## 🙌 Author

* Developed as part of evaluation task
* Focused on performance, clarity, and maintainability

