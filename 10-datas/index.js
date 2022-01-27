//retornando a data atual
const now = new Date();
console.log(now);

//definindo uma data específica - hora definida para meia-noite
const win95Launch = new Date(1995, 7, 24);
console.log(win95Launch);

const demoDate = new Date();
demoDate.setMonth(0);
console.log(demoDate);

console.log(`Day of week: ${demoDate.getDay()}`);
console.log(`Date: ${demoDate.getDate()}`);
