"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
function controller(prefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata("path", target.prototype, key);
            var method = Reflect.getMetadata("method", target, key);
            if (path) {
                router[method]("".concat(prefix).concat(path), routeHandler);
                // router["get"](`${prefix}${path}`, routeHandler);
            }
        }
    };
}
exports.controller = controller;
