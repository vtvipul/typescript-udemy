export const stringToDate = (stringDate: string): Date => {
	// 10/08/2018

	const dateAsList = stringDate
		.split("/")
		.map((datePart) => parseInt(datePart));

	return new Date(dateAsList[2], dateAsList[1] - 1, dateAsList[0] + 1);
};

export const stringToResult = (result: string) => {
    
};
