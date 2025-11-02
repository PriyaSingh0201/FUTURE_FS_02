/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/CartContext.js":
/*!*********************************!*\
  !*** ./contexts/CartContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction cartReducer(state, action) {\n    switch(action.type){\n        case \"ADD_ITEM\":\n            const existItem = state.find((item)=>item.id === action.payload.id);\n            if (existItem) {\n                return state.map((item)=>item.id === action.payload.id ? {\n                        ...item,\n                        qty: item.qty + 1\n                    } : item);\n            }\n            return [\n                ...state,\n                {\n                    ...action.payload,\n                    qty: 1\n                }\n            ];\n        case \"REMOVE_ITEM\":\n            return state.filter((item)=>item.id !== action.payload);\n        case \"UPDATE_QTY\":\n            return state.map((item)=>item.id === action.payload.id ? {\n                    ...item,\n                    qty: action.payload.qty\n                } : item);\n        case \"CLEAR_CART\":\n            return [];\n        case \"LOAD_CART\":\n            return action.payload;\n        default:\n            return state;\n    }\n}\nfunction CartProvider({ children }) {\n    const [cartItems, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(cartReducer, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (false) {}\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (false) {}\n    }, [\n        cartItems\n    ]);\n    const addToCart = (product)=>dispatch({\n            type: \"ADD_ITEM\",\n            payload: product\n        });\n    const removeFromCart = (id)=>dispatch({\n            type: \"REMOVE_ITEM\",\n            payload: id\n        });\n    const updateQuantity = (id, qty)=>dispatch({\n            type: \"UPDATE_QTY\",\n            payload: {\n                id,\n                qty\n            }\n        });\n    const clearCart = ()=>dispatch({\n            type: \"CLEAR_CART\"\n        });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cartItems,\n            addToCart,\n            removeFromCart,\n            updateQuantity,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\Desktop\\\\mini-ecommerce\\\\contexts\\\\CartContext.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\nconst useCart = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    if (!context) throw new Error(\"useCart must be used within CartProvider\");\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9DYXJ0Q29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlFO0FBRXpFLE1BQU1JLDRCQUFjSixvREFBYUE7QUFFakMsU0FBU0ssWUFBWUMsS0FBSyxFQUFFQyxNQUFNO0lBQ2hDLE9BQVFBLE9BQU9DLElBQUk7UUFDakIsS0FBSztZQUNILE1BQU1DLFlBQVlILE1BQU1JLElBQUksQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsRUFBRSxLQUFLTCxPQUFPTSxPQUFPLENBQUNELEVBQUU7WUFDbEUsSUFBSUgsV0FBVztnQkFDYixPQUFPSCxNQUFNUSxHQUFHLENBQUNILENBQUFBLE9BQ2ZBLEtBQUtDLEVBQUUsS0FBS0wsT0FBT00sT0FBTyxDQUFDRCxFQUFFLEdBQ3pCO3dCQUFFLEdBQUdELElBQUk7d0JBQUVJLEtBQUtKLEtBQUtJLEdBQUcsR0FBRztvQkFBRSxJQUM3Qko7WUFFUjtZQUNBLE9BQU87bUJBQUlMO2dCQUFPO29CQUFFLEdBQUdDLE9BQU9NLE9BQU87b0JBQUVFLEtBQUs7Z0JBQUU7YUFBRTtRQUVsRCxLQUFLO1lBQ0gsT0FBT1QsTUFBTVUsTUFBTSxDQUFDTCxDQUFBQSxPQUFRQSxLQUFLQyxFQUFFLEtBQUtMLE9BQU9NLE9BQU87UUFFeEQsS0FBSztZQUNILE9BQU9QLE1BQU1RLEdBQUcsQ0FBQ0gsQ0FBQUEsT0FDZkEsS0FBS0MsRUFBRSxLQUFLTCxPQUFPTSxPQUFPLENBQUNELEVBQUUsR0FDekI7b0JBQUUsR0FBR0QsSUFBSTtvQkFBRUksS0FBS1IsT0FBT00sT0FBTyxDQUFDRSxHQUFHO2dCQUFDLElBQ25DSjtRQUdSLEtBQUs7WUFDSCxPQUFPLEVBQUU7UUFFWCxLQUFLO1lBQ0gsT0FBT0osT0FBT00sT0FBTztRQUV2QjtZQUNFLE9BQU9QO0lBQ1g7QUFDRjtBQUVPLFNBQVNXLGFBQWEsRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ0MsV0FBV0MsU0FBUyxHQUFHbEIsaURBQVVBLENBQUNHLGFBQWEsRUFBRTtJQUV4REYsZ0RBQVNBLENBQUM7UUFDUixJQUFJLEtBQWtCLEVBQWEsRUFVbEM7SUFDSCxHQUFHLEVBQUU7SUFFTEEsZ0RBQVNBLENBQUM7UUFDUixJQUFJLEtBQWtCLEVBQWEsRUFFbEM7SUFDSCxHQUFHO1FBQUNnQjtLQUFVO0lBRWQsTUFBTVksWUFBWSxDQUFDQyxVQUFZWixTQUFTO1lBQUVaLE1BQU07WUFBWUssU0FBU21CO1FBQVE7SUFDN0UsTUFBTUMsaUJBQWlCLENBQUNyQixLQUFPUSxTQUFTO1lBQUVaLE1BQU07WUFBZUssU0FBU0Q7UUFBRztJQUMzRSxNQUFNc0IsaUJBQWlCLENBQUN0QixJQUFJRyxNQUFRSyxTQUFTO1lBQUVaLE1BQU07WUFBY0ssU0FBUztnQkFBRUQ7Z0JBQUlHO1lBQUk7UUFBRTtJQUN4RixNQUFNb0IsWUFBWSxJQUFNZixTQUFTO1lBQUVaLE1BQU07UUFBYTtJQUV0RCxxQkFDRSw4REFBQ0osWUFBWWdDLFFBQVE7UUFBQ0MsT0FBTztZQUMzQmxCO1lBQ0FZO1lBQ0FFO1lBQ0FDO1lBQ0FDO1FBQ0Y7a0JBQ0dqQjs7Ozs7O0FBR1A7QUFFTyxNQUFNb0IsVUFBVTtJQUNyQixNQUFNQyxVQUFVdEMsaURBQVVBLENBQUNHO0lBQzNCLElBQUksQ0FBQ21DLFNBQVMsTUFBTSxJQUFJQyxNQUFNO0lBQzlCLE9BQU9EO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL21pbmktZWNvbW1lcmNlLy4vY29udGV4dHMvQ2FydENvbnRleHQuanM/ODRjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5mdW5jdGlvbiBjYXJ0UmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfSVRFTSc6XG4gICAgICBjb25zdCBleGlzdEl0ZW0gPSBzdGF0ZS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpO1xuICAgICAgaWYgKGV4aXN0SXRlbSkge1xuICAgICAgICByZXR1cm4gc3RhdGUubWFwKGl0ZW0gPT5cbiAgICAgICAgICBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCBcbiAgICAgICAgICAgID8geyAuLi5pdGVtLCBxdHk6IGl0ZW0ucXR5ICsgMSB9XG4gICAgICAgICAgICA6IGl0ZW1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbLi4uc3RhdGUsIHsgLi4uYWN0aW9uLnBheWxvYWQsIHF0eTogMSB9XTtcbiAgICBcbiAgICBjYXNlICdSRU1PVkVfSVRFTSc6XG4gICAgICByZXR1cm4gc3RhdGUuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQpO1xuICAgIFxuICAgIGNhc2UgJ1VQREFURV9RVFknOlxuICAgICAgcmV0dXJuIHN0YXRlLm1hcChpdGVtID0+XG4gICAgICAgIGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXG4gICAgICAgICAgPyB7IC4uLml0ZW0sIHF0eTogYWN0aW9uLnBheWxvYWQucXR5IH1cbiAgICAgICAgICA6IGl0ZW1cbiAgICAgICk7XG4gICAgXG4gICAgY2FzZSAnQ0xFQVJfQ0FSVCc6XG4gICAgICByZXR1cm4gW107XG4gICAgXG4gICAgY2FzZSAnTE9BRF9DQVJUJzpcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICBcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJ0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtjYXJ0SXRlbXMsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoY2FydFJlZHVjZXIsIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3Qgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpO1xuICAgICAgaWYgKHNhdmVkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkQ2FydCA9IEpTT04ucGFyc2Uoc2F2ZWQpO1xuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0xPQURfQ0FSVCcsIHBheWxvYWQ6IHBhcnNlZENhcnQgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBjYXJ0OicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtcykpO1xuICAgIH1cbiAgfSwgW2NhcnRJdGVtc10pO1xuXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0KSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdBRERfSVRFTScsIHBheWxvYWQ6IHByb2R1Y3QgfSk7XG4gIGNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gKGlkKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdSRU1PVkVfSVRFTScsIHBheWxvYWQ6IGlkIH0pO1xuICBjb25zdCB1cGRhdGVRdWFudGl0eSA9IChpZCwgcXR5KSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdVUERBVEVfUVRZJywgcGF5bG9hZDogeyBpZCwgcXR5IH0gfSk7XG4gIGNvbnN0IGNsZWFyQ2FydCA9ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogJ0NMRUFSX0NBUlQnIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XG4gICAgICBjYXJ0SXRlbXMsXG4gICAgICBhZGRUb0NhcnQsXG4gICAgICByZW1vdmVGcm9tQ2FydCxcbiAgICAgIHVwZGF0ZVF1YW50aXR5LFxuICAgICAgY2xlYXJDYXJ0XG4gICAgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUNhcnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcbiAgaWYgKCFjb250ZXh0KSB0aHJvdyBuZXcgRXJyb3IoJ3VzZUNhcnQgbXVzdCBiZSB1c2VkIHdpdGhpbiBDYXJ0UHJvdmlkZXInKTtcbiAgcmV0dXJuIGNvbnRleHQ7XG59OyJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJ1c2VFZmZlY3QiLCJDYXJ0Q29udGV4dCIsImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZXhpc3RJdGVtIiwiZmluZCIsIml0ZW0iLCJpZCIsInBheWxvYWQiLCJtYXAiLCJxdHkiLCJmaWx0ZXIiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImNhcnRJdGVtcyIsImRpc3BhdGNoIiwic2F2ZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VkQ2FydCIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwiY29uc29sZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhZGRUb0NhcnQiLCJwcm9kdWN0IiwicmVtb3ZlRnJvbUNhcnQiLCJ1cGRhdGVRdWFudGl0eSIsImNsZWFyQ2FydCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDYXJ0IiwiY29udGV4dCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/CartContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/CartContext */ \"./contexts/CartContext.js\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_2__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\Desktop\\\\mini-ecommerce\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\OneDrive\\\\Desktop\\\\mini-ecommerce\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFDd0I7QUFFeEMsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFDRSw4REFBQ0gsK0RBQVlBO2tCQUNYLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluaS1lY29tbWVyY2UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgQ2FydFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvQ2FydENvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPENhcnRQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0NhcnRQcm92aWRlcj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiQ2FydFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();