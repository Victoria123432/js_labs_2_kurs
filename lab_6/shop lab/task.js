// task.js

let products = []

function renderProducts() {
	const productList = document.getElementById('product-list')
	const searchText = document.getElementById('searchInput').value.toLowerCase()

	const filteredProducts = products.filter(p =>
		p.name.toLowerCase().includes(searchText),
	)

	productList.innerHTML = ''

	filteredProducts.forEach((product, index) => {
		const productItem = document.createElement('li')
		productItem.classList.add('visible')
		productItem.innerHTML = `
		<img src="${product.image}" alt="${product.name}" class="product-img">
		<h2 class="lfs">${product.name}</h2>
		<p class="lfs">Ціна: $${product.price}</p>
		<div class="product-menu">
		  <button class="edit-btn" onclick="editProduct(${index})">Редагувати</button>
		  <button class="delete-btn" onclick="removeProduct(${index})">Видалити</button>
		</div>
	  `

		productList.appendChild(productItem)
	})

	calculateTotalPrice()
}

function addProduct(name, price, image) {
	products.push({ name, price: parseFloat(price), image })
	saveProductsToLocalStorage() // Зберігаємо оновлені дані у локальному сховищі
	renderProducts()
}

function removeProduct(index) {
	const taskList = document.getElementById('product-list')
	const taskItem = taskList.children[index]

	taskItem.classList.remove('visible')
	taskItem.classList.add('unvisible')

	setTimeout(() => {
		products.splice(index, 1)
		saveProductsToLocalStorage() // Зберігаємо оновлені дані у локальному сховищі
		renderProducts()
	}, 400)
}

function editProduct(index) {
	const product = products[index]

	document.getElementById('product-name').value = product.name
	document.getElementById('product-price').value = product.price

	const editForm = document.getElementById('edit-form')
	editForm.style.display = 'block'

	document.getElementById('save-btn').innerText = 'Зберегти' // Змінюємо текст кнопки на "Зберегти"

	document.getElementById('save-btn').onclick = () => {
		const name = document.getElementById('product-name').value.trim()
		const price = document.getElementById('product-price').value.trim()
		const imageInput = document.getElementById('product-image-upload')
		const imageFile = imageInput.files[0] // Отримуємо перший вибраний файл
		if (name && price) {
			if (imageFile) {
				const imageUrl = URL.createObjectURL(imageFile)
				products[index].image = imageUrl
			}
			products[index].name = name
			products[index].price = parseFloat(price)
			saveProductsToLocalStorage() // Зберігаємо оновлені дані у локальному сховищі
			editForm.style.display = 'none'
			renderProducts()
		} else {
			alert('Будь ласка, заповніть усі поля')
		}
	}

	document.getElementById('cancel-btn').onclick = () => {
		editForm.style.display = 'none'
	}
}

function calculateTotalPrice() {
	const totalPrice = products.reduce((acc, p) => acc + p.price, 0)
	document.getElementById(
		'totalPriceText',
	).innerText = `Загальна вартість: $${totalPrice}`
}

function saveProductsToLocalStorage() {
	localStorage.setItem('products', JSON.stringify(products))
}

function loadProductsFromLocalStorage() {
	const savedProducts = localStorage.getItem('products')
	if (savedProducts) {
		products = JSON.parse(savedProducts)
	}
}

// Event listener for adding a new product
document.getElementById('add-item-btn').addEventListener('click', () => {
	document.getElementById('product-name').value = ''
	document.getElementById('product-price').value = ''
	document.getElementById('product-image-upload').value = '' // Очищаємо поле вводу файлу
	document.getElementById('edit-form').style.display = 'block'
	document.getElementById('save-btn').innerText = 'Додати' // Змінюємо текст кнопки на "Додати"

	document.getElementById('save-btn').onclick = () => {
		const name = document.getElementById('product-name').value.trim()
		const price = document.getElementById('product-price').value.trim()
		const imageInput = document.getElementById('product-image-upload')
		const imageFile = imageInput.files[0] // Отримуємо перший вибраний файл
		if (name && price && imageFile) {
			const imageUrl = URL.createObjectURL(imageFile)
			addProduct(name, price, imageUrl)
			document.getElementById('edit-form').style.display = 'none'
		} else {
			alert('Будь ласка, заповніть усі поля і виберіть зображення')
		}
	}

	document.getElementById('cancel-btn').onclick = () => {
		document.getElementById('edit-form').style.display = 'none'
	}
})

document.getElementById('searchInput').addEventListener('input', renderProducts)

// Викликаємо функцію завантаження даних при ініціалізації
loadProductsFromLocalStorage()

// Initial render
renderProducts()
