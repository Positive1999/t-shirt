var container = document.getElementById("cart-item-list");
var totalPrice = document.getElementById("totalPrice");
var bookProducts = document.getElementById("bookProducts");

function renderCartItems() {
  var productsData = sessionStorage.getItem("cartItems");
  var products = JSON.parse(productsData);
  var total = 0; // Tổng đơn hàng

  if (products && products.length > 0) {
    products.forEach(function (product, index) {
      var productDiv = document.createElement("div");
      productDiv.classList.add("productItem", "row");

      var productImage = document.createElement("img");
      productImage.classList.add("col-sx-12", "col-sm-12", "col-md-6", "col-lg-6");

      var infoProduct = document.createElement('div');
      infoProduct.classList.add("col-sx-12", "col-sm-12", "col-md-6", "col-lg-6");

      var productName = document.createElement("h5");
      var productQuantity = document.createElement("input");
      var productPrice = document.createElement("p");
      var productRemove = document.createElement("button");

      productName.textContent = product.name;
      productQuantity.placeholder = "Số lượng ...";
      productImage.src = product.image;
      productPrice.textContent = product.price;

      // Chuyển đổi giá trị của sản phẩm thành số
      var priceValue = parseFloat(product.price.replace(/\./g, "").replace(" đ", ""));
      total += priceValue; // Tính tổng giá trị đơn hàng

      productRemove.textContent = 'XÓA';

      // Thêm sự kiện nghe cho nút "Delete product"
      productRemove.addEventListener('click', function () {
        // Xóa sản phẩm khỏi giao diện
        container.removeChild(productDiv);
        // Xóa sản phẩm khỏi sessionStorage
        products.splice(index, 1);
        sessionStorage.setItem("cartItems", JSON.stringify(products));

        // Cập nhật tổng giá trị đơn hàng sau khi xóa
        total -= priceValue;
        totalPrice.textContent = 'Tổng đơn hàng: ' + formatMoney(total);
      });

      infoProduct.appendChild(productName);
      infoProduct.appendChild(productQuantity);
      infoProduct.appendChild(productPrice);
      infoProduct.appendChild(productRemove);

      productDiv.appendChild(productImage);
      productDiv.appendChild(infoProduct);

      container.appendChild(productDiv);
    });

    totalPrice.textContent = 'Tổng đơn hàng: ' + formatMoney(total);
    if (products && products.length > 0) {
      var bookProduct = document.createElement("button");
      bookProduct.textContent = ' Đặt hàng';
      bookProducts.appendChild(bookProduct);
    } else {
      bookProducts.textContent = '';
    }
  } else {
    var emptyCartMessage = document.createElement("p");
    emptyCartMessage.classList.add('cart-empty');
    emptyCartMessage.textContent = "Giỏ hàng trống!";
    container.appendChild(emptyCartMessage);
  }
}

// Hàm định dạng số tiền thành chuỗi có định dạng "xxx,xxx,xxx đ"
function formatMoney(amount) {
  var formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });
  return formatter.format(amount);
}

renderCartItems();

