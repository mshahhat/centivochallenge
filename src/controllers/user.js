import service from "../services/user.js";

const getUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await service.getUser(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export { getUser };
