class Person{
   constructor(public name:string,public age:number){

   }
   walk(){
    console.log('walking');
    
   }
}

class Student extends Person{
    constructor(public studentId:number,name:string,age:number){

        super(name,age)
    }
    taketest(){
        console.log("taking test");
        
    }
}

let student=new Student(111,"amine",25)
