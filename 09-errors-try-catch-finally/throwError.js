let i = 0;

while (i < 3) {
  try {
    console.log("Iniciando calculadora que não divide por 0");
    let input = 0;
    if (input === 0) {
      //estourando propositalmente o erro
      throw "Valor negado";
    }
    let res = 5 / input; //nunca executará por causa da linha 7
  } catch (e) {
    i++;
  } finally {
    console.log("Finalizando calculadora \n");
  }
}
