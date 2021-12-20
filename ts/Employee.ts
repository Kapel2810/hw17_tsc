
class Employee {
    firstName: string
    lastName: string
    address: string
    salary: number

    constructor(
        firstName: string,
        lastName: string,
        address: string,
        salary: number
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.salary = salary
    }

    displayDetales (){
        document.write (`<hr> Employee first name is: ${this.firstName} <br>
        Employee last name is: ${this.lastName} <br>
        Employee address is: ${this.address} <br>
        Employee salary is: ${this.salary} <br>
        `)
    }

    calculateTaxReturn (){
        let tax = this.salary*0.10
        return tax
    }
}