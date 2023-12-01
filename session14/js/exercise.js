function addElements(elementsNumber, element, elementId) {
  var cartona = '';
  for (var i = 0; i < elementsNumber; i++) {
    cartona += element;
  }
  document.getElementById(elementId).innerHTML = cartona;
}

addElements(10, '<h2> hello world </h2>', 'profile');
addElements(20, "<a href='#'> google</a>", 'demo');
addElements(30, '<img src="girl_icon.jpg" >', 'services');
