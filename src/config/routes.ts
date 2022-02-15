import { HomeController } from "../controllers/home.controller"
export class Routes {
    // Controllers
    public homeController: HomeController = new HomeController();

    // Middlewares

    public routes(app: any): void {
        /**
         * @access GET Route
         */
        app.route("/").get(this.homeController.index)

    }
}
