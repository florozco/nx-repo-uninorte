"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./app/countries/countries.tsx":
/*!*************************************!*\
  !*** ./app/countries/countries.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Countries\": () => (/* binding */ Countries),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useCountries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useCountries */ \"./app/useCountries.ts\");\n\n\n\nconst StyledCountries = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`\n  color: pink;\n`;\nfunction Countries(props) {\n    let [countriesArray] = (0,_useCountries__WEBPACK_IMPORTED_MODULE_2__.useCountries)();\n    const countries = props.countries ? props.countries : countriesArray;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledCountries, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Seraphs\\\\Documents\\\\GitHub\\\\nx-repo-uninorte\\\\apps\\\\next\\\\app\\\\countries\\\\countries.tsx\",\n            lineNumber: 14\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Seraphs\\\\Documents\\\\GitHub\\\\nx-repo-uninorte\\\\apps\\\\next\\\\app\\\\countries\\\\countries.tsx\",\n                    lineNumber: 15\n                },\n                __self: this,\n                children: \"Countries\"\n            }),\n            countries && countries.length > 0 ? countries.map(({ code , name  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Seraphs\\\\Documents\\\\GitHub\\\\nx-repo-uninorte\\\\apps\\\\next\\\\app\\\\countries\\\\countries.tsx\",\n                        lineNumber: 19\n                    },\n                    __self: this,\n                    children: [\n                        code,\n                        \" - \",\n                        name\n                    ]\n                }, code)\n            ) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Seraphs\\\\Documents\\\\GitHub\\\\nx-repo-uninorte\\\\apps\\\\next\\\\app\\\\countries\\\\countries.tsx\",\n                    lineNumber: 21\n                },\n                __self: this,\n                children: \"no data\"\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Countries);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY291bnRyaWVzL2NvdW50cmllcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0M7QUFDUTtBQUc5QyxLQUFLLENBQUNFLGVBQWUsR0FBR0YsOERBQVUsQ0FBQztBQUluQyxNQUFNOztBQUVKLEVBQUssQ0FBQ08sU0FBUyxHQUFHRixLQUFLLENBQUNFO0lBRXhCLE1BQU0sNEVBQ0hMOzs7Ozs7Ozs7Ozs7Ozs7WUFHR0ssU0FBUyxJQUFJQSxTQUFTLENBQUNFOzs7Ozs7O3dCQUV5QkUsSUFBSTt3QkFBQyxDQUFHO3dCQUFDQyxJQUFJOzttQkFBcEJELElBQUk7Ozs7Ozs7Ozs7O0FBTXJELENBQUM7QUFFRCxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvdW50cmllcy9jb3VudHJpZXMudHN4P2EwNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZUNvdW50cmllcyB9IGZyb20gJy4uL3VzZUNvdW50cmllcyc7XHJcbmltcG9ydCB7IEluZGV4UHJvcHMgfSBmcm9tICdAdW5pbm9ydGUtZmVkL3R5cGVzJztcclxuXHJcbmNvbnN0IFN0eWxlZENvdW50cmllcyA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6IHBpbms7XHJcbmA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRyaWVzKHByb3BzOiBJbmRleFByb3BzKSB7XHJcbiAgbGV0IFsgY291bnRyaWVzQXJyYXkgXSA9IHVzZUNvdW50cmllcygpO1xyXG4gIGNvbnN0IGNvdW50cmllcyA9IHByb3BzLmNvdW50cmllcyA/IHByb3BzLmNvdW50cmllcyA6IGNvdW50cmllc0FycmF5O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZENvdW50cmllcz5cclxuICAgICAgPGgxPkNvdW50cmllczwvaDE+XHJcbiAgICAgIHtcclxuICAgICAgICBjb3VudHJpZXMgJiYgY291bnRyaWVzLmxlbmd0aCA+IDAgXHJcbiAgICAgICAgP1xyXG4gICAgICAgIGNvdW50cmllcy5tYXAoKHtjb2RlLCBuYW1lfSkgPT4gPGxpIGtleT17Y29kZX0+e2NvZGV9IC0ge25hbWV9PC9saT4pXHJcbiAgICAgICAgOlxyXG4gICAgICAgIDxwPm5vIGRhdGE8L3A+XHJcbiAgICAgIH1cclxuICAgIDwvU3R5bGVkQ291bnRyaWVzPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50cmllcztcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsInVzZUNvdW50cmllcyIsIlN0eWxlZENvdW50cmllcyIsImRpdiIsIkNvdW50cmllcyIsInByb3BzIiwiY291bnRyaWVzQXJyYXkiLCJjb3VudHJpZXMiLCJoMSIsImxlbmd0aCIsIm1hcCIsImNvZGUiLCJuYW1lIiwibGkiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/countries/countries.tsx\n");

/***/ }),

