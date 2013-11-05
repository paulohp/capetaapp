/**
 * Module dependencies.
 */

var express = require('express')
  , path = require('path');

var app = module.exports = express();

// all environments

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('1a23sf5asdf2a1dfs2a3d4sf'));
app.use(express.session());
app.use(app.router);


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: false }));
}

// Routes to user
var user = require('./routes/user');

app.post('/api/users/new', user.add);
app.post('/a/users/:id',  user.set);
app.get('/a/users', user.get);
app.get('/a/user', user.getOne);
app.get('/a/securitygroups', user.getSecurity);
