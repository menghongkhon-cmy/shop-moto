/* ==========================================================================
   MOTOX - Modernized Application Logic & LocalStorage State Manager
   ========================================================================== */

// --- Extended Sample Inventory Dataset (12 Initial Models) ---
const INITIAL_PRODUCTS = [
    {
        id: "m1",
        name: "YZF-R1M",
        brand: "Yamaha",
        category: "Sport",
        price: 26999,
        engine: "998 CC CP4",
        hp: "200 HP",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
        description: "Pure MotoGP technology built for street and track dominance. Features Öhlins Electronic Racing Suspension and full carbon bodywork."
    },
    {
        id: "m2",
        name: "Panigale V4 S",
        brand: "Ducati",
        category: "Sport",
        price: 31995,
        engine: "1103 CC V4",
        hp: "215 HP",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
        description: "Italian aerodynamic perfection. Equipped with the Desmosedici Stradale engine, carbon winglets, and electronic Öhlins Smart EC 2.0."
    },
    {
        id: "m3",
        name: "MT-09 SP",
        brand: "Yamaha",
        category: "Naked",
        price: 11499,
        engine: "890 CC CP3",
        hp: "117 HP",
        image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80",
        description: "High-torque 3-cylinder streetfighter featuring aggressive dark styling, KYB DLC front forks, and cruise control system."
    },
    {
        id: "m4",
        name: "Ninja H2 Carbon",
        brand: "Kawasaki",
        category: "Sport",
        price: 34000,
        engine: "998 CC Supercharged",
        hp: "310 HP",
        image: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=800&q=80",
        description: "The ultimate hyperbike featuring a proprietary centrifugal supercharger and carbon-fiber upper cowl."
    },
    {
        id: "m5",
        name: "S 1000 RR",
        brand: "BMW",
        category: "Sport",
        price: 18295,
        engine: "999 CC ShiftCam",
        hp: "205 HP",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
        description: "German engineering featuring ShiftCam technology for maximum torque across all rev ranges and M Package telemetry options."
    },
    {
        id: "m6",
        name: "CBR1000RR-R Fireblade SP",
        brand: "Honda",
        category: "Sport",
        price: 28500,
        engine: "999 CC Inline-4",
        hp: "214 HP",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
        description: "Race-tuned directly by HRC engineers. Contains titanium connecting rods, forged aluminum pistons, and Öhlins NPX forks."
    },
    {
        id: "m7",
        name: "1290 Super Duke R EVO",
        brand: "KTM",
        category: "Naked",
        price: 19599,
        engine: "1301 CC LC8 V-Twin",
        hp: "180 HP",
        image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80",
        description: "The Beast evolved. Features WP APEX semi-active suspension technology and unrivaled low-end torque delivery."
    },
    {
        id: "m8",
        name: "Rebel 1100 DCT",
        brand: "Honda",
        category: "Cruiser",
        price: 9499,
        engine: "1084 CC Parallel-Twin",
        hp: "86 HP",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
        description: "Modern blackout bobber aesthetics combined with smooth Dual-Clutch Automatic Transmission and selectable power modes."
    },
    {
        id: "m9",
        name: "Streetfighter V4 SP2",
        brand: "Ducati",
        category: "Naked",
        price: 37995,
        engine: "1103 CC Desmosedici",
        hp: "208 HP",
        image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
        description: "The Fight Formula: strip down the Panigale V4, add biplane wings, carbon rims, and STM-EVO SBK dry clutch."
    },
    {
        id: "m10",
        name: "1250 GS Adventure",
        brand: "BMW",
        category: "Adventure",
        price: 20345,
        engine: "1254 CC Boxer",
        hp: "136 HP",
        image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=800&q=80",
        description: "The globe-trotting adventure standard. Features 30-liter aluminum tank, shift-cam boxer engine, and dynamic ESA."
    },
    {
        id: "m11",
        name: "Sportster S",
        brand: "Harley-Davidson",
        category: "Cruiser",
        price: 15499,
        engine: "1250 CC Revolution Max",
        hp: "121 HP",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
        description: "Next-generation performance cruiser built on the liquid-cooled Revolution Max 1250T engine with high-mounted exhaust."
    },
    {
        id: "m12",
        name: "GSX-R1000R",
        brand: "Suzuki",
        category: "Sport",
        price: 17999,
        engine: "999 CC Inline-4",
        hp: "199 HP",
        image: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&w=800&q=80",
        description: "King of the Sportsbikes. Features variable valve timing derived from MotoGP, Showa BFF suspension, and motion control system."
    }
];

