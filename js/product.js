
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const products = [
    {
        name: "Smart Watch",
        price: 50,
        image: "img/banner_box1.jpg",
        category: "Electronics"
    },
    {
        name: "Headphones",
        price: 30,
        image: "img/banner_box2.jpg",
        category: "Electronics"
    },
    {
        name: "Phone",
        price: 200,
        image: "img/banner_box3.jpg",
        category: "Phones"
    },
    {
        name: "Jacket",
        price: 120,
        image: "img/banner_box4.jpg",
        category: "Fashion"
    }
];

let currentProducts = products;

// =========================
// عرض المنتجات
// =========================
function displayProducts(list){

    let container = document.getElementById("products_container");

    if(!container) return;

    container.innerHTML = "";

    list.forEach(product => {

        container.innerHTML += `
            <div class="product_card" onclick="openProduct('${product.name}')">

                <img src="${product.image}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>

                <div class="product_buttons">

                    <button class="cart_btn"
                        onclick="event.stopPropagation(); addToCart('${product.name}', ${product.price})">
                        🛒 Add to Cart
                    </button>

                    <button class="details_btn"
                        onclick="event.stopPropagation(); openProduct('${product.name}')">
                        👁 View
                    </button>

                </div>

            </div>
        `;
    });
}

// =========================
// فتح صفحة التفاصيل
// =========================
function openProduct(name){
    window.location.href = "product-details.html?name=" + encodeURIComponent(name);
}

// =========================
// فلترة المنتجات
// =========================
function filterProducts(category){

    if(category === "all"){
        currentProducts = products;
    }else{
        currentProducts = products.filter(p => p.category === category);
    }

    displayProducts(currentProducts);
}

// =========================
// البحث
// =========================
let searchInput = document.getElementById("search_input");

if(searchInput){
    searchInput.addEventListener("input", function(){

        let value = this.value.toLowerCase();

        let filtered = currentProducts.filter(product =>
            product.name.toLowerCase().includes(value)
        );

        displayProducts(filtered);
    });
}

// =========================
// إضافة للسلة
// =========================
function addToCart(name, price){

    cart.push({name, price});

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " added to cart 🛒");
}

// =========================
// تحديث عداد السلة
// =========================
function updateCartCount(){

    let count = document.getElementById("cart_count");

    if(count){
        count.innerText = cart.length;
    }
}

// =========================
// تشغيل أول مرة
// =========================
displayProducts(products);
updateCartCount();