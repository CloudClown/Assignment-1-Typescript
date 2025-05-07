# TypeScript Concepts Explained

## 1. What are some differences between interfaces and types in TypeScript?

Lets understand whats interface is, interface and type both are like brothers. They define a structure of a object to enforce type safety.
basically **interface is good for objects**, when you want create object for that you can use interface. we can extend interface with another interface!
when we create class its better to use interface.

lets see an example:

```ts
interface User {
  name: string;
  age: number;
}

const person: User = {
  name: "Jax",
  age: 27
}
```

Now let's talk about type.
Type is more flexible than interface. You can use type for union, intersection, primitives, functions, and also for object shape.

example:

```ts
type ID = string | number;

type Product = {
  name: string;
  price: number;
}
```

One key difference – we can extend interface using extends, and type using & (intersection).

```ts
interface A {
  name: string;
}

interface B extends A {
  age: number;
}

type C = {
  name: string;
}

type D = C & {
  age: number;
}
```

In short –
✅ Use interface for object shapes and class contracts.
✅ Use type when you need more power like union or function signature.
both are great, use based on your needs!

---

## 2. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Enums are used to give friendly names to constant values.
Instead of using magic strings or numbers everywhere, we can use enums to make our code more readable and clean.

there are 2 types of enums: **numeric** and **string** enums.

### numeric enum example:

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Left;
console.log(move); // 2
```

by default, enum starts from 0 and increase by 1.
you can also set custom numbers:

```ts
enum Status {
  Pending = 1,
  Approved = 3,
  Rejected = 5
}
```

### string enum example:

```ts
enum Role {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"
}

let userRole: Role = Role.Admin;
console.log(userRole); // "ADMIN"
```

string enums are helpful when you want to store exact text or send readable values to backend or frontend.

In short –
✅ Use enums to avoid hardcoded values.
✅ Use numeric for simple index based, string for readable and fixed text values.
