interface result<T>{
    data:T|null
    error:string|null
}

function fetch<T>(url:string):result<T>{
    url
    return {
        data:null,
        error:null
    }
}

interface User{
    username:string
}
interface Product{
    title:string
}

let res=fetch<User>("url")