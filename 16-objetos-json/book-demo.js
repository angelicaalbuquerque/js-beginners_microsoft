//Objeto chamado: Livro -> Book
const book = {
  title: "Eloquent JavaScript",
  author: "Marijn Haverbeke",
  isAvailable: true,
};

//JSON stringify
const bookToJSON = JSON.stringify(book);
console.log(bookToJSON);

//JSON.parse -> voltando de JSON para objeto
const jsonToObject =
  '{"title":"Eloquent JavaScript","author":"Marijn Haverbeke","isAvailable":true}';
const book2 = JSON.parse(jsonToObject);
console.log(book2);
console.log(book2.title);
