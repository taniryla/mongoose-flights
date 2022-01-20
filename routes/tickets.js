const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// This router is mounted to a "starts with" path of '/'


// POST /tickets/:id/tickets
router.post('/tickets/:id/tickets', ticketsCtrl.create);

// GET /flights/:id/tickets/new
router.get('/flights/:id/tickets/new', ticketsCtrl.new);


module.exports = router;