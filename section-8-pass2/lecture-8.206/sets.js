const emptySet = new Set();

console.log('This is what an empty Set object looks like.\n\n');
console.log('emptySet => ', emptySet);

const ids = new Set([1, 2, 3]);

console.log('ids =>');
console.log(ids);

// CHECK IF VALUE IS IN SET:

console.log( '1 is in ids{}: ', ids.has(1) );

// ITERATE THROUGH ids{} using entries() method:

console.log('Iterate through ids{} using entries()...');

for ( const entry of ids.entries() ) {
  // Access only first value in entry because
  // entries() returns the same value twice:
  console.log( entry[0] );
}
