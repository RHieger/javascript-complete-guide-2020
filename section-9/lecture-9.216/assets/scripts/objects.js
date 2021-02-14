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

// Add a property to person() after-the-fact
person.isAdmin = true;

console.log(person);