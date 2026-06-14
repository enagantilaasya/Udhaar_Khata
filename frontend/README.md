# Udhaar Khata Frontend

## Overview

The frontend of Udhaar Khata is developed using React.js and Tailwind CSS. It provides a modern and responsive user interface for managing customers, transactions, reminders, reports, rankings, and analytics.

---

## Features

### Authentication
- User Registration
- User Login
- JWT Token Management
- Logout Functionality

### Dashboard
- Total Customers
- Total Transactions
- Total Credit
- Total Debit
- Pending Amount
- Recent Activities
- Quick Actions

### Customer Management
- Add Customer
- Delete Customer
- View Customer Details
- Search Customers
- Customer Balance Tracking

### Transaction Management
- Add Credit Transactions
- Add Debit Transactions
- Delete Transactions
- Search Transactions
- Payment Method Tracking

### Reminder System
- Send Payment Reminders
- Pending Customer Filtering
- Twilio SMS Integration

### Ranking System
- Top Customers Ranking
- Loyalty-Based Ranking
- Discount Eligibility Display

### Reports
- PDF Statement Generation
- Customer Transaction Reports

### Profile
- Dynamic User Profile
- Account Summary
- Business Overview

---

## Technologies Used

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Zustand
- Axios
- React Hot Toast
- jsPDF

---

## Folder Structure

```text
frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
└── package.json
```

---

## Installation

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

## Build Project

```bash
npm run build
```

---

## Environment Variables

```env
VITE_API_URL= https://udhaar-khata-qedh.onrender.com
```

---

## Future Scope

- AI Insights
- Receipt Scanner
- WhatsApp Integration
- Loyalty Rewards
- Mobile Application
