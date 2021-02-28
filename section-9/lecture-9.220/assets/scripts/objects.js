const movieList = document.getElementById('movie-list');

// Use bracket notation to set movieList background to red.
// NOTE: Original CSS property name can be used below because
// it is in quotes in the square bracket.
movieList.style['background-color'] = '#ff0000';
movieList.style['display'] = 'block';

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

// DEMO: Adding user-chosen constant name. Here
// the value is hard-coded only for demonstration
// purposes, but the value could just as easily
// come from user input in a form, for example.

const userChosenKeyName = 'level';

const person2 = {
  'first name': 'Humpy',
  age: 12,
  hobbies: [
    'Skulking',
    'Sniveling'
  ],
  greet: function() {
    alert('Hi there!');
  },
  [userChosenKeyName]: userChosenKeyName
};

// Use square bracket notation to log 'first name'
// key to console.

// NOTE: Typically you would not want to use a
// two-word key in an object, as it is not considered
// a best practice. It can, however, be done here in
// order to demonstrate this notation applied to an
// object, as opposed to an array.

// It's also possible to store the string key name
// by storing it in a constant. Refactored code
// begins after the commented out code below.

// console.log("Value of person['first name'] =>\n");
// console.log(person['first name']);

const keyName = 'first name';

console.log('Value of person[keyName] =>\n');
console.log(person[keyName], '\n');

console.log('Value of person2[userChosenKeyName] =>\n')
console.log(person2[userChosenKeyName], '\n');
