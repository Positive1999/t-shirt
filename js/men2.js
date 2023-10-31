document.addEventListener('DOMContentLoaded', function () {
    // Mã JavaScript ở đây
    fetch('data/men.json')
        .then(response => response.json())
        .then(data => {
            const listPro = document.getElementById('men');
            listPro.classList.add('container');
            const menArray = data.men;
            menArray.forEach((e, index) => {
                const titleProduct = document.createElement('h3');
                titleProduct.innerHTML = `${e.name}`;

                const imgProduct = document.createElement('img');
                imgProduct.src = `${e.image}`;

                const priceProduct = document.createElement('p');
                priceProduct.innerHTML = `${e.price}`;

                const quantityInput = document.createElement('input');
                quantityInput.classList.add('inputQuantity');
                quantityInput.placeholder = 'Số lượng';

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

                var listProducts = document.createElement('div');
                listProducts.classList.add('product', 'col-xs-12', 'col-sm-6', 'col-md-4', 'col-lg-3');
                listProducts.appendChild(titleProduct);
                listProducts.appendChild(imgProduct);
                listProducts.appendChild(priceProduct);
                listProducts.appendChild(quantityInput);
                listProducts.appendChild(chuabtn);

                listPro.appendChild(listProducts);

                // Thêm sự kiện click cho sản phẩm
                listProducts.addEventListener('click', function (event) {
                    event.stopPropagation(); // Ngăn chặn sự lan truyền của sự kiện click đến phần tử cha

                    const productDetails = document.getElementById('productDetails');
                    productDetails.innerHTML = ""; // Xóa nội dung chi tiết sản phẩm hiện tại

                    const productTitle = document.createElement('h3');
                    productTitle.innerHTML = `${e.name}`;

                    const productImage = document.createElement('img');
                    productImage.src = `${e.image}`;

                    const productPrice = document.createElement('p');
                    productPrice.innerHTML = `${e.price}`;

                    const productDetailsDiv = document.createElement('div');
                    productDetailsDiv.classList.add('productDetails');
                    productDetailsDiv.appendChild(productTitle);
                    productDetailsDiv.appendChild(productImage);
                    productDetailsDiv.appendChild(productPrice);

                    productDetails.appendChild(productDetailsDiv);
                    productDetails.style.display = "block"; // Hiển thị phần tử chi tiết sản phẩm
                });
            });

            const closeButton = document.getElementById('closeButton');
            closeButton.addEventListener('click', function () {
                const productDetails = document.getElementById('productDetails');
                productDetails.innerHTML = ""; // Xóa nội dung chi tiết sản phẩm
                productDetails.style.display = "none"; // Ẩn phần tử chi tiết sản phẩm
            });

            const cartButtons = document.querySelectorAll('.cartButton');
            cartButtons.forEach((cartButton, index) => {
                const text = cartButton.querySelector('span');

                cartButton.addEventListener('click', function (event) {
                    event.stopPropagation(); // Ngăn chặn sự lan truyền của sự kiện click đến phần tử cha

                    if (cartButton.classList.contains('clicked')) {
                        cartButton.classList.remove('clicked');
                        text.classList.remove('color');
                        text.textContent = 'Thêm giỏ hàng';
                    } else {
                        cartButton.classList.add('clicked');
                        text.classList.add('color');
                        text.textContent = 'Đã thêm';

                        const selectedProduct = menArray[index];
                        console.log(selectedProduct);
                    }
                });
            });
        });
});