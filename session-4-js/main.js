var allH2 = document.querySelectorAll('h2');

console.log(allH2);

for (var i = 0; i < allH2.length; i++) {
  allH2[i].addEventListener('click', function () {
    console.log('welcome ,Roqa');
  });
}
