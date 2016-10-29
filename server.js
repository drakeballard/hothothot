// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var tables = [{
	name: 'John',
	phonenumber: '5126805890',
	email: 'armthepit@armthepit.com',
	uniqueID: 900

}, {
  name: 'Sung',
	phonenumber: '5121232567',
	email: 'JediMaster@sung.com',
	uniqueID: 300

}, {
  name: 'Jason',
	phonenumber: '5129876543',
	email: 'masterjedi@jason.com',
	uniqueID: 600
}];

var waitlist = [{
  name: '',
  phonenumber: '',
  email: '',
  uniqueID: ''
}];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/reserve', function (req, res) {
	res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/tables', function (req, res) {
	res.sendFile(path.join(__dirname, 'tables.html'));
});

// Search for Specific Character (or all characters) - provides JSON
// app.get('/api/:?', function (req, res) {
// 	var chosen = req.params.;
//
// 	if (chosen) {
// 		console.log(chosen);
// 			}
// 		}
//
// 		res.json(false);
// 	} else {
// 		res.json();
// 	}
// });


// Create New Characters - takes in JSON input
app.post('/api/reserve', function (req, res) {
	var newreservation = req.body;
	newcharacter.routeName = newcharacter.name.replace(/\s+/g, '').toLowerCase


	console.log(newreservation);

	characters.push(newreservation);

	res.json(newres);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
