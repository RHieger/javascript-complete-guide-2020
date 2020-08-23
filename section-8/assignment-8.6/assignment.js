const task1 = document.getElementById('task1');
const task2 = document.getElementById('task2');
const task3 = document.getElementById('task3');
const task4 = document.getElementById('task4');

const numbers = [1, 5, 7, 25, 36, 227, 58, 39, 22, -37];

const list = new Set(
  [1, 4, 78, 25, 322, 66, 52, 47, -88, -13]
);


const task1Handler = () => {
  console.log('numbers[] =>');
  console.table(numbers);
  
  const filteredSet = numbers.filter( number => number > 6 );
  console.log('numbers[] filtered for numbers > 5 =>');
  console.table(filteredSet);
  
  console.log('Map numbers[] to objects =>');
  const mappedNumbers = numbers.map( (value) => {
    const item = { number: value };
    return item;
  });
  console.log(mappedNumbers);

  console.log('Return reduced numbers[] =>');
  const product = numbers.reduce(
    (
      previousValue,
      currentValue,
      currentIndex,
      numbers
    ) => {
      return previousValue *= currentValue;
    }, 1);
  console.log('product of numbers[] =>');
  console.log(product);

};

const task2Handler = () => {
  console.log('Finding the Maximum Number in numbers[]...');
  const maxNumber = numbers.filter(
    (number, index, numbers) => {
      return number === Math.max(...numbers);
  });
  console.log('maxNumber => ', maxNumber);
};

const task3Handler = () => {
  console.log('Finding the Minimum and Maximum Number in numbers[]...');
  const minMaxNumbers = numbers.filter(
    (number, index, numbers) => {
      return number === Math.min(...numbers) ||
        number === Math.max(...numbers);
  });
  [ min, max ] = minMaxNumbers;
  console.log('minMaxNumbers => ', `${max}, ${min}`);
};

const task4Handler = () => {
  console.log('list{} =>');
  console.log(list.values());
  console.log('Adding new value to list{}...');
  const newNumber = 322;
  if ( list.has(newNumber) ) {
    alert(`ERROR: ${newNumber} is a duplicate value`);
    console.log('ERROR: Attempting to enter Set duplicate value');
  } else {
    list.add(newNumber);
  }
};

// EVENT LISTENERS:

task1.addEventListener('click', task1Handler);
task2.addEventListener('click', task2Handler);
task3.addEventListener('click', task3Handler);
task4.addEventListener('click', task4Handler);
