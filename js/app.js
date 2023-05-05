var image = document.querySelectorAll('img');
console.log(image);
new simpleParallax(image,{
	speed: 1.5, // vitesse de défilement plus rapide
    intensity: 70, // intensité de l'effet de parallaxe plus élevée
    perspective: 500
});