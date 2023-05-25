// var image = document.querySelectorAll('img');
// console.log(image);
// new simpleParallax(image,{
// 	speed: 1.5, // vitesse de défilement plus rapide
//     intensity: 70, // intensité de l'effet de parallaxe plus élevée
//     perspective: 500
// });






// let defaultCursor = document.querySelector(".cursor");

// window.addEventListener("mousemove", cursor);
// window.addEventListener('click', scale);

// function scale(e) {
//   defaultCursor.classList.toggle('click-grow');
// }

// function cursor(e) {
//   defaultCursor.style.top = e.pageY + "px";
//   defaultCursor.style.left = e.pageX + "px";
// }
let overlay = document.querySelector("#overlay");
let embedSU = document.querySelector("#mc_embed_signup");
let form = document.querySelector("#mc-embedded-subscribe-form");
let input = document.querySelector('#mce-EMAIL');


document.querySelector('.news').addEventListener("click", function() {
  overlay.style.display = "flex";
  embedSU.style.display = "block";
});

document.getElementById("closeBtn").addEventListener("click", function() {
  document.getElementById("overlay").style.display = "none";
  input.style="border: 1px solid #ABB0B2;";
  var divEnfant = document.querySelector('.mc-field-group div');
  if(divEnfant){
    divEnfant.style.display="none";
  }
});

window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("overlay")) {
      document.getElementById("overlay").style.display = "none";
      input.style="border: 1px solid #ABB0B2;";
      var divEnfant = document.querySelector('.mc-field-group div');
      if(divEnfant){
        divEnfant.style.display="none";
      }
  }
});

// Fonction pour détecter le media query
function checkMediaQuery() {
  if (window.matchMedia("(max-width: 450px)").matches) {
    // Si le media query correspond, changer la source de l'image
    document.getElementById("mainImage").src = "img/IMG_0696.JPG";
  } else {
    // Sinon, restaurer la source de l'image à la valeur par défaut
    document.getElementById("mainImage").src = "img/Lechalet-1.jpg";
  }
}

// Vérifier le media query lors du chargement de la page
checkMediaQuery();

// Vérifier le media query lors du redimensionnement de la fenêtre
window.addEventListener("resize", checkMediaQuery);

window.addEventListener('load', function() {
  let loaderContainer = document.querySelector('.loaderContainer');
  let svg = document.querySelector('.loaderContainer svg');
  svg.addEventListener('animationend', function(){
    loaderContainer.style.display = 'none';
  })
});

function checkLinkAvailability() {
  var link = document.querySelector('.siteHeader-insta');
  
  // Vérifier si le lien fonctionne en utilisant une requête AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('HEAD', link.href, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 0) {
        // Le lien n'est pas disponible, effectuer une redirection
        link.href = 'https://www.instagram.com/lechaletolivet/';
      }
    }
  };
  xhr.send();
}

// Appeler la fonction de vérification après le chargement de la page
window.addEventListener('DOMContentLoaded', checkLinkAvailability);