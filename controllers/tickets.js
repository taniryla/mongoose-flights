const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {  
    create, 
  };
  
//   
// Now you can pass both the flight and tickets in the res.render call
// When the form is submitted, create the ticket on the server and redirect back to the flight's show view.
  

// post with req.body 

function create(req, res) {
	req.body.flight = req.params.id;
	Ticket.create(req.body, function (err, ticket) {
		console.log(ticket)
		res.redirect(`/flights/${req.params.id}`)
	});
};

// in M:M we're not creating a new child document but simply associating existing data
 

//   In the controller action, there will not be a flight property on the req.body object. You must add that property yourself before using req.body to create the ticket. 

// To show a list of tickets that belong to a flight in the flights/show.ejs, the flight controller's show action is going to have pass that array of flights to be rendered

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
          // Now you can pass both the flight and tickets in the res.render call
          res.render('flights/show', { flight })
        });
    });

      res.render('flights/show', { flight })
  }