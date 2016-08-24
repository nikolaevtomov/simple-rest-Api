const StarWarsModel = require('../models/swModel');

function setUpController(app) {

  app.get('/api/starwars', function(req, res) {

    const starterData = [
      {
        username: 'userOne',
        todo: 'buy starwars DVD',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'userTwo',
        todo: 'buy starwars t-shirt',
        isDone: false,
        hasAttachment: false
      }
    ];

    StarWarsModel.create(starterData, function(err, result) {
      res.send(result);
    });

  });

};

module.exports = setUpController;
