/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/example/react.js":
/*!******************************!*\
  !*** ./src/example/react.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "diffingUpdate": () => (/* binding */ diffingUpdate),
/* harmony export */   "renderRealDOM": () => (/* binding */ renderRealDOM)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createElement(tagName, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return {
    tagName: tagName,
    props: props,
    children: children.flat()
  };
}
/* JSX */
// const jsxDOM = (
//   <div id='container'>
//     <p>VirtualDOM</p>
//   </div>
// );

/* JSX 추상화 예시 */

var VirtualDOM = {
  tag: 'div',
  props: {
    id: 'container'
  },
  children: [{
    tag: 'p',
    props: {},
    children: ['VirtualDOM']
  }]
};
/* 1번 실습 Virtual DOM을 RealDOM으로 렌더링하기 */

function renderRealDOM(VirtualDOM) {
  // 가장 끝 하위요소 예외처리
  if (typeof VirtualDOM === 'string') {
    return document.createTextNode(VirtualDOM);
  } //tag 생성


  var $Element = document.createElement(VirtualDOM.tagName); // click eventListener 등록

  if (VirtualDOM.props !== null) {
    if (VirtualDOM.props.hasOwnProperty('id')) {
      $Element.id = VirtualDOM.props.id;
    }

    if (VirtualDOM.props.hasOwnProperty('onClick')) {
      $Element.addEventListener('click', VirtualDOM.props.onClick);
    }
  } // 재귀 호출


  VirtualDOM.children.map(renderRealDOM).forEach(function (node) {
    return $Element.appendChild(node);
  });
  return $Element;
}
/* 2번 실습 Diffing update 적용하기 */

function diffingUpdate(parent, nextNode, previousNode) {
  var parentIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  // Node가 string일 때만 변경
  if (typeof nextNode === 'string' && typeof previousNode === 'string') {
    // 바꿀 필요 없다면 return
    if (nextNode === previousNode) return;
    return parent.replaceChild(renderRealDOM(nextNode), parent.childNodes[parentIndex]);
  } //Array.prototype.entries() => [index, element]


  var _iterator = _createForOfIteratorHelper(nextNode.children.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 1),
          index = _step$value[0];

      diffingUpdate(parent.childNodes[parentIndex], nextNode.children[index], previousNode.children[index], index);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/example/app.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ "./src/example/react.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* @jsx createElement */

/* react.js에서 작성한 함수 import 하기 */

/* 실습 diffingUpdate, useState 활용하기 */

var previousNode;
var currentIndex = 0;
var hookState = [];

function useState(initialState) {
  var index = currentIndex;

  if (hookState.length === index) {
    hookState.push(initialState);
  }

  var setState = function setState(callback) {
    hookState[index] = callback(hookState[index]);
    render();
  };

  currentIndex++;
  return [hookState[index], setState];
}

function App() {
  var _useState = useState(2000),
      _useState2 = _slicedToArray(_useState, 2),
      totalPrice = _useState2[0],
      setTotalPrice = _useState2[1];

  return (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    id: "btnAdd",
    onClick: function onClick() {
      return setTotalPrice(function (prev) {
        return prev + 2000;
      });
    }
  }, "\uC544\uBA54\uB9AC\uCE74\uB178 \uCD94\uAC00"), (0,_react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
    id: "price"
  }, "\uAE08\uC561: ".concat(totalPrice)));
}

var render = function render() {
  var $root = document.querySelector('#root');

  if ($root.firstChild) {
    var nextNode = App();
    (0,_react__WEBPACK_IMPORTED_MODULE_0__.diffingUpdate)($root, nextNode, previousNode);
    previousNode = nextNode;
  } else {
    previousNode = App();
    $root.appendChild((0,_react__WEBPACK_IMPORTED_MODULE_0__.renderRealDOM)(previousNode));
  }

  currentIndex = 0;
};

render();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map