export function logger2(req, res, next) {
    console.log("Logger Function")
    next();
}