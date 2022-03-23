// type annotation and type inference in functions
// const add = (a: number, b: number): number => {
// 	return a + b;
// };
// const add = (a: number, b: number) => { //can also be written like this
// 	return a + b;
// };

// const logMessage = (msg: string): void => {
// 	console.log(msg);
// };

// const throwError = (msg: string): never => {
// 	throw new Error(msg);
// };

// const forecast = {
// 	date: new Date(),
// 	weather: "sunny",
// };

// console.log(forecast);

// destructuring
// const {date, weather} = forecast
// console.log("date:",date)
// console.log("weather:",weather)

// destructuring in functions
// const logWeather1 = ({ date, weather }: { date: Date; weather: string }) => {
// 	console.log("-------Log Weather 1--------");
// 	console.log("date: ", date);
// 	console.log("weather: ", weather);
// };

// type Weather = {
// 	date: Date;
// 	weather: String;
// };

// const logWeather2 = ({ date, weather }: Weather) => {
// 	console.log("-------Log Weather 2--------");
// 	console.log("date: ", date);
// 	console.log("weather: ", weather);
// };

// logWeather1(forecast);
// logWeather2(forecast);
