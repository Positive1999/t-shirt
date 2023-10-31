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

            //nhap so luong
            const quantityInput = document.createElement('input');
            quantityInput.classList.add('inputQuantity');
            quantityInput.placeholder = 'Số lượng';
            // het nhap so luong

         
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

            // het button

            var listProducts = document.createElement('div');
            listProducts.classList.add('product', 'col-xs-12', 'col-sm-6', 'col-md-4', 'col-lg-3');
            listProducts.appendChild(titleProduct);
            listProducts.appendChild(imgProduct);
            listProducts.appendChild(priceProduct);
            listProducts.appendChild(quantityInput);
            listProducts.appendChild(chuabtn);

            listPro.appendChild(listProducts);
        });

        const cartButtons = document.querySelectorAll('.cartButton');
        cartButtons.forEach((cartButton, index) => {
            const text = cartButton.querySelector('span');

            cartButton.addEventListener('click', function () {
                if (cartButton.classList.contains('clicked')) {
                    cartButton.classList.remove('clicked');
                    text.classList.remove('color');
                    text.textContent = 'Thêm giỏ hàng';
                } else {
                    cartButton.classList.add('clicked');
                    text.classList.add('color');
                    text.textContent = 'Đã thêm';

                    // Thêm logic thêm sản phẩm vào giỏ hàng ở đây
                    const selectedProduct = menArray[index];
                    // Thực hiện các thao tác cần thiết với sản phẩm đã được chọn
                    console.log(selectedProduct);
                }
            });
        });
    });