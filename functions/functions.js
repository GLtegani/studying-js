
// functions servem para armazenamento e reutilização de código, além de dar um significado a eles com nomeações, podendo agrupa-los

// armazenar tudo em variaveis ou a maioria das coisas é importante!

const sum = function(number1, number2) {
  let total = number1 + number2;
  return total;
};

let numberSum = 52;
let numberSum2 = 128;

console.log(`A soma de ${numberSum} + ${numberSum2} é ${sum(numberSum, numberSum2)}`);

function makeJuice(fruit1, fruit2) {
  let mistakeFruits = 'juice of: ' + fruit1 + fruit2;
  return mistakeFruits;
};

let copo = makeJuice('grapple', 'banana');

console.log(copo);

// arrow function

const sayMyName = (name) => {
  console.log(name);
};

sayMyName('Gabriel');
sayMyName('Lucas');

// callback function

// função que está sendo como parametro para outra função

function callbackFunction(name) {
  console.log('antes de executar a funcao callback');

  name();

  console.log('Depois de executar a callback');
};


// O parametro adicionado a minha callbackFunction é outra função


callbackFunction(
  () => {
    console.log('Estou em uma callback');
  }
);