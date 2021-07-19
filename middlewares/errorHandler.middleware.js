const asyncErrorHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

const errorHandler = (err, req, res, next) => {
  return res.status(500).send({ message: err.message });
};

export { asyncErrorHandler, errorHandler };
