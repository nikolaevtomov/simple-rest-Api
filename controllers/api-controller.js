const StarWarsModel = require('../models/swModel');
const bodyParser = require('body-parser');

module.exports = function(app) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/starwars/:uname', function(req, res) {

    StarWarsModel.find({ username: req.params.uname }, function(err, result) {
      if(err) throw err;
      res.send(result);
    });

  });

  app.get('/api/starwars/:id', function(req, res) {

    StarWarsModel.findById({ _id: req.params.id }, function(err, todo) {
      if(err) throw err;
      res.send(todo);
    });

  });

  app.post('/api/starwars', function(req, res) {

    if(req.body.id) {

      StarWarsModel.findByIdAndUpdate(req.body.id, {
        username: req.body.username,
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      }, function(err, result) {
        if(err) throw err;
        res.send('Success updated!');
      });

    } else {

      const newStarwarsEntry = StarWarsModel({
        username: req.body.username,
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      });

      newStarwarsEntry.save(function(err) {
        if(err) throw err;
        res.send('Successfully added!');
      });
    }

  });

  app.delete('/api/starwars', function(req, res) {

    StarWarsModel.findByIdAndRemove(req.body.id, function(err) {
      if(err) throw err;
      res.send('Successfully deleted!');
    });

  });

};
