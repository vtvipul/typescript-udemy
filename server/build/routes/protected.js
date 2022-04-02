"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
exports.router = router;
var requireAuth = function (req, res, next) {
    if (req.session && req.session.isLogged) {
        next();
        return;
    }
    else {
        res.status(403).send("\n<div>\n    <h1>You are forbidden to access this page without logging in.</h1>\n</div>\n<div>\n    <h2>Here, <a href=\"/login\">Login</a> to access.</h2>\n</div>\n");
    }
};
router.get("/", requireAuth, function (req, res) {
    res.send("\n<div>\n    <h1>Welcome to PROTECTED page, authenticated user!</h1>\n    <div>\n        <h2>Wanna, <a href=\"/logout\">Logout</a></h2>\n    </div>\n</div>\n    ");
});
