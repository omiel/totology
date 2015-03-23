var koa = require('koa');
var serve = require('koa-static');
var router = require('koa-joi-router');
var bodyParser = require('koa-bodyparser');
var app = koa();
var routes = router();

routes.get('/', function *() {
  this.body = {"hello": "world"};
});

app.use(bodyParser());
app.use(routes.middleware());
app.use(serve("./client/.build"));

module.exports = app;