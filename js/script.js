var button = document.querySelector(".modal-button");
var modal = document.querySelector(".modal");
var dateingo = document.querySelector("#dateingo");
var dateoutgo = document.querySelector("#dateoutgo");
var people = document.querySelector("#people");
var kids = document.querySelector("#kids");
var search = document.querySelector(".modal-search");
var forms = search.querySelectorAll("input[type=text]");
modal.classList.toggle("modal-hidden");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик по кнопке");
  modal.classList.toggle("modal-vision");
  dateingo.focus();
});

search.addEventListener("click", function(event) {
  if(!dateingo.value){
    event.preventDefault();
    console.log("Форма не заполнена");
    dateingo.classList.add("modal-error");
  } else if(!dateoutgo.value){
    event.preventDefault();
    console.log("Форма не заполнена");
    dateoutgo.classList.add("modal-error");
  } else if(!people.value){
    event.preventDefault();
    console.log("Форма не заполнена");
    people.classList.add("modal-error");
  } else if(!kids.value){
    event.preventDefault();
    console.log("Форма не заполнена");
    kids.classList.add("modal-error");
  } else{
    console.log("Форма заполнена");
  }

  });

