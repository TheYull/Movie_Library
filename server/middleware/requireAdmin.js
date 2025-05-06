const requireAdmin = (req, res, next) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ error: "Доступ тільки для адміністратора" });
  }
  next();
};

export default requireAdmin;
