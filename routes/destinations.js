const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// no starts with

// create POST /
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;