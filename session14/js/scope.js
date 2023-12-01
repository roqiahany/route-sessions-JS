/* every var inside the scope will be globel but inside the function will be local*/

// function getSum() {
//   var x = 5; // local
//   var y = 6;
//   var sum = x + y;
//   console.log(sum);
// }
// console.log(x); // error not defined

// if (true) {
//   var num = 6; // global
// }

// console.log(num); // 6

var x = 10;
console.log(x); //10
function welcome() {
  console.log(x); // undefined
  var x = 100;
}
welcome();
console.log(x); //10
