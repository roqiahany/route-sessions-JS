// DOM // document opject modle

/**
 id
 tagName
 className
 Name(input)

 // Ekma Script//
 querySelector
 querySelectorAll
 */
var test = document.getElementById('test');
var allH2 = document.getElementsByTagName('h2'); // HTML collection
var allh2 = document.getElementsByClassName('demo'); // HTML collection
var input = document.getElementsByName('gender'); //NodeList // i can not access name and id
var h2 = document.querySelector('h2');
var h2All = document.querySelectorAll('h2'); // NodeList
var body = document.body;
var h2s = document.h2;
var forms = document.forms;
var a = document.links;
var imgs = document.images;

// console.log(test.id);
// console.log(allH2.length);
// console.log(allh2[0].className);
// console.log(input[0].id);
// console.log(h2All);
// console.log(body);
// console.log(h2s);
// console.log(forms);
// console.log(a);

console.log(imgs);
// for (var i = 0; i < allH2.length; i++) {
//   console.log(allH2[i]);
// }

function demo() {
  console.log('welcome');
}
