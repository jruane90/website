//////////////////////////////////
// Navbar Resizing
//////////////////////////////////

//window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var nav = document.getElementById("navbar");
  if (document.documentElement.scrollTop > 200 && !nav.classList.contains('sticky')) {
  		nav.classList.add('sticky');
  } else if (document.documentElement.scrollTop <= 0 && nav.classList.contains('sticky')) {
  		nav.classList.remove('sticky');
  }
}