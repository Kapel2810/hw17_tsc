class Parfume {
    constructor(name, company, size, gender, price) {
        this.name = name;
        this.company = company;
        this.size = size;
        this.gender = gender;
        this.price = price;
    }
    displayDetales() {
        document.write(`<hr> parfume name is: ${this.name} <br> 
                         parfume company is: ${this.company} <br> 
                         parfume size is: ${this.size} ml <br> 
                         parfume gender is: ${this.gender} <br> 
                         parfume price is: ${this.price} nis <br>`);
    }
    generateVat() {
        let vat = this.price * 0.17;
        return vat;
    }
}
