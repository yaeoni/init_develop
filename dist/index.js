"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var db_1 = __importDefault(require("./Loaders/db"));
//connect DB
db_1.default();
app.use(express.json());
// define route
app.use("/api/users", require("./api/users"));
//app.use("/api/auth", require("./api/auth"));
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "production" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
app
    .listen(5000, function () {
    console.log("\n    ################################################\n    \uD83D\uDEE1\uFE0F  Server listening on port: 5000 \uD83D\uDEE1\uFE0F\n    ################################################\n  ");
})
    .on("error", function (err) {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map