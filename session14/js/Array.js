var friends = ['roqa', 'ayat', 'nora', 'abdo'];
console.log(friends);

for (var i = 0; i < friends.length; i++) {
  console.log('Mr.' + friends[i]);
}

console.log('Mr.' + friends[0].charAt(0));

// array of objects
var containerOfProduct = [
  {
    name: 'phone',
    price: '5000',
    decs: '100',
  },
  {
    name: 'phone',
    price: '5000',
    decs: '100',
  },
  {
    name: 'phone',
    price: '5000',
    decs: '100',
  },
  {
    name: 'phone',
    price: '5000',
    decs: '100',
  },
];

for (var i = 0; i < containerOfProduct.length; i++) {
  console.log(containerOfProduct[i]);
}

console.log(containerOfProduct[i].name);
