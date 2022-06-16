class Person {
    constructor(public name:string){}
}


function echo<T extends Person>(value:T):T{
return value
}


  echo(new Person("amine"))