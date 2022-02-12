
import * as express from 'express';
import { EmailService } from '../services';
import { CustomResponse } from '../utils';


export class EmailController {

    static async sendEmail(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
        try {
            const result = await EmailService.sendEmail(req.body);
            const response = new CustomResponse(res);
            response.success({code: 200}).send({ result });
        } catch (error) {
            return next(error);
        }
    }

}


