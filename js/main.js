///////////////////
// ----- ex 1------
//--- Book---
let book = new Book("Pride and prejudice", "J.Osten", 2015, 50);
book.displayDetales();
console.log("the vat is: " + book.showVat());
console.log(`book name is: ${book.name}`);
let book1 = new Book("Narnia", "C.S.Lewis", 1970, 100);
book1.displayDetales();
console.log("the vat is: " + book1.showVat());
console.log(`book name is: ${book1.name}`);
let book2 = new Book("Cosmic Trilogy", "C.S.Lewis", 1992, 250);
book2.displayDetales();
console.log("the vat is: " + book2.showVat());
console.log(`book name is: ${book2.name}`);
