interface NormalDate {
	Day: number;
	Month: number;
	Year: number;
}

class Today implements NormalDate {
	Day: number;
	Month: number;
	Year: number;

	constructor() {
		const date = new Date();
        
		this.Month = date.getMonth();
		this.Day = date.getDate();
		this.Year = date.getFullYear();
	}

	showJson() {
		console.log(JSON.stringify(this));
	}

	show() {
		console.log(`${this.Day}/${this.Month}/${this.Year}`);
	}
}

const today = new Today();
today.show();
today.showJson();
