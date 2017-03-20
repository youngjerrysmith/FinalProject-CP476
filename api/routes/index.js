var express = require('express');
var ctrlSample = require('../controllers/sample.controllers.js');
var router = express.Router();

router
  .route('/json')
  .get(ctrlSample.sampleGetAll);


module.exports = router;
