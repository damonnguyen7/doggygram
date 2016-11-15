var cloudinary = require('cloudinary');
//Mongoose Model
var Model = require('./model');

// Configuration for cloudinary 
cloudinary.config({
  cloud_name:,
  api_key:,
  api_secret
});

//render new.ejs
module.exports = {
  new: function(req, res) {
    res.render('pages/new');
  }
}
