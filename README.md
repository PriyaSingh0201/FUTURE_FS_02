# Mini E-Commerce Storefront

A modern, responsive e-commerce platform built with Next.js and Tailwind CSS.

## Features

- 🛍️ Product listing with search and category filtering
- 🛒 Shopping cart with quantity controls
- 📱 Responsive design for all devices
- ✅ Form validation for checkout
- 🎨 Clean, modern UI with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js, React
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **API**: FakeStore API for product data
- **Form Handling**: React Hook Form

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
mini-ecommerce/
├── components/          # Reusable UI components
├── contexts/           # React Context for state management
├── pages/             # Next.js pages and API routes
├── styles/            # Global styles and Tailwind CSS
└── public/            # Static assets
```

## Key Components

- **Product Listing**: Browse products with search and filter functionality
- **Product Details**: View individual product information
- **Shopping Cart**: Add, remove, and update product quantities
- **Checkout**: Complete purchase with form validation

## API Integration

This project uses the [FakeStore API](https://fakestoreapi.com/) for product data, providing:
- Product listings
- Product details
- Categories
- Product images

## Deployment

This project can be easily deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any hosting platform that supports Node.js

## Future Enhancements

- User authentication and registration
- Order history and tracking
- Payment integration (Stripe, PayPal)
- Admin panel for product management
- Product reviews and ratings
- Wishlist functionality