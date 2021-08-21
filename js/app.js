//Product Price
function productPrice(priceId, price) {
    const extraProduct = document.getElementById(priceId);
    extraProduct.innerText = price;
    totalPrice()
};

//Total Price 
function totalPrice() {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCharge = document.getElementById('delivery-charge').innerText;
    const totalPrice = document.getElementById('total-price');
    const discountPrice = document.getElementById('discount-price');
    totalPrice.innerText = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCharge);
    discountPrice.innerText = totalPrice.innerText;
}

//Memory
const memoryEight = document.getElementById('memory-eight');
const memorySixteen = document.getElementById('memory-sixteen');
memoryEight.addEventListener('click', function () {
    productPrice('memory-cost', 0)
});
memorySixteen.addEventListener('click', function () {
    productPrice('memory-cost', 180)
});

//Storage
const storage256 = document.getElementById('storage-256');
const storage512 = document.getElementById('storage-512');
const storage1Tb = document.getElementById('storage-1Tb');
storage256.addEventListener('click', function () {
    productPrice('storage-cost', 0)
});
storage512.addEventListener('click', function () {
    productPrice('storage-cost', 100)
});
storage1Tb.addEventListener('click', function () {
    productPrice('storage-cost', 180)
});

// Delivery
const freeDelivery = document.getElementById('free-delivery');
const expressDelivery = document.getElementById('express-delivery');
freeDelivery.addEventListener('click', function () {
    productPrice('delivery-charge', 0)
});
expressDelivery.addEventListener('click', function () {
    productPrice('delivery-charge', 20)
});

//Promo Code Verification
document.getElementById('promo-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const totalPrice = document.getElementById('total-price').innerText;
    const discount = parseInt(totalPrice) * 0.2;
    const discountPrice = document.getElementById('discount-price');
    if (promoInput.value == 'stevekaku') {
        discountPrice.innerText = parseInt(totalPrice) - discount;
    } else {
        discountPrice.innerText = parseInt(totalPrice);
    }
    promoInput.value = '';
});