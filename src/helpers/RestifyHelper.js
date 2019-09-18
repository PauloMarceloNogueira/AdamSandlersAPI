import restify from 'restify';
import corsMiddleware from 'restify-cors-middleware';

const cors = corsMiddleware({
  origins: ['*']
});

module.exports = () => {
  const server = restify.createServer();
  server.use(restify.plugins.bodyParser());
  server.use(restify.plugins.fullResponse());
  server.pre(cors.preflight);
  server.use(cors.actual);
  return server;
};
