// similar to object interface
// union (A | B)
// intersection (A & B)

const a112 : number = 10;

const a13 : number | string = 10;

const a14 : number | number[] = [];

type A15 = {
    id: string,
    email: string
}

const a15 : A15 ={
    id: '123',
    email: 'amil@gmail.com'
}
// it can represent any type
type a16 = "pending" | "success" | "failed";

function a160(a: a16){
    switch (a) {
        case "success":
        case "failed":
        case "pending":
        default:
            break;
    }
}

type A18 = {
    phone: number
}
type A19 = A18 & A15  // we merge two type just like extend we do in interface

const a20: A19 = {
    id: '',
    email: '',
    phone: 1
}