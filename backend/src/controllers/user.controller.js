import User from "../models/user.js";
import Activity from "../models/activity.js";
import returnMyProflie from "../utils/returnMyProflie.js";
import nearby from "../utils/nearby.js";

const createUser = (req, res) => {
  const location = {
    lat: req.body.location.lat,
    long: req.body.location.long,
  };
  const user = new User({
    // userID: req.body.userID,
    name: req.body.name,
    email: req.body.email,
    image: req.body.image,
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
      .populate({
        path: "buddy",
      })
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
  const userId = req.params.userid;
  const activityId = req.body.activityId;
  const activity = {
    activityId: activityId,
    joinDate: new Date(),
    status: 0,
  };
  try {
    Promise.all([
      User.findByIdAndUpdate(userId, { $push: { activities: activity } }),
      Activity.findByIdAndUpdate(activityId, { $push: { joinedUser: userId } }),
    ])
      .then(([user, activity]) => {
        res.status(200).json({ status: "success" });
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const markDoneActivity = (req, res) => {
  const actId = req.body.activityId;
  try {
    User.findById(req.params.userid)
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

const addBuddy = (req, res) => {
  const userId = req.params.userid;
  const buddyId = req.body.buddyId;
  Promise.all([
    User.findByIdAndUpdate(userId, { $push: { buddy: buddyId } }),
    User.findByIdAndUpdate(buddyId, { $push: { buddy: userId } }),
  ])
    .then(() => {
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

export {
  createUser,
  getUser,
  findBuddy,
  registerActivity,
  markDoneActivity,
  addBuddy,
};
