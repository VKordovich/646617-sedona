var button=document.querySelector(".modal-button"),modal=document.querySelector(".modal"),dateingo=document.querySelector("#dateingo"),dateoutgo=document.querySelector("#dateoutgo"),people=document.querySelector("#people"),kids=document.querySelector("#kids"),search=document.querySelector(".modal-search");button.addEventListener("click",function(e){e.preventDefault(),console.log("Клик по кнопке"),modal.classList.toggle("modal-vision"),dateingo.focus()}),search.addEventListener("submit",function(e){dateingo&&dateoutgo&&people&&kids?(e.preventDefault(),console.log("Форма заполнена")):(e.preventDefault(),console.log("Форма не заполнена"))});

