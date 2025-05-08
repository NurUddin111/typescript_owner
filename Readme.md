Q-01: What are some differences between interfaces and types in TypeScript?

Both of them these methods are used to define structure of objects. But there are some differences between them. Here is a few:

 1. Using interface we can apply inheritance method easily which is quite tough to do with types.
 2. Interface is best for object shapes while type can do objects,primitives,union etc.
 3. If we declare two or more interfaces using similar name the property inside them will merge automatically . But type can't do that. 

Q-02:What is the use of the keyof keyword in TypeScript? Provide an example.

It creates a union type of all property keys in an object type.We can write functions that work with any object.It works well with mapped types.

Example:

type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person; // Output: "name" | "age"