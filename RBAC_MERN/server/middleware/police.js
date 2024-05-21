function police(req, res, next) {
  if (req.user.role !== 0 && req.user.role !== 1)
    return res.status(403).send("Access denied.");
  next();
}

module.exports = police;
