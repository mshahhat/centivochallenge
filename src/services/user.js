import userSchema from "../model/user.js";

const getUser = async (id) => {
  const user = await userSchema.findById(id);
  console.log(user);

  return user;
};

export default { getUser };
