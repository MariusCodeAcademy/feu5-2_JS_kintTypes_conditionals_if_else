'use strict';
console.log('refTypes.js');
// sudetingesnes reiksmes ir stukturos

// 1 Masyvais
// index        0       1        2
let colors = ['red', 'blue', 'green'];
let mixed = ['red', true, 45, null, 0, 'asdasd'];
console.log('colors ===', colors);
// gauti reiksme 45
console.log(mixed[2]);

// 2 objektai. key: value poromis issaugoti duomenys

let userObject = {
  firstName: 'James',
  lastName: 'Bond',
  town: 'London',
  movie: 007,
  isFamous: true,
};

// atspausdinti last name
console.log(userObject['lastName']);
console.log(userObject.town);
