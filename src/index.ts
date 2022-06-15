class Account{
    readonly id:number;
    owner:string;
    balance : number;

    constructor(id:number,owner:string,balance:number){
        this.id=id
        this.owner=owner
        this.balance=balance
    }

    diposit(amount:number):void{
       if(amount<=0){
          throw new Error('invalid amount')
       }
       this.balance+=amount
    }
}

let account=new Account(1,'amine',20)

account.id=10