module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/checkout.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./middleware/database.js":
/*!********************************!*\
  !*** ./middleware/database.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"]('mongodb://127.0.0.1:27017', {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n});\n\nasync function database(req, res, next) {\n  if (!client.isConnected()) await client.connect();\n  req.dbClient = client;\n  req.db = client.db('nextCart');\n  return next();\n}\n\nconst middleware = next_connect__WEBPACK_IMPORTED_MODULE_1___default()();\nmiddleware.use(database);\n/* harmony default export */ __webpack_exports__[\"default\"] = (middleware);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL2RhdGFiYXNlLmpzP2E0ZWMiXSwibmFtZXMiOlsiY2xpZW50IiwiTW9uZ29DbGllbnQiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJkYXRhYmFzZSIsInJlcSIsInJlcyIsIm5leHQiLCJpc0Nvbm5lY3RlZCIsImNvbm5lY3QiLCJkYkNsaWVudCIsImRiIiwibWlkZGxld2FyZSIsIm5leHRDb25uZWN0IiwidXNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyxtREFBSixDQUFnQiwyQkFBaEIsRUFBNkM7QUFDeERDLGlCQUFlLEVBQUUsSUFEdUM7QUFFeERDLG9CQUFrQixFQUFFO0FBRm9DLENBQTdDLENBQWY7O0FBS0EsZUFBZUMsUUFBZixDQUF3QkMsR0FBeEIsRUFBNkJDLEdBQTdCLEVBQWtDQyxJQUFsQyxFQUF3QztBQUNwQyxNQUFJLENBQUNQLE1BQU0sQ0FBQ1EsV0FBUCxFQUFMLEVBQTJCLE1BQU1SLE1BQU0sQ0FBQ1MsT0FBUCxFQUFOO0FBQzNCSixLQUFHLENBQUNLLFFBQUosR0FBZVYsTUFBZjtBQUNBSyxLQUFHLENBQUNNLEVBQUosR0FBU1gsTUFBTSxDQUFDVyxFQUFQLENBQVUsVUFBVixDQUFUO0FBQ0EsU0FBT0osSUFBSSxFQUFYO0FBQ0g7O0FBRUQsTUFBTUssVUFBVSxHQUFHQyxtREFBVyxFQUE5QjtBQUVBRCxVQUFVLENBQUNFLEdBQVgsQ0FBZVYsUUFBZjtBQUVlUSx5RUFBZiIsImZpbGUiOiIuL21pZGRsZXdhcmUvZGF0YWJhc2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCgnbW9uZ29kYjovLzEyNy4wLjAuMToyNzAxNycsIHtcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGRhdGFiYXNlKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgaWYgKCFjbGllbnQuaXNDb25uZWN0ZWQoKSkgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbiAgICByZXEuZGJDbGllbnQgPSBjbGllbnQ7XG4gICAgcmVxLmRiID0gY2xpZW50LmRiKCduZXh0Q2FydCcpO1xuICAgIHJldHVybiBuZXh0KCk7XG59XG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBuZXh0Q29ubmVjdCgpO1xuXG5taWRkbGV3YXJlLnVzZShkYXRhYmFzZSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1pZGRsZXdhcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./middleware/database.js\n");

/***/ }),

