var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: 'theenkeng about meems',
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 600000,
    },
  }),
);

app.use(express.static(path.join(__dirname, 'public')));

const User = require('./models/user');

const auth = function(req, res, next) {
  console.log('req auth', req.session.username);
  const { username, password } = req.session;
  //console.log('res auth', req)
  User.auth({ username, password }, (err, res) => {
    console.log('auth res', res);

    if (password === res.password) {
      return next();
      j;
    }

    return res.redirect('/');
  });

  /*if (req.session.username === ) {
    return next();
  }*/
};

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', auth, postsRouter);

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
