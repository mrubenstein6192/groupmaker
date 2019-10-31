const router = require('express').Router();

const {
  createClassroom,
  getClassroomById,
  updateClassroom,
  deleteClassroom
} = require('../controllers/classroom-controller');

router
  .route('/')
  .post(createClassroom);

router 
  .route('/:id')
  .get(getClassroomById)
  .put(updateClassroom)
  .delete(deleteClassroom);

  module.exports = router;