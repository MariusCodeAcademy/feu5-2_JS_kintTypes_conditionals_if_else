# uzd is skaidriu

1. Sukurkime aplanką pavadinimu “Strings” ir jame inicijuokime du failus (1)index.html ir (2)script.js.
2. Index.html faile patalpinime startinį kodą, kuriame būtų pirminiai, privalomi tag’ai (`<html>, <head>, <body>` su privalomais child tag’ai);
3. Index.html failo `<body>` tag’o viduje susikurkime tuščią `<div>` turintį id=”main”;
4. index.html ir script.js susiekime „External JavaScript“ būdu (prieš `</head>` arba `</body>` tag’us);
5. Atsidarome script.js failą ir sukuriame kintamąjį “userInfoOutput”, kuriam priskiriame index.html faile esantį `<div>` su id=”main”;
6. Susikurkite objektą “user”, kuriam nurodykite šias savybes: vardas, pavardė;
7. Kintamąjam userInfoOutput naudojant “.innerHTML =” DOM nuosavybę ir atgalinius klavišus (backticks) t.y. , sukurkite H2 tag, kuris, nurodo “User Information” ir `<p>` tag’ą, kuriame pateiktas, toks sakinys “Vartotojo vardas yra (vardas), o pavardė (pavardę).”

## IFelse uzduotys

1. naujam faile sukurti kintamaji 'age'. priskirti jam amziu. parasyti if statement kuri priklausomai nuo amziau pasako ar zmogus gali pirkti alkoholi ar ne. (18) isbandyti ar veikia
   1.1. jei amzius yra neigiamas pranesam kad neteisingai pateiktas amzius

2. sukurti kintamaji isMarried boolean tipo. Parasyti if bloka kuri priklausomai nuo ar zmogus susituokes atspausdina:
   1. jei nesusituokes tai: "Stai jums Suzadetuviu ziedu kolekcija"
   2. jei susituokes tai: "Naujausi Televizoriu modeliai CIA"

2.a Paprasyti is vartotojo ivesti 'taip' arba 'ne' su prompt() ir priklausomai nuo atsakymo atspausdinti tuos paciu atsakymus

3. Deklaruokite du kintamuosius: name ir birthDay

- birthDay priskirkite tekstą “gegužės 12”
- name priskirkite tekstą kurį vartotojas įveda su prompt()
- Atspausdinkite viską konsolėje, pvz.: “Tomas yra gimęs gegužės 12”

4. Sukurti kintamaji, ir priskirti reiksme, parasyti programa kuri atspausdintu kokio tipo reiksme (galimi tipai, skaicius, stringas, boolean)

### 5. Parašykite programą, kuri:

- Paprašyti įvesti prisijungimo vardą ir slaptažodį
- Jei vardas admin, slaptažodis turi būti “master”
- Jei vardas ne admin - tai slaptažodis yra: vardas ir skaičius 11.
  Pvz.: username: andrius, psw: andrius11
- “Sveiki, admin” arba “Neteisingas slaptažodis”
- Jei neiįvedė nieko - “Viso gero!”

### 6 Sukurkite kodą, kuris sukurs penkis atsitiktinius skaičius (is skaidriu)

1. (skaičiai negali būti didesni nei 10) ir juos priskirs kintamiesiems, kurie turi iki dviejų skaičių po kablelio;
2. Tada suraskite ir atspausdinkite, kuris iš sukurtų skaičių yra:

- didžiausias;
- mažiausias.
