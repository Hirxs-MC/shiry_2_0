const { model, Schema } = require('mongoose');

let pref = new Schema({
  User: String,
  PreferredPlatform: String
});

module.exports = model("preferredPlatform", pref);