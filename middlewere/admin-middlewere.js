const adminMiddllewere = async (req, res, next) => {
  try {
    const adminRole = await req.user.isAdmin;

    if (!adminRole) {
      return res
        .status(403)
        .json({ message: "Acess Denided, User is not Admin" });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = adminMiddllewere;
