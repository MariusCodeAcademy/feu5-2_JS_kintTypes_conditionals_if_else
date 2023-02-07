'use strict';
console.log('if else js loaded');

/* 
if (condition) {
  //  block of code to be executed if the condition is true
}
*/

let amount = 10;

if (amount < 19) {
  // vygdoma jei if salyga === true
  // console.log('keletas');
}

/* if else sintakse

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}

*/
if (amount < 19) {
  // vygdoma jei if salyga === true
  // console.log('keletas');
} else {
  // console.log('daug');
}

// parasyti programa kuri priklausomai nuo amziaus atspausdina,
// 0-17 vaikas
// 17-70 suauges
// 71 > su patirtim

let age = 18;
age = parseFloat(prompt('iveskite amziu'));

console.log(typeof age);

console.log({ age });

if (age < 18) {
  console.log('vaikas');
} else if (age <= 70) {
  console.log('suauges');
} else {
  console.log('su patirtim');
}
