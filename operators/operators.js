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


// logical operators

// 2 valores booleanos, quando verificados
// resultara em verdadeiro ou falso

let pao = false;
let queijo = false;

// AND &&

console.log(pao && queijo);


// OR ||
console.log(pao || queijo);

// NOT !
console.log(!pao);


let x;


// assignment
x = 1;

// addition assignment
x += 2;

// subtraction assignment
x -= 1;

// multiplication assignment
x *= 2;

// division assignment
x /= 2;

// remainder, exponetiation

x %= 2;
x **= 2;
console.log(x);


// condição ternaria

let rap10 = true;
let scrambledEgg = false;

const niceBreakfast = rap10 && scrambledEgg ? 'Café bom' : 'Café ruim';

console.log(niceBreakfast);


// maior de 18

age = 19;

const canDrive = age >= 18 ? 'Can drive' : 'Cannot drive';
console.log(canDrive);


/* 
  Operator precedence 
  

  grouping ()
  negação e incremento ! ++ --
  multiplicação e divisão * /
  adição e subtração + -
  relacional < <= > >=
  igualdade == != === !==
  AND &&
  OR ||
  condicional ?:
  assignment = += -= *= %=
*/ 

console.log(3 > 2 && 2 > 1);

// Operadores de comparação

let one = 1;
let two = 2;

// == igual a
console.log(two == 1);
console.log(one == '1');

// != diferente de
console.log(one != two);
console.log(one != 1);
console.log(one != '1');

// === estritamente igual a
console.log(one === '1');
console.log(one === 1 );

// !== estritamente diferente de
console.log(two !== '2');
console.log(two !== 2);

// > maior que
console.log(one > two);
