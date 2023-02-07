'use strict';
console.log('uzdIf2.js file was loaded');

/*
2. sukurti kintamaji isMarried boolean tipo. Parasyti if bloka kuri priklausomai nuo ar zmogus susituokes atspausdina:
   1. jei nesusituokes tai: "Stai jums Suzadetuviu ziedu kolekcija"
   2. jei susituokes tai: "Naujausi Televizoriu modeliai CIA"
*/
{
  console.groupCollapsed('2 pratimas');

  let isMarried = true;

  console.log('isMarried ===', isMarried);

  if (isMarried === true) {
    console.log('Naujausi Televizoriu modeliai CIA');
    document.getElementById('app').textContent =
      'Naujausi Televizoriu modeliai CIA';
  } else {
    console.log('Stai jums Suzadetuviu ziedu kolekcija');
    document.getElementById('app').textContent =
      'Stai jums Suzadetuviu ziedu kolekcija';
  }
  console.groupEnd();
}
// 2a pratimas
{
  console.groupCollapsed(
    "2a pratimas Paprasyti is vartotojo ivesti 'taip' arba 'ne' su prompt() ir priklausomai nuo atsakymo atspausdinti tuos paciu atsakymus"
  );

  let atsakymas = 'taip';

  // atsakymas = prompt('taip ar ne');

  if (atsakymas === 'taip') {
    console.log('taip');
  } else if (atsakymas === 'ne') {
    console.log('ne');
  } else {
    alert('iveskite tik taip arba ne');
  }

  console.groupEnd();
}

/*
3. Deklaruokite du kintamuosius: name ir birthDay

- birthDay priskirkite tekstą “gegužės 12”
- name priskirkite tekstą kurį vartotojas įveda su prompt()
- Atspausdinkite viską konsolėje, pvz.: “Tomas yra gimęs gegužės 12”

*/

{
  console.group('3. Deklaruokite du kintamuosius:');

  let birthDay = 'gegužės 12';
  let username = 'Jack';
  // username = prompt('What is your name?');

  let sentence = `${username} yra gimęs ${birthDay}`;
  console.log(sentence);

  console.groupEnd;
}
