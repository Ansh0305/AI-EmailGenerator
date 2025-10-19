exports.notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originakUrl}`);
  res.status(404);
  next(error);
};
