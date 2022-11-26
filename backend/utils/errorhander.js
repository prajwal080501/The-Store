class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode

        Error.captureStackTrace(this,this.constructor);

    }
    
}

const createError = (message,statusCode) => {
    return new ErrorHandler(message,statusCode);
}

module.exports = ErrorHandler, createError;


