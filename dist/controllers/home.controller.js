"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const home_service_1 = require("../services/home.service");
class HomeController {
    index(req, res) {
        let homeService = new home_service_1.HomeService;
        homeService.index(req, res);
    }
}
exports.HomeController = HomeController;
//# sourceMappingURL=home.controller.js.map