const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  //id: String,
  title: String,
  subject: String,
  body: String,
  recipients: [RecipientSchema],
  yes: {
    type: Number,
    default: 0
  },
  no: {
    type: Number,
    default: 0
  }
});

mongoose.model('surveys', surveySchema);
