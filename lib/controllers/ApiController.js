'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RestifyHelper = require('../helpers/RestifyHelper');

var _RestifyHelper2 = _interopRequireDefault(_RestifyHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function ApiController() {
    _classCallCheck(this, ApiController);

    this.restify = (0, _RestifyHelper2.default)();
  }

  _createClass(ApiController, [{
    key: 'run',
    value: function run(callback) {
      this.restify.listen(4300, callback);
    }
  }]);

  return ApiController;
}();