const person = {
  name: 'Bobby',
  age: 58,
  hobbies: [
    'Computer gaming',
    'Reading'
  ],
  greet: function() {
    alert('Hi there!');
  }
};

// NOTE: Because objects are hoisted in JavaScript,
// the original object with the age property will
// never be logged to the console.
console.log(person);
// Add a property to person() after-the-fact
person.isAdmin = true;

// Delete age property from person()
delete person.age;
