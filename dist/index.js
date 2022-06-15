"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    walk() {
        console.log('walking');
    }
    get fullName() {
        return this.name + " " + this.name;
    }
}
class Student extends Person {
    constructor(studentId, name, age) {
        super(name, age);
        this.studentId = studentId;
    }
    taketest() {
        console.log("taking test");
    }
}
let student = new Student(111, "amine", 25);
class Teacher extends Person {
    get fullName() {
        return "Teacher " + super.name;
    }
}
let teacher = new Teacher('amine', 25);
//# sourceMappingURL=index.js.map