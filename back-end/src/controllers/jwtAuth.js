const userService = require('../services/userService');

module.exports = async (req, res, next) => {
  const { authorization: token } = req.headers;
  try {
    const user = await userService.auth(token);
    if (!user) return res.status(401).json({ message: 'Usuário não autorizado' });
    req.authUser = user.id;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};