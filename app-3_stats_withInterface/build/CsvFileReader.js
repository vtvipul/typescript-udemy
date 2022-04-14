"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this._data = [];
    }
    read() {
        this._data = fs_1.default
            .readFileSync(this.filename, { encoding: "utf-8" })
            .split("\n")
            .map((row) => row.split(","));
    }
    get data() {
        if (!this._data.length) {
            this.read();
        }
        return this._data;
    }
}
exports.CsvFileReader = CsvFileReader;
