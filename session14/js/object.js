// non primitive --> object

var x = window.prompt(); // the user will insert one of the proberity in the object "user"

var user = {
  fullName: 'roqia hany' /*proberity : value */,
  age: '20',
  gender: 'female',
  husband: {
    fullName: 'abdallah sallam ',
    age: 21,
    son: { firstName: 'abdelrahman', age: 5 },
  },
  eat: function (meal) {
    console.log('i will eat ' + meal);
  },
};

console.log(typeof user); //object
console.log(user);
console.log(user.age);
console.log(user['gender']);
console.log(user[x]);
console.log(user['husband']['son']['firstName']);
user.eat('pizza');
