import Organizer from "../models/organizer.js";

const getAllOrganizer = (req, res) => {
  try {
    Organizer.find({})
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

// const doneActivity


export { getAllOrganizer };
