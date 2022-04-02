"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("./routes/loginRoutes");
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var root_1 = require("./routes/root");
var protected_1 = require("./routes/protected");
require("./controllers/loginController");
var AppRouter_1 = require("./AppRouter");
var app = (0, express_1.default)();
// for parsing content of forms
app.use(body_parser_1.default.urlencoded({ extended: true }));
// for using cookie-session to add req.session in request
app.use((0, cookie_session_1.default)({ keys: ["some-string-value"] }));
// connecting different Routes with express application
app.use("/", loginRoutes_1.router);
app.use("/", root_1.router);
app.use("/protected", protected_1.router);
app.use("/", AppRouter_1.AppRouter.getInstance());
// starting server
app.listen(3000, function () {
    console.log("App listening on :3000");
});
