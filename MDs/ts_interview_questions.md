# TypeScript & React Interview Prep: Top 30 Core Concepts

This document contains 30 of the most frequently asked TypeScript interview questions gathered from the topics covered in modern TS mastery courses, including the one linked. It covers fundamental concepts, advanced type system features, and React integration. It is designed to test your knowledge through definitions, conceptual explanations, and output-based code snippets.

---

## 1. What is TypeScript?

**Question:** Explain what TypeScript is and how it acts like a "security guard" for your code.
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**
TypeScript is a strict syntactical superset of JavaScript that adds optional static typing to the language. It acts as a "security guard" by providing type checks during the development process (at compile-time) rather than at runtime. It analyzes your code to ensure you are using the correct types, calling existing methods, and avoiding common mistakes like typos or passing undefined variables, catching errors long before the code reaches production execution.
</details>

---

## 2. Type Inference vs Explicit Annotation

**Question:** What does "types by inference" mean, and when is it beneficial to let TypeScript infer types versus explicitly annotating them?
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**
**Type Inference** means TypeScript automatically determines the type of a variable based on the value assigned to it during initialization (e.g., `let num = 10;` is strictly inferred as a `number`).

- **When to infer:** You should rely on inference for simple variables and standard assignments. Over-annotating (e.g., `let num: number = 10;`) adds unnecessary noise to your code.
- **When to annotate:** You must explicitly annotate when the type is not obvious (like function parameters and return types), when a variable is declared without an initial value, or when a variable could legitimately hold multiple types (e.g., a union of `string | number`).

</details>

---

## 3. Output: Type Inference

**Question:** Will this code compile successfully?

```typescript
let message = "Hello World";
message = 42;
```

<details>
<summary><b>View Answer (Output & Explanation)</b></summary>

**Output:**

```text
Error: Type 'number' is not assignable to type 'string'.
```

**Explanation:**
Even though no explicit string type was provided, TypeScript inferred `message` to be of type `string` because of its initial assignment. Reassigning it to a number violates that strictly inferred type.
</details>

---

## 4. Basic Primitive Types

**Question:** What are the basic primitive types in TypeScript?
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**
The primary primitive types correspond strictly to JavaScript primitives:

- `string`: Text values (e.g., `"Hello"`).
- `number`: Numeric values, both integers and floats (e.g., `42`, `3.14`).
- `boolean`: True/false values (e.g., `true`, `false`).
- `null`: Represents the intentional absence of any object value.
- `undefined`: Represents a variable that has not been assigned a value.
- `symbol`: Unique and immutable primitive values.
- `bigint`: Arbitrarily large integers.

</details>

---

## 5. Special Types: `any` vs `unknown`

**Question:** Compare and contrast the `any` and `unknown` types.
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**

- **`any`**: Tells TypeScript to completely disable type checking for that value. You can access any property or call it as a function without compile errors. It should be avoided whenever possible, as it totally defeats the purpose of using TypeScript.
- **`unknown`**: Represents a value whose type is not yet known. Like `any`, it can hold any value, but it is **safer**. TypeScript will force you to do a type-check (narrow the type) before you are allowed to perform operations or call methods on an `unknown` variable.

</details>

---

## 6. Output: The safety of `unknown`

**Question:** Which of these function calls will cause a compile-time error?

```typescript
function processAny(val: any) {
  val.toLowerCase();
}

function processUnknown(val: unknown) {
  val.toLowerCase();
}
```

<details>
<summary><b>View Answer (Output & Explanation)</b></summary>

**Output:**

```text
Error in `processUnknown`: 'val' is of type 'unknown'.
```

**Explanation:**
`processAny` compiles perfectly (even if it ends up crashing at runtime) because `any` explicitly turns off TS checks. `processUnknown` triggers a compile error because you cannot call methods on an `unknown` type until you explicitly narrow it (e.g., `if (typeof val === "string") { val.toLowerCase(); }`).
</details>

---

## 7. Special Types: `void` vs `never`

