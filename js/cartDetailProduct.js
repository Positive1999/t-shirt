var container = document.getElementById("cart-item-list");

function renderCartItems() {
  container.innerHTML = ""; // Xóa các sản phẩm hiện tại trên giao diện trước khi render lại

  var productsData = sessionStorage.getItem("cartItems");
  var products = JSON.parse(productsData);

  products.forEach(function(product, index) {
    var productDiv = document.createElement("div");
    productDiv.classList.add('productItem');

    var productName = document.createElement("span");
    var productImage = document.createElement("img");
    var productPrice = document.createElement("p");
    var productRemove = document.createElement("button");

    productName.textContent = product.name;
    productImage.src = product.image;
    productPrice.textContent = product.price;
    productRemove.textContent = 'Delete product';

    // Thêm sự kiện nghe cho nút "Delete product"
    productRemove.addEventListener('click', function() {
      // Xóa sản phẩm khỏi giao diện
      container.removeChild(productDiv);
      // Xóa sản phẩm khỏi sessionStorage
      products.splice(index, 1);
      sessionStorage.setItem("cartItems", JSON.stringify(products));
    });

    productDiv.appendChild(productName);
    productDiv.appendChild(productImage);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productRemove);

    container.appendChild(productDiv);
  });
}

renderCartItems();
