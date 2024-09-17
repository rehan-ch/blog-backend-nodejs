class ErrorResponse extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
  
      // Ensure stack trace is captured correctly for custom errors
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
 export default ErrorResponse; // Default export
