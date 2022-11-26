var bar = document.getElementById('bar');
var nav = document.getElementById('navbar');
var close = document.getElementById('close');


  bar.addEventListener("click", function(){
    nav.classList.add("active");
  });

  close.addEventListener("click", function(){
    nav.classList.remove("active");
});

var mainImg = document.getElementById("mainImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function (){
  mainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function (){
  mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function (){
  mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function (){
  mainImg.src = smallImg[3].src;
}

function fun(){
  window.location = "sproduct.html";
}
