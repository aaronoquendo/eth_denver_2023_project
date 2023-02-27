"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/redux/saga.js":
/*!***************************!*\
  !*** ./src/redux/saga.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/redux/actions.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\n\n\nfunction* getItems(data) {\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_actions__WEBPACK_IMPORTED_MODULE_1__.getItemSuccess)({\n            item: \"test\"\n        }));\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)(failure(err));\n    }\n}\nfunction* getItem(data) {\n    console.log(\"process.env.NEXT_PUBLIC_INFURA_API_KEY\", \"ae37dc3f1096476582e3352784a87845\");\n    console.log(\"process.env.NEXT_PUBLIC_INFURA_API_KEY_SECRET\", \"2c1a588da3c241b9be9b40ddacea9d4b\");\n    let response;\n    const Auth = \"Basic \" + Buffer.from(\"ae37dc3f1096476582e3352784a87845\" + \":\" + \"2c1a588da3c241b9be9b40ddacea9d4b\").toString(\"base64\");\n    response = yield axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://nft.api.infura.io/networks/1/nfts/0xa9cb55d05d3351dcd02dd5dc4614e764ce3e1d6e\", {\n        headers: {\n            Authorization: \"Basic YWUzN2RjM2YxMDk2NDc2NTgyZTMzNTI3ODRhODc4NDU6MmMxYTU4OGRhM2MyNDFiOWJlOWI0MGRkYWNlYTlkNGI=\"\n        }\n    });\n    console.log(\"response\", response);\n    try {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)((0,_actions__WEBPACK_IMPORTED_MODULE_1__.getItemSuccess)({\n            item: response\n        }));\n    } catch (err) {\n        yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.put)(failure(err));\n    }\n}\nfunction* rootSaga() {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__.takeLatest)(_actions__WEBPACK_IMPORTED_MODULE_1__.actionTypes.GET_ITEM, getItem);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootSaga);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc2FnYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQVUyQjtBQUlUO0FBQ1E7QUFFMUIsVUFBVVksU0FBU0MsSUFBSSxFQUFFO0lBQ3ZCLElBQUk7UUFDRixNQUFNVix1REFBR0EsQ0FBQ08sd0RBQWNBLENBQUM7WUFBRUksTUFBTTtRQUFPO0lBQzFDLEVBQUUsT0FBT0MsS0FBSztRQUNaLE1BQU1aLHVEQUFHQSxDQUFDYSxRQUFRRDtJQUNwQjtBQUNGO0FBR0EsVUFBVUUsUUFBUUosSUFBSSxFQUFFO0lBQ3RCSyxRQUFRQyxHQUFHLENBQUMsMENBQTBDQyxrQ0FBc0M7SUFDNUZGLFFBQVFDLEdBQUcsQ0FBQyxpREFBaURDLGtDQUE2QztJQUMxRyxJQUFJSTtJQUNKLE1BQU1DLE9BQ0osV0FDQUMsTUFBTUEsQ0FBQ0MsSUFBSSxDQUNUUCxrQ0FBc0MsR0FBRyxNQUFNQSxrQ0FBNkMsRUFDNUZRLFFBQVEsQ0FBQztJQUViSixXQUFXLE1BQU1iLGlEQUFTLENBQUMsd0ZBQXdGO1FBQ2pIbUIsU0FBUztZQUNQQyxlQUFnQjtRQUNsQjtJQUNGO0lBRUFiLFFBQVFDLEdBQUcsQ0FBQyxZQUFZSztJQUt4QixJQUFJO1FBQ0YsTUFBTXJCLHVEQUFHQSxDQUFDTyx3REFBY0EsQ0FBQztZQUFFSSxNQUFNVTtRQUFRO0lBQzNDLEVBQUUsT0FBT1QsS0FBSztRQUNaLE1BQU1aLHVEQUFHQSxDQUFDYSxRQUFRRDtJQUNwQjtBQUNGO0FBTUEsVUFBVWlCLFdBQVc7SUFDbkIsTUFBTTNCLDhEQUFVQSxDQUFDSSwwREFBb0IsRUFBRVE7QUFDekM7QUFFQSwrREFBZWUsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcmVkdXgvc2FnYS5qcz9iYWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFsbCxcbiAgY2FsbCxcbiAgZGVsYXksXG4gIHB1dCxcbiAgdGFrZSxcbiAgdGFrZUxhdGVzdCxcbiAgdGFrZU1heWJlLFxuICB0YWtlTGVhZGluZyxcbiAgdGFrZUV2ZXJ5XG59IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcbmltcG9ydCB7XG4gIGFjdGlvblR5cGVzLFxuICBnZXRJdGVtU3VjY2Vzc1xufSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmZ1bmN0aW9uKiBnZXRJdGVtcyhkYXRhKSB7XG4gIHRyeSB7XG4gICAgeWllbGQgcHV0KGdldEl0ZW1TdWNjZXNzKHsgaXRlbTogXCJ0ZXN0XCIgfSkpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB5aWVsZCBwdXQoZmFpbHVyZShlcnIpKVxuICB9XG59XG5cblxuZnVuY3Rpb24qIGdldEl0ZW0oZGF0YSkge1xuICBjb25zb2xlLmxvZyhcInByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lORlVSQV9BUElfS0VZXCIsIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lORlVSQV9BUElfS0VZKVxuICBjb25zb2xlLmxvZyhcInByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lORlVSQV9BUElfS0VZX1NFQ1JFVFwiLCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19JTkZVUkFfQVBJX0tFWV9TRUNSRVQpXG4gIGxldCByZXNwb25zZTtcbiAgY29uc3QgQXV0aCA9XG4gICAgJ0Jhc2ljICcgK1xuICAgIEJ1ZmZlci5mcm9tKFxuICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU5GVVJBX0FQSV9LRVkgKyAnOicgKyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19JTkZVUkFfQVBJX0tFWV9TRUNSRVQsXG4gICAgKS50b1N0cmluZygnYmFzZTY0Jyk7XG5cbiAgcmVzcG9uc2UgPSB5aWVsZCBheGlvcy5nZXQoJ2h0dHBzOi8vbmZ0LmFwaS5pbmZ1cmEuaW8vbmV0d29ya3MvMS9uZnRzLzB4YTljYjU1ZDA1ZDMzNTFkY2QwMmRkNWRjNDYxNGU3NjRjZTNlMWQ2ZScsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgWVdVek4yUmpNMll4TURrMk5EYzJOVGd5WlRNek5USTNPRFJoT0RjNE5EVTZNbU14WVRVNE9HUmhNMk15TkRGaU9XSmxPV0kwTUdSa1lXTmxZVGxrTkdJPWAsXG4gICAgfVxuICB9KVxuXG4gIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xuXG5cblxuXG4gIHRyeSB7XG4gICAgeWllbGQgcHV0KGdldEl0ZW1TdWNjZXNzKHsgaXRlbTogcmVzcG9uc2V9KSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dChmYWlsdXJlKGVycikpXG4gIH1cbn1cblxuXG5cblxuXG5mdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoYWN0aW9uVHlwZXMuR0VUX0lURU0sIGdldEl0ZW0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByb290U2FnYVxuIl0sIm5hbWVzIjpbImFsbCIsImNhbGwiLCJkZWxheSIsInB1dCIsInRha2UiLCJ0YWtlTGF0ZXN0IiwidGFrZU1heWJlIiwidGFrZUxlYWRpbmciLCJ0YWtlRXZlcnkiLCJhY3Rpb25UeXBlcyIsImdldEl0ZW1TdWNjZXNzIiwiYXhpb3MiLCJnZXRJdGVtcyIsImRhdGEiLCJpdGVtIiwiZXJyIiwiZmFpbHVyZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0lORlVSQV9BUElfS0VZIiwiTkVYVF9QVUJMSUNfSU5GVVJBX0FQSV9LRVlfU0VDUkVUIiwicmVzcG9uc2UiLCJBdXRoIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyb290U2FnYSIsIkdFVF9JVEVNIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/saga.js\n"));

/***/ })

});