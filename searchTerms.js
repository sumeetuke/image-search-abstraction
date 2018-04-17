const mongoose = require('mongoose');
const Schema = mongoose('Schema');

const searchTermsSchema = new Schema(
  {
  searchVal: String,
  searchDate: Date,

},
{timestamp : true}
);

sonst modelClass = mongoose.model(searchTermsSchema) ;
model.exports = modelClass;