**Question:** What is the difference between `void` and `never` when used as return types?
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**

- **`void`**: Used when a function executes successfully but does not return a value (e.g., a function that just logs to the console). It technically returns `undefined` under the hood in JavaScript.
- **`never`**: Used when a function **never** successfully completes its execution. This happens in functions that always throw an error (`throw new Error()`) or contain an infinite loop (`while(true) {}`).

</details>

---

## 8. Modeling Object Properties

**Question:** How do you define required, optional, and read-only properties in a TypeScript object or interface?
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**

- **Required**: Declared with just the property name and type (e.g., `id: string;`).
- **Optional**: Appending a `?` after the property name (e.g., `email?: string;`). If omitted, the value will be `undefined`.
- **Read-only**: Prepended with the `readonly` keyword (e.g., `readonly id: string;`). This prevents the property from being mutated after initialization.

</details>

---

## 9. Output: Read-only limitations

**Question:** Will this code compile?

```typescript
interface User {
  readonly id: number;
  name: string;
}

const user: User = { id: 1, name: "Alice" };
user.name = "Bob";
user.id = 2;
```

<details>
<summary><b>View Answer (Output & Explanation)</b></summary>

**Output:**

```text
Error: Cannot assign to 'id' because it is a read-only property. // Fails on line 8
```

**Explanation:**
Mutating the required `name` property is perfectly fine, but attempting to reassign the `readonly id` property will be blocked by the TypeScript compiler.
</details>

---

## 10. Type Assertions

**Question:** What are "assertions" (using `as`) in TypeScript, and when should they be used?
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**
Type Assertions are a way to tell the TypeScript compiler, "Trust me, I know what type this value is better than you do." You use the `as Type` syntax (e.g., `const myCanvas = document.getElementById("canvas") as HTMLCanvasElement;`).
They are typically used when fetching data from external APIs or selecting DOM elements, where TypeScript only knows the base type (like `HTMLElement`), but you know the specific subclass interacting with it.
</details>

---

## 11. Union Types

**Question:** Explain what "Union types" are and how they are used.
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**
Union types allow a value to be one of several different types. They are denoted using the pipe `|` symbol. For example, `let status: "success" | "error" | "loading";`. They are used to model data that has flexible but strictly defined constraints (like a variable that can be either a `string` or a `number`).
</details>

---

## 12. Intersection Types

**Question:** What are "Intersection types" and how do they differ from Unions?
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**
Intersection types (`&`) combine multiple, disparate types into a single type that must completely satisfy **all** of the joined types. While a union (`A | B`) means the value can be *either* A or B, an intersection (`A & B`) means the value must be *both* A and B simultaneously (containing all properties from both object shapes explicitly).
</details>

---

## 13. Output: Intersections

**Question:** Will the `obj` declaration compile?

```typescript
type HasName = { name: string };
type HasId = { id: number };

type User = HasName & HasId;

const obj: User = {
  name: "John"
};
```

<details>
<summary><b>View Answer (Output & Explanation)</b></summary>

**Output:**

```text
Error: Property 'id' is missing in type '{ name: string; }' but required in type 'User'.
```

**Explanation:**
Because `User` is an intersection of `HasName` and `HasId`, any object of type `User` must provide both a `name` and an `id`.
</details>

---

## 14. Arrays vs Tuples

**Question:** Describe how to work with arrays and tuples in TypeScript and highlight the difference.
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**

- **Arrays**: A collection of elements of a single type (or a specific union). They have a flexible length. Defined as `type[]` or `Array<type>` (e.g., `number[]`).
- **Tuples**: A rigidly structured array where the **exact length** and the **type of every specific element at a specific index** are known and defined upfront. Defined using brackets: `[string, number]` represents a tuple that must have exactly two elements: a string first, and a number second.

</details>

---

## 15. Interfaces vs Type Aliases

**Question:** What are the key differences between `interface` and `type` in TypeScript?
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**

