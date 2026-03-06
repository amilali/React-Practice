// value must contain everything from A and B or more
// it is kind of mergining two or more types

type userName = {name: string};
type userEmail = {email: string}

type UserDetails = userName & userEmail;

const a:UserDetails = {name: 'Amil', email: 'amil@gmail.com'}

