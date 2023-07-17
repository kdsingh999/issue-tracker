const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name can not be empety'],
  },
  description: {
    type: String,
  },
  author: {
    type: String,
    required: [true, 'author can not be empety'],
  },
});
