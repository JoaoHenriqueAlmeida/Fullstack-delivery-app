const userService = require('../services/userService');
const adminService = require('../services/adminService');

const login = async (req, res) => {
  const { email, password } = req.body;

  const result = await userService.login(email, password);

  if (!result) return res.status(404).json({ message: 'Dados inválidos' });

  return res.status(200).json(result);
};

const register = async (req, res) => {
  try {
    const newUser = await userService.newUser(req.body);
    return res.status(201).json(newUser);
  } catch (e) {
    res.status(409).json({ message: e.message });
  }
};

const adminUpdateUser = async (req, res) => {
  try {
    const user = await adminService.updateUserRole(req.params.id, req.body.role, req.body);
    return res.status(200).json(user);
  } catch (e) {
    return res.status(409).json({ message: e.message });
  }
};

const adminDeleteUser = async (req, res) => {
  try {
    const deletedUser = await adminService.deleteUser(req.params.id, req.body.role);
    return res.status(200).json(deletedUser);
  } catch (e) {
    return res.status(409).json({ message: e.message });
  }
};

module.exports = {
  adminDeleteUser,
  adminUpdateUser,
  login,
  register,
};