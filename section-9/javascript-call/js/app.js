// Capture table cells and buttons
const breedOne = document.getElementById('favBreed1');
const breedOrigin1 = document.getElementById('origin1');
const breedAvgLife1 = document.getElementById('avgLife1');

const breedTwo = document.getElementById('favBreed2');
const breedOrigin2 = document.getElementById('origin2');
const breedAvgLife2 = document.getElementById('avgLife2');

const breedThree = document.getElementById('favBreed3');
const breedOrigin3 = document.getElementById('origin3');
const breedAvgLife3 = document.getElementById('avgLife3');

const button1 = document.getElementById('breed1');
const button2 = document.getElementById('breed2');
const button3 = document.getElementById('breed3');
const button4 = document.getElementById('reset');

const breed1 = {
  breed: 'PUG',
  origin: 'CHINA',
  lifeSpan: '12-15 YEARS'
};

const breed2 = {
  breed: 'LABRADOR',
  origin: 'NEWFOUNDLAND',
  lifeSpan: '10-12 YEARS'
};

const breed3 = {
  breed: 'BEAGLE',
  origin: 'ENGLAND',
  lifeSpan: '12-15 YEARS'
};

const getDogInfo = {
  info: function() {
    // Array containing properties of each dog object
    return [
      this.breed,
      this.origin,
      this.lifeSpan];
  }
};

const dog1 = getDogInfo.info.call(breed1);
const dog2 = getDogInfo.info.call(breed2);
const dog3 = getDogInfo.info.call(breed3);

const resetTable = () => {
  
  const noSelection = 'NO BREED SELECTED';

  breedOne.textContent = noSelection;
  breedOrigin1.textContent = null;
  breedAvgLife1.textContent = null;

  breedTwo.textContent = noSelection;
  breedOrigin2.textContent = null;
  breedAvgLife2.textContent = null;

  breedThree.textContent = noSelection;
  breedOrigin3.textContent = null;
  breedAvgLife3.textContent = null;

};

// Button box event listeners populate
// table with dog breed information.

button1.addEventListener('click', () => {
  breedOne.textContent = dog1[0];
  breedOrigin1.textContent = dog1[1];
  breedAvgLife1.textContent = dog1[2];
});

button2.addEventListener('click', () => {
  breedTwo.textContent = dog2[0];
  breedOrigin2.textContent = dog2[1];
  breedAvgLife2.textContent = dog2[2];
});

button3.addEventListener('click', () => {
  breedThree.textContent = dog3[0];
  breedOrigin3.textContent = dog3[1];
  breedAvgLife3.textContent = dog3[2];
});

button4.addEventListener('click', resetTable);
