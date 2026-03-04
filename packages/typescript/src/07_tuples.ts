// `as const` makes the array readonly and keeps the exact string values (literal types)
// without adding 'as const' typescript infer as string[] but after it take it as:
// readonly ['admin', 'user', 'operator']
const ROLES = ['admin', 'user', 'operator'] as const;

// typeof ROLES -> gets the type of the ROLES array
// [number] -> extracts the type of any element in that array
// Result: "admin" | "user" | "operator"
type Role = (typeof ROLES)[number];
// typeof ROLES: This extracts the type of the variable.
// [number]: why we add number as you see it is array of string means - "Give me the type of any element inside this array."
// it refer index of array

function setRole(r: Role) {
  console.log(r);
}

setRole('operator'); // ✅ allowed because it is one of the values in ROLES
setRole('admin');// ✅ allowed because it is one of the values in ROLES
setRole('user');// ✅ allowed because it is one of the values in ROLES