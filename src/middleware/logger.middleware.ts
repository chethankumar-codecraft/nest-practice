import { Injectable, NestMiddleware, Req, Request, Response } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(@Request() req, @Response() res) {
        console.log(req)
    }

}