// JavaScript Document

	function getRandomImage(eadr_num) {

		let numImages = 3;
		let randNum = Math.floor(Math.random()*numImages) +1;
		let image = 'images/mm-eadr-'+ eadr_num + '/' + randNum + '.jpeg'

    var htmlImage = document.getElementById("eadr_img");
    htmlImage.src = image
	}
