var express = require('express');
var router = express.Router();
const sensorController = require('../controllers/sensorController');

router.get('/', sensorController.getData);

// router.post('/post', sensorController.createData)

module.exports = router;
