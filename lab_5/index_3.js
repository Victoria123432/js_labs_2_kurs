
let productMap = new Map();
const productSet = new Set(); 
let productWeakMap = new WeakMap(); 

function addItem() {
    const name = document.getElementById('name').value.trim();
    const price = parseFloat(document.getElementById('price').value);
    const amount = parseInt(document.getElementById('amount').value);

    if (name && !isNaN(price) && !isNaN(amount)) {
        let exists = false;
        for (let product of productMap.values()) {
            if (product.name.toLowerCase() === name.toLowerCase()) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            const productId = productMap.size + 1;
            const product = {
                id: productId,
                name,
                price,
                amount
            };

            productMap.set(productId, product);
            productSet.add(productId);
            productWeakMap.set(product, { dateAdded: new Date() });

            alert("Товар додано з ID: " + productId);
        } else {
            alert('Продукт з такою назвою вже існує!');
        }
    } else {
        alert('Будь ласка, заповніть усі поля коректно!');
    }
}


function deleteItem() {
    const productId = parseInt(document.getElementById('productId').value);
    if (productMap.has(productId)) {
        const product = productMap.get(productId);
        productMap.delete(productId);
        productSet.delete(productId);
        productWeakMap.delete(product);
        alert('Продукт з ID ' + productId + ' було видалено.');
    } else {
        alert('Продукту з таким ID не існує.');
    }
}

function updateItem() {
    const productId = parseInt(document.getElementById('updateId').value);
    const newPrice = parseFloat(document.getElementById('updatePrice').value);
    const newAmount = parseInt(document.getElementById('updateAmount').value);

    if (productMap.has(productId)) {
        if (!isNaN(newPrice) && !isNaN(newAmount)) {
            const product = productMap.get(productId);
            product.price = newPrice;
            product.amount = newAmount;
            alert('Продукт з ID ' + productId + ' було оновлено.');
        } else {
            alert('Будь ласка, введіть коректні нову ціну та кількість.');
        }
    } else {
        alert('Продукту з таким ID не існує.');
    }
}

function searchItemByName() {
    const searchName = document.getElementById('searchName').value.trim().toLowerCase();
    let found = false;

    for (let product of productMap.values()) {
        if (product.name.toLowerCase() === searchName) {
            alert(`Продукт знайдено: ID - ${product.id}, Назва - ${product.name}, Ціна - ${product.price}, Кількість - ${product.amount}`);
            found = true;
            break; 
        }
    }

    if (!found) {
        alert('Продукт з такою назвою не знайдено.');
    }
}


let orders = []; 

function placeOrder() {
    const productId = parseInt(document.getElementById('orderProductId').value);
    const quantity = parseInt(document.getElementById('orderQuantity').value);

    if (productMap.has(productId) && !isNaN(quantity)) {
        const product = productMap.get(productId);

        if (product.amount >= quantity) {
            
            product.amount -= quantity;

            const order = {
                orderId: orders.length + 1,
                productId: productId,
                quantity: quantity
            };
            orders.push(order);

            alert(`Замовлення оформлено: ID товару ${productId}, кількість ${quantity}. Залишок на складі: ${product.amount}`);
        } else {
            alert('На складі недостатньо товару для оформлення цього замовлення.');
        }
    } else {
        alert('Переконайтеся, що ви ввели правильний ID товару і кількість.');
    }
}

