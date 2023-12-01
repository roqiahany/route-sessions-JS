var h2 = document.querySelector('h2');

h2.addEventListener('click', function (pointer) {
  // pointer --> info about Event
  // console.log(pointer.clientX);
  // console.log(pointer.clientY);
  // console.log(pointer.target);
});

var div = document.querySelector('div');
div.addEventListener('click', function (pointer) {
  console.log(pointer.target);
});
