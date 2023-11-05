fetch('data/home.json')
  .then(response => response.json())
  .then(data => {
    const listPro = document.getElementById('home');
    listPro.classList.add('container');
    const menArray = data.home;

    menArray.forEach(e => {
      const titleProduct = document.createElement('h3');
      titleProduct.innerHTML = `${e.name}`;

      const imgProduct = document.createElement('img');
      imgProduct.src = `${e.image}`;

      const priceProduct = document.createElement('p');
      priceProduct.innerHTML = `${e.price}`;

      // Nhập số lượng
      const quantityInput = document.createElement('input');
      quantityInput.classList.add('inputQuantity');
      quantityInput.placeholder = 'Số lượng';
      // Kết thúc nhập số lượng

      const btnProduct = document.createElement('button');
      btnProduct.classList.add('cartButton');

      const btnIconCart = document.createElement('i');
      btnIconCart.classList.add('fas', 'fa-shopping-cart');

      const btnTextCart = document.createElement('span');
      btnTextCart.textContent = 'Thêm giỏ hàng';

      btnProduct.appendChild(btnIconCart);
      btnProduct.appendChild(btnTextCart);

      const chuabtn = document.createElement('div');
      chuabtn.classList.add('chuabtn');
      chuabtn.appendChild(btnProduct);

      // Kết thúc button

      const listProducts = document.createElement('div');
      listProducts.classList.add('product', 'col-xs-12', 'col-sm-6', 'col-md-4', 'col-lg-3');
      listProducts.appendChild(titleProduct);
      listProducts.appendChild(imgProduct);
      listProducts.appendChild(priceProduct);
      listProducts.appendChild(quantityInput);
      listProducts.appendChild(chuabtn);

      listPro.appendChild(listProducts);
    });

    const cartItems = [];

    const cartButtons = document.querySelectorAll('.cartButton');
    cartButtons.forEach((cartButton, index) => {
      const text = cartButton.querySelector('span');

      cartButton.addEventListener('click', function () {
        if (cartButton.classList.contains('clicked')) {
          cartButton.classList.remove('clicked');
          text.classList.remove('color');
          text.textContent = 'Thêm giỏ hàng';

          // Xóa sản phẩm khỏi giỏ hàng khi người dùng nhấp lại nút "Thêm vào giỏ hàng"
          const selectedProduct = menArray[index];
          const productIndex = cartItems.findIndex(item => item.id === selectedProduct.id);
          if (productIndex !== -1) {
            cartItems.splice(productIndex, 1);
          }
        } else {
          cartButton.classList.add('clicked');
          text.classList.add('color');
          text.textContent = 'Đã thêm';

          // Thêm sản phẩm vào giỏ hàng khi người dùng nhấp vào nút "Thêm vào giỏ hàng"
          const selectedProduct = menArray[index];
          cartItems.push(selectedProduct);
        }

        // Cập nhật số lượng sản phẩm trong giỏ hàng
        updateCartCounter();
      });
    });

    // Hàm cập nhật số lượng sản phẩm trong giỏ hàng
    function updateCartCounter() {
      const cartCounter = document.querySelector('.cart-counter');
      cartCounter.textContent = cartItems.length;
    }
  });

// Function để hiển thị phần cart-item và làm màn hình web tối đi
function showCart() {
  const cartItem = document.querySelector('.cart-item');
  // const backdrop = document.createElement('div');
  // backdrop.classList.add('backdrop');
  // document.body.appendChild(backdrop);
  // document.body.style.overflow = 'hidden';

  cartItem.style.display = 'block';
}

// Function để ẩn phần cart-item và đưa màn hình web về trạng thái ban đầu
function hideCart() {
  var cartItem = document.querySelector('.cart-item');
  cartItem.style.display = 'none';

  var overlay = document.querySelector('.overlay');
  if (overlay) {
    overlay.parentNode.removeChild(overlay);
  }
}

// Add event listener to the cart icon
var cartIcon = document.querySelector('.cart i');
cartIcon.addEventListener('click', function () {
  var cartItem = document.querySelector('.cart-item');
  var body = document.body;

  // Create a new overlay element
  var overlay = document.createElement('div');
  overlay.classList.add('overlay');
  body.appendChild(overlay);

  // Set the styles for the overlay
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  overlay.style.zIndex = '999';

  // Show the cart item
  cartItem.style.display = 'block';

  // Add event listener to the overlay to close the cart
  overlay.addEventListener('click', function () {
    hideCart();
  });
});