import Activity from "../models/activity.js";
import User from "../models/user.js";
import returnMyProflie from "../utils/returnMyProflie.js";
import nearby from "../utils/nearby.js";
import multer from "multer";
// const upload = multer({dest:})

const createActivity = (req, res) => {
  const location = {
    lat: req.body.location.lat,
    long: req.body.location.long,
  };
  const activity = new Activity({
    name: req.body.name,
    image: req.body.image,
    type: req.body.type,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    description: req.body.description,
    address: req.body.address,
    location: location,
    organizerID: req.body.organizerID,
    joinedUser: [],
  });
  try {
    activity
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

const getAnActivity = (req, res) => {
  try {
    Activity.findById(req.params.id)
      .populate("organizerID")
      .populate({
        path: "joinedUser",
      })
      .exec()
      .then((act) => {
        res.status(200).json(act);
      })
      .catch((err) => {
        res.status(404).json({ message: err.message });
      });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getAllActivity = (req, res) => {
  try {
    Activity.find({})
      .then((listActivity) => {
        res.status(200).json(listActivity);
      })
      .catch((err) => {
        res.status(404).json({ message: err });
      });
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

const listNearbyActivity = (req, res) => {
  try {
    const userId = req.params.userid;
    let currentUser;
    returnMyProflie(userId)
      .then((currUser) => {
        currentUser = currUser;
        return Activity.find({});
      })
      .then((listActivity) => {
        let nearbyActivities = nearby(listActivity, currentUser);
        res.status(200).json(nearbyActivities);
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

export { getAnActivity, getAllActivity, listNearbyActivity, createActivity };
