var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

// All routes start with "/flights"
// Index GET /flights
router.get('/', flightsCtrl.index);

// New GET /flights/new

router.get('/new', flightsCtrl.new);

// Create POST /flights
router.post('/', flightsCtrl.create)

// show GET /flights/:id
router.get('/:id', flightsCtrl.show);




module.exports = router;
