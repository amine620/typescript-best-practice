type bird={
    fly:()=>void
}

type fish={
    swim:()=>void
}

type Pet=bird | fish


type Days="Monday"|"Tuesday"

let user = getUser();
console.log(user?.address?.street);

