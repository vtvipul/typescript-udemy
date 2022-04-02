import "reflect-metadata";
import { Methods } from "./Methods";
import { AppRouter } from "../../AppRouter";

export function controller(prefix: string) {
	return function (target: Function) {
		const router = AppRouter.getInstance();

		for (let key in target.prototype) {
			const routeHandler = target.prototype[key];
			const path = Reflect.getMetadata("path", target.prototype, key);
			const method:Methods = Reflect.getMetadata("method", target, key)

			if (path) {
				router[method](`${prefix}${path}`, routeHandler);
				// router["get"](`${prefix}${path}`, routeHandler);
			}
		}
	};
}
