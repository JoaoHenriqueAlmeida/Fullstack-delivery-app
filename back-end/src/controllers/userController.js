const userService = require('../services/userService');

const login = async (req, res) => {
  const { email, password } = req.body;

  const result = await userService.login(email, password);

  if (!result) return res.status(404).json({ message: 'Dados inválidos' });

  return res.status(200).json(result);
};

const register = async (req, res) => {
  const newUser = await userService.newUser(req.body);
  return res.status(201).json(newUser);
};

module.exports = {
  login,
  register,
};