// --- LocalStorage DAO Wrapper ---
const DB = {
    getProducts: () => JSON.parse(localStorage.getItem('motox_products')) || INITIAL_PRODUCTS,
    setProducts: (data) => localStorage.setItem('motox_products', JSON.stringify(data)),
    
    getCart: () => JSON.parse(localStorage.getItem('motox_cart')) || [],
    setCart: (data) => localStorage.setItem('motox_cart', JSON.stringify(data)),

    getFavs: () => JSON.parse(localStorage.getItem('motox_favs')) || [],
    setFavs: (data) => localStorage.setItem('motox_favs', JSON.stringify(data)),

    getOrders: () => JSON.parse(localStorage.getItem('motox_orders')) || [],
    setOrders: (data) => localStorage.setItem('motox_orders', JSON.stringify(data)),

    getUser: () => JSON.parse(localStorage.getItem('motox_user')) || null,
    setUser: (data) => localStorage.setItem('motox_user', JSON.stringify(data)),

    getMessages: () => JSON.parse(localStorage.getItem('motox_messages')) || [],
    setMessages: (data) => localStorage.setItem('motox_messages', JSON.stringify(data))
};

// Application State Variables
let products = [];
let cart = [];
let favorites = [];
let currentUser = null;

// Initialize Web App State
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('motox_products')) {
        DB.setProducts(INITIAL_PRODUCTS);
    }
    products = DB.getProducts();
    cart = DB.getCart();
    favorites = DB.getFavs();
    currentUser = DB.getUser();

    updateNavState();
    updateBadges();
    renderHomePage();
    renderShopPage();
    renderCart();
});

// --- SPA Router & View Management ---
function switchView(viewId) {
    document.querySelectorAll('.page-view').forEach(view => view.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) targetView.classList.add('active');

    const activeLink = document.querySelector(`.nav-link[data-target="${viewId}"]`);
    if (activeLink) activeLink.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // View Specific Render Trigger Hooks
    if (viewId === 'favorites') renderFavorites();
    if (viewId === 'orders') renderUserOrders();
    if (viewId === 'admin') initAdminDashboard();
}

function toggleMobileMenu() {
    document.getElementById('nav-links').classList.toggle('active');
}

// --- Header Navigation & User Auth States ---
function updateNavState() {
    const authContainer = document.getElementById('auth-nav-container');
    const adminNavItem = document.getElementById('admin-nav-item');

    if (currentUser) {
        authContainer.innerHTML = `
            <div class="user-nav-btn">
                <i class="fa-solid fa-user"></i>
                <span>${currentUser.name}</span>
                <i class="fa-solid fa-arrow-right-from-bracket" onclick="handleLogout()" title="Logout" style="margin-left: 8px;"></i>
            </div>
        `;
        adminNavItem.style.display = currentUser.role === 'admin' ? 'block' : 'none';
    } else {
        adminNavItem.style.display = 'none';
        authContainer.innerHTML = `
            <button class="btn btn-primary btn-sm" onclick="switchView('auth')">Sign In</button>
        `;
    }
}

function updateBadges() {
    document.getElementById('cart-count').innerText = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('fav-count').innerText = favorites.length;
}

// --- Toast Notification Display ---
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation'}"></i>
        <span>${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
}

