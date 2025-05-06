export const getProfile = (req, res) => {
  res.json({ message: `Привіт, ${req.user.name}`, user: req.user });
};
