"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: right;\\n    width: 100%;\\n    height: 100%;\\n    background-color: red;\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar AppLayout = function(param) {\n    var children = param.children;\n    var Menus = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(antd__WEBPACK_IMPORTED_MODULE_3__.Button)(_templateObject());\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    \"display\": \"flex\",\n                    \"flex-direction\": \"right\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        type: \"default\",\n                        href: \"/\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.HomeOutlined, {}, void 0, false, void 0, void 0),\n                        children: \"홈\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jay\\\\Documents\\\\Jay\\\\programming\\\\jayMarket\\\\prepare\\\\front\\\\components\\\\AppLayout.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        type: \"default\",\n                        href: \"/login\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.ApiOutlined, {}, void 0, false, void 0, void 0),\n                        children: \"로그인\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jay\\\\Documents\\\\Jay\\\\programming\\\\jayMarket\\\\prepare\\\\front\\\\components\\\\AppLayout.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        type: \"default\",\n                        href: \"/signup\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UserAddOutlined, {}, void 0, false, void 0, void 0),\n                        children: \"회원가입\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jay\\\\Documents\\\\Jay\\\\programming\\\\jayMarket\\\\prepare\\\\front\\\\components\\\\AppLayout.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jay\\\\Documents\\\\Jay\\\\programming\\\\jayMarket\\\\prepare\\\\front\\\\components\\\\AppLayout.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            children\n        ]\n    }, void 0, true));\n};\n_c = AppLayout;\nAppLayout.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node.isRequired)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\nvar _c;\n$RefreshReg$(_c, \"AppLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcExheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDUztBQUNJO0FBRUM7QUFDdUM7Ozs7Ozs7Ozs7Ozs7O1FBRy9DLENBTzdCOzs7Ozs7O0FBUkYsR0FBSyxDQUFDUyxTQUFTLEdBQUcsUUFBUSxRQUFVLENBQUM7UUFBaEJDLFFBQVEsU0FBUkEsUUFBUTtJQUMzQixHQUFLLENBQUNDLEtBQUssR0FBR1QsNkRBQU0sQ0FBQ0csd0NBQU07SUFTM0IsTUFBTTs7d0ZBRURPLENBQUc7Z0JBQUNDLEtBQUssRUFBRSxDQUFDO29CQUNYLENBQVMsVUFBRSxDQUFNO29CQUFFLENBQWdCLGlCQUFFLENBQU87Z0JBQzlDLENBQUM7O2dHQUNFUix3Q0FBTTt3QkFBQ1MsSUFBSSxFQUFDLENBQVM7d0JBQUNDLElBQUksRUFBQyxDQUFHO3dCQUFDQyxJQUFJLDhFQUFHViwyREFBWTtrQ0FBSyxDQUFDOzs7Ozs7Z0dBQ3RERCx3Q0FBSTt3QkFBQ1MsSUFBSSxFQUFDLENBQVM7d0JBQUNDLElBQUksRUFBQyxDQUFRO3dCQUFDQyxJQUFJLDhFQUFJUiwwREFBVztrQ0FBSyxDQUFHOzs7Ozs7Z0dBQ3pESCx3Q0FBQTt3QkFBQ1MsSUFBSSxFQUFDLENBQVM7d0JBQUNDLElBQUksRUFBQyxDQUFTO3dCQUFDQyxJQUFJLDhFQUFHVCw4REFBZTtrQ0FBSyxDQUFJOzs7Ozs7Ozs7Ozs7WUFHdEVHLFFBQVE7OztBQUdmLENBQUM7S0F2QktELFNBQVM7QUF5QmZBLFNBQVMsQ0FBQ1EsU0FBUyxHQUFHLENBQUM7SUFDckJQLFFBQVEsRUFBRVQsbUVBQXlCO0FBQ3JDLENBQUM7QUFFRCwrREFBZVEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzP2NkNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQgeyBSb3csIENvbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgSG9tZU91dGxpbmVkLCBVc2VyQWRkT3V0bGluZWQsIEFwaU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgTWVudXMgPSBzdHlsZWQoQnV0dG9uKWBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLCBcImZsZXgtZGlyZWN0aW9uXCI6IFwicmlnaHRcIlxyXG4gICAgICB9fT5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJkZWZhdWx0XCIgaHJlZj1cIi9cIiBpY29uPXs8SG9tZU91dGxpbmVkIC8+fT7tmYg8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJkZWZhdWx0XCIgaHJlZj1cIi9sb2dpblwiIGljb249ezwgQXBpT3V0bGluZWQgLz59PuuhnOq3uOyduDwvQnV0dG9uID5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJkZWZhdWx0XCIgaHJlZj1cIi9zaWdudXBcIiBpY29uPXs8VXNlckFkZE91dGxpbmVkIC8+fT7tmozsm5DqsIDsnoU8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbkFwcExheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDsiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJSb3ciLCJDb2wiLCJCdXR0b24iLCJIb21lT3V0bGluZWQiLCJVc2VyQWRkT3V0bGluZWQiLCJBcGlPdXRsaW5lZCIsIkFwcExheW91dCIsImNoaWxkcmVuIiwiTWVudXMiLCJkaXYiLCJzdHlsZSIsInR5cGUiLCJocmVmIiwiaWNvbiIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AppLayout.js\n");

/***/ })

});