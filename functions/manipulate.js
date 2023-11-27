// Manipulando dados

let number = 345.33452345;
console.log(number.toFixed(2).replace (".", ","));

let words = "Be a developer it's nice";

console.log(words.toUpperCase());
console.log(words.toLowerCase());


let phrase = "I wanna live the LOVE!";

// split é pelo que eu quero pegar de separador da minha frase
let myArray = phrase.split(" ");
console.log(myArray);

// Inserir algo
let phraseWithUnderscore = myArray.join("_");
console.log(phraseWithUnderscore.toUpperCase());

// Verificar se este item tem no que eu quero verificar
console.log(phrase.toLowerCase().includes("love"));

// criando array com constructor
let array = new Array('a', 'b', 'c',);
console.log(array);

// contar elementos de um array

console.log([
  "a",
  function() {
    return 'futebol';
  },

  "c",
][1]());

// transformando cadeias de caracteres em elementos de um array

let stringToArray = 'manipulação';

console.log(Array.from(stringToArray));


// manipulando arrays

let techs = ["html", "css", "js"];

// add last
techs.push("nodejs");

// add first
techs.unshift("sql");

// remove last
techs.pop();

// remove first
techs.shift();

// take some elements of array
// console.log(techs.slice(0, 2));

// remove one or more itens of any array positions


// find position of array element

let index = techs.indexOf('js');
techs.splice(index, 1);




console.log(techs);



