let count = 0;

const cartCount = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".card button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    count = count + 1;
    cartCount.textContent = count;
  });
});
const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function () {
  count = 0;
  cartCount.textContent = count;
});