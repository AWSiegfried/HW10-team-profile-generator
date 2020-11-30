// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//   * github  // GitHub username, getGithub(), getRole() // Overridden to return 'Engineer'

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub, title) {
        super(name, id, email);
        this.gitHub = gitHub;
        this.title = title;
    }
    getGithub() {
        return this.gitHub
    }
    getRole() {
        return this.title;
    }
}

modules.exports = Engineer;