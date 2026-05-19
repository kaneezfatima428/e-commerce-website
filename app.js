// 1. E-Commerce Products Ka Array Data (32 Professional Items)
var productsData = [
    { id: 1, name: "Classic Beige Set", category: "Apparel", price: 120.00, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500" },
    { id: 2, name: "Minimalist Trench Coat", category: "Luxury Wear", price: 185.00, image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=500" },
    { id: 3, name: "Premium Suede Loafers", category: "Footwear", price: 95.00, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=500" },
    { id: 4, name: "Elegance Summer Dress", category: "Apparel", price: 150.00, image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=500" },
    { id: 5, name: "Luxury Leather Handbag", category: "Accessories", price: 240.00, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=500" },
    { id: 6, name: "Minimalist Gold Watch", category: "Accessories", price: 199.00, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=500" },
    { id: 7, name: "Oversized Wool Blazer", category: "Luxury Wear", price: 175.00, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=500" },
    { id: 8, name: "Premium Velvet Heels", category: "Footwear", price: 135.00, image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=500" },
    { id: 9, name: "Silk Aesthetic Scarf", category: "Accessories", price: 45.00, image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=500" },
    { id: 10, name: "Casual Denim Jacket", category: "Apparel", price: 85.00, image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=500" },
    { id: 11, name: "Noir Luxury Perfume", category: "Fragrance", price: 110.00, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=500" },
    { id: 12, name: "Sleek Black Sunglasses", category: "Accessories", price: 65.00, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=500" },
    { id: 13, name: "Knitted Winter Sweater", category: "Apparel", price: 90.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQ7wdca4L-ICoe1GQFBrNPuEAWRBmXh64tA&s" },
    { id: 14, name: "Urban Chelsea Boots", category: "Footwear", price: 160.00, image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=500" },
    { id: 15, name: "Minimalist Tote Bag", category: "Accessories", price: 75.00, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=500" },
    { id: 16, name: "Linen Summer Shirt", category: "Apparel", price: 55.00, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=500" },
    { id: 17, name: "Gold Plated Necklace", category: "Accessories", price: 125.00, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=500" },
    { id: 18, name: "Tailored Trousers", category: "Apparel", price: 95.00, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=500" },
    { id: 19, name: "Rose Quartz Eau De", category: "Fragrance", price: 130.00, image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=500" },
    { id: 20, name: "Leather Travel Duffel", category: "Accessories", price: 280.00, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=500" },
    { id: 21, name: "Classic White Sneakers", category: "Footwear", price: 80.00, image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=500" },
    { id: 22, name: "Aesthetic Cotton Hoody", category: "Apparel", price: 70.00, image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=500" },
    { id: 23, name: "Luxury Diamond Ring", category: "Accessories", price: 450.00, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=500" },
    { id: 24, name: "Vintage Leather Belt", category: "Accessories", price: 40.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujsvkkBMlj7A_el8XOBeQ7_iFUQrJ-LIboA&s" },
    { id: 25, name: "Satin Evening Gown", category: "Luxury Wear", price: 310.00, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=500" },
    { id: 26, name: "Suede Bomber Jacket", category: "Apparel", price: 190.00, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=500" },
    { id: 27, name: "Boho Summer Sandals", category: "Footwear", price: 60.00, image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?q=80&w=500" },
    { id: 28, name: "Chic Woolen Beanie", category: "Accessories", price: 30.00, image: "https://m.media-amazon.com/images/I/71XFAmCJnwL._AC_SL1500_.jpg" },
    { id: 29, name: "Oud Wood Intense", category: "Fragrance", price: 165.00, image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=500" },
    { id: 30, name: "Casual Pleated Skirt", category: "Apparel", price: 65.00, image: "https://img.kwcdn.com/product/fancy/93c8c80d-232e-4256-b476-8a355b2a19b6.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp" },
    { id: 31, name: "Crocodile Pattern Clutch", category: "Accessories", price: 115.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlRCl-yaL_Psl4GCCVnt37xqXay1n4eWPZfg&s" },
    { id: 32, name: "Urban Knit Joggers", category: "Apparel", price: 75.00, image: "https://images.unsplash.com/photo-1551854838-212c50b4c184?q=80&w=500" }
];

// 2. HTML Container Target karna
// var productsContainer = document.getElementById("products-container");

// // 3. Generation Loop
// for (var i = 0; i < productsData.length; i++) {
//     var product = productsData[i];

//     productsContainer.innerHTML += `
//         <div class="col">
//             <div class="card h-100 border-0 bg-transparent product-card">
//                 <div class="img-wrapper shadow rounded">
//                     <img src="${product.image}" class="card-img-top w-100" alt="${product.name}">
//                     <div class="cart-overlay p-2">
//                         <button class="btn-custom-cart w-100 py-2.5 fw-medium text-uppercase btn shadow" 
//                                 onclick="addProductToCart('${product.name}', ${product.price})">
//                             Add To Cart
//                         </button>
//                     </div>
//                 </div>
//                 <div class="card-body px-1 text-center mt-2">
//                     <span class="text-uppercase text-white-50 d-block mb-1 tracking-wider" style="font-size: 11px; opacity: 0.6;">${product.category}</span>
//                     <h5 class="card-title fs-6 fw-medium mb-1 text-white">${product.name}</h5>
//                     <p class="card-text fw-semibold" style="color: #bc9c22 !important;">$${product.price.toFixed(2)}</p>
//                 </div>
//             </div>
//         </div>
//     `;
// }

// function addProductToCart(name, price) {
//     Swal.fire({
//         title: 'Added to Bag!',
//         html: `<span style="color: #bc9c22; font-weight: 600;">${name}</span> has been added to your shopping cart.<br><b style="color: #fff; display:block; margin-top:10px;">Amount: $${price.toFixed(2)}</b>`,
//         icon: 'success',
//         iconColor: '#bc9c22', // Unique Gold Icon Color
//         background: '#111111', // Pure Luxury Dark Background
//         color: '#ffffff', // White Text Color
//         showConfirmButton: true,
//         confirmButtonText: 'Continue Shopping',
//         confirmButtonColor: '#bc9c22', // Gold Button Background
//         buttonsStyling: true,
//         timer: 3000, // 3 seconds baad khud band hojayega agar click na karein to
//         timerProgressBar: true,
//         customClass: {
//             popup: 'rounded-4 border border-secondary shadow-lg'
//         }
//     });
// }


// // 2. HTML Container Target karna
// var productsContainer = document.getElementById("products-container");

// // 3. Reusable Function: Products ko render karne ka logic
// function displayProducts(filteredArray) {
//     // Pehle container ko khali karna taake purane products hat jayein
//     productsContainer.innerHTML = "";
    
//     // Agar koi product na mile (Safe check)
//     if (filteredArray.length === 0) {
//         productsContainer.innerHTML = `<div class="col-12 text-center my-5 text-white-50"><p>No products found in this category.</p></div>`;
//         return;
//     }

//     // Loop chala kar dynamic cards generate karna
//     for (var i = 0; i < filteredArray.length; i++) {
//         var product = filteredArray[i];

//         productsContainer.innerHTML += `
//             <div class="col">
//                 <div class="card h-100 border-0 bg-transparent product-card">
//                     <div class="img-wrapper shadow rounded">
//                         <img src="${product.image}" class="card-img-top w-100" alt="${product.name}">
//                         <div class="cart-overlay p-2">
//                             <button class="btn-custom-cart w-100 py-2.5 fw-medium text-uppercase btn shadow" 
//                                     onclick="addProductToCart('${product.name}', ${product.price})">
//                                 Add To Cart
//                             </button>
//                         </div>
//                     </div>
//                     <div class="card-body px-1 text-center mt-2">
//                         <span class="text-uppercase text-white-50 d-block mb-1 tracking-wider" style="font-size: 11px; opacity: 0.6;">${product.category}</span>
//                         <h5 class="card-title fs-6 fw-medium mb-1 text-white">${product.name}</h5>
//                         <p class="card-text fw-semibold" style="color: #bc9c22 !important;">$${product.price.toFixed(2)}</p>
//                     </div>
//                 </div>
//             </div>
//         `;
//     }
// }

// // 4. Initialization: Page load hotay hi default saare 32 products dikhana
// displayProducts(productsData);

// // 5. Main Filter Logic Function
// function filterProducts(categoryName, buttonElement) {
//     // Step A: Pehle saare filter buttons se 'active' class hatana
//     var filterButtons = document.querySelectorAll('.btn-outline-warning');
//     for (var j = 0; j < filterButtons.length; j++) {
//         filterButtons[j].classList.remove('active');
//     }
//     // Is wale select kiye huye button par 'active' class lagana
//     buttonElement.classList.add('active');

//     // Step B: Array filtering logic condition
//     if (categoryName === "All") {
//         // Agar 'All' hai to poora original array bhej do
//         displayProducts(productsData);
//     } else {
//         // Varna ek naya temporary array banao aur matching products daalo
//         var temporaryArray = [];
//         for (var k = 0; k < productsData.length; k++) {
//             if (productsData[k].category === categoryName) {
//                 temporaryArray.push(productsData[k]);
//             }
//         }
//         // Sirf filtered items ko screen par render karo
//         displayProducts(temporaryArray);
//     }
// }

// // 6. SweetAlert Cart Handler
// function addProductToCart(name, price) {
//     Swal.fire({
//         title: 'Added to Bag!',
//         html: `<span style="color: #bc9c22; font-weight: 600;">${name}</span> has been added to your shopping cart.<br><b style="color: #fff; display:block; margin-top:10px;">Amount: $${price.toFixed(2)}</b>`,
//         icon: 'success',
//         iconColor: '#bc9c22',
//         background: '#111111',
//         color: '#ffffff',
//         showConfirmButton: true,
//         confirmButtonText: 'Continue Shopping',
//         confirmButtonColor: '#bc9c22',
//         timer: 3000,
//         timerProgressBar: true,
//         customClass: {
//             popup: 'rounded-4 border border-secondary shadow-lg'
//         }
//     });
// }


// 2. HTML Container Targets
var productsContainer = document.getElementById("products-container");
var cartCountBadge = document.getElementById("cart-count");
var cartModalBody = document.getElementById("cart-modal-body");
var cartTotalBillContainer = document.getElementById("cart-total-bill");

// GLOBAL LIVE INVENTORY SYSTEM STATE ARRAY
var myCart = [];

// 3. Reusable Function: Products Display
function displayProducts(filteredArray) {
    productsContainer.innerHTML = "";
    if (filteredArray.length === 0) {
        productsContainer.innerHTML = `<div class="col-12 text-center my-5 text-white-50"><p>No products found in this category.</p></div>`;
        return;
    }

    for (var i = 0; i < filteredArray.length; i++) {
        var product = filteredArray[i];
        productsContainer.innerHTML += `
            <div class="col">
                <div class="card h-100 border-0 bg-transparent product-card">
                    <div class="img-wrapper shadow rounded">
                        <img src="${product.image}" class="card-img-top w-100" alt="${product.name}">
                        <div class="cart-overlay p-2">
                            <button class="btn-custom-cart w-100 py-2.5 fw-medium text-uppercase btn shadow" 
                                    onclick="addProductToCart(${product.id})">
                                Add To Cart
                            </button>
                        </div>
                    </div>
                    <div class="card-body px-1 text-center mt-2">
                        <span class="text-uppercase text-white-50 d-block mb-1 tracking-wider" style="font-size: 11px; opacity: 0.6;">${product.category}</span>
                        <h5 class="card-title fs-6 fw-medium mb-1 text-white">${product.name}</h5>
                        <p class="card-text fw-semibold" style="color: #bc9c22 !important;">$${product.price.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

// Initial Rendering load
displayProducts(productsData);

// 4. Filters Control Action
function filterProducts(categoryName, buttonElement) {
    var filterButtons = document.querySelectorAll('.btn-outline-warning');
    for (var j = 0; j < filterButtons.length; j++) {
        filterButtons[j].classList.remove('active');
    }
    buttonElement.classList.add('active');

    if (categoryName === "All") {
        displayProducts(productsData);
    } else {
        var temporaryArray = [];
        for (var k = 0; k < productsData.length; k++) {
            if (productsData[k].category === categoryName) {
                temporaryArray.push(productsData[k]);
            }
        }
        displayProducts(temporaryArray);
    }
}

// 5. Functional Add to Array Engine (Core Dynamic Logic)
function addProductToCart(productId) {
    // ID match kar k data se item dhoodhna
    var selectedItem = null;
    for (var x = 0; x < productsData.length; x++) {
        if (productsData[x].id === productId) {
            selectedItem = productsData[x];
            break;
        }
    }

    if (selectedItem) {
        // Real array system me pushing values
        myCart.push(selectedItem);
        
        // Navbar counter badge update karna
        cartCountBadge.innerText = myCart.length;
        cartCountBadge.style.display = "inline-block"; // hidden badge ko unhide karna

        // Custom SweetAlert Confirmation UI
        Swal.fire({
            title: 'Added to Bag!',
            html: `<span style="color: #bc9c22; font-weight: 600;">${selectedItem.name}</span> has been added to your shopping cart.`,
            icon: 'success',
            iconColor: '#bc9c22',
            background: '#111111',
            color: '#ffffff',
            showConfirmButton: false, // Pure seamless design optimization
            timer: 1500, // Quickly slides away
            timerProgressBar: true,
            customClass: { popup: 'rounded-4 border border-secondary' }
        });
    }
}

// 6. Dynamic Modal Loader Generation Engine (Jab shopping icon click hoga)
function updateCartModalUI() {
    cartModalBody.innerHTML = "";
    var totalBillAmount = 0;

    if (myCart.length === 0) {
        cartModalBody.innerHTML = `
            <div class="text-center py-4 text-white-50">
                <i class="fa-solid fa-basket-shopping display-4 mb-3 text-secondary"></i>
                <p class="small mb-0">Your shopping bag is completely empty.</p>
            </div>`;
        cartTotalBillContainer.innerText = "$0.00";
        return;
    }

    // Cart ke saare elements generate karna invoice layout pr
    for (var y = 0; y < myCart.length; y++) {
        var cartItem = myCart[y];
        totalBillAmount += cartItem.price;

        cartModalBody.innerHTML += `
            <div class="d-flex align-items-center justify-content-between cart-item-row">
                <div class="d-flex align-items-center gap-3">
                    <img src="${cartItem.image}" alt="${cartItem.name}" class="rounded border border-secondary" style="width: 55px; height: 55px; object-fit: cover;">
                    <div>
                        <h6 class="mb-0 small fw-medium text-white">${cartItem.name}</h6>
                        <small class="text-white-50" style="font-size:11px;">${cartItem.category}</small>
                    </div>
                </div>
                <div class="text-end">
                    <span class="fw-semibold text-warning" style="color: #bc9c22 !important;">$${cartItem.price.toFixed(2)}</span>
                </div>
            </div>
        `;
    }

    // Update Live billing calculations
    cartTotalBillContainer.innerText = "$" + totalBillAmount.toFixed(2);
}
// 7. Core Order Placement Management Engine
function handleOrderPlacement() {
    // Bootstrap Modal instances ko JavaScript se access karna taake close kiya ja sakay
    var checkoutModalEl = document.getElementById('checkoutModal');
    var modalInstance = bootstrap.Modal.getInstance(checkoutModalEl);
    modalInstance.hide(); // Form submit hotay hi modal close hojayega

    // Grand Luxury Order Confirmation Popup via SweetAlert2
    Swal.fire({
        title: 'Order Placed Successfully!',
        html: `Thank you for shopping with <span style="color: #bc9c22; font-weight: 600;">LUXE</span>.<br>Your premium dispatch package tracking logic will be sent via email shortly.`,
        icon: 'success',
        iconColor: '#bc9c22',
        background: '#111111',
        color: '#ffffff',
        showConfirmButton: true,
        confirmButtonText: 'Perfect',
        confirmButtonColor: '#bc9c22',
        customClass: {
            popup: 'rounded-4 border border-secondary shadow-lg'
        }
    }).then(function() {
        // Order complete hone ke baad system storage refresh (reset state management)
        myCart = [];
        cartCountBadge.innerText = 0;
        cartCountBadge.style.display = "none"; // Badge hidden again till next additions
        document.getElementById("checkoutForm").reset(); // Inputs data clean logic
    });
}