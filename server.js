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
