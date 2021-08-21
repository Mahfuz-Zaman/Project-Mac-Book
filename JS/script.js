const eightGbMemory = document.getElementById('memoryButton-8Gb');
const sixteenGbMemory = document.getElementById('memoryButton-16Gb');

const extraMemoryCost = document.getElementById('memory-price');

const storage256Gb = document.getElementById('storageButton-256GB');
const storage512Gb = document.getElementById('storageButton-512GB');
const storage1Tb = document.getElementById('storageButton-1TB');

const extraStorageCost = document.getElementById('storage-price');

const deliveryFree = document.getElementById('deliveryFree-button');
const deliveryCharge = document.getElementById('deliveryCharge-button');

const deliveryCost = document.getElementById('delivery-price');

const bestPrice = document.getElementById('best-price');
const totalPrice = document.getElementById('total-price');

const totalLastBalance = document.getElementById('totalLast-balance');

// --------------------------------------------------------------------------
//Update-Memory
function memoryUpdate(isClick) {
    if (isClick == true) {
        extraMemoryCost.innerText = '0';
    }
    else {
        extraMemoryCost.innerText = '180';
    }
}
eightGbMemory.addEventListener('click', function () {
    memoryUpdate(true);
    updateTotal()
})
sixteenGbMemory.addEventListener('click', function () {
    memoryUpdate(false);
    updateTotal();
})
storage256Gb.addEventListener('click', function () {
    extraStorageCost.innerText = '0';
    updateTotal()
})
storage512Gb.addEventListener('click', function () {
    extraStorageCost.innerText = '100';
    updateTotal()
})
storage1Tb.addEventListener('click', function () {
    extraStorageCost.innerText = '180';
    updateTotal()
})
// --------------------------------------------------------------------------
//Update Delivery

function updateDelivery(isClick) {
    if (isClick == true) {
        deliveryCost.innerText = '0';
    }
    else {
        deliveryCost.innerText = '20';
    }
}
deliveryFree.addEventListener('click', function () {
    updateDelivery(true);
    updateTotal()
})
deliveryCharge.addEventListener('click', function () {
    updateDelivery(false);
    updateTotal()
})
// --------------------------------------------------------------------------
//Update Total
function updateTotal() {
    document.getElementById('apply-button').disabled = false;
    let total = parseInt(bestPrice.innerText) + parseInt(extraMemoryCost.innerText) + parseInt(extraStorageCost.innerText) + parseInt(deliveryCost.innerText);
    totalPrice.innerText = total;
    totalLastBalance.innerText = total;

}
// --------------------------------------------------------------------------
// promo section 
function promoVerify() {

    const promo = document.getElementById('promo-input');
    if (promo.value == 'stevekaku') {
        let totalBalance = parseInt(document.getElementById('totalLast-balance').innerText);
        let total = totalBalance - totalBalance * 0.2;
        document.getElementById('totalLast-balance').innerText = total;
        promo.value = '';
        document.getElementById('apply-button').disabled = true;
    }
    else {
        alert("your Promo code is Incorrect")
        promo.value = '';
    }

}
