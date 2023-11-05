// fetch('data/home.json')
//   .then(response => response.json())
//   .then(data => {
//     const listPro = document.getElementById('home');
//     listPro.classList.add('container');

//     data.home.forEach(e => {
//       const listProducts = document.createElement('div');
//       listProducts.classList.add('product', 'col-xs-12', 'col-sm-6', 'col-md-4', 'col-lg-3');

//       listProducts.innerHTML = `
//         <h3>${e.name}</h3>
//         <img src="${e.image}">
//         <p>${e.price}</p>
//         <input class="inputQuantity" placeholder="Số lượng">
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
//       });
//     });

//     function updateCartCounter() {
//       const cartCounter = document.querySelector('.cart-counter');
//       cartCounter.textContent = cartItems.length;
//     }
//   });

// function showCart() {
//   const cartItemList = document.querySelector('.cart-item-list');
//   const cartCounter = document.querySelector('.cart-counter');

//   cartItemList.innerHTML = '';

//   const emptyCartMessage = document.createElement('p');
//   emptyCartMessage.textContent = cartCounter.textContent === '0' ? 'Giỏ hàng rỗng!' : 'Sản phẩm của bạn ở đây!';
//   emptyCartMessage.style.color = 'black';
//   cartItemList.appendChild(emptyCartMessage);

//   cartItemList.style.display = 'block';
// }

// function hideCart() {
//   document.querySelector('.cart-item').style.display = 'none';
//   const overlay = document.querySelector('.overlay');
//   if (overlay) {
//     overlay.parentNode.removeChild(overlay);
//   }
// }

// const cartIcon = document.querySelector('.cart i');
// cartIcon.addEventListener('click', function () {
//   const cartItem = document.querySelector('.cart-item');
//   const body = document.body;

//   const overlay = document.createElement('div');
//   overlay.classList.add('overlay');
//   body.appendChild(overlay);

//   overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.5); z-index: 999;';

//   cartItem.style.display = 'block';

//   overlay.addEventListener('click', function () {
//     hideCart();
//   });
// });

// fetch('data/home.json')
//   .then(response => response.json())
//   .then(data => {
//     const listPro = document.getElementById('home');
//     listPro.classList.add('container');

//     data.home.forEach(e => {
//       const listProducts = document.createElement('div');
//       listProducts.classList.add('product', 'col-xs-12', 'col-sm-6', 'col-md-4', 'col-lg-3');

//       listProducts.innerHTML = `
//         <h3>${e.name}</h3>
//         <img src="${e.image}">
//         <p>${e.price}</p>
//         <input class="inputQuantity" placeholder="Số lượng">
//         <div class="chuabtn">
//           <button class="cartButton">
//             <i class="fas fa-shopping-cart"></i>
//             <span>Thêm giỏ hàng</span>
//           </button>
//         </div>
//       `;

//       listPro.appendChild(listProducts);
//     });

//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

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
//         localStorage.setItem('cartItems', JSON.stringify(cartItems));
//       });
//     });

//     function updateCartCounter() {
//       const cartCounter = document.querySelector('.cart-counter');
//       cartCounter.textContent = cartItems.length;
//     }
//   });

// function showCart() {
//   const cartItemList = document.querySelector('.cart-item-list');
//   const cartCounter = document.querySelector('.cart-counter');

//   cartItemList.innerHTML = '';

//   const emptyCartMessage = document.createElement('p');
//   emptyCartMessage.textContent = cartCounter.textContent === '0' ? 'Giỏ hàng rỗng!' : 'Sản phẩm của bạn ở đây!';
//   emptyCartMessage.style.color = 'black';
//   cartItemList.appendChild(emptyCartMessage);

//   cartItemList.style.display = 'block';

//   // Hiển thị sản phẩm từ localStorage
//   const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//   storedCartItems.forEach(item => {
//     const listItem = document.createElement('div');
//     listItem.textContent = item.name;
//     cartItemList.appendChild(listItem);
//   });
// }

// function hideCart() {
//   document.querySelector('.cart-item').style.display = 'none';
//   const overlay = document.querySelector('.overlay');
//   if (overlay) {
//     overlay.parentNode.removeChild(overlay);
//   }
// }

// const cartIcon = document.querySelector('.cart i');
// cartIcon.addEventListener('click', function () {
//   const cartItem = document.querySelector('.cart-item');
//   const body = document.body;

//   const overlay = document.createElement('div');
//   overlay.classList.add('overlay');
//   body.appendChild(overlay);

//   overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.5); z-index: 999;';

//   cartItem.style.display = 'block';

//   overlay.addEventListener('click', function () {
//     hideCart();
//   });
// });



fetch('data/home.json')
  .then(response => response.json())
  .then(data => {
    const listPro = document.getElementById('home');
    listPro.classList.add('container');

    data.home.forEach(e => {
      const listProducts = document.createElement('div');
      listProducts.classList.add('product', 'col-xs-12', 'col-sm-6', 'col-md-4', 'col-lg-3');

      listProducts.innerHTML = `
        <h3>${e.name}</h3>
        <img src="${e.image}">
        <p>${e.price}</p>
        <input class="inputQuantity" placeholder="Số lượng">
        <div class="chuabtn">
          <button class="cartButton">
            <i class="fas fa-shopping-cart"></i>
            <span>Thêm giỏ hàng</span>
          </button>
        </div>
      `;

      listPro.appendChild(listProducts);
    });

    const cartItems = [];

    const cartButtons = document.querySelectorAll('.cartButton');
    cartButtons.forEach((cartButton, index) => {
      const text = cartButton.querySelector('span');

      cartButton.addEventListener('click', function () {
        const selectedProduct = data.home[index];

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
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
      });
    });

    function updateCartCounter() {
      const cartCounter = document.querySelector('.cart-counter');
      cartCounter.textContent = cartItems.length;
    }
  });

function showCart() {
  const cartItemList = document.querySelector('.cart-item-list');
  const cartCounter = document.querySelector('.cart-counter');

  cartItemList.innerHTML = '';

  const emptyCartMessage = document.createElement('p');
  emptyCartMessage.textContent = cartCounter.textContent === '0' ? 'Giỏ hàng rỗng!' : 'Sản phẩm của bạn ở đây!';
  emptyCartMessage.style.color = 'black';
  cartItemList.appendChild(emptyCartMessage);

  cartItemList.style.display = 'block';

  // Hiển thị sản phẩm từ localStorage
  const storedCartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  storedCartItems.forEach(item => {
    const listItem = document.createElement('div');
    const listItemImg = document.createElement('img');
    const listItemPrice = document.createElement('div');
    listItemPrice.classList.add('detailPrice');
    listItem.textContent = item.name;
    listItemImg.src = item.image;
    listItemPrice.textContent = item.price;

    cartItemList.appendChild(listItem);
    cartItemList.appendChild(listItemImg);
    cartItemList.appendChild(listItemPrice);
  });
}

function hideCart() {
  document.querySelector('.cart-item').style.display = 'none';
  const overlay = document.querySelector('.overlay');
  if (overlay) {
    overlay.parentNode.removeChild(overlay);
  }
}

const cartIcon = document.querySelector('.cart i');
cartIcon.addEventListener('click', function () {
  const cartItem = document.querySelector('.cart-item');
  const body = document.body;

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  body.appendChild(overlay);

  overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.5); z-index: 999;';

  cartItem.style.display = 'block';

  overlay.addEventListener('click', function () {
    hideCart();
  });
});