- **Interfaces**: Primarily designed to define the shape of an object. They are extensible; if you declare two interfaces with the same name in the same scope, they automatically merge their properties together (Declaration Merging). They are generally preferred for public APIs or class contracts.
- **Type Aliases**: Highly versatile. They can define object shapes, but can also define primitives, Union types, Intersection types, and Tuples. They are strict; you cannot redeclare or "merge" a `type` alias.

</details>

---

## 16. Output: Interface Merging

**Question:** Does this code contain an error?

```typescript
interface Car { wheels: number; }
interface Car { brand: string; }

const myCar: Car = {
  wheels: 4,
  brand: "Toyota"
};
```

<details>
<summary><b>View Answer (Output & Explanation)</b></summary>

**Output:**

```text
Compiles successfully! No output errors.
```

**Explanation:**
Unlike `type` aliases, `interface` supports **declaration merging**. Because both instances of `Car` are interfaces, TypeScript silently merges their properties together, meaning a `Car` object successfully requires both `wheels` and a `brand`.
</details>

---

## 17. Generics

**Question:** Explain what "generics" are in TypeScript.
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**
Generics allow you to create reusable components, functions, or classes that work gracefully over a variety of types, while retaining strict type-safety. Think of Generics as variables for types; just like a normal function accepts arguments as values, Generics allow functions/classes to accept *Types* as arguments, commonly denoted by placeholders like `<T>`.
</details>

---

## 18. Output: Generic Function Inference

**Question:** What is the inferred type of `result`?

```typescript
function echo<T>(value: T): T {
  return value;
}

const result = echo("Hello TypeScript");
```

<details>
<summary><b>View Answer (Output & Explanation)</b></summary>

**Output:**

```text
The variable `result` is of type `"Hello TypeScript"` (or `string`).
```

**Explanation:**
While calling `echo<string>("Hello")` is perfectly valid, TypeScript is smart enough to infer the type parameter `<T>` directly from the provided argument `"Hello TypeScript"`.
</details>

---

## 19. Generic Constraints

**Question:** What are generic constraints, and how do you use them?
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**
Sometimes you want a generic function to accept a variety of types, but you still need those types to have certain mandatory properties. You "constrain" the generic type using the `extends` keyword.
For example: `function getLength<T extends { length: number }>(item: T)`. This means `<T>` can be *any type in the world*, as long as it has a generic `length` property of type `number` (like Arrays, Strings, or custom objects).
</details>

---

## 20. Utility Types: `Partial`, `Pick`, and `Omit`

**Question:** How do the `Partial`, `Pick`, and `Omit` utility types manipulate object interfaces?
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**

- **`Partial<T>`**: Takes an interface `T` and returns a new type where *every* property has been made optional (`?`).
- **`Pick<T, Keys>`**: Creates a new type by selecting a specific set of `Keys` from interface `T`.
- **`Omit<T, Keys>`**: Creates a new type by stripping out a specific set of `Keys` from base interface `T`.

</details>

---

## 21. Utility Types: `Record`, `Exclude`, and `Extract`

**Question:** How do the `Record`, `Exclude`, and `Extract` utility types function?
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**

- **`Record<Keys, Type>`**: Creates an object type whose property keys are of type `Keys` and values are of type `Type` (e.g., `Record<string, number>` creates a dictionary map of numbers).
- **`Exclude<UnionType, ExcludedMembers>`**: Constructs a new union type by filtering *out* (removing) specific members from an existing Union.
- **`Extract<UnionType, ExtractedMembers>`**: The absolute opposite of Exclude; constructs a new union by extracting only those types that are strictly assignable to `ExtractedMembers`.

</details>

---

## 22. Utility Types: `NonNullable` and `Awaited`

**Question:** What are the `NonNullable` and `Awaited` utilities used for?
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**

- **`NonNullable<T>`**: Removes `null` and `undefined` from a union type `T`, ensuring the value must be defined.
- **`Awaited<T>`**: Unwraps a Promise, resolving the type it eventually resolves to. If `T` is `Promise<string>`, `Awaited<T>` collapses down to simply `string`.

