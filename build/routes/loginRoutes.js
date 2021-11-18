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
        res.send(email + password);
    }
    else {
        res.send("Both fields must be filled");
    }
});
