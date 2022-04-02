"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = (0, express_1.Router)();
exports.router = router;
router
    .route("/login")
    .get(function (req, res) {
    res.send("\n<form action=\"\" method=\"POST\">\n\t<div>\n\t\t<label for=\"email\">Email</label>\n\t\t<input type=\"email\" name=\"email\" />\n\t</div>\n\t<div>\n\t\t<label for=\"password\">Password</label>\n\t\t<input type=\"password\" name=\"password\" />\n\t</div>\n\t<div>\n\t\t<input type=\"submit\" value=\"submit\" />\n\t</div>\n</form>\n    ");
})
    .post(function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    var correctEmail = "test@test.com";
    var correctPassword = "test";
    if (email && password) {
        if (email === correctEmail && password === correctPassword) {
            req.session = { isLogged: true };
            res.redirect("/");
        }
        else {
            res.send("\n<div><h1>Wrong email or password</h1></div>\n<div><a href=\"/login\">Login</a></div>\n");
        }
    }
    else {
        res.status(400).json({ msg: "Bad Request" });
    }
});
router.get("/logout", function (req, res) {
    if (req.session) {
        req.session.isLogged = undefined;
        res.redirect("/");
    }
    else {
        res
            .status(400)
            .json({ error: "You need to login first before you logout" });
    }
});
