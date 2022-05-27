// JavaScript Document

	function getRandomImage(glad_num) {

		let numImages = 9;
		let randNum = Math.floor(Math.random()*numImages) +1;
		let image = 'images/mm-glad-'+ glad_num + '/' + randNum + '.jpeg'

    var htmlImage = document.getElementById("ml_img");
    htmlImage.src = image
	}
