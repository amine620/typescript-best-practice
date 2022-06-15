class Account{
    private id:number;
    private owner:string;
    private _balance : number;

    constructor(id:number,owner:string,_balance:number){
        this.id=id
        this.owner=owner
        this._balance=_balance
    }

    diposit(amount:number):void{
       if(amount<=0){
          throw new Error('invalid amount')
       }
       this._balance+=amount
    }

    get balance():number{
        return this._balance
    }
    
    set balance(value:number){
        if(value<=0){
            throw new Error('invalid value')
         }
         this._balance=value
    }
}

let account=new Account(1,'amine',20)

 account.balance