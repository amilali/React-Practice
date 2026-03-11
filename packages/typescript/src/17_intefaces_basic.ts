// interface -> named shape for object
// good for modelling the object

interface User12345 {
    id: string;
    name: string;
    email?: string;
    readonly createdDate: Date; // raedonly this cannot be reassign.
}

const user133: User12345 = {
    id: 'wdnviwenviw',
    name: 'Amil',
    createdDate: new Date
}
// inheritance with interface
interface Admin12 extends User12345{
    permission: string
}

const admin122 : Admin12 = {
    id: 'wdnvwenviw',
    name: 'Admin',
    createdDate: new Date,
    permission: 'guest'
}

// multiple inheritance with extends

interface withMeta {
    meta : {
        active: boolean
    }
}

interface adminwithMeta extends Admin12, withMeta{
}


const user119: adminwithMeta = {
    id: 'wdnvwenviw',
    name: 'Admin',
    createdDate: new Date,
    permission: 'guest',
    meta: {
        active: true
    }
}