// --- Custom Confirmation Modal Helper ---
function showConfirmModal(title, bodyText, onConfirm) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-body').innerText = bodyText;
    const confirmBtn = document.getElementById('modal-confirm-btn');
    
    // Clean old listeners
    const newConfirmBtn = confirmBtn.cloneNode(true);
    confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);

    newConfirmBtn.addEventListener('click', () => {
        onConfirm();
        closeModal();
    });

    document.getElementById('confirm-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('confirm-modal').classList.remove('active');
}

// --- Dynamic Component Builders ---
function renderHomePage() {
    // Render Category Cards
    const categories = [
        { name: 'Sport', icon: 'fa-motorcycle' },
        { name: 'Naked', icon: 'fa-bolt' },
        { name: 'Cruiser', icon: 'fa-compass' },
        { name: 'Adventure', icon: 'fa-mountain-sun' }
    ];

    document.getElementById('home-categories').innerHTML = categories.map(cat => `
        <div class="category-card" onclick="filterByCategory('${cat.name}')">
            <i class="fa-solid ${cat.icon}"></i>
            <h3>${cat.name}</h3>
        </div>
    `).join('');

    // Render Featured Showcase Cards
    document.getElementById('featured-products').innerHTML = products.slice(0, 4).map(p => createProductCardMarkup(p)).join('');
}

