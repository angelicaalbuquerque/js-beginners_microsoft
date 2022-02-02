// ==> Criando um objeto em JavaScript
const book = {
  title: "Becoming",
  author: "Michele Obama",
  isAvailable: false,

  checkIn: function () {
    this.isAvailable = true;
  },

  checkOut: function () {
    this.isAvailable = false;
  },
};

// ==> Uso do construtor: new
const book2 = new Object();
book2.title = "Tranny";
book2.author = "Laura Jane Grace";
book2.isAvailable = false;
