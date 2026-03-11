// Interface
// used to define structure of object

interface User21 {
    name: string;
    age: number;
  }


// 1. Interface (uses extends) for inheritance
  interface Animal {
    name: string;
  }
  
  interface Dog extends Animal {
    breed: string;
  }

// 2. Interface Declaration Merging (Very Important)
  interface User23 {
    name: string;
  }
  
  interface User23 {
    age: number;
  }

// 3. Interface can't represent any type apart from object.
// interface user122 = string | number -> ❌ Error

// 4. Implementing in Classes
// Both work with classes.
// Interface
interface Animal {
  name: string;
  speak(): void;
}

class Dog implements Animal {
  name = "Tom";
  speak() {}
}

// --------------------------------------------------------------------------- //


// Type Alias
// Create a new name of any types (objects,unions,primitive etc)

type Use22r = {
    name: string;
    age: number;
  };

// 1. Type Alias (uses intersection &) for inheritance
  type Animal1 = {
    name: string;
  }
  
  type Dog1 = Animal1 & {
    breed: string;
  }

// 2. Type can't do Declaration Merging
type User24 = { name: string }
type User24 = { age: number } // ❌ Error


// 3. Type Alias Can Do More (Union, Primitive, Tuple)
// type is more powerful because it can represent any type.

  // Union Types
  type Status = "success" | "error" | "loading";

  // Primitive Alias
  type ID = string | number;

  // Tuple
  type Point = [number, number];
  // ❗ Interfaces cannot do this.


// 4. Implementing in Classes in Type Alias
// Both work with classes.
type Animal12 = {
  name: string;
  speak(): void;
}

class Dog12 implements Animal12 {
  name = "Tom";
  speak() {}
}