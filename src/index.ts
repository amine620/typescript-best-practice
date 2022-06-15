class Person{
   constructor(public name:string,public age:number){

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