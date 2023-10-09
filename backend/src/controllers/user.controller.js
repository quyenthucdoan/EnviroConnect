import User from "../models/user.js";
import returnMyProflie from "../utils/returnMyProflie.js";
import nearby from "../utils/nearby.js";

const createUser = (req, res) => {
  const location = {
    lat: req.body.location.lat,
    long: req.body.location.long,
  };
  const user = new User({
    userID: req.body.userID,
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    location: location,
    isOrganizer: false,
  });

  try {
    user
      .save()
      .then((us) => {
        res.status(200).json(us);
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

const getUser = (req, res) => {
  try {
    const usID = req.params.id;
    User.findById(usID)
      .exec()
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        res.status(404).json({
          success: false,
          error: err,
        });
      });
  } catch (er) {
    res.status(404).json({
      success: false,
      error: er.message,
    });
  }
};

const findBuddy = (req, res) => {
  try {
    const userId = req.params.id;
    let currentUser;
    returnMyProflie(userId)
      .then((user) => {
        currentUser = user;
        return User.find({});
      })
      .then((listUsers) => {
        let listBuddy = nearby(listUsers, currentUser);
        res.status(200).json(listBuddy);
      })
      .catch((err) => {
        res.status(404).json({
          success: false,
          error: err,
        });
      });
  } catch (er) {
    res.status(404).json({
      success: false,
      error: er.message,
    });
  }
};

const registerActivity = (req, res) => {
  const activity = {
    activityId: req.body.activityId,
    joinDate: new Date(),
    status: 0,
  };
  try {
    User.findById(req.params.id)
      .then((userRegister) => {
        userRegister.activities.push(activity);
        userRegister.save();
        return userRegister;
      })
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        res.status(404).json({ message: err });
      });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const markDoneActivity = (req, res) => {
  const actId = req.body.activityId;
  try {
    User.findById(req.params.id)
      .then((user) => {
        user.activities.forEach((element) => {
          if (element.activityId == actId) {
            element.status = 1;
          }
        });
        user.save();
        return user;
      })
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) => {
        res.status(404).json({ message: err });
      });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

export { createUser, getUser, findBuddy, registerActivity, markDoneActivity };
