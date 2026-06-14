# Udhaar Khata – Digital Credit Management System

## Project Overview

Udhaar Khata is a Full Stack MERN application developed to help shopkeepers manage customer credit records digitally.

The application replaces traditional paper khata books with a secure platform that tracks customer balances, transactions, reminders, rankings, and reports.

---

## Problem Statement

Traditional credit management suffers from:

- Data Loss
- Calculation Errors
- Poor Record Maintenance
- No Automated Reminders
- Lack of Analytics

Udhaar Khata solves these problems using digital record management.

---

# Developer

## Laasya

### Full Stack MERN Developer

This project was independently designed and developed by **Laasya** as a Full Stack MERN Application.

### Responsibilities

- Requirement Analysis
- System Design
- Frontend Development using React.js
- Backend Development using Node.js and Express.js
- MongoDB Database Design
- JWT Authentication Implementation
- Customer Management Module
- Transaction Management Module
- Dashboard Analytics
- Customer Ranking System
- PDF Report Generation
- Twilio SMS Reminder Integration
- State Management using Zustand
- API Integration using Axios
- Deployment using Vercel and Render
- Testing and Debugging
- Documentation and GitHub Management

---

# Key Features

## Authentication

- User Registration
- User Login
- JWT Security
- Password Encryption using BcryptJS
- Protected Routes
- Logout Functionality

## Dashboard

- Total Customers
- Total Transactions
- Total Credit Amount
- Total Debit Amount
- Pending Amount Analytics
- Recent Activities
- Quick Actions

## Customer Management

- Add Customer
- Delete Customer
- View Customer Details
- Search Customers
- Customer Balance Tracking

## Transaction Management

### Credit Transaction

When a customer pays money to the shopkeeper.

### Debit Transaction

When the shopkeeper provides products or services on credit.

### Features

- Add Transactions
- Delete Transactions
- Search Transactions
- View Transaction History
- Payment Method Tracking

Supported Payment Methods:

- Cash
- Card
- Google Pay
- PhonePe
- Paytm

## Reminder System

The application integrates with Twilio SMS API.

Features:

- Send SMS Payment Reminders
- Notify Customers with Pending Dues
- One-Click Reminder Sending

Example Message:

> Hello Sindhu, your pending balance is ₹1000. Kindly clear your dues.

## Customer Ranking System

Customers are ranked based on:

- Outstanding Balance
- Transaction History
- Loyalty and Consistency

Benefits:

- Identify Top Customers
- Reward Loyal Customers
- Provide Discounts
- Improve Customer Retention

## Reports

Generate downloadable PDF reports containing:

- Customer Details
- Transaction History
- Outstanding Balance
- Payment Information

## Profile Management

- Shop Information
- Owner Information
- Contact Details
- Account Summary

---

# Technology Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Zustand
- Axios
- React Hot Toast
- jsPDF

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- BcryptJS
- CORS
- Dotenv
- Cookie Parser

## Third-Party Services

- Twilio SMS API
- MongoDB Atlas

---

# System Architecture

```text
Frontend (React + Tailwind CSS)
           │
           ▼
REST APIs (Node.js + Express.js)
           │
           ▼
MongoDB Atlas Database
           │
           ▼
Twilio SMS Service
```

---

# Project Structure

```text
Udhaar_Khata/

├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   └── utils/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── APIs/
│   ├── middleware/
│   ├── models/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/enagantilaasya/Udhaar_Khata.git
```

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

## Backend Setup

```bash
cd backend

npm install

npm start
```

---

# Environment Variables

Create a `.env` file in the backend folder:

```env
PORT=4000

DB_URL=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY

TWILIO_SID=YOUR_TWILIO_ACCOUNT_SID

TWILIO_AUTH_TOKEN=YOUR_TWILIO_AUTH_TOKEN

TWILIO_PHONE=YOUR_TWILIO_PHONE_NUMBER
```

---

# Future Enhancements

- AI-Powered Financial Insights
- OCR Receipt Scanner
- WhatsApp Reminder Integration
- Email Notifications
- Loyalty Rewards Program
- Mobile Application
- Inventory Management
- Expense Prediction System
- Customer Credit Score Analysis

---

# Learning Outcomes

Through this project, I gained practical experience in:

- MERN Stack Development
- REST API Development
- MongoDB Database Design
- JWT Authentication
- State Management using Zustand
- Tailwind CSS UI Design
- PDF Generation
- Twilio API Integration
- Full Stack Deployment
- Git & GitHub Collaboration
- Project Documentation

---

# Conclusion

Udhaar Khata successfully digitizes customer credit management by providing customer tracking, transaction management, payment reminders, customer rankings, reports, and analytics through a modern MERN stack architecture. The application improves business efficiency, reduces manual effort, and provides a scalable solution for small business owners.
