'use strict';
console.log('uzd.js');

let year = 2996;
let yearCompareResult;

console.log(`metu reiksme yra ${year}`);

if (year < 2000) {
  // kai metai yra maziau nei 2000
  yearCompareResult = 'pries 2000';
} else {
  // kai metai yra daugiau nei 2000
  yearCompareResult = 'po 2000';
}

console.log(yearCompareResult);
