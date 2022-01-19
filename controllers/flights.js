const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create, 
    index,
    show
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        if (err) return res.redirect('/');
        res.render('flights/index', { flights })
      });
     }     

function create(req, res) {
    // remove leading and trailing spaces
    req.body.departs = req.body.departs || undefined;
    req.body.flightNo = req.body.flightNo.trim();
    const flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      console.log(flight);
      res.redirect('/flights'); 
    });
   }
   
function newFlight(req, res) {
	res.render('flights/new')
}

function show(req, res) {
  Flight.findById(req.params.id, (err, flight) => {
    res.render('flights/show', { flight })
  })
}