// Control flow

// Armazenar o máximo de dados possiveis em variaveis para melhor manipulação e entendimento deles




function fever(temperature) {

  let hightTemperature = temperature >= 37.5;
  let mediumTemperature = temperature < 37.5 && temperature >= 37 ;
  let normalTemperature = temperature < 37 && temperature >= 35.1;

  if(hightTemperature) {
    return 'Está com febre alta!';
  } else if(mediumTemperature) {
    return 'Está com febre moderada.';
  } else if(normalTemperature){
    return 'Está saudável.';
  } else {
    return 'Está com hipotermia.';
  };
};

console.log(fever(35));






function calculate(number1, operator, number2) {
  let result;

  switch(operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = number1 / number2;
      break; 
    default:
      console.log('Não implementado.');
      break;       
  };

  return result;
};

console.log(calculate(27, '%', 4));

// try catch e throw

function payBills(bills = '') {
  if(bills === false) {
    throw new Error('As contas não foram pagas.');
  } else {
    console.log('As contas foram pagas.');
  };
}

try {
  payBills(true);
} catch(e) {
  console.log(e);
}

console.log('Após minha execução.');


// Estrutura de repetição
// for
// quando sabemos o momento da parada da estrutura de repetição, usar for
// break para a execução do loop
// continue pula a execucao do momento

for(let i = 0; i <= 10; i++) {

  if(i == 6) {
    console.log(i);
    break;
  } else if(i ==3) {
    continue;
  };



  console.log(i);
};


// while
// enquanto
// quando não sabemos o momento da parada da estrutura de repetição, usar o while

let randomNum = 8584385;

while(randomNum >= 10) {

  randomNum /= 13;
  console.log(randomNum);
};


// for of
let name = 'Gabriel';

let names = ['Joao', 'Pedro', 'Filipe', 'Bruno',];

for(let name of names) {
  console.log(name);
};


// for in

let person = {
  name: 'Gabriel',
  age: 17,
  weight: 80,
};

for(let property in person) {
  console.log(property);
  console.log(person[property]);
};