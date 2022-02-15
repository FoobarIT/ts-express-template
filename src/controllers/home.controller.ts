import {Request, Response} from "express";
import {HomeService} from "../services/home.service";

export class HomeController {
    public index(req : Request, res : Response) {
       let homeService = new HomeService
        homeService.index(req, res)
    }
}