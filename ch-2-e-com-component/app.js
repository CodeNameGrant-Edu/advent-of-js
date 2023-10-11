const menuItems = [
  {
    name: 'French Fries with Ketchup',
    price: 223,
    image: 'plate__french-fries.png',
    alt: 'French Fries',
    count: 1
  },
  {
    name: 'Salmon and Vegetables',
    price: 512,
    image: 'plate__salmon-vegetables.png',
    alt: 'Salmon and Vegetables',
    count: 3
  },
  {
    name: 'Spaghetti Meat Sauce',
    price: 782,
    image: 'plate__spaghetti-meat-sauce.png',
    alt: 'Spaghetti with Meat Sauce',
    count: 0
  },
  {
    name: 'Bacon, Eggs, and Toast',
    price: 599,
    image: 'plate__bacon-eggs.png',
    alt: 'Bacon, Eggs, and Toast',
    count: 0
  },
  {
    name: 'Chicken Salad with Parmesan',
    price: 698,
    image: 'plate__chicken-salad.png',
    alt: 'Chicken Salad with Parmesan',
    count: 0
  },
  {
    name: 'Fish Sticks and Fries',
    price: 634,
    image: 'plate__fish-sticks-fries.png',
    alt: 'Fish Sticks and Fries',
    count: 0
  }
];

const TAX = 0.0975;

refresh();

function toggleInCart() {
  const menuItemName = getListItemName(this);

  // find item, set count to 1
  const item = menuItems.find((item) => item.name === menuItemName);
  item.count = item.count === 0 ? 1 : 0;

  refresh();
}

function increase() {
  const menuItemName = getListItemName(this);
  console.log(menuItemName);
  // find item, set count to 1
  const item = menuItems.find((item) => item.name === menuItemName);
  item.count = item.count + 1;

  refresh();
}

function decrease() {
  const menuItemName = getListItemName(this);

  // find item, set count to 1
  const item = menuItems.find((item) => item.name === menuItemName);
  item.count = item.count - 1;

  refresh();
}

function refresh() {
  renderMenuItems();
  renderCartItems();
  calculateTotals();

  document
    .querySelectorAll('button.add')
    .forEach((btn) => btn.addEventListener('click', toggleInCart));
  document
    .querySelectorAll('button.in-cart')
    .forEach((btn) => btn.addEventListener('click', toggleInCart));
  document
    .querySelectorAll('button.increase')
    .forEach((btn) => btn.addEventListener('click', increase));
  document
    .querySelectorAll('button.decrease')
    .forEach((btn) => btn.addEventListener('click', decrease));
}

function getListItemName(button) {
  return button.closest('li').querySelector('.menu-item').innerHTML;
}

function renderMenuItems() {
  const menu = document.querySelector('ul.menu');
  menu.innerHTML = '';

  menuItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div class="plate">
        <img src="images/${item.image}" alt="${item.alt}" class="plate" />
      </div>
      <div class="content">
        <p class="menu-item">${item.name}</p>
        <p class="price">$${item.price / 100}</p>
        ${
          item.count === 0
            ? `<button class="add">Add to Cart</button>`
            : `<button class="in-cart">
                <img src="images/check.svg" alt="Check" />
                In Cart
              </button>`
        }
      </div>
    `;

    menu.appendChild(listItem);
  });
}

function renderCartItems() {
  const cart = document.querySelector('ul.cart-summary');
  cart.innerHTML = '';

  menuItems
    .filter((item) => item.count > 0)
    .forEach((item) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
      <div class="plate">
        <img
          src="images/${item.image}"
          alt="${item.name}"
          class="plate"
        />
        <div class="quantity">${item.count}</div>
      </div>
      <div class="content">
        <p class="menu-item">${item.name}</p>
        <p class="price">$${item.price / 100}</p>
      </div>
      <div class="quantity__wrapper">
        <button class="decrease">
          <img src="images/chevron.svg" />
        </button>
        <div class="quantity">${item.count}</div>
        <button class="increase">
          <img src="images/chevron.svg" />
        </button>
      </div>
      <div class="subtotal">$${(item.price * item.count) / 100}</div>
    `;

      cart.appendChild(listItem);
    });
}

function calculateTotals() {
  const sub = menuItems.reduce((acc, item) => {
    const tot = item.count * item.price;
    return acc + tot;
  }, 0);

  const tax = Math.round(sub * TAX);

  document.querySelector('.amount.price.subtotal').innerHTML = `$${round(sub / 100)}`;
  document.querySelector('.amount.price.tax').innerHTML = `$${round(tax / 100)}`;
  document.querySelector('.amount.price.total').innerHTML = `$${round((sub + tax) / 100)}`;
}

function round(i) {
  return Number.parseFloat(i).toFixed(2);
}
