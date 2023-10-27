   // Đọc dữ liệu từ file data.json
   fetch('data/men.json')
   .then(response => response.json())
   .then(data => {
       const listPro = document.getElementById('men');
       listPro.classList.add('container');
       const menArray = data.men;
       menArray.forEach(e => {
           const titleProduct = document.createElement('h3');
           titleProduct.innerHTML = `${e.name}`;

           const imgProduct = document.createElement('img');
           imgProduct.src = `${e.image}`;

           const priceProduct = document.createElement('p');
           priceProduct.innerHTML = `${e.price}`;
           
           var listProducts = document.createElement('div');
           listProducts.appendChild(titleProduct);
           listProducts.appendChild(imgProduct);
           listProducts.appendChild(priceProduct);

           listPro.appendChild(listProducts);
       });
   });