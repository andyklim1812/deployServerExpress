var express = require('express');
var router = express.Router();
const sensorController = require('../controllers/sensorController');

router.get('/ref1', sensorController.getRef1);
router.get('/ref2', sensorController.getRef2);

// router.post('/post', sensorController.createData)

module.exports = router;
