let erroEncontrado = null;
try {
  let obj = undefined;
  console.log(obj);
  console.log(obj.propriedade); //não existe em objeto undefined
  console.log("Olá mundo!");
  erroEncontrado = false;
} catch (erro) {
  //erro que será exibido para o usuário
  console.log("[Mensagem de Erro]");
  console.log(erro);
  erroEncontrado = true;
} finally {
  //sempre será executado
  console.log("finalizar software");
  erroEncontrado = null;
}
console.log(erroEncontrado);
