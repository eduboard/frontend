// Imports
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');

// Settings
const frontend = '../dist/';
const courses = [
  {"id":"5b1996378c98e652212c76b6",
  "title":"Prokrastination für Fortgeschrittene",
  "description":"Achtung: Dies ist der Fortgeschrittene Kurs. Neulinge besuchen bitte zuerst Grundlagen der Prokrastination 1 und 2!"},
  {"id":"5b1996378c98e652212c76b8",
  "title":"Мне нравится есть хлеб",
  "description":"We Unicode to the moon!"},
  {"id":"5b1996378c98e652212c76ba",
  "title":"三個帶低音提琴的中國人",
  "description":"... saßen auf der Straße und erzählten sich was ..."}
  ,{"id":"5b1996378c98e652212c76bc"
  ,"title":"😎"
  ,"description":"Sogar Emoji!!! 🚀"}
];
const users = {
  'peter@peter.com': {
    email: 'peter@peter.com',
    password: 'peterpeter',
    name: 'hans',
    surname: 'zimmer',
    courses: courses[2]
  },
  'test@test.com': {
    email: 'test@test.com',
    password: 'test',
    name: 'tester',
    surname: 'testington',
    courses: courses[0]
  }
};

////////////////////
// AUTH ENDPOINTS //
////////////////////

app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

app.use(express.json(), express.urlencoded({extended: false}));

// Statically host frontend
app.use('/', express.static(path.join(__dirname, frontend)));

// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (req.session && req.session.user === "peter")
    return next();
  else
    return res.sendStatus(401);
};
 
// Login endpoint
app.post('/api/login', function (req, res) {
  if (!req.body.email || !req.body.password) {
    res.sendStatus(400);
  } else if(users[req.body.email].password === req.body.password) {
    req.session.user = req.body.email;
    res.send(users[req.body.email]);
  }
});

// Logout endpoint
app.get('/api/logout', function (req, res) {
  req.session.destroy();
    res.sendStatus(200);
});
 
/////////////////////////////
// ACTUAL MOCK ENDPOINTS  ///
/////////////////////////////

app.get('/api/v1/courses', (req, res) => {
  res.send(courses);
});

app.get('/api/v1/me', auth, (req, res) => {
  res.send(users[req.session.user]);
});




 
///////////////////
// CLOSING CODE  //
///////////////////
 
// 404 Page if no route matched
app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(3000);
console.log("Running on port 3000");
