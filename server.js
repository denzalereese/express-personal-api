// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/denzalereese/express-personal-api/README.md", // CHANGE ME
    baseUrl: "http://pure-beach-28009.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "POST", path: "/api/todos", description: "Shows all of my todos"} // CHANGE ME
    ]
  })
});

app.get('/api/profile', function profileIndex(req, res) {
  res.json({
    name: 'Wolf',
    githubLink: 'http://github.com/denzalereese',
    githubProfileImage: 'http://imgur.com/QhuCpS6',
    personalSiteLink: 'http://denzalereese.github.io',
    currentCity: 'San Francisco, CA',
    pets: []
  })
})

app.get('api/todos', function todosIndex(req, res) {
  res.json();
})

app.get('api/todos/:id', function todosShow(req, res) {
  res.json();
})

app.post('api/todos/:id', function todosCreate(req, res) {
  res.json();
})

app.put('api/todos/:id', function todosUpdate(req, res) {
  res.json();
})

app.delete('api/todos/:id', function todosDelete(req, res) {
  res.json();
})

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
