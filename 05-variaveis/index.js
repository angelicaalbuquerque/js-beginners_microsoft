//==> 1) Exemplo do uso do var, que precisa ser utilizada dentro de um escopo:

/* function imprimirNome() {
  var nome = "Rosângela Albuquerque";
  console.log("O nome da minha mãe é:", nome);
}
imprimirNome();
 */

//==> 2) Exemplo do uso do let, que é usado dentro de laços de intereção:
/* function imprimirIdade() {
  for (let idade = 31; idade <= 50; idade++) {
    console.log("Idade dentro do for:", idade);
  }
}
imprimirIdade(); */

//==> 3) Exemplo do uso do const, que não podem ser variáveis imprevisíveis:
/* function imprimirNovaIdade() {
  for (const novaIdade = 33; novaIdade <= 50; novaIdade++) {
    console.log("Idade dentro do for:", novaIdade); //TypeError: Assignment to constant variable.
  }
}

imprimirNovaIdade(); */
const pessoa = {
  nome: "Angélica Albuquerque",
  idade: 31,
};

function imprimirDadosPessoa() {
  console.log(`Nome: ${pessoa.nome} e a idade é ${pessoa.idade}`);
}

imprimirDadosPessoa();
