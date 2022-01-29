//Adding data during creation
console.log("\n********Adding data during creation********\n");
let arr1 = ["A", true, 2];
console.log(arr1[0]);
console.log(arr1[1]);

//Adding data after creation
console.log("\n********Adding data after creation********\n");
let arrayLength = 2;
let arr2 = Array(arrayLength);
arr2[0] = "Value at index 0";
console.log(arr2[0]);
console.log(arr2[1]); //No value present at index

//Length and index
console.log("\n********Length and index********\n");
let arr1 = ["A", true, 5];
console.log(arr1.length);
console.log(arr1[3]); //Doesn't exist
console.log(arr1[2]); //Last index of array
console.log(arr1[arr1.length - 1]); //Equals 2

console.log("\n********Length and index Part 2********\n");
let arr3 = Array(3); //Empty array of length 3
arr3[2] = "Adding a value!";
console.log(arr3[2]); //Last index of array
console.log(arr3[arr3.length - 1]); //Index: 2
console.log(arr3[0]); //No value yet
console.log(arr3[1]); //No value yet

//Array index
console.log(Object.keys(arr1)); //Acessa diretamente a chave do objeto
console.log(Object.values(arr1)); //Acessa diretamente o valor do objeto

//Adding data after creation
console.log("\n********Adding data after creation Part 2********\n");
let arr4 = ["Angelica", 31, true];
arr4.push("Rio de Janeiro", "Ciência da Computação");
console.log(arr4);

//with SPREAD OPERATOR
console.log("\n********SPREAD OPERATOR********\n");
let arr5 = ["A", "B"];
let arr6 = [...arr5, "C", "D"]; //mantém o estado original e adiciona os três termos
console.log(arr6);

console.log("\n********Concatenando arrays********\n");
let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numers, ...moreNumbers]; //para não sair uma lista dentro da outra, utilizo spread operator em moreNumbers
console.log(allNumbers);

console.log(
  "\n********Concatenando arrays com push e spread operator********\n",
);
let data = ["Angélica", "carioca", 31];
let moreData = ["Desenvolvedora", "Front-End", true];
data.push(...moreData);
console.log(data);
