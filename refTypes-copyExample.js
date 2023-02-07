// kintmieji pagal ju atmintyje issaugojimo buda gali buti 2 rusiu.

// 1 by value
// 2 by reference

// Kopijavimo pavyzdys su byValue ir byReference kintamaisiais

// 1 by value
// let x = 5;
let y = 'james';
let isOn = true;
let z = null;

let x = 5;
let xCopy = x;
xCopy = 10;
console.log({ x });
console.log({ xCopy });

// 2 by reference
// masyvai, array - kolekcija reiksmiu
// index        0       1        2
let colors = ['red', 'blue', 'green'];
//  x54s8wq
console.log(colors);

let colorsCopy = colors;

// pakeisti masyvo elementa kurio indexas yra 1
colorsCopy[1] = 'violet';
console.log(colorsCopy);
console.log(colors);
