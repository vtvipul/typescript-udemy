"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const analyzers_1 = require("./analyzers/analyzers");
const OutputTarget_1 = require("./outputTarget/OutputTarget");
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
        this._matchData = [];
    }
    static WinAnalysisConsoleReport(teamName) {
        return new Summary(new analyzers_1.WinsAnalysis(teamName), new OutputTarget_1.ConsoleReport());
    }
    static AvgGoalAnalysisConsoleReport(teamName) {
        return new Summary(new analyzers_1.AvgGoalAnalysis(teamName), new OutputTarget_1.ConsoleReport());
    }
    static WinAnalysisHtmlReport(teamName, filename) {
        if (!filename) {
            filename = "report";
        }
        return new Summary(new analyzers_1.WinsAnalysis(teamName), new OutputTarget_1.HtmlReport(filename));
    }
    static AvgGoalAnalysisHtmlReport(teamName, filename) {
        if (!filename) {
            filename = "report";
        }
        return new Summary(new analyzers_1.AvgGoalAnalysis(teamName), new OutputTarget_1.HtmlReport(filename));
    }
    buildReport() {
        return this.analyzer.run(this._matchData);
    }
    printReport(report) {
        this.outputTarget.print(report);
    }
    buildAndPrintReport(matchData) {
        this._matchData = matchData;
        this.printReport(this.buildReport());
    }
}
exports.Summary = Summary;
