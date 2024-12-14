$(function () {
  $("#includedContent").load("menu.html");
});

$(document).ready(function () {
  setTimeout(function () {
    var currentPage = window.location.pathname.split('/').pop();

    if (currentPage === '') {
      currentPage = 'index.html';
    }
    $('#includedContent nav a').each(function () {
      var href = $(this).attr('href');
      if (href === currentPage ||
        (currentPage === 'index.html' && href === './') ||
        (currentPage === '' && href === './')) {
        $(this).addClass('current');
        console.log('Added current class to:', href);
      }
    });
  }, 100);
});


var $ = function (id) {
  return document.getElementById(id);
};

function print(s) {
  $("console").innerHTML ="";
  $("console").innerHTML += s;
}

function println(s) {
  if (typeof s !== 'undefined') {
    print(s)
  }
  print("\n");
}
// function callclear() {
//   $("bmi").reset();
//   $("console").reset();
//   $("height").focus();
// }

// function validE(e) {
//   const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   return patt.test(e);
// }

// function loadScript(){    
//   var head = document.getElementsByTagName('head')[0];
//   var script = document.createElement('script');
//   script.type = 'text/javascript';
//   script.src = "navbar.js"
//   head.appendChild(script);
// }

var flowers = [
  { file: "AnandhamNagarRamapuram.jpg", caption: "Anandham Nagar, Ramapuram" },
  { file: "BalajinagarAvadi.jpg", caption: "Balaji Nagar,  Avadi" },
  { file: "KuberanNagarMadipakkam.jpg", caption: "Kuberan Nagar, Madipakkam" },
  { file: "NasarStreetAvadi1.jpg", caption: "Nasar Street,  Avadi" },
  { file: "NasarStreetAvadi2.jpg", caption: "Nasar Street, Avadi" },
  { file: "SubasreeNagarMugalivakkam.jpg", caption: "Subasree Nagar, Mugalivakkam" },
]

var currentImage = 0;
var imageCache = [];
preloadImages();

var timer = setInterval(nextImage, 2000);
function preloadImages() {
  var image;
  for (var i = 0; i < flowers.length; i++) {
      image = new Image();
      image.src = "images/Completed/" + flowers[i].file;
      image.alt = flowers[i].caption;
      imageCache.push(image);
  }
}
function start(){
  timer = setInterval(nextImage, 2000);
}
function prevImage() {
  if(currentImage != 0){
      currentImage = (currentImage - 1) % imageCache.length;
      showCurrentImage();
  }else{
      currentImage = imageCache.length-1;
      showCurrentImage();
  }
}
function nextImage() {
  currentImage = (currentImage + 1) % imageCache.length;
  showCurrentImage();

}
function stop(){
  clearInterval(timer);
}

function showCurrentImage() {
  var flower = imageCache[currentImage];
  document.getElementById('image').src = flower.src;
  document.getElementById('image').alt = flower.alt;
  document.getElementById('caption').textContent = flower.alt;

}