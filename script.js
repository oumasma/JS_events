//Fonctionnalité 1 et 1bis :

var footer = document.getElementsByTagName("footer");

count = 0;
footer[0].addEventListener('click', function(){
count += 1;
console.log(`clique ${count}`);
});


//Fonctionnalité 2 :

var navbar = document.getElementById("navbarHeader");
var buttonNavbar = document.querySelector("button");

buttonNavbar.addEventListener('click', function(){
	
	navbar.classList.toggle('collapse');
});



//Fonctionnalité 3 :

var firstCard = document.getElementsByClassName("card")[0];
var editFirstCard = firstCard.getElementsByClassName("btn-outline-secondary");

editFirstCard[0].addEventListener('click', function(){
firstCard.style.color = 'red';

});


//Fonctionnalité 4 :


var secondCard = document.querySelectorAll(".card")[1];
console.log(secondCard);
var editSecondCard = document.querySelectorAll(".btn-outline-secondary")[1];
console.log(editSecondCard);

editSecondCard.addEventListener('click', function(){
  if (secondCard.style.color === 'green'){
  	secondCard.style.color = '' ;
  }else 
	secondCard.style.color = 'green';

});


//Fonctionnalité 5 :

var navbar = document.getElementsByClassName("navbar")[0];
link = document.getElementsByTagName("link")[0];
navbar.addEventListener('dblclick', function(){

link.remove();

});


//Fonctionnalité 6 :


var card = document.querySelectorAll(".box-shadow");
var view = document.querySelectorAll(".btn-success");
var text = document.querySelectorAll(".card-text")

view[0].addEventListener("mouseover", () => {text[0].style.display = "none"; card[0].style.width = "20%";});
view[0].addEventListener("mouseout", () => {text[0].style.display = "block";});



//Fonctionnalité 7 :

var btnGrey = document.getElementsByClassName("btn btn-secondary my-2");
var rowDiv = document.getElementsByClassName("row");
var lastCard = document.getElementsByClassName(".card")[5];
var FirstCard = document.getElementsByClassName(".card")[1];

 

btnGrey[0].addEventListener("click", function(){
rowDiv[0].insertBefore(lastCard, firstCard);

});
