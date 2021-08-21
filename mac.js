//memory8GB
function updateMemory8GB() {
    let memory8GB = 0;
    const memoryAmount8GB = document.getElementById('memory-cost');
    memoryAmount8GB.innerText = memory8GB;
}

document.getElementById('memory-small').addEventListener('click',
    function () {
        updateMemory8GB();
        calculateTotalPrice();
    })

//memory16GB
function updateMemory16GB() {
    let memory16GB = 180;
    const memoryAmount16GB = document.getElementById('memory-cost');
    memoryAmount16GB.innerText = memory16GB;
}
document.getElementById('memory-large').addEventListener('click',
    function () {
        updateMemory16GB();
        calculateTotalPrice();
    })

//storage256GB
function updateStorage256GB() {
    let storage256GB = 0;
    const storageAmount256GB = document.getElementById('storage-cost');
    storageAmount256GB.innerText = storage256GB;
}

document.getElementById('storage-256GB').addEventListener('click',
    function () {
        updateStorage256GB();
        calculateTotalPrice();
    })

//storage512GB

function updateStorage512GB() {
    let storage512GB = 100;
    const storageAmount512GB = document.getElementById('storage-cost');
    storageAmount512GB.innerText = storage512GB;
}

document.getElementById('storage-512GB').addEventListener('click',
    function () {
        updateStorage512GB();
        calculateTotalPrice();
    })

//storage1TB

function updateStorage1TB() {
    let storage1TB = 180;
    const storageAmount1TB = document.getElementById('storage-cost');
    storageAmount1TB.innerText = storage1TB;
}

document.getElementById('storage-1TB').addEventListener('click',
    function () {
        updateStorage1TB();
        calculateTotalPrice();
    })

//deliveryfree
function updatedeliveryFree() {
    let deliveryfree = 0;
    const deliveryFree = document.getElementById('delivery-cost');
    deliveryFree.innerText = deliveryfree;
}

document.getElementById('delivery-free').addEventListener('click',
    function () {
        updatedeliveryFree();
        calculateTotalPrice();
    })

//deliveryfee

function updatedeliveryFee() {
    let deliveryfee = 20;
    const deliveryFee = document.getElementById('delivery-cost');
    deliveryFee.innerText = deliveryfee;
}

document.getElementById('delivery-fee').addEventListener('click',
    function () {
        updatedeliveryFee();
        calculateTotalPrice();
    })

//calculateTotalPrice();
function calculateTotalPrice() {
    const memory = document.getElementById('memory-cost');
    const memoryCost = parseInt(memory.innerText);
    const storage = document.getElementById('storage-cost');
    const storageCost = parseInt(storage.innerText);
    const delivery = document.getElementById('delivery-cost');
    const deliveryCost = parseInt(delivery.innerText);


    const Total = memoryCost + storageCost + deliveryCost + 1299;
    console.log(Total);
    document.getElementById('total-price').innerText = Total;
    GrandTotalAmount();

}
//footer calculation
function GrandTotalAmount() {


    const grandTotal = document.getElementById('total-price');
    const grandTotalCost = (grandTotal.innerText);
    const Total = grandTotalCost;
    document.getElementById('grand-price').innerText = Total;

}


// promo code 
document.getElementById('promo-button').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const input = promoInput.value;


    if (input == 'stevekaku') {
        console.log('valid');
    }
    else if (input != 'stevekaku')
        console.log('invalid');

})