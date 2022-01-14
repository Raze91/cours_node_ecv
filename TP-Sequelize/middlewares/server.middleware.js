exports.dateMiddleware = (req, res, next) => {
    console.log(new Date);
    next();
}

exports.ecvMiddleware = (req, res, next) => {
    res.set({ "Application-name": "ecv-digital" });
    next();
}

exports.authorizationMiddleware = (req, res, next) => {
    if (req.headers["Authorization"] === undefined) {
        res.status(403);
    }
    next();
}