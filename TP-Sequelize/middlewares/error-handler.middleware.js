const HTTPStatuses = require('statuses');

function errorMiddleware(err, req, res, next) {

    if (res.headersSent) {
        return next(err);
    }

    res
        .status(err.status)
        .json({
            statusCode: err.status,
            message: HTTPStatuses.message[err.status],
        });

    res.end();
}

module.exports = errorMiddleware;