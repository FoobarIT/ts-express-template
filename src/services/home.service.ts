import {Request, Response} from 'express'

export class HomeService {
    public index(req: Request, res: Response) {
        return res.status(200).json({
            message: 'Welcome to starter template.'
        })
    }
}