"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Common/Cards.jsx":
/*!*********************************************!*\
  !*** ./src/app/components/Common/Cards.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Card = (param)=>{\n    let { image, title, rating, price, ingredients } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" max-w-xs  max-h-xs bg-white rounded-2xl shadow-xl px-5 pt-5 m-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-full rounded-lg\",\n                src: image,\n                alt: title\n            }, void 0, false, {\n                fileName: \"/home/lunarun/capstone-team-7-1/client/src/app/components/Common/Cards.jsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-6 py-4 flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold text-xl font-sans\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/home/lunarun/capstone-team-7-1/client/src/app/components/Common/Cards.jsx\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, undefined),\n                    rating ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"h-6 w-6 text-yellow-500\",\n                                fill: \"currentColor\",\n                                viewBox: \"0 0 24 24\",\n                                stroke: \"currentColor\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: \"2\",\n                                    d: \"M12 2l2.371 7.018L22 9.24l-6.132 4.478L18.5 22 12 17.75 5.5 22l2.632-8.282L2 9.24l7.629-.222L12 2z\"\n                                }, void 0, false, {\n                                    fileName: \"/home/lunarun/capstone-team-7-1/client/src/app/components/Common/Cards.jsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/lunarun/capstone-team-7-1/client/src/app/components/Common/Cards.jsx\",\n                                lineNumber: 11,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mr-2 font-bold text-xl font-sans ml-2\",\n                                children: rating\n                            }, void 0, false, {\n                                fileName: \"/home/lunarun/capstone-team-7-1/client/src/app/components/Common/Cards.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lunarun/capstone-team-7-1/client/src/app/components/Common/Cards.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-bold text-xl font-sans\",\n                        children: price\n                    }, void 0, false, {\n                        fileName: \"/home/lunarun/capstone-team-7-1/client/src/app/components/Common/Cards.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/lunarun/capstone-team-7-1/client/src/app/components/Common/Cards.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            ingredients ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-6 flex justify-between items-center mb-3font-sans \",\n                children: ingredients\n            }, void 0, false, {\n                fileName: \"/home/lunarun/capstone-team-7-1/client/src/app/components/Common/Cards.jsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-sans\"\n            }, void 0, false, {\n                fileName: \"/home/lunarun/capstone-team-7-1/client/src/app/components/Common/Cards.jsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lunarun/capstone-team-7-1/client/src/app/components/Common/Cards.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Db21tb24vQ2FyZHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLE9BQU87UUFBQyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRTtJQUN4RCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFJRCxXQUFVO2dCQUFvQkUsS0FBS1I7Z0JBQU9TLEtBQUtSOzs7Ozs7MEJBQ3BELDhEQUFDSTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUErQkw7Ozs7OztvQkFDN0NDLHVCQUNDLDhEQUFDRzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNJO2dDQUNDSixXQUFVO2dDQUNWSyxNQUFLO2dDQUNMQyxTQUFRO2dDQUNSQyxRQUFPOzBDQUVQLDRFQUFDQztvQ0FDQ0MsZUFBYztvQ0FDZEMsZ0JBQWU7b0NBQ2ZDLGFBQVk7b0NBQ1pDLEdBQUU7Ozs7Ozs7Ozs7OzBDQUdOLDhEQUFDYjtnQ0FBSUMsV0FBVTswQ0FDWko7Ozs7Ozs7Ozs7O2tEQUlMLDhEQUFDRzt3QkFBSUMsV0FBVTtrQ0FBK0JIOzs7Ozs7Ozs7Ozs7WUFHakRDLDRCQUNDLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDWkY7Ozs7OzBDQUdILDhEQUFDQztnQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7O0FBSXZCO0tBdENNUDtBQXdDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ29tbW9uL0NhcmRzLmpzeD9kN2I5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ2FyZCA9ICh7IGltYWdlLCB0aXRsZSwgcmF0aW5nLCBwcmljZSwgaW5ncmVkaWVudHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1heC13LXhzICBtYXgtaC14cyBiZy13aGl0ZSByb3VuZGVkLTJ4bCBzaGFkb3cteGwgcHgtNSBwdC01IG0tM1wiPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZ1wiIHNyYz17aW1hZ2V9IGFsdD17dGl0bGV9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgcHktNCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBmb250LXNhbnNcIj57dGl0bGV9PC9kaXY+XG4gICAgICAgIHtyYXRpbmcgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQteWVsbG93LTUwMFwiXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgZD1cIk0xMiAybDIuMzcxIDcuMDE4TDIyIDkuMjRsLTYuMTMyIDQuNDc4TDE4LjUgMjIgMTIgMTcuNzUgNS41IDIybDIuNjMyLTguMjgyTDIgOS4yNGw3LjYyOS0uMjIyTDEyIDJ6XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0yIGZvbnQtYm9sZCB0ZXh0LXhsIGZvbnQtc2FucyBtbC0yXCI+XG4gICAgICAgICAgICAgIHtyYXRpbmd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIGZvbnQtc2Fuc1wiPntwcmljZX08L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2luZ3JlZGllbnRzID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTNmb250LXNhbnMgXCI+XG4gICAgICAgICAge2luZ3JlZGllbnRzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zYW5zXCI+PC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJpbWFnZSIsInRpdGxlIiwicmF0aW5nIiwicHJpY2UiLCJpbmdyZWRpZW50cyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsInN2ZyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Common/Cards.jsx\n"));

/***/ })

});