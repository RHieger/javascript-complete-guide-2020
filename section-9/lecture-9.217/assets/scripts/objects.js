const person = {
  'first name': 'Bobby',
  age: 58,
  hobbies: [
    'Computer gaming',
    'Reading'
  ],
  greet: function() {
    alert('Hi there!');
  }
};

// Use square bracket notation to log 'first name'
// key to console.

// NOTE: Typically you would not want to use a
// two-word key in an object, as it is not considered
// a best practice. It can, however, be done here in
// order to demonstrate this notation applied to an
// object, as opposed to an array.

console.log("Value of person['first name'] =>\n");
console.log(person['first name']);
