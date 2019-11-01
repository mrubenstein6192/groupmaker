const mongoose = require("mongoose");

const { Schema } = mongoose;

const ClassroomSchema = new Schema ({
  created: {
    type: Date,
    default: Date.now
  },
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User"
  },
  name: {
    type: String,
    required: true
  },
  students: {
    type: String,
    required: true
  },
  period: {
    type: String,
    required: true
  },
  schoolYear: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Classroom', ClassroomSchema)