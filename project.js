let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
//btn up down

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  if (window.scrollY > 60) {
    document.querySelector("#scroll-top").classList.add("active");
  } else {
    document.querySelector("#scroll-top").classList.remove("active");
  }
};// btn afte 60 pixels comming

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut();//loader gif ka time period


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let cart = [];

// Endpoint to add item to the cart
app.post('/add-to-cart', (req, res) => {
  const item = req.body;
  cart.push(item);
  res.status(200).json({ message: 'Item added to cart', cart });
});

// Endpoint to get the cart items
app.get('/cart', (req, res) => {
  res.status(200).json(cart);
});

// Endpoint to proceed to payment (mock)
app.post('/checkout', (req, res) => {
  // Here you would handle payment processing logic
  cart = []; // Clear the cart after checkout
  res.status(200).json({ message: 'Checkout successful' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});