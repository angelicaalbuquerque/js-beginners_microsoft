// Tipos de Dados

//Number
let idade = 33;
console.log(idade);

//Float
let precoMouse = 19.99;
console.log(precoMouse);

//String
let nome = "Angélica";
console.log(nome);

//Boolean
let nomeVerdadeiro = true;
console.log(nomeVerdadeiro);

let nomeFalso = false;
console.log(nomeFalso);

//Date
let dataHoje = new Date();
console.log(dataHoje);

//Function
let resultado = adicionarNumeros(5, 2);
function adicionarNumeros(num1, num2) {
  return num1 + num2;
}

console.log(resultado);

//Array
let frutas = ["Banana", "Morango", "Abacaxi"];
console.log(frutas);

//Object (bastante utilizado em request/response e CRUD)
const pessoa = {
  nome: "Angélica",
  sobrenome: "Albuquerque",
  idade: 31,
};
console.log(pessoa);

// Tipos de Dados Especiais

//NaN (é tipo number, apesar de significar Not a Number)
let num = NaN;
console.log(typeof num); //"number"
console.log(num == NaN); //falso
console.log(num === NaN); //falso

//Null
let variavelQualquer = null;
console.log(typeof variavelQualquer); //Object
console.log(variavelQualquer);

//Undefined
let carro;
carro = undefined;
console.log(carro);

//typeof
console.log(typeof 1);
console.log(typeof "Angélica Albuquerque");

//instanceof
//identifica o prototype. No caso, se a variável carro pertence a classe carro:
class Carro {}
let fusca = new Carro();
console.log(fusca instanceof Carro);

//Igualdade Estrita
console.log(20 === 20); //comparando valor e tipo
console.log("20" === 20); //comparando valor e tipo

//Igualdade Solta
console.log(20 == 20); //compara valores
console.log("1" == 1);
