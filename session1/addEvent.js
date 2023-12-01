/**
 Add event on ele
 */

var h2 = document.querySelector('h2');
var Allh2 = document.querySelectorAll('h2');

for (var i = 0; i < Allh2.length; i++) {
  Allh2[i].addEventListener('click', function () {
    console.log('hi');
  });
}

// h2.addEventListener('click', test);

// function test() {
//   console.log('welcome');
// }

// h2.addEventListener('click', function () {
//   console.log('hello from inside');
// });

// h2.addEventListener('dblclick', function () {
//   console.log('hello hello');
// });
