// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//   * github  // GitHub username, getGithub(), getRole() // Overridden to return 'Engineer'

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub, title) {
        super(name, id, email);
        this.github = gitHub;
        this.title = "Engineer";
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return this.title;
    }
}

const x = new Engineer("asd", 1, "sadsa@asdsa", "")

module.exports = Engineer;