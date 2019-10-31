const router = require('express').Router();
const { User } = require('../models');
const handle = require('../utils/promise-handler');

const getUserProfile = async (req, res) => {
  const [userErr, userProfile] = await handle(User.findById(req.user._id).populate('classrooms'));

  if (userErr) {
    res.status(500).json(userErr);
  } else {
    res.status(200).json(userProfile);
  };
}


module.exports = {
  getUserProfile,
};