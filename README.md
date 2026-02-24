# Stripe POC

A simple **Proof of Concept (POC)** for integrating Stripe payments into a **React + Vite** application.

This project demonstrates how to collect payment details using Stripe Elements and integrate Stripe into a modern frontend setup. It serves as a clean starting point for building production-ready payment flows.

---

## 🚀 Tech Stack

- React
- Vite
- Stripe.js
- @stripe/react-stripe-js

---

## 📁 Project Structure

```
stripe_POC/
├── public/                # Static assets
├── src/                   # React source code
├── .env.example           # Example environment variables
├── index.html             # Application entry
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies & scripts
└── README.md              # Project documentation
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/David-Tonsing-Dev/stripe_POC.git
cd stripe_POC
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory and add your Stripe publishable key:

```
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
```

⚠️ Never expose your Stripe **secret key** in the frontend.

You can get your API keys from the Stripe Dashboard.

---

### 4️⃣ Start the Development Server

```bash
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## 💳 How Stripe Integration Works

This project uses:

- `@stripe/stripe-js` to load Stripe
- `@stripe/react-stripe-js` for React components
- Stripe Elements to securely collect card details

### Basic Payment Flow

1. Frontend collects card details using Stripe Elements.
2. Backend creates a **PaymentIntent** using Stripe Secret Key.
3. Backend returns the `client_secret`.
4. Frontend confirms the payment using Stripe.
5. Stripe processes and returns success/failure.

---

## 🖥 Backend Requirement (Important)

This POC only covers the frontend.

To complete the payment flow, you must:

- Create a backend server (Node.js / Express recommended)
- Install Stripe server SDK:
  ```bash
  npm install stripe
  ```
- Use your **STRIPE_SECRET_KEY**
- Create a PaymentIntent
- Send `client_secret` to frontend

Stripe documentation for full flow:
https://docs.stripe.com/payments/accept-a-payment

---

## 🧪 Stripe Test Cards

Use this test card while in test mode:

```
4242 4242 4242 4242
Any future expiry date
Any 3-digit CVC
Any ZIP code
```

---

## 📦 Available Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

---

## 🔐 Security Notes

- Never expose your Stripe Secret Key in frontend code.
- Always create PaymentIntents from the backend.
- Use HTTPS in production.
- Validate payment status server-side before granting access.

---

## 📌 Future Improvements

- Add backend example (Express / Fastify)
- Add Stripe Webhooks
- Add subscription flow
- Add Stripe Checkout option
- Add success / cancel routes

---
