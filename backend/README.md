# Udhaar Khata Backend

##  Overview

The backend of Udhaar Khata is built using Node.js, Express.js, MongoDB, and Mongoose. It provides secure REST APIs for authentication, customer management, transactions, analytics, reminders, and ranking systems.

---

##  Features

###  Authentication
- User Registration
- User Login
- JWT Authentication
- Password Hashing using BcryptJS
- Protected Routes

###  Customer Management
- Add Customer
- Get All Customers
- Get Customer Details
- Delete Customer

###  Transaction Management
- Add Transaction
- Delete Transaction
- Get Customer Transactions
- Credit & Debit Tracking

###  Analytics
- Dashboard Statistics
- Total Customers
- Total Transactions
- Total Credit
- Total Debit
- Pending Amount

###  Reminder System
- Twilio SMS Integration
- Send Payment Reminders

###  Ranking System
- Customer Ranking
- Discount Eligibility
- Loyalty Tracking

---

##  Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- BcryptJS
- Twilio
- CORS
- Dotenv
- Cookie Parser

---

##  Folder Structure

```text
backend/
│
├── APIs/
├── middleware/
├── models/
├── utils/
├── server.js
│
└── package.json
```

---

##  Installation

```bash
npm install
```

## Run Server

```bash
npm start
```

or

```bash
nodemon server.js
```

---

## Environment Variables

```env
PORT=4000

DB_URL=YOUR_MONGODB_URL

JWT_SECRET=YOUR_SECRET_KEY

TWILIO_SID=YOUR_TWILIO_SID

TWILIO_AUTH_TOKEN=YOUR_TWILIO_AUTH_TOKEN

TWILIO_PHONE=YOUR_TWILIO_PHONE
```

---

## API Modules

### Authentication API
- Register User
- Login User

### Customer API
- Add Customer
- Get Customers
- Delete Customer

### Transaction API
- Add Transaction
- Get Transactions
- Delete Transaction

### Analytics API
- Dashboard Analytics

### Reminder API
- Send SMS Reminder

### Ranking API
- Customer Rankings

---

## Future Scope

- AI Insights
- OCR Receipt Scanner
- Email Notifications
- WhatsApp Automation
- Advanced Analytics
