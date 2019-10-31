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
  }
})

module.exports = mongoose.model('Classroom', ClassroomSchema)