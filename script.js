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
