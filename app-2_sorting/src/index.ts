import { NumbersCollection } from "./collections";

// sorting number array
const numberCollection = new NumbersCollection([10, 4, -1, 0, 5, -2]);
numberCollection.sort();
console.log(numberCollection.collection);

// // sorting strings
// const charectersCollection = new CharectersCollection("Xaaya");
// charectersCollection.sort();
// console.log(charectersCollection.collection);

// // sorting LinkedList
// const linkedList = new LinkedList();
// for (let v of [10, 4, -1, 0, 5, -2]) {
// 	linkedList.add(v);
// }
// linkedList.sort();
// linkedList.print();
