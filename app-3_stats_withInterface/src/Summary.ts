import { Analyzer, AvgGoalAnalysis, WinsAnalysis } from "./analyzers/analyzers";
import { MatchData } from "./MatchReader";
import {
	ConsoleReport,
	HtmlReport,
	OutputTarget,
} from "./outputTarget/OutputTarget";

export class Summary {
	private _matchData: MatchData[] = [];

	constructor(private analyzer: Analyzer, private outputTarget: OutputTarget) {}

	public static WinAnalysisConsoleReport(teamName: string): Summary {
		return new Summary(new WinsAnalysis(teamName), new ConsoleReport());
	}
	public static AvgGoalAnalysisConsoleReport(teamName: string): Summary {
		return new Summary(new AvgGoalAnalysis(teamName), new ConsoleReport());
	}

	public static WinAnalysisHtmlReport(teamName: string, filename?: string) {
		if (!filename) {
			filename = "report";
		}
		return new Summary(new WinsAnalysis(teamName), new HtmlReport(filename));
	}

	public static AvgGoalAnalysisHtmlReport(teamName: string, filename?: string) {
		if (!filename) {
			filename = "report";
		}
        return new Summary(new AvgGoalAnalysis(teamName), new HtmlReport(filename))
	}

	private buildReport(): string {
		return this.analyzer.run(this._matchData);
	}

	private printReport(report: string): void {
		this.outputTarget.print(report);
	}

	public buildAndPrintReport(matchData: MatchData[]): void {
		this._matchData = matchData;
		this.printReport(this.buildReport());
	}
}
