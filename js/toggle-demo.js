function toggle_visibility(elementId) {
  console.log(elementId)
  var x = document.getElementById(elementId);
  if (x.style.display == 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
