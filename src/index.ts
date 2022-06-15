class Person{
   constructor(public fname:string,public lname:string){}
   get fullName(){
     return this.fname+" "+this.lname
   }
}

class Student extends Person{
    constructor(fname:string,lname:string){
        super(fname,lname)
    }
    override get fullName():string {
        return "Student "+super.fullName
    }
}

class Teacher extends Person{
    constructor(fname:string,lname:string){
        super(fname,lname)
    }

    override get fullName():string {
        return "Teacher "+super.fullName
    }
}

printNames([
    new Student("john","doe"),
    new Teacher("amine","mourid"),
])

function printNames(people:Person[]) {
    for (let person of people) {
        console.log(person.fullName);
        
    }
}