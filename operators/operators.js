/* Expressões e Operadores

-Expressions
-Operators
  Binary
  Unary
  Ternary
*/



/* 
  new

  * left-hand-side expression
  *criar um novo objeto


*/


let name = new String('Pablo');
let age = new Number(26);
name.surName = 'de Paula';
let date = new Date('2023-12-25');

console.log(name.surName, age);

console.log(date);



/* 
  Operadores unarios
  typeof
  delete
*/

const person = {
  name: 'Gabriel',
  age: 17,
};

delete person.age;

console.log(person);


console.log(typeof person);

// operadores aritimeticos

// multiplicacao *
console.log(3.2 * 5);

// divisao
console.log(12 / 2);

// soma +
console.log(25 + 32);

// subtração - 
console.log(57 - 22);

// resto da divisao %

let remainder = 11 % 3;
console.log(remainder);

// incremento ++
let increment = 0;
increment++;
increment++;
increment++;

console.log(increment);

console.log(++increment);

// decrement --

let decrement = 10;
decrement--;
console.log(decrement);
console.log(--decrement);
console.log(--decrement);
console.log(--decrement);
console.log(--decrement);

// exponencial(elevado) **

console.log(4 ** 4);

