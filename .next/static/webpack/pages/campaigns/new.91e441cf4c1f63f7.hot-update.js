"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/new",{

/***/ "./pages/campaigns/new.js":
/*!********************************!*\
  !*** ./pages/campaigns/new.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_shagun_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_shagun_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_shagun_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/Layout */ \"./component/Layout.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o1) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o1);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o2, p1) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o2, p1);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\n\n\n\nvar CampaignNew = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(CampaignNew, Component1);\n    var _super = _createSuper(CampaignNew);\n    function CampaignNew() {\n        _classCallCheck(this, CampaignNew);\n        var _this;\n        _this = _super.apply(this, arguments);\n        _defineProperty(_assertThisInitialized(_this), \"state\", {\n            minimumContribution: \"\",\n            errorMessage: \"\"\n        });\n        var _this1 = _assertThisInitialized(_this);\n        _defineProperty(_assertThisInitialized(_this), \"onSubmit\", function() {\n            var _ref = _asyncToGenerator(C_Users_shagun_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n                var accounts;\n                return C_Users_shagun_Desktop_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            event.preventDefault();\n                            _ctx.prev = 1;\n                            _ctx.next = 4;\n                            return _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                        case 4:\n                            accounts = _ctx.sent;\n                            _ctx.next = 7;\n                            return _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__[\"default\"].methods.createCampaign(_this1.state.minimumContribution).send({\n                                from: accounts[0]\n                            });\n                        case 7:\n                            _ctx.next = 12;\n                            break;\n                        case 9:\n                            _ctx.prev = 9;\n                            _ctx.t0 = _ctx[\"catch\"](1);\n                            _this1.setState({\n                                errorMessage: _ctx.t0.message\n                            });\n                        case 12:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        1,\n                        9\n                    ]\n                ]);\n            }));\n            return function(event) {\n                return _ref.apply(this, arguments);\n            };\n        }());\n        return _this;\n    }\n    _createClass(CampaignNew, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"Create Camapaign\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\shagun\\\\Desktop\\\\Blockchain\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                            onSubmit: this.onSubmit,\n                            error: this.state.errorMessage,\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            children: \"Minimum Contribution\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\shagun\\\\Desktop\\\\Blockchain\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                            label: \"wei\",\n                                            labelPosition: \"right\",\n                                            value: this.state.minimumContribution,\n                                            onChange: function(e) {\n                                                return _this.setState({\n                                                    minimumContribution: e.target.value\n                                                });\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\shagun\\\\Desktop\\\\Blockchain\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\shagun\\\\Desktop\\\\Blockchain\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n                                    error: true,\n                                    header: \"Oops!\",\n                                    content: this.state.errorMessage\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\shagun\\\\Desktop\\\\Blockchain\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                    type: \"submit\",\n                                    primary: true,\n                                    children: \"Create!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\shagun\\\\Desktop\\\\Blockchain\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shagun\\\\Desktop\\\\Blockchain\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                            lineNumber: 32,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\shagun\\\\Desktop\\\\Blockchain\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ]);\n    return CampaignNew;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignNew);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvbmV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUN3QjtBQUNyQjtBQUNDO0FBQ047QUFFdkMsZUFBaUIsaUJBOENoQjs7OzthQTlDS1MsV0FBVzs7OztRQUNmQywrQ0FBQUEsT0FBSyxFQUFHO1lBQ05DLG1CQUFtQixFQUFFLEVBQUU7WUFDdkJDLFlBQVksRUFBRSxFQUFFO1NBQ2pCLENBQUM7O1FBRUZDLCtDQUFBQSxVQUFRO3VCQUFHLDBMQUFPQyxLQUFLLEVBQUs7b0JBR2xCQyxRQUFROzs7OzRCQUZoQkQsS0FBSyxDQUFDRSxjQUFjLEVBQUUsQ0FBQzs7O21DQUVFUixzRUFBb0IsRUFBRTs7NEJBQXZDTyxRQUFRLFlBQStCOzttQ0FDdkNSLGdGQUNXLENBQUMsT0FBS0csS0FBSyxDQUFDQyxtQkFBbUIsQ0FBQyxDQUM5Q1UsSUFBSSxDQUFDO2dDQUNKQyxJQUFJLEVBQUVQLFFBQVEsQ0FBQyxDQUFDLENBQUM7NkJBRWxCLENBQUM7Ozs7Ozs7NEJBRUosT0FBS1EsUUFBUSxDQUFDO2dDQUFDWCxZQUFZLEVBQUVZLFFBQU1DLE9BQU87NkJBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7OzthQUVoRDs0QkFiaUJYLEtBQUs7OztZQWFyQjs7Ozs7WUFFRlksR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7O2dCQUNQLHFCQUNFLDhEQUFDcEIseURBQU07O3NDQUNMLDhEQUFDcUIsSUFBRTtzQ0FBQyxrQkFBZ0I7Ozs7O2dDQUFLO3NDQUN6Qiw4REFBQ3pCLG1EQUFJOzRCQUFDVyxRQUFRLEVBQUUsSUFBSSxDQUFDQSxRQUFROzRCQUFFVyxLQUFLLEVBQUUsSUFBSSxDQUFDZCxLQUFLLENBQUNFLFlBQVk7O2dDQUFFLEdBQUM7OENBQzlELDhEQUFDVix5REFBVTs7c0RBQ1QsOERBQUMyQixPQUFLO3NEQUFDLHNCQUFvQjs7Ozs7Z0RBQVE7c0RBQ25DLDhEQUFDekIsb0RBQUs7NENBQ0p5QixLQUFLLEVBQUMsS0FBSzs0Q0FDWEMsYUFBYSxFQUFDLE9BQU87NENBQ3JCQyxLQUFLLEVBQUUsSUFBSSxDQUFDckIsS0FBSyxDQUFDQyxtQkFBbUI7NENBQ3JDcUIsUUFBUSxFQUFFLFNBQUNDLENBQUM7dURBQ1YsTUFBS1YsUUFBUSxDQUFDO29EQUFFWixtQkFBbUIsRUFBRXNCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLO2lEQUFFLENBQUM7NkNBQUE7Ozs7O2dEQUV4RDs7Ozs7O3dDQUNTOzhDQUViLDhEQUFDMUIsc0RBQU87b0NBQUNtQixLQUFLO29DQUFDVyxNQUFNLEVBQUMsT0FBTztvQ0FBQ0MsT0FBTyxFQUFFLElBQUksQ0FBQzFCLEtBQUssQ0FBQ0UsWUFBWTs7Ozs7d0NBQUk7OENBQ2xFLDhEQUFDVCxxREFBTTtvQ0FBQ2tDLElBQUksRUFBQyxRQUFRO29DQUFDQyxPQUFPOzhDQUFDLFNBQU87Ozs7O3dDQUFTOzs7Ozs7Z0NBQ3pDOzs7Ozs7d0JBQ0EsQ0FDVDthQUNIOzs7O0NBQ0YsQ0E1Q3lCckMsNENBQVMsQ0E0Q2xDO0FBRUQsK0RBQWVRLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvbmV3LmpzP2JkNWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9MYXlvdXRcIjtcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcclxuXHJcbmNsYXNzIENhbXBhaWduTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIG1pbmltdW1Db250cmlidXRpb246IFwiXCIsXHJcbiAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kc1xyXG4gICAgICAgIC5jcmVhdGVDYW1wYWlnbih0aGlzLnN0YXRlLm1pbmltdW1Db250cmlidXRpb24pXHJcbiAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXHJcbiAgICAgICAgICAvLyBXZSBvbmx5IGhhdmUgdG8gc3BlY2lmeSB0aGUgZ2FzIHZhbHVlIGluIHRlc3QgbmV0d29yayBubyBuZWVkIHRvIGRvIGl0IGhlcmUuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlcnJvck1lc3NhZ2U6IGVycm9yLm1lc3NhZ2V9KTsgXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDM+Q3JlYXRlIENhbWFwYWlnbjwvaDM+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+IHsvKiBUaGlzIGVycm9yIHByb3BlcnR5IGlzIHJlcXVpcmVkIHRvIHJlbmRlciBvdXIgTWVzc2FnZSBjb21wb25lbnQgKi99XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPGxhYmVsPk1pbmltdW0gQ29udHJpYnV0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJ3ZWlcIlxyXG4gICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWluaW11bUNvbnRyaWJ1dGlvbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWluaW11bUNvbnRyaWJ1dGlvbjogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcblxyXG4gICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHByaW1hcnk+Q3JlYXRlITwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25OZXc7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsImFjY291bnRzIiwicHJldmVudERlZmF1bHQiLCJldGgiLCJnZXRBY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwic2V0U3RhdGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJyZW5kZXIiLCJoMyIsIkZpZWxkIiwibGFiZWwiLCJsYWJlbFBvc2l0aW9uIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJoZWFkZXIiLCJjb250ZW50IiwidHlwZSIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/new.js\n");

/***/ })

});