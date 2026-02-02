
---

# 🛒 QuickCart – Full Stack E-Commerce App

QuickCart is a full-stack e-commerce web application built using **Next.js**, **MongoDB**, and **Clerk Authentication**.
It supports **user shopping**, **seller dashboard**, **cart & orders**, and **role-based access (user/seller)**.

---

## 🚀 Features

### 👤 User Features

* Sign up / Login using Clerk
* Browse products
* Add to cart
* Manage cart
* Add shipping address
* Place orders
* View **My Orders**

### 🛍️ Seller Features

* Seller role using Clerk metadata
* Seller dashboard
* Add / edit / delete products
* View all customer orders

### 🔐 Authentication

* Clerk authentication
* Role-based access (user / seller)
* Secure API routes

---

## 🧑‍💻 Tech Stack

* **Frontend**: Next.js 16 (App Router)
* **Backend**: Next.js API Routes
* **Database**: MongoDB (Local or Atlas)
* **Auth**: Clerk
* **Styling**: Tailwind CSS
* **File Upload**: Cloudinary
* **Events**: Inngest

---

## 📂 Project Structure

```
app/
 ├─ api/
 ├─ cart/
 ├─ my-orders/
 ├─ seller/
components/
models/
config/
context/
middleware.js
```

---

## ⚙️ Environment Variables

Create a `.env` file in root:

```env
NEXT_PUBLIC_CURRENCY=₹
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

CLERK_SECRET_KEY=your_clerk_secret_key
MONGODB_URI=mongodb://127.0.0.1:27017/quickcart

INNGEST_SIGNING_KEY=your_inngest_signing_key
INNGEST_EVENT_KEY=your_inngest_event_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

---

## 🛠️ Installation

```bash
git clone https://github.com/yourusername/QuickCart.git
cd QuickCart
npm install
npm run dev
```

App runs on:

```
http://localhost:3000
```

---

## 🧪 Test Users

* Normal User → place orders
* Seller User → view seller dashboard

Set role in Clerk:

```
publicMetadata:
{
  "role": "seller"
}
```

---

## 📦 API Routes

| Route                      | Purpose       |
| -------------------------- | ------------- |
| `/api/product/list`        | Get products  |
| `/api/cart/update`         | Update cart   |
| `/api/order/create`        | Create order  |
| `/api/order/list`          | User orders   |
| `/api/order/seller-orders` | Seller orders |

---

## 🧩 Known Issues

* MongoDB Atlas may fail on some networks
* Local MongoDB recommended for development

---

## 🏁 Deployment

Deployed using **Vercel**
Requires:

* MongoDB Atlas
* Clerk production keys
* Environment variables in Vercel

---

## 👨‍💻 Author

**Rohit M Naik**
Full-Stack Developer
GitHub: [https://github.com/rohitnk464](https://github.com/rohitnk464)



Now let’s show it to GitHub proudly 💙
