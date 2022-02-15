"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeService = void 0;
class HomeService {
    index(req, res) {
        return res.status(200).json({
            message: 'Welcome to starter template.'
        });
    }
}
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map