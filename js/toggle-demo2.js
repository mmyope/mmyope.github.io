var storyContent = [
	{title:'The Bathroom Door &mdash; <br> and what of it?', info:'Stories of love, duty, and companionship, from the little people living in our bathroom door.', img:'images/homepage/1A21.jpeg', link:'mm-001-story.html'},
	{title:'The Bathroom Door &mdash; <br> off the hinges!', info:'Meditating on responsibility, a person living in our bathroom door lets her guard down', img:'images/homepage/1A21.jpeg', link:'mm-002-story.html'},
];

// Todo: fix the html characters in the title - translate string to html
// todo: fix toggling issue where sometimes it toggles incorrectly between empty and story
// todo: clean up html and css to make sure that its easy to add more stories

var isOn = false;

function toggle_visibility(storyNum) {
	var title = document.getElementById('story-title');
	var info = document.getElementById('story-info');
	var cover = document.getElementById('story-cover');
	var link = document.getElementById('story-link');
	var empty = document.getElementById('mm-empty');
	//var link = document.getElementById()
	
		
	if (storyNum === 0) {
		// only have the gif showing
		if (empty.style.display === 'block') {
			empty.style.display = 'none';
		} else {
			title.style.display = 'none';
			info.style.display = 'none';
			cover.style.display = 'none';
			empty.style.display = 'block';
			//cover.src = 'images/blank-library/mm-empty.gif'
		}
		
	} else {
		if (title.textContent === storyContent[storyNum-1].title) {
			title.style.display = 'none';
			info.style.display = 'none';
			cover.style.display = 'none';
			empty.style.display = 'none';
			
			title.textContent = '';
			info.textContent = '';
//			cover.src = '';
			link.href = '';

		} else {
			title.style.display = 'block';
			info.style.display = 'block';
			cover.style.display = 'block';
			empty.style.display = 'none';

			title.textContent = storyContent[storyNum-1].title;
			info.textContent = storyContent[storyNum-1].info;
			cover.src = storyContent[storyNum-1].img;
			link.href = storyContent[storyNum-1].link;
		}
			
	}
	
	
}

//  console.log(elementId)
//  var x = document.getElementById(elementId);
//  if (x.style.display == 'none') {
//    x.style.display = 'block';
//  } else {
//    x.style.display = 'none';
//  }