// cart.js
let cart = [];

// Function to add item to the cart
function addToCart(item) {
    fetch('http://localhost:3000/add-to-cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    })
        .then(response => response.json())
        .then(data => {
            cart = data.cart;
            updateCartDisplay();
            alert(data.message);
        })
        .catch(error => console.error('Error:', error));
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
}

// Function to proceed to payment
function checkout() {
    fetch('http://localhost:3000/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            cart = [];
            updateCartDisplay();
        })
        .catch(error => console.error('Error:', error));
}