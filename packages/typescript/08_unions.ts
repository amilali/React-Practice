// union is either this or that

const union: (number | string)[] = [1,'a'];

// functions 
function test(u: string | number){
    if(typeof u === "string") // you need to do type narrowing using typeof to use string methods
    {
        u.toUpperCase()
    }
}

// objects unions
type Admin = {Role:'Admin', Permission:true }
type Customer = {Role:'Customer', loyaltyPoints: number[]}

function checkUser(user:Admin | Customer){
    if(user.Role === "Admin")
    {
        console.log(user.Permission)
    }
    else{
        user.loyaltyPoints
    }
}

// 'in' operator
function describeUserwithOperator(u: Admin | Customer){
    if ('Permission' in u){ // we type narrowed it so tyscript think that this idf block is for Admin and else for Customer
        console.log(u.Role);
    }
    else
    {
        u.loyaltyPoints
    }
}