import userService from '../services/userService';

const login = async (req, res) => {
  const { email, password } = req.body;

  const result = await userService.login(email, password);

  if (!result) return res.status(404).json({ message: 'Dados invalidos' });

  return res.status(200).json(result);
};

export default {
  login,
};