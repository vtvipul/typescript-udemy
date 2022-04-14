"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = exports.ConsoleReport = void 0;
const fs_1 = __importDefault(require("fs"));
class ConsoleReport {
    print(report) {
        console.log(report);
    }
}
exports.ConsoleReport = ConsoleReport;
class HtmlReport {
    constructor(filename = "report") {
        this.filename = filename;
    }
    print(report) {
        const data = `
        <html>
            <head>
                <title>
                    Report
                </title>
            </head>
            <body>
                <div>
                    <h1>Report</h1>
                    <p>${report}</p>
                </div>
            </body>
        </html>
        `;
        fs_1.default.writeFileSync(`${this.filename}.html`, data);
    }
}
exports.HtmlReport = HtmlReport;
