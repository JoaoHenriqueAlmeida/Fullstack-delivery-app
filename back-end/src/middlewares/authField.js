const validateAuthField = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).json({ message: 'Token não informado' });
  }
  next();
};

module.exports = validateAuthField;