function getPersonalName(name?: string):void{
    const UpperName = name ? name?.toUpperCase() : 'AMil'
    console.log(`Your name is ${UpperName}`);
}

getPersonalName();

function getPersonalName1(name: string = "Amil"):void{
    const UpperName = name ? name?.toUpperCase() : 'AMil'
    console.log(`Your name is ${UpperName}`);
}

getPersonalName1();

function getPortNumber(name: string, port?: number):void{
    const portNumber = port ?? 80; // this is nullish coalsing it will return right side value if left side is null and undefine, it won't works with '' , false and 0; however you can use || in this case.
    const UpperName = name ? name?.toUpperCase() : 'AMil'
    console.log(`Your name is ${UpperName} and portnumber is ${portNumber}`);
}

getPortNumber('Kamil');