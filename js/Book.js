class Book {
    constructor(name, writer, edition, price) {
        this.name = name;
        this.writer = writer;
        this.edition = edition;
        this.price = price;
    }
    displayDetales() {
        console.log(this);
    }
    showVat() {
        let vat = this.price * 0.17;
        return (vat);
    }
}
