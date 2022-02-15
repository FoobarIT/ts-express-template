"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const home_controller_1 = require("../controllers/home.controller");
class Routes {
    constructor() {
        // Controllers
        this.homeController = new home_controller_1.HomeController();
    }
    // Middlewares
    routes(app) {
        /**
         * @access GET Route
         */
        app.route("/").get(this.homeController.index);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map