const errorHandler = (err, req, res, next) => {
    // If there's no explicit status code, default to 500 (Server Error)
    const statusCode = err.statusCode || 500;
  
    // Format error response
    res.status(statusCode).json({
      success: false,
      error: err.message || "Server Error",
    });
  };
  
  export default errorHandler;
  