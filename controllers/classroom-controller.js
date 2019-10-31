const router = require('express').Router();
const { User, Classroom } = require('../models');
const handle = require('../utils/promise-handler');

const createClassroom = async(req, res) => {
  const [crErr, crData] = await handle (Classroom.create(req.body));

  if (crErr) {
    console.log(crErr);
    return res.json(crErr)
  };

  return User.update(
    {
      _id: req.user._id
    },
    {
      $push: {
        classrooms: {
          $each: [crData._id],
          $position: 0
        }
      }
    },
    {
      new: true
    }
  )
  .then((userInfo) => {
    if (userInfo !== null) {
      return res.json(userInfo);
    };
  })
  .catch((err) => {
    return res.json(err);
  })

};

const getClassroommById = async (req, res) => {
  const [crFindErr, crData] = await handle(Classroom.findById(req.params.id));

  if (crFindErr) {
    return res.status(500).json(userFindErr)
  }

  return res.status(200).json(crData) 
};



const updateClassroom = async (req, res) => {
  const [crFindErr, crData] = await handle(Classroom.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    {
      new: true
    }
  ));

  if (crFindErr) {
    return res.status(500).json(userFindErr)
  }

  return res.status(200).json(crData) 
}


const deleteClassroom = async (req, res) => {
  const [crFindErr, crData] = await handle(Classroom.findByIdAndDelete(req.params.id));

  if (crFindErr) {
    return res.status(500).json(crFindErr)
  };

  // delete entry from User schema
  const [userFindErr, userData] = await handle(User.findByIdAndUpdate(
    req.user._id,
    {
      $pull: {
        classrooms: req.params.id
      }
    },
    {
      new: true
    }
  ));

  if (userFindErr) {
    return res.status(500).json(userFindErr)
  }

  return res.status(200).json(userData) 

};

module.exports = {
  createClassroom,
  getClassroommById,
  updateClassroom,
  deleteClassroom
}