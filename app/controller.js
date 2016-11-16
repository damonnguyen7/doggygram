var cloudinary = require('cloudinary');
var cloudinaryKeys = require('../cloudinaryKey.js');
//Mongoose Model
var Model = require('./model');

// Configuration for cloudinary 
cloudinary.config({
  cloud_name: cloudinaryKeys.cloudName,
  api_key: cloudinaryKeys.key,
  api_secret: cloudinaryKeys.secret
});

//render new.ejs
module.exports = {
  new: function (req, res) {
      res.render('pages/new');
  },
  create: function (req, res) {
      // Use Cloudinary uploader to upload to cloudinary sever
      // Access files uploaded from the browser using req.files
      cloudinary.uploader.upload(req.files.image.path, function(result) {
          // Create a post model by assembling all data as object and passing to Model instance
          var post = new Model({
              title: req.body.title,
              description: req.body.description,
              created_at: new Date(),
              // Store the URL in a DB for future use
              image: result.url
              image_id: result.public_id
          });
          // Persist by saving
          post.save(function (err) {
              if(err){
                  res.send(err)
              }
              // Redirect
              res.redirect('/');
          });
      });
  }
};
