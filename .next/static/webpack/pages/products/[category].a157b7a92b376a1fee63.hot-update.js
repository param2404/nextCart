webpackHotUpdate_N_E("pages/products/[category]",{

/***/ "./pages/products/[category].js":
/*!**************************************!*\
  !*** ./pages/products/[category].js ***!
  \**************************************/
/*! exports provided: __N_SSG, config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/amp */ \"./node_modules/next/amp.js\");\n/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_amp__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/paramjeet/Desktop/nextcart/pages/products/[category].js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n //export const config = { amp: true }\n\nvar __N_SSG = true;\nvar config = {\n  amp: 'hybrid'\n};\nfunction Post(_ref) {\n  _s();\n\n  var _this = this;\n\n  var products = _ref.products;\n  var isAmp = Object(next_amp__WEBPACK_IMPORTED_MODULE_3__[\"useAmp\"])();\n  var productCards = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    if (products.length > 0) {\n      return __jsx(\"div\", {\n        className: \"row p-5 m-5\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 17\n        }\n      }, products.map(function (product, i) {\n        return __jsx(\"div\", {\n          className: \"col-3 card m-2\",\n          key: i,\n          style: {\n            width: '18rem'\n          },\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 75\n          }\n        }, isAmp ? __jsx(\"amp-img\", {\n          \"class\": \"card-img-top\",\n          src: product.image,\n          alt: \"Card image cap\",\n          width: \"250px\",\n          height: \"250px\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 30\n          }\n        }) : __jsx(\"img\", {\n          className: \"card-img-top\",\n          src: product.image,\n          alt: \"Card image cap\",\n          width: \"250px\",\n          height: \"250px\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 139\n          }\n        }), __jsx(\"div\", {\n          className: \"card-body\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 21\n          }\n        }, __jsx(\"h5\", {\n          className: \"card-title\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 25\n          }\n        }, product.title), __jsx(\"h6\", {\n          className: \"card-subtitle mb-2 text-muted\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 25\n          }\n        }, \"Price: $\", product.price), __jsx(\"p\", {\n          className: \"card-text\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 25\n          }\n        }, product.description), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/products/checkout/[product]\",\n          as: \"/products/checkout/\".concat(product.id),\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 25\n          }\n        }, __jsx(\"button\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 107\n          }\n        }, \"CHECKOUT\"))));\n      }));\n    } else {\n      return __jsx(\"h3\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }\n      }, \"No products\");\n    }\n  }, [products]);\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"pl-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, \"Products\"), productCards());\n}\n\n_s(Post, \"DZpRxroJQAZujrU8Xwex1iyidz0=\", false, function () {\n  return [next_amp__WEBPACK_IMPORTED_MODULE_3__[\"useAmp\"]];\n});\n\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvW2NhdGVnb3J5XS5qcz8xM2NiIl0sIm5hbWVzIjpbImNvbmZpZyIsImFtcCIsIlBvc3QiLCJwcm9kdWN0cyIsImlzQW1wIiwidXNlQW1wIiwicHJvZHVjdENhcmRzIiwidXNlQ2FsbGJhY2siLCJsZW5ndGgiLCJtYXAiLCJwcm9kdWN0IiwiaSIsIndpZHRoIiwiaW1hZ2UiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBSUE7OztBQUVPLElBQU1BLE1BQU0sR0FBRztBQUFFQyxLQUFHLEVBQUU7QUFBUCxDQUFmO0FBRVEsU0FBU0MsSUFBVCxPQUE0QjtBQUFBOztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUN2QyxNQUFNQyxLQUFLLEdBQUdDLHVEQUFNLEVBQXBCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDbkMsUUFBSUosUUFBUSxDQUFDSyxNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3JCLGFBQ0k7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE4QkwsUUFBUSxDQUFDTSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxDQUFWO0FBQUEsZUFBZTtBQUFLLG1CQUFTLEVBQUMsZ0JBQWY7QUFBZ0MsYUFBRyxFQUFFQSxDQUFyQztBQUF3QyxlQUFLLEVBQUU7QUFBQ0MsaUJBQUssRUFBRTtBQUFSLFdBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDckRSLEtBQUssR0FBRztBQUFTLG1CQUFVLGNBQW5CO0FBQWtDLGFBQUcsRUFBRU0sT0FBTyxDQUFDRyxLQUEvQztBQUFzRCxhQUFHLEVBQUMsZ0JBQTFEO0FBQTJFLGVBQUssRUFBQyxPQUFqRjtBQUF5RixnQkFBTSxFQUFDLE9BQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBSCxHQUFnSDtBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUE4QixhQUFHLEVBQUVILE9BQU8sQ0FBQ0csS0FBM0M7QUFBa0QsYUFBRyxFQUFDLGdCQUF0RDtBQUF1RSxlQUFLLEVBQUMsT0FBN0U7QUFBcUYsZ0JBQU0sRUFBQyxPQUE1RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRGhFLEVBRXREO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFJLG1CQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTRCSCxPQUFPLENBQUNJLEtBQXBDLENBREosRUFFSTtBQUFJLG1CQUFTLEVBQUMsK0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBdURKLE9BQU8sQ0FBQ0ssS0FBL0QsQ0FGSixFQUdJO0FBQUcsbUJBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBMEJMLE9BQU8sQ0FBQ00sV0FBbEMsQ0FISixFQUlJLE1BQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsOEJBQVg7QUFBMEMsWUFBRSwrQkFBd0JOLE9BQU8sQ0FBQ08sRUFBaEMsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFrRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFsRixDQUpKLENBRnNELENBQWY7QUFBQSxPQUFiLENBQTlCLENBREo7QUFVSCxLQVhELE1BV087QUFDSCxhQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVI7QUFDSDtBQUNKLEdBZitCLEVBZTdCLENBQUNkLFFBQUQsQ0FmNkIsQ0FBaEM7QUFrQkEsU0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFS0csWUFBWSxFQUZqQixDQURKO0FBTUg7O0dBMUJ1QkosSTtVQUNORywrQzs7O0tBRE1ILEkiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9bY2F0ZWdvcnldLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdHMsIGdldEFsbENhdGVnb3J5SWQgfSBmcm9tICcuLi8uLi9hcGkvcHJvZHVjdHMnO1xuaW1wb3J0IHsgdXNlQW1wIH0gZnJvbSAnbmV4dC9hbXAnXG5cbi8vZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHsgYW1wOiB0cnVlIH1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHsgYW1wOiAnaHlicmlkJyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwcm9kdWN0cyB9KSB7XG4gICAgY29uc3QgaXNBbXAgPSB1c2VBbXAoKVxuICAgIGNvbnN0IHByb2R1Y3RDYXJkcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHByb2R1Y3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcC01IG0tNVwiPntwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGkpID0+PGRpdiBjbGFzc05hbWU9XCJjb2wtMyBjYXJkIG0tMlwiIGtleT17aX0gc3R5bGU9e3t3aWR0aDogJzE4cmVtJ319PlxuICAgICAgICAgICAgICAgICAgICB7aXNBbXAgPyA8YW1wLWltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e3Byb2R1Y3QuaW1hZ2V9IGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIgd2lkdGg9XCIyNTBweFwiIGhlaWdodD1cIjI1MHB4XCIgLz4gOiA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIiB3aWR0aD1cIjI1MHB4XCIgaGVpZ2h0PVwiMjUwcHhcIiAvPn0gIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cHJvZHVjdC50aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgbWItMiB0ZXh0LW11dGVkXCI+UHJpY2U6ICR7cHJvZHVjdC5wcmljZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cy9jaGVja291dC9bcHJvZHVjdF1cIiBhcz17YC9wcm9kdWN0cy9jaGVja291dC8ke3Byb2R1Y3QuaWR9YH0+PGJ1dHRvbj5DSEVDS09VVDwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+KX08L2Rpdj4pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKDxoMz5ObyBwcm9kdWN0czwvaDM+KVxuICAgICAgICB9XG4gICAgfSwgW3Byb2R1Y3RzXSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwbC01XCI+e2BQcm9kdWN0c2B9PC9oMT5cbiAgICAgICAgICAgIHtwcm9kdWN0Q2FyZHMoKX0gICAgICBcbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgY29uc3QgcGF0aHMgPSBnZXRBbGxDYXRlZ29yeUlkKClcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRocyxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXG4gICAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gICAgY29uc3QgcHJvZHVjdHNEYXRhID0gYXdhaXQgZ2V0UHJvZHVjdHMocGFyYW1zLmNhdGVnb3J5KVxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHNEYXRhLnByb2R1Y3RzXG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/[category].js\n");

/***/ })

})