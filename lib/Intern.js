//require Employee parent class
const Employee = require('./Employee');

//extend parent class
class Intern extends Employee  {
    constructor (name, id, email, school) {
        //use employee constructor
        super (name, id, email); 
        //added school to Intern constructor
        this.school = school; 
    }

    //return school
    getSchool () {
        return this.school;
    }

    //override Employee getRole() to return "Intern"
    getRole () {
        return "Intern";
    }
}

module.exports = Intern; 