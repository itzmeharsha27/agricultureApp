const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  selectedCrop: String,
 


    cropProgress: {
    type: Map,
    of: {
      startDate: String,
      taskData: Object
    },
    default: {}
  },


   profile: {
    age: Number,
    village: String,
    contact: String,
    landSize: String,
    cropType: String,
  }
});


module.exports = mongoose.model("User", UserSchema);
