const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

console.log('prices => ', prices);

const sortedPrices = prices.sort( (a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else if (a < b) {
    return -1;
  }
});

console.log('sortedPrices => ', sortedPrices);
