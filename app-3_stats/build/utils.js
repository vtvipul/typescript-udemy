"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToResult = exports.stringToDate = void 0;
const stringToDate = (stringDate) => {
    // 10/08/2018
    const dateAsList = stringDate
        .split("/")
        .map((datePart) => parseInt(datePart));
    return new Date(dateAsList[2], dateAsList[1] - 1, dateAsList[0] + 1);
};
exports.stringToDate = stringToDate;
const stringToResult = (result) => {
};
exports.stringToResult = stringToResult;
