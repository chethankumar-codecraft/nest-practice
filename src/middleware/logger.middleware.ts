import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { AppService } from "src/app.service";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private logger = new Logger(LoggerMiddleware.name)
    constructor(private readonly appService: AppService) { }
    use(req: Request, res: Response, next: NextFunction) {
        this.logger.log("Logger Middlware")
        console.log('METHOD: ', req.method)
        console.log('URL: ', req.url);
        console.log(`HEADERS: \n host:${req.headers.host} \n`);

        next();
    }

}