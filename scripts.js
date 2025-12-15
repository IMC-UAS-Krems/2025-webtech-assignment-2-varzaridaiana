
const listOfItems = [
    { 
        id: 1,
     name: 'Food Parcel ( basic )',
     price: 10.00,
     img: 'img/foodbasic.png' ,
     description: 'Simbollicaly supports rice, lentils and oils',
    },
    { 
        id: 2,
        name: 'Emegency Medical Kit',
        price: 25.00,
        img: 'img/medicalkit.png' ,
        description: 'Bandagges, antiseptics and pain relievers',
    },
    { 
        id: 3,
        name: 'Family Meal Box',
        price: 18.00,
        img: 'img/foodfamily.png' ,
        description: 'Helps feed a family for a day',
    },
    {
        id: 4,
        name: "Hygiene Care Package",
        price: 15,
        img: "img/toilet.png",
        description: "Soap, toothbrushes, detergent"
    },
    { 
        id: 5,
        name: 'Clean Water Supply',
        price: 12.00,
        img: 'img/water.png' ,
        description: 'Contributes to water purification',
    },
    { 
        id: 6,
        name: 'Baby Essentials Kit', 
        price: 20.00,
        img: 'img/pampers.png' ,
        description: 'Diapers, formula and wipes.',
    },
    { 
        id: 7,
      name: "Winter Warm Bundle",
     price: 22.00,
     img: "img/winter.png",
     description: "Blankets and warm clothing" 
    },
    { 
        id: 8,
     name: "Home Reconstruction Brick Pack",
     price: 30.00,
      img: "img/brick.png", 
        description: " ",
    },
    {
        id: 9,
        name: "Generator Fuel",
        price: 10.00,
        img: "img/fuel.png",
        description: "Helps keep hospitals powered",
    },
    {
        id: 10,
        name: "Emergency Shelter Support",
       price: 35.00,
       img: "img/tent.png",
        description: "Supports temporary tents"
    },

];
let cart = [];


function renderItems() {
  const container = document.getElementById("items-list");
  let html = "";

  listOfItems.forEach(item => {
    html += `
      <div class="col-6 col-md-4">
        <div class="itemcard">
          <div class="imgitem">
            <img src="${item.img}">
          </div>
          <h1>${item.name}</h1>
          <p>${item.description}</p>
          <p class="price">${item.price}$</p>
          <button class="btn btn-outline-dark w-100" onclick="addToCart(${item.id})">
            Add to cart
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function addToCart(id) {
  const product = listOfItems.find(item => item.id === id);
  cart.push(product);
  updateCartCount();
}


function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

function openCart() {
  hideAll();
  document.getElementById("cart-section").classList.remove("d-none");
  renderCart();
}

function closeCart() {
  hideAll();
  document.getElementById("shop-section").classList.remove("d-none");
}

function renderCart() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";

  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price;
    container.innerHTML += `<p>${item.name} — ${item.price}$</p>`;
  });

  let total = subtotal;

  if (cart.length >= 3) {
    total = subtotal * 0.9;
    document.getElementById("discount-text").classList.remove("d-none");
  } else {
    document.getElementById("discount-text").classList.add("d-none");
  }

  document.getElementById("cart-subtotal").textContent = subtotal.toFixed(2);
  document.getElementById("cart-total").textContent = total.toFixed(2);
}

function openCheckout() {
  hideAll();
  document.getElementById("checkout-section").classList.remove("d-none");
}

function backToCart() {
  hideAll();
  document.getElementById("cart-section").classList.remove("d-none");
}

document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("checkout-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    if (name === "" || email === "" || address === "") {
      alert("Please fill in all fields");
      return;
    }

    hideAll();

    document.getElementById("confirmation-section").classList.remove("d-none");
  });

});

function hideAll() {
  document.getElementById("shop-section").classList.add("d-none");
  document.getElementById("cart-section").classList.add("d-none");
  document.getElementById("checkout-section").classList.add("d-none");
  document.getElementById("confirmation-section").classList.add("d-none");
}

renderItems();
updateCartCount();