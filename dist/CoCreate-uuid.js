(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CoCreateUUID"] = factory();
	else
		root["CoCreateUUID"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/CoCreate-uuid.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CoCreate-uuid.js":
/*!******************************!*\
  !*** ./src/CoCreate-uuid.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar CoCreateUUID = {\n  attribute: 'data-uuid',\n  init: function init(container) {\n    var __container = container || document;\n\n    if (!__container.querySelectorAll) {\n      return;\n    }\n\n    var elements = __container.querySelectorAll(\"[\".concat(this.attribute, \"]\"));\n\n    var self = this;\n    elements.forEach(function (el) {\n      var len = parseInt(el.getAttribute(self.attribute)) || 36;\n      var uuid = self.generateID(len);\n\n      if (el.tagName === \"INPUT\" || el.tagName === \"TEXTAREA\") {\n        el.value = uuid;\n      } else {\n        el.innerHTML = uuid;\n      }\n    });\n  },\n  generateID: function generateID() {\n    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 36;\n    var d = new Date().getTime();\n    var d2 = window.performance && window.performance.now && window.performance.now() * 1000 || 0;\n    var pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';\n\n    if (length <= pattern.length) {\n      pattern = pattern.substr(0, length);\n    } else {\n      var add_len = length - pattern.length;\n      var sub_pattern = \"-xxxyyxxx\";\n      var group_n = Math.floor(add_len / sub_pattern.length);\n\n      for (var i = 0; i < group_n; i++) {\n        pattern += sub_pattern;\n      }\n\n      group_n = add_len - group_n * sub_pattern.length;\n      pattern += sub_pattern.substr(0, group_n);\n    }\n\n    var uuid = pattern.replace(/[xy]/g, function (c) {\n      var r = Math.random() * 16;\n\n      if (d > 0) {\n        var r = (d + r) % 16 | 0;\n        d = Math.floor(d / 16);\n      } else {\n        var r = (d2 + r) % 16 | 0;\n        d2 = Math.floor(d2 / 16);\n      }\n\n      return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);\n    });\n    return uuid;\n  }\n};\nCoCreateUUID.init();\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoCreateUUID);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZVVVSUQvLi9zcmMvQ29DcmVhdGUtdXVpZC5qcz9jZjhlIl0sIm5hbWVzIjpbIkNvQ3JlYXRlVVVJRCIsImF0dHJpYnV0ZSIsImluaXQiLCJjb250YWluZXIiLCJfX2NvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnRzIiwic2VsZiIsImZvckVhY2giLCJlbCIsImxlbiIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwidXVpZCIsImdlbmVyYXRlSUQiLCJ0YWdOYW1lIiwidmFsdWUiLCJpbm5lckhUTUwiLCJsZW5ndGgiLCJkIiwiRGF0ZSIsImdldFRpbWUiLCJkMiIsIndpbmRvdyIsInBlcmZvcm1hbmNlIiwibm93IiwicGF0dGVybiIsInN1YnN0ciIsImFkZF9sZW4iLCJzdWJfcGF0dGVybiIsImdyb3VwX24iLCJNYXRoIiwiZmxvb3IiLCJpIiwicmVwbGFjZSIsImMiLCJyIiwicmFuZG9tIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiJBQUNBO0FBQUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxXQUFTLEVBQUUsV0FEUTtBQUduQkMsTUFBSSxFQUFFLGNBQVNDLFNBQVQsRUFBb0I7QUFFeEIsUUFBTUMsV0FBVyxHQUFHRCxTQUFTLElBQUlFLFFBQWpDOztBQUNBLFFBQUksQ0FBQ0QsV0FBVyxDQUFDRSxnQkFBakIsRUFBbUM7QUFDcEM7QUFDQTs7QUFFRCxRQUFJQyxRQUFRLEdBQUdILFdBQVcsQ0FBQ0UsZ0JBQVosWUFBaUMsS0FBS0wsU0FBdEMsT0FBZjs7QUFDQSxRQUFNTyxJQUFJLEdBQUcsSUFBYjtBQUNBRCxZQUFRLENBQUNFLE9BQVQsQ0FBaUIsVUFBQUMsRUFBRSxFQUFJO0FBQ3JCLFVBQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDRixFQUFFLENBQUNHLFlBQUgsQ0FBZ0JMLElBQUksQ0FBQ1AsU0FBckIsQ0FBRCxDQUFSLElBQTZDLEVBQXpEO0FBQ0EsVUFBTWEsSUFBSSxHQUFHTixJQUFJLENBQUNPLFVBQUwsQ0FBZ0JKLEdBQWhCLENBQWI7O0FBQ0EsVUFBSUQsRUFBRSxDQUFDTSxPQUFILEtBQWUsT0FBZixJQUEwQk4sRUFBRSxDQUFDTSxPQUFILEtBQWUsVUFBN0MsRUFBeUQ7QUFDckROLFVBQUUsQ0FBQ08sS0FBSCxHQUFXSCxJQUFYO0FBQ0gsT0FGRCxNQUVPO0FBQ0xKLFVBQUUsQ0FBQ1EsU0FBSCxHQUFlSixJQUFmO0FBQ0Q7QUFDRixLQVJEO0FBU0MsR0FyQmtCO0FBdUJuQkMsWUFBVSxFQUFFLHNCQUFzQjtBQUFBLFFBQWJJLE1BQWEsdUVBQUosRUFBSTtBQUNoQyxRQUFJQyxDQUFDLEdBQUcsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQVI7QUFDQSxRQUFJQyxFQUFFLEdBQUlDLE1BQU0sQ0FBQ0MsV0FBUCxJQUFzQkQsTUFBTSxDQUFDQyxXQUFQLENBQW1CQyxHQUF6QyxJQUFpREYsTUFBTSxDQUFDQyxXQUFQLENBQW1CQyxHQUFuQixLQUF5QixJQUEzRSxJQUFxRixDQUE5RjtBQUNBLFFBQUlDLE9BQU8sR0FBRyxzQ0FBZDs7QUFFQSxRQUFJUixNQUFNLElBQUlRLE9BQU8sQ0FBQ1IsTUFBdEIsRUFBOEI7QUFDNUJRLGFBQU8sR0FBR0EsT0FBTyxDQUFDQyxNQUFSLENBQWUsQ0FBZixFQUFrQlQsTUFBbEIsQ0FBVjtBQUNELEtBRkQsTUFFTztBQUNMLFVBQUlVLE9BQU8sR0FBR1YsTUFBTSxHQUFHUSxPQUFPLENBQUNSLE1BQS9CO0FBQ0EsVUFBSVcsV0FBVyxHQUFHLFdBQWxCO0FBRUEsVUFBSUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osT0FBTyxHQUFHQyxXQUFXLENBQUNYLE1BQWpDLENBQWQ7O0FBRUEsV0FBSyxJQUFJZSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxPQUFwQixFQUE2QkcsQ0FBQyxFQUE5QixFQUFrQztBQUNoQ1AsZUFBTyxJQUFJRyxXQUFYO0FBQ0Q7O0FBRURDLGFBQU8sR0FBR0YsT0FBTyxHQUFHRSxPQUFPLEdBQUdELFdBQVcsQ0FBQ1gsTUFBMUM7QUFDQVEsYUFBTyxJQUFJRyxXQUFXLENBQUNGLE1BQVosQ0FBbUIsQ0FBbkIsRUFBc0JHLE9BQXRCLENBQVg7QUFDRDs7QUFFRCxRQUFJakIsSUFBSSxHQUFHYSxPQUFPLENBQUNRLE9BQVIsQ0FBZ0IsT0FBaEIsRUFBeUIsVUFBU0MsQ0FBVCxFQUFZO0FBQzVDLFVBQUlDLENBQUMsR0FBR0wsSUFBSSxDQUFDTSxNQUFMLEtBQWdCLEVBQXhCOztBQUNBLFVBQUdsQixDQUFDLEdBQUcsQ0FBUCxFQUFTO0FBQ0wsWUFBSWlCLENBQUMsR0FBRyxDQUFDakIsQ0FBQyxHQUFHaUIsQ0FBTCxJQUFRLEVBQVIsR0FBYSxDQUFyQjtBQUNBakIsU0FBQyxHQUFHWSxJQUFJLENBQUNDLEtBQUwsQ0FBV2IsQ0FBQyxHQUFDLEVBQWIsQ0FBSjtBQUNILE9BSEQsTUFHTztBQUNILFlBQUlpQixDQUFDLEdBQUcsQ0FBQ2QsRUFBRSxHQUFHYyxDQUFOLElBQVMsRUFBVCxHQUFjLENBQXRCO0FBQ0FkLFVBQUUsR0FBR1MsSUFBSSxDQUFDQyxLQUFMLENBQVdWLEVBQUUsR0FBQyxFQUFkLENBQUw7QUFDSDs7QUFDRCxhQUFPLENBQUNhLENBQUMsSUFBRSxHQUFILEdBQVNDLENBQVQsR0FBY0EsQ0FBQyxHQUFDLEdBQUYsR0FBTSxHQUFyQixFQUEyQkUsUUFBM0IsQ0FBb0MsRUFBcEMsQ0FBUDtBQUNILEtBVlUsQ0FBWDtBQVdBLFdBQU96QixJQUFQO0FBQ0Q7QUF4RGtCLENBQXJCO0FBNkRBZCxZQUFZLENBQUNFLElBQWI7QUFFZUYsMkVBQWYiLCJmaWxlIjoiLi9zcmMvQ29DcmVhdGUtdXVpZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgQ29DcmVhdGVVVUlEID0ge1xuICBhdHRyaWJ1dGU6ICdkYXRhLXV1aWQnLFxuXG4gIGluaXQ6IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuICAgIFxuICAgIGNvbnN0IF9fY29udGFpbmVyID0gY29udGFpbmVyIHx8IGRvY3VtZW50XG4gICAgaWYgKCFfX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdGxldCBlbGVtZW50cyA9IF9fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoYFske3RoaXMuYXR0cmlidXRlfV1gKTtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcblx0XHQgIGNvbnN0IGxlbiA9IHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZShzZWxmLmF0dHJpYnV0ZSkpIHx8IDM2O1xuXHRcdCAgY29uc3QgdXVpZCA9IHNlbGYuZ2VuZXJhdGVJRChsZW4pXG5cdFx0ICBpZiAoZWwudGFnTmFtZSA9PT0gXCJJTlBVVFwiIHx8IGVsLnRhZ05hbWUgPT09IFwiVEVYVEFSRUFcIikge1xuICAgICAgICBlbC52YWx1ZSA9IHV1aWQ7XHRcdCAgICBcblx0XHQgIH0gZWxzZSB7XG5cdFx0ICAgIGVsLmlubmVySFRNTCA9IHV1aWQ7XG5cdFx0ICB9XG5cdFx0fSlcbiAgfSxcbiAgXG4gIGdlbmVyYXRlSUQ6IGZ1bmN0aW9uKGxlbmd0aCA9IDM2KSB7XG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBsZXQgZDIgPSAod2luZG93LnBlcmZvcm1hbmNlICYmIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgJiYgKHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSoxMDAwKSkgfHwgMDtcbiAgICBsZXQgcGF0dGVybiA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnO1xuICAgIFxuICAgIGlmIChsZW5ndGggPD0gcGF0dGVybi5sZW5ndGgpIHtcbiAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnN1YnN0cigwLCBsZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgYWRkX2xlbiA9IGxlbmd0aCAtIHBhdHRlcm4ubGVuZ3RoO1xuICAgICAgbGV0IHN1Yl9wYXR0ZXJuID0gXCIteHh4eXl4eHhcIjtcbiAgICAgIFxuICAgICAgbGV0IGdyb3VwX24gPSBNYXRoLmZsb29yKGFkZF9sZW4gLyBzdWJfcGF0dGVybi5sZW5ndGgpO1xuICAgICAgXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyb3VwX247IGkrKykge1xuICAgICAgICBwYXR0ZXJuICs9IHN1Yl9wYXR0ZXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICBncm91cF9uID0gYWRkX2xlbiAtIGdyb3VwX24gKiBzdWJfcGF0dGVybi5sZW5ndGg7XG4gICAgICBwYXR0ZXJuICs9IHN1Yl9wYXR0ZXJuLnN1YnN0cigwLCBncm91cF9uKTtcbiAgICB9XG4gICAgXG4gICAgbGV0IHV1aWQgPSBwYXR0ZXJuLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oYykge1xuICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNjtcbiAgICAgICAgaWYoZCA+IDApe1xuICAgICAgICAgICAgdmFyIHIgPSAoZCArIHIpJTE2IHwgMDtcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQvMTYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHIgPSAoZDIgKyByKSUxNiB8IDA7XG4gICAgICAgICAgICBkMiA9IE1hdGguZmxvb3IoZDIvMTYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYz09J3gnID8gciA6IChyJjB4N3wweDgpKS50b1N0cmluZygxNik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHV1aWQ7XG4gIH0sXG4gIFxuXG59XG5cbkNvQ3JlYXRlVVVJRC5pbml0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvQ3JlYXRlVVVJRDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/CoCreate-uuid.js\n");

/***/ })

/******/ })["default"];
});