/***/ "./pages/api/checkout.jsx":
/*!********************************!*\
  !*** ./pages/api/checkout.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middleware_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middleware/database */ \"./middleware/database.js\");\n\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();\nhandler.use(_middleware_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nhandler.post(async (req, res) => {\n  const {\n    data\n  } = req.body;\n  const dataModel = {\n    \"name\": data.name,\n    \"email\": data.email,\n    \"mobile\": data.mobile,\n    \"address\": data.address,\n    \"couponCode\": data.couponCode\n  };\n\n  if (Object.keys(data).length !== 0) {\n    try {\n      await req.db.collection('users').insertOne(dataModel);\n      return res.status(200).send('Ordered');\n    } catch (e) {\n      return res.status(500).send('Internal server error');\n    }\n  } else {\n    return res.status(400).send('No data');\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2hlY2tvdXQuanN4P2I3MTciXSwibmFtZXMiOlsiaGFuZGxlciIsIm5leHRDb25uZWN0IiwidXNlIiwibWlkZGxld2FyZSIsInBvc3QiLCJyZXEiLCJyZXMiLCJkYXRhIiwiYm9keSIsImRhdGFNb2RlbCIsIm5hbWUiLCJlbWFpbCIsIm1vYmlsZSIsImFkZHJlc3MiLCJjb3Vwb25Db2RlIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImRiIiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsInN0YXR1cyIsInNlbmQiLCJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLG1EQUFXLEVBQTNCO0FBRUFELE9BQU8sQ0FBQ0UsR0FBUixDQUFZQyw0REFBWjtBQUVBSCxPQUFPLENBQUNJLElBQVIsQ0FBYSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDN0IsUUFBTTtBQUFDQztBQUFELE1BQVNGLEdBQUcsQ0FBQ0csSUFBbkI7QUFFQSxRQUFNQyxTQUFTLEdBQUc7QUFBRSxZQUFRRixJQUFJLENBQUNHLElBQWY7QUFBcUIsYUFBU0gsSUFBSSxDQUFDSSxLQUFuQztBQUEwQyxjQUFVSixJQUFJLENBQUNLLE1BQXpEO0FBQWlFLGVBQVdMLElBQUksQ0FBQ00sT0FBakY7QUFBMEYsa0JBQWFOLElBQUksQ0FBQ087QUFBNUcsR0FBbEI7O0FBR0EsTUFBSUMsTUFBTSxDQUFDQyxJQUFQLENBQVlULElBQVosRUFBa0JVLE1BQWxCLEtBQTZCLENBQWpDLEVBQW9DO0FBQ2hDLFFBQUk7QUFDQSxZQUFNWixHQUFHLENBQUNhLEVBQUosQ0FBT0MsVUFBUCxDQUFrQixPQUFsQixFQUEyQkMsU0FBM0IsQ0FBcUNYLFNBQXJDLENBQU47QUFDQSxhQUFPSCxHQUFHLENBQUNlLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixTQUFyQixDQUFQO0FBQ0gsS0FIRCxDQUdFLE9BQU9DLENBQVAsRUFBVTtBQUNSLGFBQU9qQixHQUFHLENBQUNlLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQix1QkFBckIsQ0FBUDtBQUNIO0FBQ0osR0FQRCxNQU9PO0FBQ0gsV0FBT2hCLEdBQUcsQ0FBQ2UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLFNBQXJCLENBQVA7QUFDSDtBQUNKLENBaEJEO0FBb0JldEIsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2hlY2tvdXQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XG5pbXBvcnQgbWlkZGxld2FyZSBmcm9tICcuLi8uLi9taWRkbGV3YXJlL2RhdGFiYXNlJztcblxuY29uc3QgaGFuZGxlciA9IG5leHRDb25uZWN0KCk7XG5cbmhhbmRsZXIudXNlKG1pZGRsZXdhcmUpO1xuXG5oYW5kbGVyLnBvc3QoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3Qge2RhdGF9ID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCBkYXRhTW9kZWwgPSB7IFwibmFtZVwiOiBkYXRhLm5hbWUsIFwiZW1haWxcIjogZGF0YS5lbWFpbCwgXCJtb2JpbGVcIjogZGF0YS5tb2JpbGUsIFwiYWRkcmVzc1wiOiBkYXRhLmFkZHJlc3MsIFwiY291cG9uQ29kZVwiOmRhdGEuY291cG9uQ29kZSAgfVxuXG4gICAgXG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0cnkgeyBcbiAgICAgICAgICAgIGF3YWl0IHJlcS5kYi5jb2xsZWN0aW9uKCd1c2VycycpLmluc2VydE9uZShkYXRhTW9kZWwpXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoJ09yZGVyZWQnKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoJ0ludGVybmFsIHNlcnZlciBlcnJvcicpXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoJ05vIGRhdGEnKVxuICAgIH1cbn0pO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/checkout.jsx\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-connect\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIj9lYTQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtY29ubmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-connect\n");

/***/ })

/******/ });