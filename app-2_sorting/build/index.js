"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const numberCollection = new sorter_1.NumbersCollection([10, 4, -1, 0, 5, -2]);
const sortedNumberCollection = new sorter_1.Sorter(numberCollection);
sortedNumberCollection.sort();
console.log(numberCollection.collection);
