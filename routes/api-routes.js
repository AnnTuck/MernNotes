const User = require('../models/User');
const Kudos = require('../models/Kudos');

module.exports = function (app) {


  //User routes/

  app.get('/api/user', function (req, res) {
    User.find({})
      .populate('senderPosts')
      .populate('receiverPosts')
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.post('/api/user', function (req, res) {
    User.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  //Kudos Routes//

app.get('/api/kudos', function (req, res) {
    Kudos.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  //When a kudos note is posted, it's _id is populated in Users table send or receive fields.
  app.post('/api/kudos', function (req, res) {
    const senderId = req.body.from;
    const receiverId = req.body.to;

    const newEntry = {
      title: req.body.title,
      body: req.body.body,
      to: req.body.to,
      from: req.body.from
    }

    let newKudo;
    Kudos.create(newEntry)
      .then(function (kudosData) {
        newKudo = kudosData;
        //kudosData is what is returned from the create function.
        return User.findOneAndUpdate({ username: receiverId }, { $push: { receiverPosts: kudosData._id } }, { new: true });

      })
      //receivingUser is the result of findOneAndUpdate
      .then(function (receivingUser) {
        return User.findOneAndUpdate({ username: senderId }, { $push: { senderPosts: newKudo._id } }, { new: true });

      })
      .then(function (sendingUser) {
        res.json(newKudo);
      })
      .catch(function (err) {
        res.json(err);
        console.log("catch");
      });

  });

}