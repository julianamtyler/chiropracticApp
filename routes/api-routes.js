const Reviews = require('../models/Review');

module.exports = function (app) {

  app.get('/api/reviews', function (req, res) {
    Reviews.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/api/reviews', function (req, res) {
    Reviews.create(req.body)
      .then(function (data) {
        res.json(data);

      })
      .catch(function (err) {
        res.json(err);
      });
  });

  // app.delete('/api/reviews', function (req, res) {
  //   Reviews.findOneAndDelete(req.params.id)
  //     .then(function (data) {
  //       res.json(data);
  //     })
  //     .catch(function (err) {
  //       res.json(err);
  //     });
  // });

}