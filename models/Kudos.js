const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Model for Kudos Notes.  Kudos Id# is stored in Users database to link.
 */
var KudosSchema = new Schema({
  title: String,
  body: String,
  from: String,
  to: String
  
});

const Kudos = mongoose.model("Kudos", KudosSchema);

module.exports = Kudos;