// Motorbike Dataset
const bikes = [
    {
        id: 1,
        name: "Apex Panther R1",
        category: "sport",
        price: 18500,
        engine: "998 cc",
        power: "200 HP",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Ironclad V-Twin",
        category: "cruiser",
        price: 22000,
        engine: "1800 cc",
        power: "105 HP",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Terra Quest 850",
        category: "adventure",
        price: 14200,
        engine: "853 cc",
        power: "95 HP",
        image: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Phantom Ninja SR",
        category: "sport",
        price: 16800,
        engine: "636 cc",
        power: "130 HP",
        image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80"
    }
];

let cart = [];

// DOM Elements
const bikeGrid = document.getElementById('bike-grid');
const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');
const cartModal = document.getElementById('cart-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const filterBtns = document.querySelectorAll('.filter-btn');

// Render Motorbikes Grid
function renderBikes(filter = 'all') {
    bikeGrid.innerHTML = '';
    const filteredBikes = filter === 'all' ? bikes : bikes.filter(b => b.category === filter);

    filteredBikes.forEach(bike => {
        const card = document.createElement('div');
        card.className = 'bike-card';
        card.innerHTML = `
            <img src="${bike.image}" alt="${bike.name}" class="bike-img">
            <div class="bike-info">
                <h3>${bike.name}</h3>
                <div class="bike-specs">
                    <span><i class="fas fa-engine-warning"></i> ${bike.engine}</span>
                    <span><i class="fas fa-bolt"></i> ${bike.power}</span>
                </div>
                <div class="bike-price">$${bike.price.toLocaleString()}</div>
                <div class="card-actions">
                    <button class="btn primary-btn" onclick="addToCart(${bike.id})">Reserve</button>
                </div>
            </div>
        `;
        bikeGrid.appendChild(card);
    });
}

// Add Item to Cart
function addToCart(id) {
    const item = bikes.find(b => b.id === id);
    const existingIndex = cart.findIndex(b => b.id === id);

    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    updateCartUI();
}

// Remove Item from Cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

// Update Cart UI & Badge Count
function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let totalItems = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        totalItems += item.qty;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <small>$${item.price.toLocaleString()} x ${item.qty}</small>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background:none; border:none; color: red; cursor:pointer;">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartCount.innerText = totalItems;
    cartTotalPrice.innerText = `$${total.toLocaleString()}`;
}

// Filter Event Listeners
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        e.target.classList.add('active');
        renderBikes(e.target.dataset.filter);
    });
});

// Modal Event Listeners
cartBtn.addEventListener('click', () => cartModal.classList.add('open'));
closeCartBtn.addEventListener('click', () => cartModal.classList.remove('open'));

// Initial Render
renderBikes();