# Razorpay E-Commerce Checkout Integration

This project demonstrates how to integrate the Razorpay Payment Gateway into a sample e-commerce checkout system using Node.js and Express.

## Tech Stack

- Frontend: HTML, JavaScript
- Backend: Node.js, Express
- Payment Gateway: Razorpay

## Features

- Create order via Razorpay API
- Open Razorpay Checkout
- Verify payment signature
- Secure backend implementation

## Project Structure

frontend/ - Contains HTML checkout page  
backend/ - Contains Express server and Razorpay integration  

## Setup Instructions

### 1. Clone the Repository

git clone https://github.com/yourusername/razorpay-ecommerce-checkout.git

### 2. Install Backend Dependencies

cd backend  
npm install  

### 3. Create .env File

Add:

KEY_ID=your_razorpay_key  
KEY_SECRET=your_razorpay_secret  

### 4. Start Server

node server.js  

### 5. Open Frontend

Open frontend/index.html in browser

## Payment Flow

1. User enters amount
2. Backend creates Razorpay order
3. Checkout popup opens
4. Payment is verified using HMAC signature
