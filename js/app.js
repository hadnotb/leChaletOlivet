var image = document.querySelectorAll('img');
console.log(image);
new simpleParallax(image,{
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});
