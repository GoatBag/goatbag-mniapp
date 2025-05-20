fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('products-container');
    data.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>${product.price} €</p>
        </div>
      `;
      container.appendChild(card);
    });
  });
