webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/paramjeet/Desktop/nextcart/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  var categories = _ref.categories;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('men clothing'),\n      categorySelected = _useState[0],\n      setCategorySelected = _useState[1];\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, \"Select Category to Search Products\"), __jsx(\"select\", {\n    className: \"form-control\",\n    onChange: function onChange(e) {\n      return setCategorySelected(e.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, categories.map(function (val, i) {\n    return __jsx(\"option\", {\n      key: i,\n      value: val,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 29\n      }\n    }, val);\n  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/products/[category]\",\n    as: \"/products/\".concat(categorySelected),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(\"button\", {\n    className: \"mt-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 84\n    }\n  }, \"Get Products\")), __jsx(\"div\", {\n    className: \"row p-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, \" \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/products/allproducts\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 39\n    }\n  }, __jsx(\"button\", {\n    className: \"mt-5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 75\n    }\n  }, \"All Products\")))));\n}\n\n_s(Home, \"cfjZtDRm2jUINvvO9tzFZOnD2uw=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiY2F0ZWdvcmllcyIsInVzZVN0YXRlIiwiY2F0ZWdvcnlTZWxlY3RlZCIsInNldENhdGVnb3J5U2VsZWN0ZWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJ2YWwiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBSWUsU0FBU0EsSUFBVCxPQUE0QjtBQUFBOztBQUFBOztBQUFBLE1BQWJDLFVBQWEsUUFBYkEsVUFBYTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxjQUFELENBRGQ7QUFBQSxNQUNoQ0MsZ0JBRGdDO0FBQUEsTUFDZkMsbUJBRGU7O0FBSXZDLFNBQVEsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0o7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FESixFQUVBO0FBQVEsYUFBUyxFQUFDLGNBQWxCO0FBQWlDLFlBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLGFBQUtELG1CQUFtQixDQUFDQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUF4QjtBQUFBLEtBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDU04sVUFBVSxDQUFDTyxHQUFYLENBQWUsVUFBQ0MsR0FBRCxFQUFLQyxDQUFMO0FBQUEsV0FDSjtBQUFRLFNBQUcsRUFBRUEsQ0FBYjtBQUFnQixXQUFLLEVBQUVELEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBNkJBLEdBQTdCLENBREk7QUFBQSxHQUFmLENBRFQsQ0FGQSxFQVFJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsc0JBQVg7QUFBa0MsTUFBRSxzQkFBZU4sZ0JBQWYsQ0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1RTtBQUFRLGFBQVMsRUFBQyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF2RSxDQVJKLEVBU0k7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQTBCLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsdUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQztBQUFRLGFBQVMsRUFBQyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFwQyxDQUExQixDQVRKLENBREksQ0FBUjtBQWNIOztHQWxCdUJILEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBmZXRjaENhdGVnb3JpZXN9IGZyb20gJy4vLi4vYXBpL2NhdGVnb3JpZXMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7Y2F0ZWdvcmllc30pIHtcbiAgICBjb25zdCBbY2F0ZWdvcnlTZWxlY3RlZCxzZXRDYXRlZ29yeVNlbGVjdGVkXT11c2VTdGF0ZSgnbWVuIGNsb3RoaW5nJylcblxuXG4gICAgcmV0dXJuICg8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgzPlNlbGVjdCBDYXRlZ29yeSB0byBTZWFyY2ggUHJvZHVjdHM8L2gzPlxuICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXsoZSk9PnNldENhdGVnb3J5U2VsZWN0ZWQoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKHZhbCxpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l9IHZhbHVlPXt2YWx9Pnt2YWx9PC9vcHRpb24+ICAgICAgIFxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHMvW2NhdGVnb3J5XVwiIGFzPXtgL3Byb2R1Y3RzLyR7Y2F0ZWdvcnlTZWxlY3RlZH1gfT48YnV0dG9uIGNsYXNzTmFtZT1cIm10LTVcIj5HZXQgUHJvZHVjdHM8L2J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwLTJcIj4gPExpbmsgaHJlZj1cIi9wcm9kdWN0cy9hbGxwcm9kdWN0c1wiID48YnV0dG9uIGNsYXNzTmFtZT1cIm10LTVcIj5BbGwgUHJvZHVjdHM8L2J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSAgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBmZXRjaENhdGVnb3JpZXMoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogZGF0YSxcbiAgICB9O1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})