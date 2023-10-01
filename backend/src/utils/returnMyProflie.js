import User from "../models/user.js";

const returnMyProflie = (userId) => {
  return User.findById(userId).then((user) => user);
};

export default returnMyProflie;
