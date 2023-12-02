var container = document.getElementById("cart-item-list");
var totalPrice = document.getElementById("totalPrice");
var bookProducts = document.getElementById("bookProducts");
var products = []; // Mảng chứa sản phẩm

function renderCartItems() {
  var productsData = localStorage.getItem("cartItems");
  products = JSON.parse(productsData);
  var total = 0; // Tổng đơn hàng



  if (products && products.length > 0) {
    products.forEach(function (product, index) {
      var productDiv = document.createElement("div");
      productDiv.classList.add("productItem", "row");

      var productImage = document.createElement("img");
      productImage.classList.add("col-sx-12", "col-sm-12", "col-md-6", "col-lg-6");

      var infoProduct = document.createElement('div');
      infoProduct.classList.add("col-sx-12", "col-sm-12", "col-md-6", "col-lg-6");


      var productDes = document.createElement("i");
      var productName = document.createElement("h5");
      var productQuantity = document.createElement("input");
      var productPrice = document.createElement("p");
      var productRemove = document.createElement("button");

      productDes.textContent = product.des;
      productName.textContent = product.name;
      productQuantity.placeholder = "Số lượng ...";
      productImage.src = product.image;
      productPrice.textContent = product.price;

      // Chuyển đổi giá trị của sản phẩm thành số
      var priceValue = parseFloat(product.price.replace(/\./g, "").replace(" đ", ""));
      total += priceValue; // Tính tổng giá trị đơn hàng

      productRemove.textContent = 'XÓA';

      //btn xoa san pham
      productRemove.addEventListener('click', function () {
        // Xóa sản phẩm khỏi giao diện
        productDiv.remove();

        // Xóa sản phẩm khỏi mảng bằng cách sử dụng index
        products.splice(index, 1);

        // Kiểm tra số lượng sản phẩm trong mảng
        if (products.length === 0) {
          // Xóa khóa "cartItems" khỏi localStorage
          localStorage.removeItem("cartItems");
        } else {
          // Ghi đè lên localStorage với mảng products mới
          localStorage.setItem("cartItems", JSON.stringify(products));
        }

        // Cập nhật tổng giá trị đơn hàng sau khi xóa
        total -= priceValue;
        totalPrice.textContent =
          'Tổng đơn hàng: ' + formatMoney(total);
      });

      infoProduct.appendChild(productDes);
      infoProduct.appendChild(productName);
      infoProduct.appendChild(productQuantity);
      infoProduct.appendChild(productPrice);
      infoProduct.appendChild(productRemove);

      productDiv.appendChild(productImage);
      productDiv.appendChild(infoProduct);

      container.appendChild(productDiv);
    });

    totalPrice.textContent = 'Tổng đơn hàng:' + formatMoney(total);
    if (products && products.length > 0) {

      // form nhập thông tin khách hàng
      var form = document.createElement("div");
      form.classList.add('form-order');

      var formOrderTitle = document.createElement("h4");
      formOrderTitle.textContent = 'Vui lòng điền đầy đủ thông tin';
      formOrderTitle.style.textAlign = 'center';

      var formName = document.createElement("input");
      formName.classList.add("inod", "col-sx-12", "col-sm-12", "col-md-6", "col-lg-6");
      formName.type = "text";
      formName.placeholder = 'Nhập tên';

      var formPhone = document.createElement("input");
      formPhone.classList.add("inod", "col-sx-12", "col-sm-12", "col-md-6", "col-lg-6");
      formPhone.type = "text";
      formPhone.placeholder = 'Nhập số điện thoại';

      var formAddress = document.createElement("input");
      formAddress.classList.add("col-sx-12", "col-sm-12", "col-md-12", "col-lg-12")
      formAddress.type = "text";
      formAddress.placeholder = 'Nhập địa chỉ nhận hàng';
      //hết form nhập thông tin khách hàng

      form.appendChild(formOrderTitle);
      form.appendChild(formName);
      form.appendChild(formPhone);
      form.appendChild(formAddress);


      var bookProduct = document.createElement("button");
      bookProduct.textContent = ' Đặt hàng';
      bookProduct.addEventListener('click', () => {
        var check = localStorage.getItem("cartItems");
        var count = JSON.parse(check).length;

        if (formName.value === '' || formPhone.value === '' || formAddress.value === '') {
          alert('Điền đầy đủ thông tin');
        }
        else if (count > 0) {
          alert('Đặt hàng thành công !');
          formName.value = '';
          formPhone.value = '';
          formAddress.value = '';
          localStorage.removeItem("cartItems");
        }
        
      })
      bookProducts.appendChild(form);
      bookProducts.appendChild(bookProduct);
    } else {
      bookProducts.textContent = '';
    }
  } else {
    var emptyCartMessage = document.createElement("p");
    emptyCartMessage.classList.add('cart-empty');
    emptyCartMessage.innerHTML =
      `<i class="fa fa-cart-shopping"></i> Giỏ hàng trống !`;

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

