/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Matrix.js":
/*!***********************!*\
  !*** ./src/Matrix.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Matrix\": () => (/* binding */ Matrix)\n/* harmony export */ });\nclass Matrix {\n    matrix\n\n    constructor(m) {\n        this.matrix = m\n    }\n\n    times(matrix2) {\n        if(this.matrix[0].length !== matrix2.matrix.length ) throw Error(\"E\")\n\n        let result = new Matrix([])\n\n        for (let i = 0; i < this.matrix.length; i++) {\n            result.matrix.push(new Array(matrix2.matrix[0].length).fill(0))\n        }\n\n        for (let i = 0; i < result.matrix.length; i++) {\n            for (let j = 0; j < matrix2.matrix[0].length; j++) {\n                result.matrix[i][j] = 0\n                for (let k = 0; k < matrix2.matrix.length; k++) {\n                    result.matrix[i][j] += (this.matrix[i][k] * matrix2.matrix[k][j])\n                }\n            }\n        }\n\n        return result\n    }\n}\n\n\n\n//# sourceURL=webpack://matice/./src/Matrix.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matrix */ \"./src/Matrix.js\");\n\n\nwindow.onload = () => {\n    //let m = new Matrix([[1, 2, 3],[4, 5, 6], [7, 8, 9]])\n    //let m2 = new Matrix([[4, 2, 8],[10, 12, 4], [4, 5, 9]])\n\n    //console.log(m.times(m2))\n\n    const canvas = document.getElementById('canvas')\n    const ctx = canvas.getContext('2d')\n\n    let m = new _Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix([\n        [1, -0.5, 0],\n        [0.5, 1, 0],\n        [0, 0, 1]\n    ])\n\n    let v = new _Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix([\n        [1],\n        [1],\n        [1]\n    ])\n\n    let res = m.times(v)\n    console.log(m.times(res))\n\n    for (let i = 0; i < 400; i++) {\n        res = m.times(res)\n        ctx.beginPath()\n        ctx.arc(res.matrix[0][0]+200,res.matrix[1][0]+200, 4, 0, 2 * Math.PI)\n        ctx.stroke()\n    }\n\n\n\n\n\n\n}\n\nconst scale = (number, inMin, inMax, outMin, outMax) => {\n    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;\n}\n\n//# sourceURL=webpack://matice/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;