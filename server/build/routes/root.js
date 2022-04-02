"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
exports.router = router;
router.get("/", function (req, res) {
    if (req.session && req.session.isLogged) {
        res.send("\n<div>\n    <div><h1>You are Logged in</h1></div>\n    <div><a href=\"/logout\">Logout</a>\n    <div><h2>Want to access protected page?</h2></div>\n    <div>Access <a href=\"/protected\">Protected</a> page\n</div>\n        ");
    }
    else {
        res.send("\n<div>\n    <div>You are NOT Logged in </div>\n    <div><a href=\"/login\">Login</a>\n</div>\n        ");
    }
});
