var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  req.getConnection(function (err, connection) {
    connection.query('SELECT * FROM users', [], function (err, result) {
      if (err) return res.status(400).json(err);

      return res.status(200).json(result);

    });
  });
});

module.exports = router;
