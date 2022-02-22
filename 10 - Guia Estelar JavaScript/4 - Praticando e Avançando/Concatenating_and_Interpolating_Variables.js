//Variáveis e tipos de dados
//Declaration
let name;

//Assignment
name = "Pilu";

//que tipo de dados foi colocado na variável ?

console.log(typeof name);

// agrupamento de declarações
let age, isHuman;

age = 21;
isHuman = true;

//Multiplos Argumentos
console.log(name, age, isHuman);

//Escrita de Texto + Variáveis

//Concatenando os valores
console.log("O " + name + " tem " + age + " anos.");

// Interpolando Valores Com Template Literals or Template String
console.log(`O ${name} tem ${age} anos e é ${isHuman}`);