function createProductCardMarkup(product) {
    const isFav = favorites.includes(product.id);
    return `
        <div class="product-card">
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${product.id}')" title="Save to Wishlist">
                    <i class="fa-solid fa-heart"></i>
                </button>
            </div>
            <div class="product-body">
                <span class="product-brand">${product.brand}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-specs">
                    <span><i class="fa-solid fa-gauge"></i> ${product.engine}</span>
                    <span><i class="fa-solid fa-horse-head"></i> ${product.hp}</span>
                </div>
                <div class="product-price-row">
                    <span class="product-price">$${product.price.toLocaleString()}</span>
                    <div>
                        <button class="btn btn-outline btn-sm" onclick="openProductModal('${product.id}')">View</button>
                        <button class="btn btn-primary btn-sm" onclick="addToCart('${product.id}')" title="Add to Cart"><i class="fa-solid fa-cart-plus"></i></button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// --- Shop Multi-Filter Engine ---
function renderShopPage() {
    applyFilters();
}

function applyFilters() {
    const searchVal = document.getElementById('filter-search').value.toLowerCase();
    const brandVal = document.getElementById('filter-brand').value;
    const catVal = document.getElementById('filter-category').value;
    const maxPrice = parseFloat(document.getElementById('filter-price').value);
    const sortVal = document.getElementById('filter-sort').value;

    let filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchVal) || p.brand.toLowerCase().includes(searchVal) || p.engine.toLowerCase().includes(searchVal);
        const matchesBrand = brandVal === 'all' || p.brand === brandVal;
        const matchesCat = catVal === 'all' || p.category === catVal;
        const matchesPrice = p.price <= maxPrice;
        return matchesSearch && matchesBrand && matchesCat && matchesPrice;
    });

    if (sortVal === 'price-low') filtered.sort((a,b) => a.price - b.price);
    if (sortVal === 'price-high') filtered.sort((a,b) => b.price - a.price);
    if (sortVal === 'power-high') filtered.sort((a,b) => parseInt(b.hp) - parseInt(a.hp));

    document.getElementById('results-count').innerText = `Showing ${filtered.length} Motorcycles`;
    document.getElementById('shop-products').innerHTML = filtered.length > 0
        ? filtered.map(p => createProductCardMarkup(p)).join('')
        : `<div class="full-width text-center" style="grid-column: 1/-1; padding: 60px 0;"><h3>No machines match your criteria</h3></div>`;
}

function filterByCategory(catName) {
    switchView('shop');
    document.getElementById('filter-category').value = catName;
    applyFilters();
}

function filterBySpecialOffers() {
    switchView('shop');
    document.getElementById('filter-price').value = 20000;
    updatePriceLabel(20000);
    applyFilters();
}

function updatePriceLabel(val) {
    document.getElementById('price-val').innerText = parseInt(val).toLocaleString();
}

function resetFilters() {
    document.getElementById('filter-search').value = '';
    document.getElementById('filter-brand').value = 'all';
    document.getElementById('filter-category').value = 'all';
    document.getElementById('filter-price').value = 40000;
    updatePriceLabel(40000);
    applyFilters();
}

function handleGlobalSearch(e) {
    if (e.key === 'Enter') triggerGlobalSearch();
}

function triggerGlobalSearch() {
    const val = document.getElementById('global-search').value;
    switchView('shop');
    document.getElementById('filter-search').value = val;
    applyFilters();
}

// --- Cart System ---
function addToCart(productId) {
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ id: productId, qty: 1 });
    }
    DB.setCart(cart);
    updateBadges();
    showToast('Motorcycle added to cart!');
}

function updateQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }
    DB.setCart(cart);
    updateBadges();
    renderCart();
}

function renderCart() {
    const container = document.getElementById('cart-wrapper');
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="text-center" style="padding: 60px 0;">
                <i class="fa-solid fa-cart-arrow-down" style="font-size: 4rem; color: var(--gray-mid);"></i>
                <h3 class="mt-3">Your Cart is Empty</h3>
                <p class="mt-3">Ready to find your next track weapon?</p>
                <button class="btn btn-primary mt-4" onclick="switchView('shop')">Browse Showroom</button>
            </div>
        `;
        return;
    }

    let subtotal = 0;
    const rowsMarkup = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return '';
        const itemTotal = product.price * item.qty;
        subtotal += itemTotal;

        return `
            <tr>
                <td>
                    <div class="cart-item-info">
                        <img src="${product.image}" alt="${product.name}">
                        <div>
                            <strong>${product.brand} ${product.name}</strong>
                            <div style="color: var(--gray-light); font-size: 0.85rem;">Engine Specs: ${product.engine}</div>
                        </div>
                    </div>
                </td>
                <td>$${product.price.toLocaleString()}</td>
                <td>
                    <div class="qty-ctrl">
                        <button class="qty-btn" onclick="updateQty('${product.id}', -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="updateQty('${product.id}', 1)">+</button>
                    </div>
                </td>
                <td><strong>$${itemTotal.toLocaleString()}</strong></td>
                <td><button class="btn-text" onclick="updateQty('${product.id}', -${item.qty})"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
        `;
    }).join('');

    const shipping = 250;
    const total = subtotal + shipping;

    container.innerHTML = `
        <div class="table-responsive">
            <table class="cart-table">
                <thead>
                    <tr>
                        <th>Motorcycle</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>${rowsMarkup}</tbody>
            </table>
        </div>
        <div class="cart-summary-card">
            <h3>Order Summary</h3>
            <div class="summary-row mt-3"><span>Subtotal</span><span>$${subtotal.toLocaleString()}</span></div>
            <div class="summary-row"><span>Flat Rate Track Logistics</span><span>$${shipping.toLocaleString()}</span></div>
            <div class="summary-row total"><span>Total</span><span>$${total.toLocaleString()}</span></div>
            <button class="btn btn-primary full-width mt-4" onclick="proceedToCheckout()">Proceed to Checkout</button>
        </div>
    `;
}

function proceedToCheckout() {
    switchView('checkout');
    renderCheckoutSummary();
}

function renderCheckoutSummary() {
    let subtotal = 0;
    const items = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        const itemTotal = product.price * item.qty;
        subtotal += itemTotal;
        return `<div class="summary-row"><span>${product.name} x ${item.qty}</span><span>$${itemTotal.toLocaleString()}</span></div>`;
    }).join('');

    const total = subtotal + 250;
    document.getElementById('checkout-summary').innerHTML = `
        <h3>Summary Breakdown</h3>
        <div class="mt-3">${items}</div>
        <div class="summary-row mt-3"><span>Subtotal</span><span>$${subtotal.toLocaleString()}</span></div>
        <div class="summary-row"><span>Logistics Shipping</span><span>$250</span></div>
        <div class="summary-row total"><span>Total Authorization</span><span>$${total.toLocaleString()}</span></div>
    `;
}