</details>

---

## 23. OOP Access Modifiers

**Question:** Discuss the OOP access modifiers in TypeScript (`private`, `protected`, `public`).
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**

- **`public`** (default): Properties/methods are freely accessible from anywhere.
- **`private`**: Properties/methods can *only* be accessed or modified from inside the exact class that defines them.
- **`protected`**: Properties/methods can be accessed by the defining class, as well as any subclasses that explicitly extend it.

</details>

---

## 24. React: Creating a TS Project

**Question:** How do you set up a new React project with strict TypeScript settings?
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**
If using Vite, you execute `npm create vite@latest my-app -- --template react-ts`.
If using Create React App (deprecated but common), you use `npx create-react-app my-app --template typescript`.
This generates a `tsconfig.json` file inside your project root containing compiler options. Having `"strict": true` ensures deep type safety across your React files (which securely use the `.tsx` extension).
</details>

---

## 25. React: Typing Component Props

**Question:** How do you define strictly typed Props in a functional React component?
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**
You define an `interface` or `type` describing the properties the component expects. You then annotate the function parameters.

```tsx
type ButtonProps = {
  text: string;
  onClick: () => void;
  isDisabled?: boolean; // Optional prop
};

const Button = ({ text, onClick, isDisabled = false }: ButtonProps) => {
  return <button onClick={onClick} disabled={isDisabled}>{text}</button>;
};
```

</details>

---

## 26. Output: React Specific Typing

**Question:** What is the typical TypeScript interface type representing React "children" (nested elements inside a component)?

```tsx
type LayoutProps = {
  children: ???
}
```

<details>
<summary><b>View Answer (Output & Explanation)</b></summary>

**Output / Explanation:**
You would ideally use `React.ReactNode`.

```tsx
type LayoutProps = {
  children: React.ReactNode; 
}
```

`ReactNode` is a broad union type provided by React's standard type definitions that accepts Strings, Elements, Arrays, Null, Booleans, and Fragments—essentially anything React can validly render to the DOM tree.
</details>

---

## 27. React: Typing `useState`

**Question:** How does TypeScript interact with the `useState` hook?
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**
Most of the time, TypeScript relies directly on inference: `const [count, setCount] = useState(0)` accurately infers `count` as a `number`.
If the initial state is empty or could be `null`, you must provide a generic type parameter bracket:

```tsx
const [user, setUser] = useState<User | null>(null);
```

</details>

---

## 28. React: Typing DOM Events

**Question:** How do you type events, such as an `onChange` event in an input field?
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**
React provides specific synthetic event types globally. For an input field change, you use `React.ChangeEvent<HTMLInputElement>`. For a form submission, or a button click, you use `React.FormEvent<HTMLFormElement>` or `React.MouseEvent<HTMLButtonElement>`.

```tsx
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
}
```

</details>

---

## 29. React: Typing `useReducer`

**Question:** How do you type state and actions when using the `useReducer` hook?
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**
You create an interface for the overall globally-passed State shape, and a Discriminated Union type for the Actions.

```tsx
type State = { count: number };
type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset', payload: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    // TypeScript will warn you if you misspell a type, or access a payload that doesn't exist on that specific action branch
  }
}
```

</details>

---

## 30. React: Typing `useContext`

**Question:** How do you set up and type React's Context API with `useContext`?
<details>
<summary><b>View Answer (Explanation)</b></summary>

**Explanation:**
You declare an Interface defining everything stored in the context, and pass that as a Generic argument to `createContext`. You often have to logically handle the possibility of the context being `null` initially before the Provider injects distinct values.

```tsx
type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

// Create Context (can initially be null if used outside provider)
const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {
  const themeData = useContext(ThemeContext);
  // TypeScript strictly forces you to check if themeData exists before using it
  if (!themeData) throw new Error("Must be inside ThemeProvider");
  return <div>{themeData.theme}</div>;
}
```

</details>
