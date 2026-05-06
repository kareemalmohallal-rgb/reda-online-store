
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// 🔥 إصلاح البيانات القديمة (مهم جداً)
cart = cart.map(item => {
    return {
        name: item.name,
        price: item.price,
        qty: item.qty ? item.qty : 1
    };
});

// =========================
// عرض السلة
// =========================
function renderCart(){

    let container = document.getElementById("cart_items");
    let total = document.getElementById("total_price");

    container.innerHTML = "";

    let sum = 0;

    if(cart.length === 0){
        container.innerHTML = "<p>Cart is empty 🛒</p>";
        total.innerText = 0;
        return;
    }

    cart.forEach((item, index) => {

        let qty = item.qty || 1;
        let itemTotal = item.price * qty;

        sum += itemTotal;

        container.innerHTML += `
            <div class="cart_item">

                <div>
                    <h4>${item.name}</h4>
                    <p>$${item.price} x ${qty} = $${itemTotal}</p>
                </div>

                <div class="qty_box">

                    <button onclick="increaseQty(${index})">+</button>

                    <span>${qty}</span>

                    <button onclick="decreaseQty(${index})">-</button>

                </div>

                <button class="remove_btn" onclick="removeItem(${index})">
                    Remove
                </button>

            </div>
        `;
    });

    total.innerText = sum;
}

// =========================
// زيادة الكمية
// =========================
function increaseQty(index){
    cart[index].qty = (cart[index].qty || 1) + 1;
    saveCart();
}

// =========================
// تقليل الكمية
// =========================
function decreaseQty(index){

    cart[index].qty = (cart[index].qty || 1) - 1;

    if(cart[index].qty <= 0){
        cart.splice(index, 1);
    }

    saveCart();
}

// =========================
// حذف منتج
// =========================
function removeItem(index){
    cart.splice(index, 1);
    saveCart();
}

// =========================
// حفظ
// =========================
function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

// =========================
// تفريغ السلة
// =========================
function clearCart(){
    cart = [];
    saveCart();
}

// =========================
// تحديث العداد
// =========================
function updateCartCount(){

    let count = document.getElementById("cart_count");

    if(count){

        let totalItems = 0;

        cart.forEach(item => {
            totalItems += (item.qty || 1);
        });

        count.innerText = totalItems;
    }
}
function goToCheckout(){
    window.location.href = "checkout.html";
}

// =========================
// تشغيل
// =========================
renderCart();
updateCartCount();