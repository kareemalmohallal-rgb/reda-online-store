
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// =========================
// تحديث عدد السلة (بالكميات)
// =========================
function updateCartCount(){

    let count = document.getElementById("cart_count");

    if(count){

        let totalItems = 0;

        cart.forEach(item => {
            totalItems += item.qty || 1;
        });

        count.innerText = totalItems;
    }
}

// =========================
// إضافة للسلة
// =========================
function addToCart(name, price){

    let existing = cart.find(item => item.name === name);

    if(existing){
        existing.qty = (existing.qty || 1) + 1;
    }else{
        cart.push({
            name: name,
            price: price,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " added to cart 🛒");
}

// =========================
// البحث داخل المنتجات (احترافي)
// =========================
document.addEventListener("DOMContentLoaded", function(){

    let searchInput = document.getElementById("search_input");

    if(!searchInput) return;

    searchInput.addEventListener("input", function(){

        let value = this.value.toLowerCase();

        let products = document.querySelectorAll(".product_card");

        products.forEach(product => {

            let nameEl = product.querySelector("h3");

            if(!nameEl) return;

            let name = nameEl.innerText.toLowerCase();

            if(name.includes(value)){
                product.style.display = "block";
            }else{
                product.style.display = "none";
            }

        });

    });

});

const products = [
    { name: "Smart Watch", price: 50, image: "img/banner3_1.png" },
    { name: "Headphones", price: 30, image: "img/banner3_2.png" },
    { name: "Phone", price: 200, image: "img/banner3_3.png" }
];

let searchInput = document.getElementById("search_input");
let resultsBox = document.getElementById("search_results");

// بحث مباشر
searchInput.addEventListener("input", function(){

    let value = this.value.toLowerCase();

    if(value === ""){
        resultsBox.style.display = "none";
        return;
    }

    let filtered = products.filter(p =>
        p.name.toLowerCase().includes(value)
    );

    resultsBox.innerHTML = "";

    filtered.forEach(product => {

        resultsBox.innerHTML += `
            <div class="search_item" onclick="openProduct('${product.name}')">
                <img src="${product.image}">
                <div>
                    <h4>${product.name}</h4>
                    <p>$${product.price}</p>
                </div>
            </div>
        `;
    });

    resultsBox.style.display = "flex";
});

// فتح المنتج
function openProduct(name){
    window.location.href = "product-details.html?name=" + name;
}

// إغلاق عند الضغط خارج
document.addEventListener("click", function(e){

    if(!e.target.closest(".search_box") &&
       !e.target.closest("#search_results")){
        resultsBox.style.display = "none";
    }

});



// =========================
// تشغيل أول مرة
// =========================
updateCartCount();