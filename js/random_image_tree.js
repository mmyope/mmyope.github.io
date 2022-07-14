// JavaScript Document

	function getRandomImage(tree_num) {

		let numImages = 5;
		let randNum = Math.floor(Math.random()*numImages) +1;
		let image = 'images/mm-tree-'+ tree_num + '/' + randNum + '.gif'

    var htmlImage = document.getElementById("tree_gif");
    htmlImage.src = image
	}