/***/ "./app/useCountries.ts":
/*!*****************************!*\
  !*** ./app/useCountries.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useCountries\": () => (/* binding */ useCountries),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst query = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`\n    query {\n    countries {\n      code\n      name\n    }\n  }\n`;\nconst useCountries = ()=>{\n    const { 0: countries , 1: setCountries  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__.request)('https://countries.trevorblades.com/', query).then((data)=>setCountries(data.countries)\n        );\n    }, []);\n    return [\n        countries\n    ];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCountries);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvdXNlQ291bnRyaWVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNHO0FBRTlDLEtBQUssQ0FBQ0ksS0FBSyxHQUFHRCxnREFBRyxDQUFDO0FBU2xCLE1BQU0sQ0FBQztJQUNILEtBQUssTUFBRUc7SUFDUE47UUFDSUU7Ozs7Q0FJS0ksU0FBUztJQUFDLENBQUM7QUFDeEIsQ0FBQztBQUVELE1BQU0sMERBQVNELFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdXNlQ291bnRyaWVzLnRzPzIxYzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHJlcXVlc3QsIGdxbCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxyXG4gICAgcXVlcnkge1xyXG4gICAgY291bnRyaWVzIHtcclxuICAgICAgY29kZVxyXG4gICAgICBuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ291bnRyaWVzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2NvdW50cmllcywgc2V0Q291bnRyaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHJlcXVlc3QoJ2h0dHBzOi8vY291bnRyaWVzLnRyZXZvcmJsYWRlcy5jb20vJywgcXVlcnkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHNldENvdW50cmllcyhkYXRhLmNvdW50cmllcykpXHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIHJldHVybiBbIGNvdW50cmllcyBdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VDb3VudHJpZXM7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicmVxdWVzdCIsImdxbCIsInF1ZXJ5IiwidXNlQ291bnRyaWVzIiwiY291bnRyaWVzIiwic2V0Q291bnRyaWVzIiwidGhlbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/useCountries.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"Index\": () => (/* binding */ Index),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ \"next/Link\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _uninorte_fed_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uninorte-fed/ui */ \"../../libs/ui/src/index.ts\");\n/* harmony import */ var _app_countries_countries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/countries/countries */ \"./app/countries/countries.tsx\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst StyledPage = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`\n  .page {\n  }\n`;\nconst query = graphql_request__WEBPACK_IMPORTED_MODULE_5__.gql`\n    query {\n    countries {\n      code\n      name\n    }\n  }\n`;\nasync function getStaticProps() {\n    const data = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_5__.request)('https://countries.trevorblades.com/', query);\n    const { countries  } = data;\n    return {\n        props: {\n            countries\n        }\n    };\n}\nfunction Index(props) {\n    const { countries  } = props;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledPage, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Seraphs\\\\Documents\\\\GitHub\\\\nx-repo-uninorte\\\\apps\\\\next\\\\pages\\\\index.tsx\",\n            lineNumber: 38\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_uninorte_fed_ui__WEBPACK_IMPORTED_MODULE_3__.Ui, {\n                title: \"Uninorte 2021\",\n                showTitle: true,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Seraphs\\\\Documents\\\\GitHub\\\\nx-repo-uninorte\\\\apps\\\\next\\\\pages\\\\index.tsx\",\n                    lineNumber: 39\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/about\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Seraphs\\\\Documents\\\\GitHub\\\\nx-repo-uninorte\\\\apps\\\\next\\\\pages\\\\index.tsx\",\n                    lineNumber: 40\n                },\n                __self: this,\n                children: \"About\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_countries_countries__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                countries: countries,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Seraphs\\\\Documents\\\\GitHub\\\\nx-repo-uninorte\\\\apps\\\\next\\\\pages\\\\index.tsx\",\n                    lineNumber: 41\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDVTtBQUNEO0FBQ2E7QUFDSjtBQUc5QyxLQUFLLENBQUNNLFVBQVUsR0FBR0wsOERBQVUsQ0FBQztBQUs5QixLQUFLLENBQUNPO0FBU047O0lBRUUsS0FBSyxDQUFDLENBQUNHLENBQUFBLEVBQUFBLGdEQUFBQTtJQUVQLE1BQU0sQ0FBQztRQUNMQyxLQUFLLEVBQUU7O1FBRVAsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBSUQ7QUFDRSxFQUFLLENBQUMsQ0FBQ0QsQ0FBQUEsU0FBUyxHQUFDLEdBQUdDLEtBQUs7SUFDekIsTUFBTSxzRUFDSE4sVUFBVTs7Ozs7Ozs7U0FDTFEsS0FBSyxFQUFDLENBQWU7Z0JBQUNDLFNBQVM7Ozs7Ozs7O2dCQUM3QkMsSUFBSSxFQUFDLENBQVE7Ozs7Ozs7OztnQkFDUkwsU0FBUyx1REFBRUEsQ0FBQUEsa0RBQUFBLENBQVM7Ozs7Ozs7OztBQUdyQyxDQUFDO0FBRUQsTUFBTSxTQUFTRSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFVpIH0gZnJvbSAnQHVuaW5vcnRlLWZlZC91aSc7XHJcbmltcG9ydCBDb3VudHJpZXMgZnJvbSAnLi4vYXBwL2NvdW50cmllcy9jb3VudHJpZXMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0LCBncWwgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXHJcbmltcG9ydCB7IEluZGV4UHJvcHMgfSBmcm9tICdAdW5pbm9ydGUtZmVkL3R5cGVzJztcclxuXHJcbmNvbnN0IFN0eWxlZFBhZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIC5wYWdlIHtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBxdWVyeSA9IGdxbGBcclxuICAgIHF1ZXJ5IHtcclxuICAgIGNvdW50cmllcyB7XHJcbiAgICAgIGNvZGVcclxuICAgICAgbmFtZVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0KCdodHRwczovL2NvdW50cmllcy50cmV2b3JibGFkZXMuY29tLycsIHF1ZXJ5KTtcclxuICBjb25zdCB7Y291bnRyaWVzfSA9IGRhdGFcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNvdW50cmllc1xyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEluZGV4KHByb3BzOiBJbmRleFByb3BzKSB7XHJcbiAgY29uc3Qge2NvdW50cmllc30gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFBhZ2U+XHJcbiAgICAgIDxVaSB0aXRsZT1cIlVuaW5vcnRlIDIwMjFcIiBzaG93VGl0bGUgLz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxyXG4gICAgICA8Q291bnRyaWVzIGNvdW50cmllcz17Y291bnRyaWVzfSAvPlxyXG4gICAgPC9TdHlsZWRQYWdlPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsiTGluayIsInN0eWxlZCIsIlVpIiwiQ291bnRyaWVzIiwicmVxdWVzdCIsImdxbCIsIlN0eWxlZFBhZ2UiLCJkaXYiLCJxdWVyeSIsImdldFN0YXRpY1Byb3BzIiwiZGF0YSIsImNvdW50cmllcyIsInByb3BzIiwiSW5kZXgiLCJ0aXRsZSIsInNob3dUaXRsZSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "../../libs/ui/src/index.ts":
