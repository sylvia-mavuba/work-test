const path = require('path');
const express = require('express');
const app = express();
//const cors = require('cors');
//const morgan = require('morgan');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const db = '../mock/posts.js';

//app.use(morgan('tiny'));

/*app.use(cors({
  origin: '*'
}));*/

var settings = {
  port: process.env.APP_HTTP_PORT || 3335,
  host: process.env.APP_HOSTNAME || '127.0.0.1',
}

app.use(express.static(path.join(__dirname, 'public')));
// define the home page route
app.get('/', function (req, res) {
  res.render('main')
});

app.get('api/blog/posts', function (req, res) {
  db.get('posts').find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
});

app.listen(settings.port, function () {
  console.log(`App listening at http://${settings.host}:${settings.port}`);
});
