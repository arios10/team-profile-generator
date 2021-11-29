//require Employee parent class
const Employee = require("./Employee");

//extend parent class
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github; 
    }

    //return github acc
    getGithub() {
        return this.github;
    }
     //override Employee getRole() method to return "Engineer"
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer; 