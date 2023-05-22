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

document.querySelector('.news').addEventListener("click", function() {
  let overlay = document.querySelector("#overlay");
  let embedSU = document.querySelector("#mc_embed_signup");
  console.log(overlay,embedSU);
  overlay.style.display = "flex";
  embedSU.style.display = "block";
 
});

document.getElementById("closeBtn").addEventListener("click", function() {
  document.getElementById("overlay").style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("overlay")) {
      document.getElementById("overlay").style.display = "none";
  }
});

