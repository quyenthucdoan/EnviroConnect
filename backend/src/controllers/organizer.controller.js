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
    .then((activity) => {
      let listUser = activity.joinedUser;
      if (listUser.length > 0) {
        for (const user of listUser) {
          User.findById(user._id)
            .exec()
            .then((user) => {
              for (let ac of user.activities) {
                if (ac.activityId.equals(activityId)) {
                  ac.status = 1;
                  user.save();
                  break;
                }
              }
            });
        }
      }

      return listUser;
    })
    .then(() => {
      res.status(200).json({message : "success"});
    });
};

export { getAllOrganizer, getAnOrganizer, doneActivity };
