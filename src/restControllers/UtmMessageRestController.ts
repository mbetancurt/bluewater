import {NextFunction, Request, Response} from "express";
import { UTMMessageDao } from "../daos/UtmMessageDao";

export class UTMMessageController {

    private dao = new UTMMessageDao()

    async all(request: Request, response: Response, next: NextFunction) {
        try {
            let list = await this.dao.all()
            return response.json(list);
            
        } catch (error) {
            response.statusCode = 400
            return response.json(error)
        }
    }

    async one(request: Request, response: Response, next: NextFunction) {
        try {
            let one = await this.dao.one(request.params.id)
            return response.json(one);
            
        } catch (error) {
            response.statusCode = 404
            return response.json(error)
        }
    }

    async save(request: Request, response: Response, next: NextFunction) {
        try {
            let one = await this.dao.save(request.body)
            return response.json(one);
            
        } catch (error) {
            response.statusCode = 400
            return response.json(error)
        }
    }

}