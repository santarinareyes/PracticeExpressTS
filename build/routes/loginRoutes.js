"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
exports.router = express_1.Router();
exports.router.get("/login", function (req, res) {
    res.send("\n    <form method=\"POST\">\n        <div>\n            <label for=\"email\">Email</label>\n            <input type=\"email\" name=\"email\" />\n        </div>\n        <div>\n            <label for=\"password\">Password</label>\n            <input type=\"password\" name=\"password\" />\n            <button>Login</button>\n        </div>\n    </form>\n  ");
});
exports.router.post("/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password) {
        if (email === "correct@correct.com" && password === "correct") {
            req.session = { loggedIn: true };
            res.redirect("/");
        }
        else {
            res.send("Email or password is incorrect");
        }
    }
    else {
        res.send("Both fields must be filled");
    }
});
exports.router.get("/", function (req, res) {
    var _a;
    if ((_a = req === null || req === void 0 ? void 0 : req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        res.send("\n            <div>\n                <div>Successfully logged in</div>\n                <a href=\"/logout\">Logout</a>\n            </div>\n        ");
    }
    else {
        res.send("\n            <div>\n                <div>Please login</div>\n\n                <a href=\"/login\">Login</a>\n            </div>\n        ");
    }
});
exports.router.get("/logout", function (req, res) {
    req.session = undefined;
    res.redirect("/");
});
