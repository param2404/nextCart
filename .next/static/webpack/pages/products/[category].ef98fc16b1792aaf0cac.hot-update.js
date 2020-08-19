webpackHotUpdate_N_E("pages/products/[category]",{

/***/ "./pages/products/[category].js":
/*!**************************************!*\
  !*** ./pages/products/[category].js ***!
  \**************************************/
/*! exports provided: __N_SSG, config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/paramjeet/Desktop/nextcart/pages/products/[category].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar __N_SSG = true;\nvar config = {\n  amp: true\n};\nfunction Post(_ref) {\n  _s();\n\n  var _this = this;\n\n  var products = _ref.products;\n  var productCards = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    if (products.length > 0) {\n      return __jsx(\"div\", {\n        className: \"row p-5 m-5\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 17\n        }\n      }, products.map(function (product, i) {\n        return __jsx(\"div\", {\n          className: \"col-3 card m-2\",\n          key: i,\n          style: {\n            width: '18rem'\n          },\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 75\n          }\n        }, isAmp ? __jsx(\"amp-img\", {\n          \"class\": \"card-img-top\",\n          src: product.image,\n          alt: \"Card image cap\",\n          width: \"250px\",\n          height: \"250px\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 30\n          }\n        }) : __jsx(\"img\", {\n          className: \"card-img-top\",\n          src: product.image,\n          alt: \"Card image cap\",\n          width: \"250px\",\n          height: \"250px\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 139\n          }\n        }), __jsx(\"div\", {\n          className: \"card-body\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 21\n          }\n        }, __jsx(\"h5\", {\n          className: \"card-title\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 25\n          }\n        }, product.title), __jsx(\"h6\", {\n          className: \"card-subtitle mb-2 text-muted\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 25\n          }\n        }, \"Price: $\", product.price), __jsx(\"p\", {\n          className: \"card-text\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 25\n          }\n        }, product.description), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/products/checkout/[product]\",\n          as: \"/products/checkout/\".concat(product.id),\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 25\n          }\n        }, __jsx(\"button\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 107\n          }\n        }, \"CHECKOUT\"))));\n      }));\n    } else {\n      return __jsx(\"h3\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 21\n        }\n      }, \"No products\");\n    }\n  }, [products]);\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"pl-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, \"Products\"), productCards());\n}\n\n_s(Post, \"Mk4rbp4Tme0KRmwSVKkPxAjGH4c=\");\n\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvW2NhdGVnb3J5XS5qcz8xM2NiIl0sIm5hbWVzIjpbImNvbmZpZyIsImFtcCIsIlBvc3QiLCJwcm9kdWN0cyIsInByb2R1Y3RDYXJkcyIsInVzZUNhbGxiYWNrIiwibGVuZ3RoIiwibWFwIiwicHJvZHVjdCIsImkiLCJ3aWR0aCIsImlzQW1wIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHTyxJQUFNQSxNQUFNLEdBQUc7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBZjtBQUVRLFNBQVNDLElBQVQsT0FBNEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFFdkMsTUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDbkMsUUFBSUYsUUFBUSxDQUFDRyxNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3JCLGFBQ0k7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE4QkgsUUFBUSxDQUFDSSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxDQUFWO0FBQUEsZUFBZTtBQUFLLG1CQUFTLEVBQUMsZ0JBQWY7QUFBZ0MsYUFBRyxFQUFFQSxDQUFyQztBQUF3QyxlQUFLLEVBQUU7QUFBQ0MsaUJBQUssRUFBRTtBQUFSLFdBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDckRDLEtBQUssR0FBRztBQUFTLG1CQUFVLGNBQW5CO0FBQWtDLGFBQUcsRUFBRUgsT0FBTyxDQUFDSSxLQUEvQztBQUFzRCxhQUFHLEVBQUMsZ0JBQTFEO0FBQTJFLGVBQUssRUFBQyxPQUFqRjtBQUF5RixnQkFBTSxFQUFDLE9BQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBSCxHQUFnSDtBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUE4QixhQUFHLEVBQUVKLE9BQU8sQ0FBQ0ksS0FBM0M7QUFBa0QsYUFBRyxFQUFDLGdCQUF0RDtBQUF1RSxlQUFLLEVBQUMsT0FBN0U7QUFBcUYsZ0JBQU0sRUFBQyxPQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRGhFLEVBRXREO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFJLG1CQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTRCSixPQUFPLENBQUNLLEtBQXBDLENBREosRUFFSTtBQUFJLG1CQUFTLEVBQUMsK0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBdURMLE9BQU8sQ0FBQ00sS0FBL0QsQ0FGSixFQUdJO0FBQUcsbUJBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBMEJOLE9BQU8sQ0FBQ08sV0FBbEMsQ0FISixFQUlJLE1BQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsOEJBQVg7QUFBMEMsWUFBRSwrQkFBd0JQLE9BQU8sQ0FBQ1EsRUFBaEMsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFrRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFsRixDQUpKLENBRnNELENBQWY7QUFBQSxPQUFiLENBQTlCLENBREo7QUFVSCxLQVhELE1BV087QUFDSCxhQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVI7QUFDSDtBQUNKLEdBZitCLEVBZTdCLENBQUNiLFFBQUQsQ0FmNkIsQ0FBaEM7QUFrQkEsU0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFS0MsWUFBWSxFQUZqQixDQURKO0FBTUg7O0dBMUJ1QkYsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3RzL1tjYXRlZ29yeV0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBnZXRQcm9kdWN0cywgZ2V0QWxsQ2F0ZWdvcnlJZCB9IGZyb20gJy4uLy4uL2FwaS9wcm9kdWN0cyc7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7IGFtcDogdHJ1ZSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwcm9kdWN0cyB9KSB7XG5cbiAgICBjb25zdCBwcm9kdWN0Q2FyZHMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmIChwcm9kdWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHAtNSBtLTVcIj57cHJvZHVjdHMubWFwKChwcm9kdWN0LCBpKSA9PjxkaXYgY2xhc3NOYW1lPVwiY29sLTMgY2FyZCBtLTJcIiBrZXk9e2l9IHN0eWxlPXt7d2lkdGg6ICcxOHJlbSd9fT5cbiAgICAgICAgICAgICAgICAgICAge2lzQW1wID8gPGFtcC1pbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiIHdpZHRoPVwiMjUwcHhcIiBoZWlnaHQ9XCIyNTBweFwiIC8+IDogPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e3Byb2R1Y3QuaW1hZ2V9IGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIgd2lkdGg9XCIyNTBweFwiIGhlaWdodD1cIjI1MHB4XCIgLz59ICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3Byb2R1Y3QudGl0bGV9PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIG1iLTIgdGV4dC1tdXRlZFwiPlByaWNlOiAke3Byb2R1Y3QucHJpY2V9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHMvY2hlY2tvdXQvW3Byb2R1Y3RdXCIgYXM9e2AvcHJvZHVjdHMvY2hlY2tvdXQvJHtwcm9kdWN0LmlkfWB9PjxidXR0b24+Q0hFQ0tPVVQ8L2J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2Pil9PC9kaXY+KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICg8aDM+Tm8gcHJvZHVjdHM8L2gzPilcbiAgICAgICAgfVxuICAgIH0sIFtwcm9kdWN0c10pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGwtNVwiPntgUHJvZHVjdHNgfTwvaDE+XG4gICAgICAgICAgICB7cHJvZHVjdENhcmRzKCl9ICAgICAgXG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAgIGNvbnN0IHBhdGhzID0gZ2V0QWxsQ2F0ZWdvcnlJZCgpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHMsXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxuICAgIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICAgIGNvbnN0IHByb2R1Y3RzRGF0YSA9IGF3YWl0IGdldFByb2R1Y3RzKHBhcmFtcy5jYXRlZ29yeSlcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzRGF0YS5wcm9kdWN0c1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/[category].js\n");

/***/ })

})