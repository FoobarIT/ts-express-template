"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const routes_1 = require("./config/routes");
class App {
    constructor() {
        this.routePrv = new routes_1.Routes();
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }
    config() {
        this.app.set('views', path.join(__dirname + '/views'));
        this.app.set('views engine', 'ejs');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static(path.join(__dirname, "/public")));
        this.app.use(cookieParser());
        this.app.use(session({
            secret: 'boostaflex',
            resave: false,
            saveUninitialized: true,
            cookie: { maxAge: 365 * 24 * 60 * 60 * 1000 }
        }));
        this.app.use(function (req, res, next) {
            let session = req.session;
            res.locals.user = session.user;
            next();
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map