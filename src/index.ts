interface Employee{
    id:number,
    name:string,
    retire:(date:Date)=>void
}



let meployee:Employee={
    id:1,
    name:"amine",
    retire:(date:Date)=>{
        console.log(date);
        
    }
    
}