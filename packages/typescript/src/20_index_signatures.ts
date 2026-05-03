type producerDetails = {
    [agentId: string] : number
}

const producerData : producerDetails = {};

producerData['agentid'] = 123123123;

// Alternative way to define index sinatures is 
// "Recod" utility type in ts, it is built in utility type
// that create object type with specific key type and value type.

const producerData1 : Record<string, number> = {};
producerData1['agentid'] = 123123123;

// you can also play with other type like unions and intersection.

type agentType = Record<'EA' & 'IA' & 'PPCOE' & 'ATSC' & 'CCC', number> // tight copuling

const data1 : agentType = {
    'EA': 105102
}

type agentType1 = Record<'EA' | 'IA' | 'PPCOE' | 'ATSC' | 'CCC', number> // loose coupling

const data : agentType1 = {
    'EA': 105102,
} // you will get error coz union in record expect to have all value.

/* note: 
Union (|):
In the context of Record, it means the object must include all keys 
from the union because Record maps each key in the union to the value type.


Intersection (&):
Represents a type that must be all of the specified types simultaneously.
For string literal types, an intersection resolves to never because no string
can satisfy multiple literal types at the same time.

*/