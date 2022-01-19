const Flight = require('../models/flight');

module.exports = {
    create
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err) {
            //respond to redirect because new info updated
            res.redirect(`/flights/${flight._id}`);
        })
    })
}