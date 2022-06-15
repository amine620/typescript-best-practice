class Account{
    private id:number;
    private owner:string;
    private balance : number;

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
    getBalance():number{
        return this.balance
    }
}

let account=new Account(1,'amine',20)

 account.getBalance()