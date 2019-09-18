'use strict';

var _restify = require('restify');

var _restify2 = _interopRequireDefault(_restify);

var _restifyCorsMiddleware = require('restify-cors-middleware');

var _restifyCorsMiddleware2 = _interopRequireDefault(_restifyCorsMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cors = (0, _restifyCorsMiddleware2.default)({
  origins: ['*']
});

module.exports = function () {
  var server = _restify2.default.createServer();
  server.use(_restify2.default.plugins.bodyParser());
  server.use(_restify2.default.plugins.fullResponse());
  server.pre(cors.preflight);
  server.use(cors.actual);
  return server;
};