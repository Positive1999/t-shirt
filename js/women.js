// fetch('data/women.json')
//   .then(response => response.json())
//   .then(data => {

//     const listPro = document.getElementById('women');
//     listPro.classList.add('container');

//     data.women.forEach(e => {
//       const listProducts = document.createElement('div');
//       listProducts.classList.add('product', 'col-xs-12', 'col-sm-6', 'col-md-4', 'col-lg-3');

//       listProducts.innerHTML = `
   
//       <div class="sale">${e.sale}</div>
//       <img src="${e.image}">
//         <h3 class="product-name">${e.name}</h3>
//         <p class="product-price">$${e.price}</p>
//         <div class="chuabtn">
//           <button class="cartButton">
//             <i class="fas fa-shopping-cart"></i>
//             <span>Thêm giỏ hàng</span>
//           </button>
//         </div>
//       `;
//       listPro.appendChild(listProducts);
//     });

//     const cartItems = [];

//     const cartButtons = document.querySelectorAll('.cartButton');
//     cartButtons.forEach((cartButton, index) => {
//       const text = cartButton.querySelector('span');

//       cartButton.addEventListener('click', function () {
//         const selectedProduct = data.home[index];

//         if (cartButton.classList.contains('clicked')) {
//           cartButton.classList.remove('clicked');
//           text.classList.remove('color');
//           text.textContent = 'Thêm giỏ hàng';

//           const productIndex = cartItems.findIndex(item => item.id === selectedProduct.id);
//           if (productIndex !== -1) {
//             cartItems.splice(productIndex, 1);
//           }
//         } else {
//           cartButton.classList.add('clicked');
//           text.classList.add('color');
//           text.textContent = 'Đã thêm';

//           cartItems.push(selectedProduct);
//         }

//         updateCartCounter();
//         sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
//       });
//     });

//     function updateCartCounter() {
//       const cartCounter = document.querySelector('.cart-counter');
//       cartCounter.textContent = cartItems.length;
//     }
//   });


fetch('data/women.json')
  .then(response => response.json())
  .then(data => {
    const listPro = document.getElementById('women');
    listPro.classList.add('container');

    data.women.forEach(e => {
      const listProducts = document.createElement('div');
      listProducts.classList.add('product', 'col-xs-12', 'col-sm-6', 'col-md-4', 'col-lg-3');

      listProducts.innerHTML = `
      <div class="sale">${e.sale}</div>
      <img src="${e.image}">
        <h3 class="product-name">${e.name}</h3>
        <p class="product-price">${e.price}</p>
        <div class="chuabtn">
          <button class="cartButton">
            <i class="fas fa-shopping-cart"></i>
            <span>Thêm giỏ hàng</span>
          </button>
        </div>
      `;
      listPro.appendChild(listProducts);
    });
    

    const cartButtons = document.querySelectorAll('.cartButton');
let cartItems = [];

cartButtons.forEach((cartButton, index) => {
  const text = cartButton.querySelector('span');
  updateQuantitycartCounter();

  cartButton.addEventListener('click', function() {
    const selectedProduct = data.women[index];

    if (cartButton.classList.contains('clicked')) {
      cartButton.classList.remove('clicked');
      text.classList.remove('color');
      text.textContent = 'Thêm giỏ hàng';

      const productIndex = cartItems.findIndex(item => item.id === selectedProduct.id);

      if (productIndex !== -1) {
        cartItems.splice(productIndex, 1);
      }
    } else {
      cartButton.classList.add('clicked');
      text.classList.add('color');
      text.textContent = 'Đã thêm';

      cartItems.push(selectedProduct);
    }

    updateCartCounter();
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  });
});

function updateCartCounter() {
  const cartCounter = document.querySelector('.cart-counter');
  cartCounter.textContent = cartItems.length;
}

function updateQuantitycartCounter() {
  const quantityCart = localStorage.getItem('cartItems');
  if (quantityCart) {
    cartItems = JSON.parse(quantityCart);
    updateCartCounter();
  }
}

const cartButton = document.getElementById('cartButton');
if (cartButton) {
  cartButton.addEventListener('click', function () {
    // Xử lý sự kiện khi nhấp vào nút "Giỏ hàng"
    cartItems.forEach(item => {
      const productIndex = data.home.findIndex(
        product => product.id === item.id
      );

      if (productIndex !== -1) {
        data.home[productIndex].quantity = item.quantity || 0;
      }
    });

    // Hiển thị số lượng sản phẩm trong giỏ hàng
    const cartItemsCount = document.querySelector('.cart-counter');
    cartItemsCount.textContent = cartItems.length;

    // Hiển thị danh sách sản phẩm trong giỏ hàng
    const cartItemsList = document.getElementById('cartItemsList');
    cartItemsList.innerHTML = '';

    cartItems.forEach(item => {
      const cartItem = document.createElement('li');
      cartItem.textContent = `${item.name} (${item.quantity})`;
      cartItemsList.appendChild(cartItem);
    });
  });
}

// Cập nhật số lượng từ localStorage nếu có sản phẩm trong giỏ hàng trước đó
const quantityCart = localStorage.getItem('cartItems');
if (quantityCart) {
  cartItems = JSON.parse(quantityCart);
  updateCartCounter();
}
   
  });

