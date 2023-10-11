import Organizer from "../models/organizer.js";
import Activity from "../models/activity.js";
import User from "../models/user.js";

const getAllOrganizer = (req, res) => {
  try {
    Organizer.find({})
      .then((listOrganizer) => {
        res.status(200).json(listOrganizer);
      })
      .catch((err) => {
        res.status(404).json({ message: err });
      });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const getAnOrganizer = (req, res) => {
  try {
    Organizer.findById(req.params.organizerId)
      .then((org) => {
        res.status(200).json(org);
      })
      .catch((err) => {
        res.status(404).json({ message: err });
      });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const doneActivity = (req, res) => {
  const activityId = req.params.activityid; // 6524bedb76d1dec84e383b39
  Activity.findById(activityId)
    .populate("joinedUser")
    .exec()
    .then((act) => {
      let listUser = [];
      for (let userId of act.joinedUser) {
        listUser.push(userId._id);
      }
      if (listUser.length > 0) {
        for (let userId of listUser) {
          User.findById(userId)
            .exec()
            .then((user) => {
              for (let ac of user.activities) {
                if (ac.activityId.equals(activityId)) {
                  ac.status = 1;
                  break;
                }
              }
              user.save();
            });
        }
      }
      return act.joinedUser;
    })
    .then((listUser) => {
      res.status(200).json(listUser);
    });
};

export { getAllOrganizer, getAnOrganizer, doneActivity };
