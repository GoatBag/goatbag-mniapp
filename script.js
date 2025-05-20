fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('products-container');
    data.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';

      const image = document.createElement('img');
      image.src = product.image;
      image.alt = product.name;

      const name = document.createElement('h3');
      name.textContent = product.name;

      const price = document.createElement('p');
      if (product.price_100 && product.price_500) {
        price.textContent = `100 pcs: ${product.price_100} â‚¬ â€” 500 pcs: ${product.price_500} â‚¬`;
      } else {
        price.textContent = 'Prix non dÃ©fini';
      }

      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(price);
      container.appendChild(card);
    });
  });
