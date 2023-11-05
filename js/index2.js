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
  // Sample cartItems array with some selected products
  function showCart() {
    const cartItem = document.querySelector('.cart-item');
    const backdrop = document.createElement('div');
    backdrop.classList.add('backdrop');
    document.body.appendChild(backdrop);
    document.body.style.overflow = 'hidden';
  
    // Clear the previous cart item details
    cartItem.innerHTML = '';
  
    fetch('data/home.json')
      .then(response => response.json())
      .then(data => {
        const cartItems = data.selectedProducts;
  
        if (cartItems.length === 0) {
          const message = document.createElement('span');
          message.textContent = 'Bạn chưa chọn sản phẩm nào.';
          cartItem.appendChild(message);
        } else {
          // Loop through the selected products in the cart and display their details
          cartItems.forEach(selectedProduct => {
            const item = document.createElement('div');
            item.classList.add('cart-item-details');
  
            const itemName = document.createElement('span');
            itemName.textContent = selectedProduct.name;
  
            const itemImage = document.createElement('img');
            itemImage.src = selectedProduct.image;
            itemImage.alt = selectedProduct.name;
  
            const itemPrice = document.createElement('span');
            itemPrice.textContent = selectedProduct.price;
  
            item.appendChild(itemName);
            item.appendChild(itemImage);
            item.appendChild(itemPrice);
  
            cartItem.appendChild(item);
          });
        }
  
        cartItem.style.display = 'block';
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

// Function để ẩn phần cart-item và đưa màn hình web về trạng thái ban đầu
function hideCart() {
  const cartItem = document.querySelector('.cart-item');
  const backdrop = document.querySelector('.backdrop');
  document.body.removeChild(backdrop);
  document.body.style.overflow = '';

  cartItem.style.display = 'none';
}