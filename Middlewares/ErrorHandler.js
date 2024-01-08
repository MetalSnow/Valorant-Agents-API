const { constants } = require("../errorConstants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  const stack = process.env.STACK === "notSecure" ? err.stack : null;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Not Valid",
        message: err.message,
        stackTrace: stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: stack,
      });
      break;

    default:
      console.log("No Error, All Good!");
      break;
  }
};

module.exports = errorHandler;
