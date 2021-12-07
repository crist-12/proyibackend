var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');
const fileupload = require("express-fileupload");

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api/index');



const cors = require('cors');
var whitelist = ['http://localhost:3001']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));




app.use(fileupload());
app.use(express.static("files"));

app.post("/upload", cors(corsOptionsDelegate), (req, res) => {
  const newpath = __dirname + "/files/";
  const file = req.files.file;
  const filename = file.name;
  const pathresult = `${newpath}${filename}`
  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "File upload failed", code: 500, path: `${newpath}${filename}` });
    }
    res.status(200).send({ message: pathresult, code: 200, path: `${newpath}${filename}` });
    console.log(`${newpath}${filename}`)
  });
});

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/api', cors(corsOptionsDelegate), apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});





// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
