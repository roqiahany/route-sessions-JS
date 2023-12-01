////////////////////////////////// ! qustion-1 ///////////////////////////////////
function foo() {
  function bar() {
    return 3;
  }
  return bar();
  function bar() {
    return 8;
  }
}

alert(foo());

/*will run like this */
// first -->every thing will be hoisting
// function foo() {
//   function bar() {
//     return 3;
//   }
//   function bar() {
//     return 8;
//   }
//   return bar();
// }
// second--> the second function will overwrite the first then the result will be 8

////////////////////////////////// ! qustion-2 ///////////////////////////////////

function foo() {
  var bar = function () {
    return 3;
  };
  return bar();
  var bar = function () {
    return8;
  };
}
alert(foo());

/*will run like this */
//first --> will hoisting for expression function like this *var bar;* and this not a function
// function foo() {
//   var bar = function () {
//     return 3;
//   };
//var bar;
//   return bar();
//   var bar = function () {
//     return8;
//   };
// }

// second --> we cannot read only one function and will return 3

////////////////////////////////// ! qustion-3 ///////////////////////////////////

function foo() {
  return bar();
  function bar() {
    return 3;
  }
  var bar = function () {
    return 8;
  };
}

alert(foo()); // *3*
