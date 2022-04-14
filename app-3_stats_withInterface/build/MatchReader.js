"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = exports.MatchResult = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("./utils");
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this._matchData = [];
    }
    static MatchReaderFromCsvFile(filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    }
    load() {
        this._matchData = this.reader.data.map((row) => {
            return [
                (0, utils_1.stringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
    get matchData() {
        if (!this._matchData.length) {
            this.load();
        }
        return this._matchData;
    }
}
exports.MatchReader = MatchReader;
