const menuItems = [
  {
    name: 'French Fries with Ketchup',
    price: 223,
    image: 'plate__french-fries.png',
    alt: 'French Fries',
    count: 0
  },
  {
    name: 'Salmon and Vegetables',
    price: 512,
    image: 'plate__salmon-vegetables.png',
    alt: 'Salmon and Vegetables',
    count: 0
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

const addButtonElement = document.createElement('button');
addButtonElement.innerText = 'Add to Cart';
addButtonElement.classList.add('add');
addButtonElement.addEventListener('click', addToCart);

const inCartButtonElement = document.createElement('button');
inCartButtonElement.innerHTML = '<img src="images/check.svg" />In Cart';
inCartButtonElement.classList.add('in-cart');
inCartButtonElement.addEventListener('click', removeFromCart);

const addButtons = document.querySelectorAll('button.add');
addButtons.forEach((btn) => btn.addEventListener('click', addToCart));

const inCartButtons = document.querySelectorAll('button.in-cart');
inCartButtons.forEach((btn) => btn.addEventListener('click', removeFromCart));

function addToCart() {
  console.log('addToCart', this);
  //   const item = this.closest('li');

  // Change menu Item Button
  this.parentElement.replaceChild(inCartButtonElement, this);

  /* 
        Add Item to Cart
        increment count

        if added - remove from cart
    */
}

function removeFromCart() {
  console.log('removeFromCart');

  // change Menu Item button
  this.parentElement.replaceChild(addButtonElement, this);

  // remove item from cart
  // change menu item text
  // if cart is empty, show message
}

function changeCount(increment) {
  // CHange count of cart item
  // calculate totals
  // if count is zero remove from cart
}

function calculateTotals() {}
