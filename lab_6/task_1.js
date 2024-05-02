const editForm = document.getElementById("edit-form");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const productImageInput = document.getElementById("product-image");
const saveBtn = document.getElementById("save-btn");
const cancelBtn = document.getElementById("cancel-btn");

const searchInput = document.querySelector(".searchTerm");
const productList = document.getElementById("product-list");
const totalPprice = document.querySelector(".totalPprice p");

document.getElementById("product-list").addEventListener("click", function (event) {
  if (event.target.classList.contains("edit-btn")) {
      const selectedItem = event.target.closest("li");
      selectedItem.classList.add("selected");
      const productName = selectedItem.querySelector("h2").textContent;
      const productPrice = selectedItem.querySelector("p").textContent.replace("Ціна: $", "");
      const productImage = selectedItem.querySelector(".product-img").src;

      productNameInput.value = productName;
      productPriceInput.value = productPrice;
      productImageInput.value = "";

      editForm.dataset.itemId = selectedItem.dataset.itemId;
      editForm.style.display = "block";
  }

  if (event.target.classList.contains("delete-btn")) {
      event.stopPropagation();
      event.target.closest("li").remove();
  }
});

document.getElementById("add-item-btn").addEventListener("click", function () {
  productNameInput.value = "";
  productPriceInput.value = "";
  productImageInput.value = "";
  editForm.style.display = "block";
});

saveBtn.addEventListener("click", function () {
  const productName = productNameInput.value;
  const productPrice = productPriceInput.value;
  const productImage = productImageInput.files[0]; // Get the selected file

  if (document.querySelector(".selected")) {
      const selectedItem = document.querySelector(".selected");
      const productNameElem = selectedItem.querySelector("h2");
      const productPriceElem = selectedItem.querySelector("p");
      const productImageElem = selectedItem.querySelector(".product-img");

      productNameElem.textContent = productName;
      productPriceElem.textContent = "Ціна: $" + productPrice;

      // If a new image is selected, update the product image
      if (productImage) {
          const reader = new FileReader(); // Create a file reader object
          reader.onload = function() {
              productImageElem.src = reader.result; // Set the image data as the source of the product image element
          };
          reader.readAsDataURL(productImage); // Read the selected file as a data URL
      }
      selectedItem.classList.remove("selected");
  } else {
      const productList = document.getElementById("product-list");
      const lastItem = productList.lastElementChild;
      const newItem = document.createElement("li");

      const reader = new FileReader(); // Create a file reader object
      reader.onload = function() {
          const newItemHTML = `
              <img src="${reader.result}" alt="${productName}" class="product-img">
              <h2>${productName}</h2>
              <p>Ціна: $${productPrice}</p>
              <div class="product-menu">
                  <button class="edit-btn">Редагувати</button>
                  <button class="delete-btn">Видалити</button>
              </div>
          `;
          newItem.innerHTML = newItemHTML;
          productList.insertBefore(newItem, lastItem);
      };
      reader.readAsDataURL(productImage); // Read the selected file as a data URL
  }

  editForm.style.display = "none";
});

cancelBtn.addEventListener("click", function () {
  editForm.style.display = "none";
});


searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();
    const items = productList.querySelectorAll("li");

    items.forEach(function (item) {
        const itemName = item.querySelector("h2").textContent.toLowerCase();
        if (itemName.includes(searchTerm)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});
