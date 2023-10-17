//swiper
var swiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//favourite
function toggleHeartIcon(event) {
  var clickedIcon = event.target;
  var heartIcon = clickedIcon.parentElement.getElementsByClassName('bx-heart')[0];
  var heartIconAlt = clickedIcon.parentElement.getElementsByClassName('bxs-heart')[0];

  if (heartIcon.style.display !== 'none') {
    heartIcon.style.display = 'none';
    heartIconAlt.style.display = 'block';
  } else {
    heartIcon.style.display = 'block';
    heartIconAlt.style.display = 'none';
  }
}

//cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');;

cartIcon.onclick = () => {
  cart.classList.add("active");
}

closeCart.onclick = () => {
  cart.classList.remove("active");
}

//Cart working 
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

//making function
function ready() {
  //remove items
  var removeCartButtons = document.getElementsByClassName('cart-remove');
  console.log(removeCartButtons)
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i]
    button.addEventListener("click", removeCartItems);
  }
  //change quantity
  var quantityInputs = document.getElementsByClassName('cart-quantity');
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
  }
  //add to cart
  var addCart = document.getElementsByClassName('add-cart')
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener('click', addCartClicked);
  }
}

//remove items
function removeCartItems(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal()
}
//add to cart
// function addCartClicked(event) {
//   var button = event.target;
//   var shopProducts = button.parentElement;
//   var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
//   var price = shopProducts.getElementsByClassName('price')[0].innerText;
//   var image = shopProducts.getElementsByClassName('product-img')[0].src;
//   addProductToCart(title, price, image);
//   updateTotal();
// }
// function addProductToCart(title, price, image) {
//   var cartShopBox = document.createElement('div');
//   // cartShopBox.classList.add('cart-box')
//   var cartItems = document.getElementsByClassName('cart-content');
//   var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
//   for (var i = 0; i < cartItemsNames.length; i++){
//     alert("Bạn đã thêm vào giỏ hàng món này rồi")
//   }
// }
//Quantity Changes
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}
//update total
function updateTotal() {
  var cartContent = document.getElementsByClassName('cart-content')[0];
  var cartBoxes = cartContent.getElementsByClassName('cart-box');
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName('cart-price')[0];
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
    var price = parseFloat(priceElement.innerText.replace("VND", ""));
    var quantity = quantityElement.value;
    total = total + (price * quantity);
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('total-price')[0].innerText = total.toFixed(3) + " VND";
  }
}
