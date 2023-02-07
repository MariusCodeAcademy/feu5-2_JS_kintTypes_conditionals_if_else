'use strict';
console.log('math.js file was loaded');

let n1 = 4.78;
console.log('n1 ===', n1);

console.log('Math.round(n1)', Math.round(n1));
console.log('Math.floor(n1)', Math.floor(n1));

// grazina skaiciu tarp 0 ir 1 neimtinai
// 0.3264032752145962
let radn1 = Math.random();
console.log({ radn1 });

// gauti random kombinacija is 6 skaiciu
// pradzia - 0.3264032752145962
// 0.3264032752145962 * 1e6
// 3264032.752145962
// pabaiga - 3264032

let largeRand = radn1 * 1e9;
console.log('largeRand ===', largeRand);

let largeRandInteger = Math.floor(largeRand);

console.log('largeRandInteger ===', largeRandInteger);
