import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('METHOD: ', req.method);
        console.log('URL: ', req.url);
        console.log(`HEADERS: \n host:${req.headers.host} \n authorization:${req.headers.authorization}`);
        console.log('BODY: ', req.body);
        next();
    }

}