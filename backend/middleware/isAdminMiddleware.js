module.exports = function (req, res, next) {
  console.log("🔐 req.user:", req.user); // ✅ this must run even for non-admins

  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ message: "Forbidden: Admins only" });
  }

  next();
};