function processOrder(e) {
    e.preventDefault();
    if (cart.length === 0) return showToast('Cart is empty!', 'error');

    const newOrder = {
        id: `MOTO-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleDateString(),
        customer: {
            name: document.getElementById('checkout-name').value,
            email: document.getElementById('checkout-email').value,
            phone: document.getElementById('checkout-phone').value,
            address: document.getElementById('checkout-address').value
        },
        items: [...cart],
        status: 'Preparing',
        total: cart.reduce((sum, item) => {
            const p = products.find(x => x.id === item.id);
            return sum + (p.price * item.qty);
        }, 250)
    };

    const orders = DB.getOrders();
    orders.unshift(newOrder);
    DB.setOrders(orders);

    cart = [];
    DB.setCart(cart);
    updateBadges();

    showToast(`Order ${newOrder.id} authorized successfully!`);
    switchView('orders');
}

// --- Wishlist System ---
function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
        showToast('Removed from favorites');
    } else {
        favorites.push(id);
        showToast('Saved to wishlist!');
    }
    DB.setFavs(favorites);
    updateBadges();
    applyFilters();
    renderHomePage();
}

function renderFavorites() {
    const grid = document.getElementById('favorites-grid');
    const favProducts = products.filter(p => favorites.includes(p.id));

    if (favProducts.length === 0) {
        grid.innerHTML = `
            <div class="full-width text-center" style="grid-column: 1/-1; padding: 60px 0;">
                <i class="fa-solid fa-heart-crack" style="font-size: 4rem; color: var(--gray-mid);"></i>
                <h3 class="mt-3">No Saved Bikes</h3>
                <p class="mt-3">Tap heart icons across the showroom to bookmark your favorite machines.</p>
            </div>
        `;
        return;
    }
    grid.innerHTML = favProducts.map(p => createProductCardMarkup(p)).join('');
}

// --- Dynamic Product Modal & Specifications ---
function openProductModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    document.getElementById('product-modal-content').innerHTML = `
        <div class="product-details-grid">
            <div>
                <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 8px; object-fit: cover; max-height: 400px;">
            </div>
            <div>
                <span class="product-brand">${product.brand}</span>
                <h2 style="font-size: 2rem; font-weight: 900;">${product.name}</h2>
                <h3 class="product-price mt-3" style="font-size: 1.8rem; color: var(--primary);">$${product.price.toLocaleString()}</h3>
                <p class="mt-3" style="color: var(--gray-light); font-size: 0.95rem;">${product.description}</p>
                
                <div class="mt-4" style="background: var(--dark-surface); padding: 20px; border-radius: 6px; border: 1px solid var(--gray-dark);">
                    <h4 style="text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; color: var(--gray-light);">Engineering Specs:</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; font-size: 0.9rem;">
                        <div><strong>Engine:</strong> ${product.engine}</div>
                        <div><strong>Horsepower:</strong> ${product.hp}</div>
                        <div><strong>Category:</strong> ${product.category}</div>
                        <div><strong>Warranty:</strong> 5 Years Factory</div>
                    </div>
                </div>

                <button class="btn btn-primary full-width mt-4" onclick="addToCart('${product.id}'); closeProductModal();">
                    <i class="fa-solid fa-cart-plus"></i> Add To Cart
                </button>
            </div>
        </div>
    `;

    document.getElementById('product-modal').classList.add('active');
}

function closeProductModal() {
    document.getElementById('product-modal').classList.remove('active');
}

// --- Customer Orders Tracking Engine ---
function renderUserOrders() {
    const container = document.getElementById('user-orders-list');
    const orders = DB.getOrders();

    if (orders.length === 0) {
        container.innerHTML = `
            <div class="text-center" style="padding: 60px 0;">
                <i class="fa-solid fa-box-open" style="font-size: 4rem; color: var(--gray-mid);"></i>
                <h3 class="mt-3">No Active Orders</h3>
                <p>Purchases and shipping statuses will display here.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = orders.map(order => `
        <div class="card-box mb-4">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 15px;">
                <div>
                    <strong style="font-size: 1.1rem; color: var(--white);">Order Identifier: ${order.id}</strong>
                    <div style="font-size: 0.85rem; color: var(--gray-light);">Placed Date: ${order.date}</div>
                </div>
                <div>
                    <span class="btn btn-outline btn-sm">${order.status}</span>
                </div>
            </div>
            <div class="mt-3">
                ${order.items.map(i => {
                    const p = products.find(x => x.id === i.id);
                    return `<div style="padding: 5px 0;">• ${p ? p.brand + ' ' + p.name : 'Motorcycle'} x ${i.qty}</div>`;
                }).join('')}
            </div>
            <div class="mt-3 text-right" style="font-weight: 900; color: var(--primary); font-size: 1.2rem;">
                Total Paid: $${order.total.toLocaleString()}
            </div>
        </div>
    `).join('');
}

// --- Customer Auth System ---
function switchAuthTab(tab) {
    document.getElementById('tab-login').classList.toggle('active', tab === 'login');
    document.getElementById('tab-register').classList.toggle('active', tab === 'register');
    document.getElementById('form-login').classList.toggle('active', tab === 'login');
    document.getElementById('form-register').classList.toggle('active', tab === 'register');
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;

    if (email.toLowerCase().includes('admin')) {
        currentUser = { name: 'Master Admin', email: email, role: 'admin' };
    } else {
        currentUser = { name: email.split('@')[0], email: email, role: 'customer' };
    }

    DB.setUser(currentUser);
    updateNavState();
    showToast(`Authenticated as ${currentUser.name}`);
    switchView('home');
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;

    currentUser = { name: name, email: email, role: 'customer' };
    DB.setUser(currentUser);
    updateNavState();
    showToast('Registration successful!');
    switchView('home');
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('motox_user');
    updateNavState();
    showToast('Signed out');
    switchView('home');
}

// --- Contact Form ---
function handleContactSubmit(e) {
    e.preventDefault();
    const msg = {
        date: new Date().toLocaleDateString(),
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        subject: document.getElementById('contact-subject').value,
        message: document.getElementById('contact-message').value
    };

    const messages = DB.getMessages();
    messages.push(msg);
    DB.setMessages(messages);

    showToast('Message logged with customer support.');
    e.target.reset();
}

// --- Admin Management Portal Engine ---
function initAdminDashboard() {
    if (!currentUser || currentUser.role !== 'admin') {
        showToast('Admin privilege required.', 'error');
        switchView('home');
        return;
    }

    // Load Metrics
    const orders = DB.getOrders();
    const totalRev = orders.reduce((sum, o) => sum + o.total, 0);

    document.getElementById('stat-revenue').innerText = `$${totalRev.toLocaleString()}`;
    document.getElementById('stat-orders').innerText = orders.length;
    document.getElementById('stat-products').innerText = products.length;
    document.getElementById('stat-users').innerText = '24'; // Demo metric

    renderAdminInventory();
    renderAdminOrders();
    renderAdminMessages();
}

function switchAdminTab(tabName) {
    document.querySelectorAll('.admin-tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.admin-menu-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(`admin-tab-${tabName}`).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Product CRUD Logic
function renderAdminInventory() {
    const table = document.getElementById('admin-inventory-table');
    table.innerHTML = products.map(p => `
        <tr>
            <td><img src="${p.image}" alt="" style="width: 50px; height: 35px; object-fit: cover; border-radius: 4px;"></td>
            <td><strong>${p.name}</strong></td>
            <td>${p.brand}</td>
            <td>${p.category}</td>
            <td>$${p.price.toLocaleString()}</td>
            <td>
                <button class="btn btn-secondary btn-sm" onclick="editProduct('${p.id}')">Edit</button>
                <button class="btn btn-primary btn-sm" onclick="confirmDeleteProduct('${p.id}')">Delete</button>
            </td>
        </tr>
    `).join('');
}

function openAddProductForm() {
    document.getElementById('admin-product-form').reset();
    document.getElementById('prod-id').value = '';
    document.getElementById('admin-form-title').innerText = 'Add New Superbike';
    document.getElementById('admin-product-form-card').classList.remove('hidden');
}

function closeAdminProductForm() {
    document.getElementById('admin-product-form-card').classList.add('hidden');
}

function saveProduct(e) {
    e.preventDefault();
    const id = document.getElementById('prod-id').value;
    const newProduct = {
        id: id || `m_${Date.now()}`,
        name: document.getElementById('prod-name').value,
        brand: document.getElementById('prod-brand').value,
        category: document.getElementById('prod-category').value,
        price: parseFloat(document.getElementById('prod-price').value),
        engine: document.getElementById('prod-engine').value,
        hp: document.getElementById('prod-hp').value,
        image: document.getElementById('prod-image').value,
        description: document.getElementById('prod-desc').value
    };

    if (id) {
        products = products.map(p => p.id === id ? newProduct : p);
        showToast('Motorcycle entry updated!');
    } else {
        products.push(newProduct);
        showToast('New Motorcycle registered!');
    }

    DB.setProducts(products);
    renderAdminInventory();
    renderHomePage();
    closeAdminProductForm();
}

function editProduct(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;

    document.getElementById('prod-id').value = p.id;
    document.getElementById('prod-name').value = p.name;
    document.getElementById('prod-brand').value = p.brand;
    document.getElementById('prod-category').value = p.category;
    document.getElementById('prod-price').value = p.price;
    document.getElementById('prod-engine').value = p.engine;
    document.getElementById('prod-hp').value = p.hp;
    document.getElementById('prod-image').value = p.image;
    document.getElementById('prod-desc').value = p.description;

    document.getElementById('admin-form-title').innerText = 'Edit Superbike';
    document.getElementById('admin-product-form-card').classList.remove('hidden');
}

function confirmDeleteProduct(id) {
    const p = products.find(x => x.id === id);
    showConfirmModal('Delete Motorcycle', `Are you sure you want to remove "${p ? p.name : 'this machine'}" from catalog?`, () => {
        products = products.filter(item => item.id !== id);
        DB.setProducts(products);
        renderAdminInventory();
        renderHomePage();
        showToast('Motorcycle deleted from catalog');
    });
}

// Order Operations Logic
function renderAdminOrders() {
    const orders = DB.getOrders();
    const table = document.getElementById('admin-orders-table');
    table.innerHTML = orders.map(o => `
        <tr>
            <td><strong>${o.id}</strong></td>
            <td>${o.customer.name}</td>
            <td>${o.items.length} Items</td>
            <td>$${o.total.toLocaleString()}</td>
            <td><span class="btn btn-outline btn-sm">${o.status}</span></td>
            <td>
                <select onchange="updateOrderStatus('${o.id}', this.value)" style="background: var(--dark-surface); color: var(--white); border: 1px solid var(--gray-dark); padding: 5px; border-radius: 4px;">
                    <option value="Preparing" ${o.status === 'Preparing' ? 'selected' : ''}>Preparing</option>
                    <option value="Shipped" ${o.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
                    <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                </select>
            </td>
        </tr>
    `).join('');
}

function updateOrderStatus(orderId, newStatus) {
    let orders = DB.getOrders();
    orders = orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o);
    DB.setOrders(orders);
    showToast(`Order ${orderId} updated to ${newStatus}`);
}

// Messages System
function renderAdminMessages() {
    const messages = DB.getMessages();
    const table = document.getElementById('admin-messages-table');
    table.innerHTML = messages.map(m => `
        <tr>
            <td>${m.date}</td>
            <td><strong>${m.name}</strong></td>
            <td>${m.email}</td>
            <td>${m.subject}</td>
            <td>${m.message}</td>
        </tr>
    `).join('');
}