window.onscroll = function() {
	"use strict";
	myFunction();
};



/*
window.onload = function() {
	"use strict";
	Checking();
};
*/

var header = document.getElementById("header");
header.style.height = "140px";

var back = document.getElementById("back");
back.style.height = "1800px";

var logo = document.getElementById("logo");
var text = document.getElementById("text");
text.innerHTML = "MANDELA UNITED <br/> SQUADRON";

var left = document.getElementById("left");
left.style.marginTop = "30px";

var right = document.getElementById("right");
right.style.marginTop = "34px";

var trying0 = document.getElementById("try0");
trying0.style.width = "14%";

var trying = document.getElementById("try");
trying.style.width = "14%";

var trying1 = document.getElementById("try1");
trying1.style.width = "14%";

var trying2 = document.getElementById("try2");
trying2.style.width = "14%";

var trying3 = document.getElementById("try3");
trying3.style.width = "14%";

function myFunction() {
	"use strict";
	if (window.pageYOffset > 0) {
		header.style.height = "75px";
		header.style.position = "fixed";
		header.style.top = "0";
		
		logo.style.top = "16px";
		logo.style.right = "1729px";
		logo.style.width = "5%";
		logo.style.height = "inherit";
		
		text.innerHTML = "MANDELA UNITED SQUADRON";
		
		left.style.marginTop = "9px";
		right.style.marginTop = "9px";
		
		trying0.style.width = "20%";
		trying.style.width = "20%";
		trying1.style.width = "20%";
		trying2.style.width = "20%";
		trying3.style.width = "20%";
		
	}
	else {
		header.style.height = "140px";
		header.style.position = "absolute";
		header.style.top = "0";
		
		logo.style.top = "35px";
		logo.style.width = "153px";
		logo.style.height = "inherit";
		
		text.innerHTML = "MANDELA UNITED <br/> SQUADRON";
		
		left.style.marginTop = "30px";
		right.style.marginTop = "34px";
		
		trying0.style.width = "14%";
		trying.style.width = "14%";
		trying1.style.width = "14%";
		trying2.style.width = "14%";
		trying3.style.width = "14%";
	}
	
	var scroll = window.pageYOffset;
	var scroll2 = scroll/2.7;
	back.style.transform = "translateX(" + scroll2 + "px)";
}

var image = document.getElementById("image");
var images = new Array("Images/Back_Dark.jpg", "Images/Back_Dark.jpg", "Images/7277 Robot.jpg", "Images/Dab.jpg");
var img = document.getElementById("img");
var img2 = document.getElementById("img2");
var imgl = document.getElementById("imgl");
imgl.style.opacity = "0";
img.style.opacity = "0";
img2.style.opacity = "0";
var slideIndex = 3;
showSlides(slideIndex);

function button(n) {
	"use strict";
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	"use strict";
   	showSlides(slideIndex = n);
}

function showSlides(n) {
	"use strict";
	var dots = document.getElementsByClassName("dot");
	var i;
	
	if (n > images.length) {
		slideIndex = 1;
	}
	
	if (n < 1) {
		slideIndex = images.length;
	}
	
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
  	}
	
	image.style.backgroundImage = 'url("' + images[slideIndex-1] + '")';
	dots[slideIndex-1].className += " active";
	
	if ((slideIndex - 1) === 0) {
		img.style.transition = "1s";
		img.style.opacity = "1";
		img.style.left = "990px";
		imgl.style.transition = "1s";
		imgl.style.opacity = "1";
		imgl.style.left = "0px";
	}
	
	else {
		img.style.transition = "0s";
		img.style.opacity = "0";
		img.style.left = "1690px";
		imgl.style.transition = "0s";
		imgl.style.opacity = "0";
		imgl.style.left = "-600px";
	}
	
	if ((slideIndex - 1) === 1) {
		img2.style.transition = "1s";
		img2.style.opacity = "1";
		img2.style.left = "290px";
		imgl2.style.transition = "1s";
		imgl2.style.opacity = "1";
		imgl2.style.left = "0px";
	}
	
	else {
		img2.style.transition = "0s";
		img2.style.opacity = "0";
		img2.style.left = "1290px";
		imgl2.style.transition = "0s";
		imgl2.style.opacity = "0";
		imgl2.style.left = "-600px";
	}
}

