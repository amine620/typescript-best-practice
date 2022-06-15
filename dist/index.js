"use strict";
class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    get fullName() {
        return this.fname + " " + this.lname;
    }
}
class Student extends Person {
    constructor(fname, lname) {
        super(fname, lname);
    }
    get fullName() {
        return "Student " + super.fullName;
    }
}
class Teacher extends Person {
    constructor(fname, lname) {
        super(fname, lname);
    }
    get fullName() {
        return "Teacher " + super.fullName;
    }
}
printNames([
    new Student("amine", "mourid"),
    new Teacher("salim", "mourid"),
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
//# sourceMappingURL=index.js.map