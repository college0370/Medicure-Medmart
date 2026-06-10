let cart = [
    { product: "Product 1", quantity: 2, price: 10 },
    { product: "Product 2", quantity: 3, price: 120 },
    { product: "Product 3", quantity: 1, price: 30 }
];

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items').getElementsByTagName('tbody')[0];
    cartItemsContainer.innerHTML = ""; // Clear previous items
    let total = 0;

    cart.forEach((item, index) => {
        const row = cartItemsContainer.insertRow();
        row.innerHTML = `
            <td>${item.product}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
            </td>
            <td>₹${item.price.toFixed(2)}</td>
            <td>₹${(item.price * item.quantity).toFixed(2)}</td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
        `;
        total += item.price * item.quantity;
    });

    document.getElementById('cart-total').innerText = total.toFixed(2);
}

function updateQuantity(index, quantity) {
    if (quantity < 1) {
        quantity = 1;
    }
    cart[index].quantity = parseInt(quantity);
    renderCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
}

// Checkout button handler
document.getElementById('checkout-button').addEventListener('click', function() {
    alert(`You have checked out with a total of $${document.getElementById('cart-total').innerText}`);
});

// Initial rendering
renderCart();