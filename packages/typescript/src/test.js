/** @type {Array} */
const user007 = [
{
    id: 1,
    name: 'Amil'
},
{
    id: 2,
    name: 'Ram'
}
]
/** @param {number} id */
const convertToUpperCase = (id) => {
    const userName = user007.find((e)=>e.id === id);
    return userName?.name.toUpperCase() ?? "Not found";
}


console.log(convertToUpperCase(2));