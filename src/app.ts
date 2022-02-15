import * as express from "express";
import * as session from "express-session";
import * as cookieParser from "cookie-parser"
import * as bodyParser from "body-parser";
import * as path from "path"
import {Routes} from "./config/routes";

class App {
    public app: express.Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        this.app.set('views', path.join(__dirname + '/views'));
        this.app.set('views engine', 'ejs')
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(express.static(path.join(__dirname, "/public")));
        this.app.use(cookieParser())

        this.app.use(session({
            secret: 'boostaflex',
            resave: false,
            saveUninitialized: true,
            cookie: { maxAge: 365 * 24 * 60 * 60 * 1000}
        }))
        this.app.use(function(req, res, next) {
            let session = req.session as any
            res.locals.user = session.user;
            next();
        });


    }
}

export default new App().app;