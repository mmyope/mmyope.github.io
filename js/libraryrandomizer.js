// JavaScript Document

	function getRandomImage() {
		
		let numImages = 29;
		let randNum = Math.floor(Math.random()*numImages) +1;
		let image = 'images/blank-library/sentence' + randNum + '.gif'
 
		return image;
	}
 
	function displayRandomImage() {
		var htmlImage = document.getElementById("randomImage");
		htmlImage.src = getRandomImage();
	}

			displayRandomImage();

