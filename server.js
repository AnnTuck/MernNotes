const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
require('./routes/api-routes')(app);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/kudosMern_db");

//Stuff from MongoDBMLabHerokuDeploymentProcess.pdf  Start

// var databaseUri = 'mongodb://localhost/week18day3mongoose';
// if (process.env.MONGODB_URI) {
//   mongoose.connect(process.env.MONGODB_URI);  
// } else {
//   mongoose.connect(databaseUri);
// }
// var db = mongoose.connection;

// db.on('error', function(err) {
//   console.log('Mongoose Error: ', err);
// });
// db.once('open', function() {
//   console.log('Mongoose connection successful.');
// });
//Stuff from MongoDBMLabHerokuDeploymentProcess.pdf  End


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});