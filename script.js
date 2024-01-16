// Add the following inside your script.js file

let cartItems = [];

function addToCart(productName, productPrice) {
    cartItems.push({ name: productName, price: productPrice });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    while (cartList.firstChild) {
        cartList.removeChild(cartList.firstChild);
    }

    let totalPrice = 0;
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);

        totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function checkout() {
    // Implement checkout logic here (e.g., connect to a payment gateway)
    alert('Thank you for your purchase!');
    cartItems = [];
    updateCart();
}

// Add the following inside your script.js file

document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    // Implement newsletter subscription logic here (e.g., send email to user or store in a database)
    
    alert(`Thank you for subscribing! We'll keep you updated.`);
    
    // Optionally, clear the email input field after subscribing
    emailInput.value = '';
});

// Add the following inside your script.js file

document.getElementById('donate-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const amountInput = document.getElementById('amount');
    const amount = amountInput.value;

    // Implement donation logic here (e.g., connect to a payment gateway)
    alert(`Thank you for your donation of $${amount}!`);
    
    // Optionally, clear the amount input field after donation
    amountInput.value = '';
});
