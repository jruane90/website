//////////////////////////////////
// Replace Contact Information
//////////////////////////////////

window.onload = function() {
	Array.from(document.getElementsByClassName("replaceWithPhoneNumber")).forEach(
		function(element, index, array) {
			let areacode = "214"; let two = "449"; let three = "0240";
			element.innerHTML = '('+areacode+') '+two+'-'+three;
		}
	);
	
	Array.from(document.getElementsByClassName("replaceWithEmail")).forEach(
		function(element, index, array) {
			let user = "prodigychiropractic"; let domain = "gmail.com";
			element.innerHTML = user + '@' + domain;
		}
	);
	
	Array.from(document.getElementsByClassName("replaceWithAddressLine1")).forEach(
		function(element, index, array) {
			let street = "8951 Collin McKinney Parkway"; let suite = "Suite 1201-J";
			element.innerHTML = street + ', ' + suite;
		}
	);
	
	Array.from(document.getElementsByClassName("replaceWithAddressLine2")).forEach(
		function(element, index, array) {
			let city = "McKinney"; let state = "Texas"; let zip = "75070";
			element.innerHTML = city + ', ' + state + ' ' + zip;
		}
	);
}

//////////////////////////////////
// Youtube Lazy Load
//////////////////////////////////

var youtube = document.querySelectorAll( ".youtube" );
	
for (var i = 0; i < youtube.length; i++) {
	// thumbnail image source.
	var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
	
	// Load the image asynchronously
	var image = new Image();
	image.src = source;
	image.addEventListener( "load", function() {
		youtube[ i ].appendChild( image );
	}( i ) );
	
	youtube[i].addEventListener( "click", function() {
 
		var iframe = document.createElement( "iframe" );
 
			iframe.setAttribute( "frameborder", "0" );
			iframe.setAttribute( "allowfullscreen", "" );
			iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
 
			this.innerHTML = "";
			this.appendChild( iframe );
	} );
	
}

//////////////////////////////////
// Tab Box
//////////////////////////////////

function showTab(el) {
	var activeTabs = document.getElementsByClassName("tabbox-tab active");
	for (var i = 0; i < activeTabs.length; i++) {
		activeTabs[i].classList.remove("active");
	}
	
	el.classList.add("active");
	
	var activeContent = document.getElementsByClassName("tab-content active");
	for (var i = 0; i < activeContent.length; i++) {
		activeContent[i].classList.remove("active");
	}
	
	var content = document.getElementById(el.id+"-content")
	content.classList.add("active");
}