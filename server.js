// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var tables = require('./api/tables.js');
var waitlist = require('./api/waitlist.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'homes.html'));
});

app.get('/reserve', function (req, res) {
	res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get('/tables', function (req, res) {
	res.sendFile(path.join(__dirname, 'tables.html'));
});

// Search for Specific Character (or all characters) - provides JSON
app.get('/api/tables', function (req, res) {
		console.log(tables);
		res.json(tables);
});

app.get('/api/waitlist', function (req, res) {
		console.log(waitlist);
		res.json(waitlist);
});


// Create New Characters - takes in JSON input
app.post('/api/tables', function(req, res){
	if(tables.length > 4) {
		waitlist.push(req.body);
		res.json(false); // KEY LINE
	} else {
		tables.push(req.body);
		res.json(true); 			
	}
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
