// difference between normally declaring function and declaring them as arrow function

arrowFunction();

normalFunction();

const arrowFunction = (): void => {
	console.log("Arrow function");
};

function normalFunction(): void {
	console.log("Normal Function");
}

// here calling arrowFunction before its initilized will throw error
// whereas normalFunction can be called before initialization