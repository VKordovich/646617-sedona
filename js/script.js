var button = document.querySelector(".modal-button");
var window = document.querySelector(".modal");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("Клик по кнопке");
  window.classList.toggle("modal-vision");
});
