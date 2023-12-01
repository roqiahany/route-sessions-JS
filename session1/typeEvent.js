/**
 * mouse // click  dbclick  mouseenter  mouseleave  mousemove
 * keyboard //keyup keydown focus
 * input
 */
var div = document.querySelector('div');
div.addEventListener('mouseenter', function () {
  console.log('mouseenter');
});
div.addEventListener('mouseleave', function () {
  console.log('mouseleave');
});
div.addEventListener('mousemove', function () {
  console.log('mousemove');
});

var input = document.getElementById('roro');
// input.addEventListener('keyup', function () {
//   console.log('keyup');
// });

// input.addEventListener('keydown', function () {
//   console.log('keydown');
// });
// input.addEventListener('focus', function () {
//   console.log('focus');
// });
