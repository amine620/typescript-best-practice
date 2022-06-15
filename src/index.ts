function kgToLbs(weight:number|string):number{
       if(typeof weight =="number")
       {
         return weight*1
       }
       return parseInt(weight)*4
}
kgToLbs("4")