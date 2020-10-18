// Method #1: Using Square Bracket Notation []
const numbers = [22, 46, -72, 36];

console.log('Create numbers[] Array Using Bracket Notation...\n');
console.log('numbers[] =>\n');
console.table(numbers);

// Method #2: Using Array() Constructor with new Keyword
const moreNumbers = new Array(5, 37);

console.log(
  'Create moreNumbers[] Array Using Array() Constructor and new Keyword...\n'
);
console.log('moreNumbers[] =>\n');
console.table(moreNumbers);


// STRANGE BEHAVIOR USING Array() CONSTRUCTOR:
const strange = new Array(12);

console.log(
  "What happens if I create strange[]" +
  " with Array() Constructor and single" +
  " element of 12?\n"
);
console.log("strange[] =>\n")
console.log(strange);
console.warn(
  "WHAT?!? Why does this create an array" +
  " with 12 empty elements?"
);
console.log(
  "\nWhen Array() constructor is passed a single" +
  " number, it creates an array of the length " +
  "specified by that number and populated with " +
  "empty elements.\n"
);

// Method #3: Create array Using Array() Constructor without new Keyword
const anotherNumberArray = Array(3, 57, 22);

console.log(
  "\nCreating anotherNumberArray[] Using Array() Constructor" +
  " while Ommitting the new Keyword...\n"
);
console.log("anotherNumberArray[] =>\n");
console.table(anotherNumberArray);

// Method #4: Create array Using Array.of() Method
const yetMoreNumbers = Array.of(13, 76, -32);

console.log("\nCreating yetMoreNumbers[] Using Array.of() Method...\n");
console.log("yetMoreNumbers[] =>\n");
console.table(yetMoreNumbers);
