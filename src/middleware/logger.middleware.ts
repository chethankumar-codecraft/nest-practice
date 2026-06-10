import { Injectable, NestMiddleware, Next, Req, Request, Response } from "@nestjs/common";
import { NestApplication } from "@nestjs/core";
import { url } from "inspector";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req, res, next) {
        console.log('METHOD: ', req.method);
        console.log('URL: ', req.url);
        console.log(`HEADERS: \n host:${req.headers.host} \n authorization:${req.headers.authorization}`);
        console.log('BODY: ', req.body);
        next();
    }

}