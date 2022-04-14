import fs from "fs";

export interface OutputTarget {
	print(report: string): void;
}

export class ConsoleReport implements OutputTarget {
	print(report: string): void {
		console.log(report);
	}
}

export class HtmlReport implements OutputTarget {
	constructor(public filename: string = "report") {}

	print(report: string): void {
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
		fs.writeFileSync(`${this.filename}.html`, data);
	}
}
