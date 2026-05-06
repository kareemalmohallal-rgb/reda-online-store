let cart = JSON.parse(localStorage.getItem("cart")) || [];

// عرض البيانات
function loadSummary(){
    let totalItems = document.getElementById("total_items");
    let totalPrice = document.getElementById("total_price");

    let sum = 0;

    cart.forEach(item => {
        sum += item.price;
    });

    totalItems.innerText = cart.length;
    totalPrice.innerText = sum;
}

// إرسال الطلب
document.getElementById("checkout_form").addEventListener("submit", function(e){
    e.preventDefault();

    if(cart.length === 0){
        alert("Cart is empty 🛒");
        return;
    }

    alert("Order placed successfully ✅");

    localStorage.removeItem("cart");

    window.location.href = "index.html";
});

// تشغيل
loadSummary();