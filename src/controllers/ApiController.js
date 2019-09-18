import restifyHelper from '../helpers/RestifyHelper';
import RoutesController from './RoutesController';

module.exports = class ApiController {
  constructor() {
    this.restify = restifyHelper();
    this.routes = new RoutesController(this.restify);
  }

  run(callback) {
    this.restify.listen(4300, callback);
  }
};
