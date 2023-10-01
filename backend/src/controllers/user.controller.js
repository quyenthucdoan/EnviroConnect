import User from "../models/user.js";

function createUser(req, res) {
  console.log("request body:", req.body);
  const user1 = new User({
    userID: req.body.userID,
    name: req.body.name,
  });
  user1.save();
  res.status(200).json(user1);
  console.log(user1);
}

export { createUser };

// const programmingLanguages = require("../services/programmingLanguages.service");

// async function get(req, res, next) {
//   try {
//     res.json(await programmingLanguages.getMultiple(req.query.page));
//   } catch (err) {
//     console.error(`Error while getting programming languages`, err.message);
//     next(err);
//   }
// }

// async function create(req, res, next) {
//   try {
//     res.json(await programmingLanguages.create(req.body));
//   } catch (err) {
//     console.error(`Error while creating programming language`, err.message);
//     next(err);
//   }
// }

// async function update(req, res, next) {
//   try {
//     res.json(await programmingLanguages.update(req.params.id, req.body));
//   } catch (err) {
//     console.error(`Error while updating programming language`, err.message);
//     next(err);
//   }
// }

// async function remove(req, res, next) {
//   try {
//     res.json(await programmingLanguages.remove(req.params.id));
//   } catch (err) {
//     console.error(`Error while deleting programming language`, err.message);
//     next(err);
//   }
// }

// module.exports = {
//   get,
//   create,
//   update,
//   remove,
// };
