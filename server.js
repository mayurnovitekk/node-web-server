const express = require('express');
const hbs = require('hbs');

var app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page From Server',
    welcomeMessage: 'Welcome to My Website',
    currentYear: new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page From Server',
    currentYear: new Date().getFullYear()
  });
});

// app.get('/bad', (req, res) => {
//   res.send({
//     errorMessage: 'Unable to handle this request'
//   });
// });
//
// app.get('/404', (req, res) => {
//   res.send('<center><h1>404 Error Page</h1></center>');
// });
app.listen(3000);
