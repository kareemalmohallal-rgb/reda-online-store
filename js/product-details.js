
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// نفس منتجاتك (لازم تكون نفس الموجودة في صفحة المنتجات)
const products = [
    {
        name: "Smart Watch",
        price: 50,
        image: "img/banner_box1.jpg",
        description: "Modern smart watch with health tracking, notifications and long battery life."
    },
    {
        name: "Headphones",
        price: 30,
        image: "img/banner_box2.jpg",
        description: "High quality sound headphones with deep bass and noise isolation."
    },
    {
        name: "Phone",
        price: 200,
        image: "img/banner_box3.jpg",
        description: "Latest smartphone with fast performance and high resolution camera."
    },
    {
        name: "Jacket",
        price: 120,
        image: "img/banner_box4.jpg",
        description: "Stylish jacket made with premium material for winter fashion."
    }
];

// جلب اسم المنتج من الرابط
let urlParams = new URLSearchParams(window.location.search);
let productName = urlParams.get("name");

// عرض التفاصيل
function showProduct(){

    let product = products.find(p => p.name === productName);

    let box = document.getElementById("product_detail_box");

    if(!product){
        box.innerHTML = "<h2>Product not found ❌</h2>";
        return;
    }

    box.innerHTML = `
        <div class="detail_box">

            <img src="${product.image}">

            <div class="detail_info">

                <h2>${product.name}</h2>
                <p>${product.description}</p>

                <h3>$${product.price}</h3>

                <div class="detail_buttons">

                    <button class="cart_btn"
                        onclick="addToCart('${product.name}', ${product.price})">
                        🛒 Add to Cart
                    </button>

                    

                    <button class="back_btn"
                        onclick="goBack()">
                        ⬅ Back
                    </button>

                </div>

            </div>

        </div>
    `;
}

// إضافة للسلة
function addToCart(name, price){

    cart.push({name, price});

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " added to cart 🛒");
}

// شراء مباشر (يروح للسلة)
function buyNow(name, price){

    addToCart(name, price);

    window.location.href = "cart.html";
}

// الرجوع
function goBack(){
    window.history.back();
}

// تحديث عداد السلة
function updateCartCount(){

    let count = document.getElementById("cart_count");

    if(count){
        count.innerText = cart.length;
    }
}

// تشغيل
showProduct();
updateCartCount();