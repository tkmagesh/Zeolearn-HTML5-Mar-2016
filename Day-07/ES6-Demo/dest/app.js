(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _math = require("./math.js");

var math = _interopRequireWildcard(_math);

var _emp = require("./emp.js");

var _emp2 = _interopRequireDefault(_emp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log("hello world");


var add = function add(x, y) {
  return x + y;
};

var emp = new _emp2.default(100, 'Magesh', 10000);
emp.display();

console.log("emp id is " + emp.id);

var id = emp.id;
var name = emp.name;


var sum = function sum() {
  for (var _len = arguments.length, list = Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }

  return list.reduce(function (result, n) {
    return result + n;
  });
};

var numbers = [10, 20, 30, 40, 50];

console.log(sum.apply(undefined, numbers));

console.log(math.pi);

},{"./emp.js":2,"./math.js":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var idSymbol = Symbol();

var Employee = function () {
	function Employee(id, name, salary) {
		_classCallCheck(this, Employee);

		this[idSymbol] = id;
		this.name = name;
		this.salary = salary;
	}

	_createClass(Employee, [{
		key: "display",
		value: function display() {
			console.log("id = " + this[idSymbol] + ", name = " + this.name + ", salary = " + this.salary);
		}
	}, {
		key: "id",
		get: function get() {
			return this[idSymbol];
		}
	}]);

	return Employee;
}();

exports.default = Employee;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = sum;
function sum(x, y) {
  return x + y;
};
var pi = exports.pi = 3.141593;

},{}]},{},[1]);
