class Person{
   constructor(public fname:string,public age:number){}
   walk(){
    console.log('walking');
    
   }
   get fullName(){
     return this.fname+" "+this.age
   }
}

// class Student extends Person{
//     constructor(public studentId:number,fname:string,age:number){

//         super(fname,age)
//     }
//     taketest(){
//         console.log("taking test");
        
//     }
// }

// let student=new Student(111,"amine",25)

class Teacher extends Person{
   override get fullName(){
    return "Teacher "+super.fname
  }
}

let teacher=new Teacher('amine',25)

console.log(teacher.fullName);
