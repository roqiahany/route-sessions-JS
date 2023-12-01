//cruds // create retrive update delete search
var productNameInput = document.getElementById('ProductName');
var ProductPriceInput = document.getElementById('ProductPrice');
var ProductCategoryInput = document.getElementById('ProductCategory');
var ProductDescInput = document.getElementById('ProductDesc');
var addBtn = document.getElementById('addBtn');
var updateBtn = document.getElementById('updateBtn');
var updateIndex = 0;

var productsContainer = [];

if (localStorage.getItem('products') != null) {
  productsContainer = JSON.parse(localStorage.getItem('products'));
  displayProduct(productsContainer);
}

function getProduct() {
  if (validateProductName() == true) {
    if ((addBtn.innerHTML = 'Add product')) {
      var product = {
        name: productNameInput.value,
        price: ProductPriceInput.value,
        category: ProductCategoryInput.value,
        desc: ProductDescInput.value,
      };
      productsContainer.push(product);
      localStorage.setItem('products', JSON.stringify(productsContainer));
      displayProduct(productsContainer);

      // clearForm();
    } else {
      updateData();
    }
  } else {
    alert('product Name is not valid');
  }
}

//arr =>productsContainer
function displayProduct(arr) {
  var cartona = ``;
  for (var i = 0; i < arr.length; i++) {
    cartona += ` <tr>
   <td id="test" class=''>${arr[i].name}</td>
   <td id="test"  class=''>${arr[i].price}</td>
   <td id="test"  class=''>${arr[i].category}</td>
   <td id="test"  class=''>${arr[i].desc}</td>
   <td>
     <button class="btn btn-outline-warning btn-sm" onclick="setFormBtn(${i})" >Update</button>
   </td>
   <td>
     <button class="btn btn-outline-danger btn-sm" onclick='deleteProduct(${i})'>delete</button>
   </td>
 </tr>`;
  }

  document.getElementById('tableBody').innerHTML = cartona;
}

function clearForm() {
  productNameInput.value = '';
  ProductPriceInput.value = '';
  ProductCategoryInput.value = '';
  ProductDescInput.value = '';
}

function deleteProduct(productIndex) {
  productsContainer.splice(productIndex, 1);
  localStorage.setItem('products', JSON.stringify(productsContainer));
  displayProduct(productsContainer);
}

function searchProducts(term) {
  var matchedProducts = [];

  for (var i = 0; i < productsContainer.length; i++) {
    if (
      productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) ===
      true
    ) {
      matchedProducts.push(productsContainer[i]);
    }
  }

  displayProduct(matchedProducts);
}

function setFormBtn(i) {
  // addBtn.classList.replace('d-block', 'd-none');
  // updateBtn.classList.replace('d-none', 'd-block');
  updateIndex = i;
  productNameInput.value = productsContainer[i].name;
  ProductCategoryInput.value = productsContainer[i].category;
  ProductDescInput.value = productsContainer[i].desc;
  ProductPriceInput.value = productsContainer[i].price;
  addBtn.innerHTML = 'update';
}

function updateData(updateIndex) {
  var updatedProduct = {
    name: productNameInput.value,
    price: ProductPriceInput.value,
    category: ProductCategoryInput.value,
    desc: ProductDescInput.value,
  };
  productsContainer.splice(updateIndex, 1, updatedProduct);
  displayProduct();
  localStorage.setItem('products', JSON.stringify(productsContainer));
  addBtn.innerHTML = 'Add product';
}

function validateProductName() {
  var regex = /^[A-Z][a-z]{3,8}$/;
  return regex.test(productNameInput.value) == true;
}
