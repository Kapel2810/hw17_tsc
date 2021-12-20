class Book {
    name: string
    writer: string
    edition: number
    price: number

    constructor (
        name: string, 
        writer: string,
        edition: number,
        price: number
        ){
            this.name = name
            this.writer = writer
            this.edition = edition
            this.price = price
    }

    displayDetales (){
        console.log(this)
    }
    showVat (){
        let vat = this.price* 0.17
        return (vat) 
    }
}