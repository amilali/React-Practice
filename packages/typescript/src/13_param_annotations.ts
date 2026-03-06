// param annotation is just the type we give it to parameter
// type num = (number | string)[];
type num = Array<number | string>


// type user = [number,number]; --> tuples

const user12 = ['Amil', 'Rohit', 'Shreyansh'] as const;
type userName12 = (typeof user12)[number];
function test12(num : userName12):userName12{
    return num;
}
// test12('Amil');