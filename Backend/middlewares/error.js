class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleWare = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    // Preserve original error message if available
    const errorMessage = err.message || "Internal Server Error";

    if (err.name === "CaseError") {
        const message = `Resource not found. Invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        err = new ErrorHandler(message, 400);
    }
    if (err.name === "JsonWebTokenError") {
        const message = `Json web token is invalid. Try again!`;
        err = new ErrorHandler(message, 400);
    }
    if (err.name === "TokenExpiredError") {
        const message = `Json web token is expired. Try again!`;
        err = new ErrorHandler(message, 400);
    }

    // Include error information in non-production environments
    const errorResponse = {
        success: false,
        message: errorMessage
    };

    if (process.env.NODE_ENV !== 'production') {
        errorResponse.error = err.name;
        errorResponse.stack = err.stack;
    }

    return res.status(err.statusCode).json(errorResponse);
};

export default ErrorHandler