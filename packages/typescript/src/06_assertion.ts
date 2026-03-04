const raw = '{"id" : 1, "name": "A}';

const riskyUser = JSON.parse(raw) as { id: number, name: string };
console.log(riskyUser.name); // these above code is not going to be best practices.


// best practices in below
type User22 = {id:number, name:string};

function isUser(v:unknown): v is User22{
    return (
        typeof v === 'object' && v!== null && "id" in v &&
        typeof (v as any).id === 'number' && 'name' in v &&
        typeof (v as any).name === 'string'
    )
}


const maybe = JSON.parse(raw) as unknown;
if(isUser(maybe)){
    console.log(maybe.name);
}