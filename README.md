# 🛒 Reda Online Store Web Application

A modern and responsive e-commerce web application built using **HTML, CSS, and JavaScript**.  
The system allows users to browse products, search and filter items, manage a shopping cart, and view product details in an interactive and smooth experience.

---

## 🎯 Project Idea

This project simulates a real online shopping system where users can:

- Browse products easily  
- Search for specific items  
- Filter products by category  
- View product details  
- Add products to cart  
- Manage quantity inside cart  

The system is fully frontend-based and uses **LocalStorage** to simulate data persistence without a backend.

---

## 🧠 Problem Solved

Many beginner e-commerce systems face problems like:

- No structured UI  
- No cart management system  
- No product filtering or search  
- Poor user experience  

This project solves these issues by providing:

- Clean UI/UX design  
- Interactive shopping flow  
- Real cart system using JavaScript  
- Responsive layout for all devices  

---

## 🏗️ System Structure

### 🏠 Home Page
- Modern hero section  
- Featured products display  
- Navigation menu  
- Cart icon with live counter  

---

### 🛍️ Products Page
- Grid layout for products  
- Category filtering system  
- Live search functionality  
- Product cards with actions  

Features:
- Search products in real time  
- Filter by category  
- Add to cart directly  
- View product details  

---

### 📄 Product Details Page
- Full product information  
- Image preview  
- Product price and description  
- Add to cart button  
- Buy now option  
- Back navigation  

Data is passed using:

```js
localStorage.setItem("productName", name);

---

### 🛒 Shopping Cart Page
- Display added products  
- Increase / decrease quantity  
- Remove items from cart  
- Automatic total calculation  
- Clear cart option  
- Checkout button UI  

Cart data is stored using:

```js
localStorage.setItem("cart", JSON.stringify(cart));

---

### ⚙️ Technologies Used
HTML5
CSS3 (Flexbox + Grid)
JavaScript (Vanilla JS)
LocalStorage API
Font Awesome Icons

### 📌 Key Features
Fully responsive design
Interactive UI without frameworks
Real-time search and filtering
Persistent shopping cart
Dark mode support
Multi-page navigation system

### 🔮 Future Improvements
Backend integration (PHP / Node.js)
User authentication system
Payment gateway integration
Admin dashboard for product management
Database integration (MySQL)
Order tracking system
