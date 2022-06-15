function greet(name:string|null){
    if(name)
      console.log(name.toLowerCase());
    else
       console.log('hi');
       
}
greet(null)