/*!**********************************!*\
  !*** ../../libs/ui/src/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ui */ \"../../libs/ui/src/lib/ui.tsx\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _lib_ui__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _lib_ui__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbGlicy91aS9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vbGlicy91aS9zcmMvaW5kZXgudHM/ZWY1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2xpYi91aSc7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../libs/ui/src/index.ts\n");

/***/ }),

/***/ "../../libs/ui/src/lib/ui.tsx":
/*!************************************!*\
  !*** ../../libs/ui/src/lib/ui.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ui\": () => (/* binding */ Ui),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst StyledUi = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`\n  color: pink;\n`;\nfunction Ui(props) {\n    const { title , showTitle  } = props;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledUi, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Seraphs\\\\Documents\\\\GitHub\\\\nx-repo-uninorte\\\\libs\\\\ui\\\\src\\\\lib\\\\ui.tsx\",\n            lineNumber: 11\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n            __source: {\n                fileName: \"C:\\\\Users\\\\Seraphs\\\\Documents\\\\GitHub\\\\nx-repo-uninorte\\\\libs\\\\ui\\\\src\\\\lib\\\\ui.tsx\",\n                lineNumber: 12\n            },\n            __self: this,\n            children: showTitle && title\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ui);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vbGlicy91aS9zcmMvbGliL3VpLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNDO0FBR3RDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHRCw4REFBVSxDQUFDO0FBSTVCLE1BQU07O0FBRUosR0FBTTs7Ozs7Ozs7Ozs7Ozs7O0FBS1IsQ0FBQztBQUVELE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vbGlicy91aS9zcmMvbGliL3VpLnRzeD80NzIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBVaVByb3BzIH0gZnJvbSAnQHVuaW5vcnRlLWZlZC90eXBlcyc7IFxyXG5cclxuY29uc3QgU3R5bGVkVWkgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiBwaW5rO1xyXG5gO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVpKHByb3BzOiBVaVByb3BzKSB7XHJcbiAgY29uc3QgeyB0aXRsZSwgc2hvd1RpdGxlIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZFVpPlxyXG4gICAgICA8aDE+e3Nob3dUaXRsZSAmJiB0aXRsZX08L2gxPlxyXG4gICAgPC9TdHlsZWRVaT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVaTtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlN0eWxlZFVpIiwiZGl2IiwiVWkiLCJwcm9wcyIsInRpdGxlIiwic2hvd1RpdGxlIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../libs/ui/src/lib/ui.tsx\n");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/Link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();