console.log(x); // undefined because will hoiting /*var x;*/ and will stop
var x = 10;

/* console.log(x); // error not defined */
getAvg(10, 20); // will run
getSum(40, 50); // error not a function because will hoiting /*var getSum;*/ and will stop
// *decleration* function can useing hoisting
function getAvg(x, y) {
  var sum = x + y;
  var result = sum / 2;
  console.log(result);
}
// *expression* function
var getSum = function (x, y) {
  var sum = x + y;
  var result = sum / 2;
  console.log(result);
};
