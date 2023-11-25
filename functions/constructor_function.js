/* 
  Function() constructor
  *expressao new
  *criar um novo objeto
  *this keyword
*/
// Por boa pratica, criar uma função construtora com maiusculo no inicio

function Person(name, age) {
  this.name = name;
  this.walk = function() {
    return "walking";
  };

  this.age = age;
};

const mayk = new Person("Mayk", 26);
const joao = new Person("Joao", 22);
console.log(`${mayk.name} have ${mayk.age} and he is ${mayk.walk()}`);
console.log(`${joao.name} have ${joao.age} and he is ${joao.walk()}`);