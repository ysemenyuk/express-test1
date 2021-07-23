const asyncErrorHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

const errorHandler = (err, req, res, next) => {
  // console.log('-err-', err);
  res.status(500).send({ message: err.message });
  req.logger(`RES: ${req.method}- ${req.originalUrl} -${res.statusCode}`);
};

export { asyncErrorHandler, errorHandler };
