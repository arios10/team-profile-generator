//require Employee parent class
const Employee = require('./Employee');

//extend parent class
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        //add officeNumber to constructor        
        this.officeNumber = officeNumber; 
    }

    //override Employee's getRole()
    getRole () {
        return "Manager";
    }
}

module.exports = Manager; 