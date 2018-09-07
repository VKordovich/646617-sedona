var button = document.querySelector(".modal-button");
var modal = document.querySelector(".modal");
var dateingo = document.querySelector("#dateingo");
var dateoutgo = document.querySelector("#dateoutgo");
var people = document.querySelector("#people");
var kids = document.querySelector("#kids");
var search = document.querySelector(".modal-search");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик по кнопке");
  modal.classList.toggle("modal-vision");
  dateingo.focus();
});

search.addEventListener("submit", function (evt) {
  if (!dateingo && !dateoutgo) {
    evt.preventDefault();
    console.log("Форма не заполнена");
    search.classList.add("modal-error");
  } else if (!people && !kids) {
    evt.preventDefault();
    console.log("Форма не заполнена");
  } else {
    evt.preventDefault();
    console.log("Форма заполнена")
  }
});
