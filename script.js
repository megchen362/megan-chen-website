console.log("hey there.");

function menuToggle() {
  var x = document.getElementById('myNavToggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
};

let mainNavLinks = document.querySelectorAll("nav ul.scroll-nav li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

//Get the button:
mybutton = document.getElementById("button-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
