///////////////////
// ----- ex 1------

//--- Book---

// let book = new Book("Pride and prejudice","J.Osten",2015,50) 
// book.displayDetales()
// console.log( "the vat is: " +book.showVat())
// console.log(`book name is: ${book.name}`)

// let book1 = new Book("Narnia","C.S.Lewis", 1970, 100 )
// book1.displayDetales()
// console.log( "the vat is: " +book1.showVat())
// console.log (`book name is: ${book1.name}`)

// let book2 = new Book ("Cosmic Trilogy", "C.S.Lewis", 1992,250)
// book2.displayDetales()
// console.log("the vat is: " + book2.showVat())
// console.log(`book name is: ${book2.name}`)

////////////////////////
//======= ex2-----

//----- Parfume ----

let parfume1 = new Parfume("Christalle","Chanel",100,"female",600)
parfume1.displayDetales()
console.log ("parfume vat is: " + parfume1.generateVat())

let parfume2 = new Parfume("Alure", "Chanel", 100, "male", 650)
parfume2.displayDetales()
console.log("parfume vat is: " + parfume1.generateVat())

//-------Employee-------

let employee1 = new Employee("Robert", "Green","London",10000)
employee1.displayDetales()
console.log('the tax return is: '+ employee1.calculateTaxReturn())

let employee2 = new Employee("Harry", "Olsen","Berlin", 1500)
employee2.displayDetales()
console.log('the tax return is: '+ employee2.calculateTaxReturn())