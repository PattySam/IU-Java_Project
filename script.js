// Section for adding items into cart

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
    alert('Thank you for your purchase!');
    cartItems = [];
    updateCart();
}

// Section for submitting an email to a newsletter

document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    
    alert(`Thank you for subscribing! We'll keep you updated.`);
    
    emailInput.value = '';
});

// Section for creating a donation

document.getElementById('donate-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const amountInput = document.getElementById('amount');
    const amount = amountInput.value;

    alert(`Thank you for your donation of $${amount}!`);
    
    amountInput.value = '';
});
