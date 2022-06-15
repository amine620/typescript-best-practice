function calculate(income:number,tax:number):number{
   if(income <5000 && tax==0)
    return income*1.2
   return income*1.3
}

calculate(11,1)