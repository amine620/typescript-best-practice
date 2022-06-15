"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
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
//# sourceMappingURL=index.js.map