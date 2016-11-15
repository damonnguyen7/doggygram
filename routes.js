var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
//controller has the logic to renders the new.ejs
var controller = require('./app/controller');

module.exports = function() {
  app.get('/new', controller.new);
  // multipartMiddleware is a middleware to help us process and get details about an uploaded file
  //We can access any uploaded files from req.file
  app.post('/create', multipartMiddleware, controller.create);
};
