function updateMemory8GB() {
    let memory8GB = 0;
    console.log(memory8GB);
    const memoryAmount8GB = document.getElementById('memory-cost');
    memoryAmount8GB.innerText = memory8GB;
}

document.getElementById('memory-small').addEventListener('click',
    function () {
        updateMemory8GB();
        calculateTotalPrice();
        grandTotalPrice();
    })


function updateMemory64GB() {
    let memory64GB = 180;
    console.log(memory64GB);
    const memoryAmount64GB = document.getElementById('memory-cost');
    memoryAmount64GB.innerText = memory64GB;
}

document.getElementById('memory-large').addEventListener('click',
    function () {
        updateMemory64GB();
        calculateTotalPrice();
        grandTotalPrice();
    })



//storage256GB

function updateStorage256GB() {
    let storage256GB = 0;
    console.log(storage256GB);
    const storageAmount256GB = document.getElementById('storage-cost');
    storageAmount256GB.innerText = storage256GB;
}

document.getElementById('storage-256GB').addEventListener('click',
    function () {
        updateStorage256GB();
        calculateTotalPrice();
        grandTotalPrice();
    })

//storage512GB

function updateStorage512GB() {
    let storage512GB = 100;
    console.log(storage512GB);
    const storageAmount512GB = document.getElementById('storage-cost');
    storageAmount512GB.innerText = storage512GB;
}

document.getElementById('storage-512GB').addEventListener('click',
    function () {
        updateStorage512GB();
        calculateTotalPrice();
        grandTotalPrice();
    })

//storage1TB

function updateStorage1TB() {
    let storage1TB = 180;
    console.log(storage1TB);
    const storageAmount1TB = document.getElementById('storage-cost');
    storageAmount1TB.innerText = storage1TB;
}

document.getElementById('storage-1TB').addEventListener('click',
    function () {
        updateStorage1TB();
        calculateTotalPrice();
        grandTotalPrice();
    })

//deliveryfree

function updatedeliveryFree() {
    let deliveryfree = 0;
    console.log(deliveryfree);
    const deliveryFree = document.getElementById('delivery-cost');
    deliveryFree.innerText = deliveryfree;
}

document.getElementById('delivery-free').addEventListener('click',
    function () {
        updatedeliveryFree();
        calculateTotalPrice();
        grandTotalPrice();
    })

//deliveryfee

function updatedeliveryFee() {
    let deliveryfee = 20;
    console.log(deliveryfee);
    const deliveryFee = document.getElementById('delivery-cost');
    deliveryFee.innerText = deliveryfee;
}

document.getElementById('delivery-fee').addEventListener('click',
    function () {
        updatedeliveryFee();
        calculateTotalPrice();
        grandTotalPrice();
    })

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;

}
//ucalculateTotalPrice();
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

// function GrandTotalAmount() {
//     const grandTotal = document.getElementById('grand-price');
//     const grandTotalCost = (grandTotal.value);
//     console.log(grandTotalCost);
// }

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
})