let name, age, isHuman;

name = 'Gabriel';
age = 17;
isHuman = true;

console.log(name, isHuman, age);
// para interpolar preciso usar essas aspas diferentes
console.log(`O ${name} tem ${age} anos.`)

// Objects

const personOne = {
  name: 'Gabriel',
  age: 17,
  weight: 80,
  isAdmin: true,
};

console.log(personOne.name);
console.log(personOne.age);
console.log(personOne.weight);
console.log(personOne.isAdmin);


// Arrays

const animals = [
  'Lion',
  'Monkey',
  'Cat',
];

console.log(animals.length);



// recomendado nao usar Objects dentro de Arrays e vice-versa 
// para mais facil entendimento

