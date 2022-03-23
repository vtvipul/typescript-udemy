// const carMakers = ["ford", "toyota", "chevy", "maruti", "honda", "suzuki"];

// const dates = [new Date(), new Date(), new Date()];

// //  array of arrays
// const arr2d: string[][] = [["something"], ["nothing"], ["everything"]]

// arrays with multiple types

// const people: (string | boolean)[] = ["person1", "person2", "person3", false];

// tuples
// a tuple is just like an array but here we can pre-define the order of types
// a tuple generally describes an entity through its different properties

// const cola: [string, boolean, number] = ["brown", true, 40];
// we can do same thing above with type aliases

type Drink = [string, boolean, number];

const cola: Drink = ["brown", true, 40];
const tea: Drink = ["brown", false, 10];
const limca: Drink = ["clear", true, 40];
