// tuples can be fixed length and types

const amil: [number , string] = [1, 'ali']

// optional tuples
type x = [status: number, message?:string]

const y : x = [200]

// readonly tuples
const corners: readonly [number,number] = [20,20];
// corners.pop() --> not allowed as it is readonly.