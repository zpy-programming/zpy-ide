"use strict";
(self["webpackChunkzpy_ide"] = self["webpackChunkzpy_ide"] || []).push([["src_views_editor_js_chapter_js"],{

/***/ 803:
/*!****************************************!*\
  !*** ./src/views/editor/js/chapter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chapter": () => (/* binding */ chapter)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 144);
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/log */ 185);
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./source */ 35);
/* harmony import */ var _img_pullup_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/pullup.svg */ 114);
/* harmony import */ var _img_pulldown_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/pulldown.svg */ 403);







var Chapter = function () {
  function Chapter() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Chapter);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Chapter, [{
    key: "pull",
    value: function pull(event) {
      var node = event.srcElement.parentNode;

      while (node.getAttribute('class') !== 'chapter') {
        node = node.parentNode;
      }

      _utils_log__WEBPACK_IMPORTED_MODULE_2__.log.info(node.childNodes);
      var chapterTitle = node.childNodes[1];
      var chapterIcon = node.childNodes[1].childNodes[1];
      var status = chapterTitle.getAttribute('status');
      var chapterList = node.childNodes[3];

      if (status === "open") {
        chapterList.style.display = 'none';
        chapterTitle.setAttribute('status', 'close');
        chapterIcon.setAttribute('src', _img_pulldown_svg__WEBPACK_IMPORTED_MODULE_5__);
      } else {
        chapterList.style.display = 'block';
        chapterTitle.setAttribute('status', 'open');
        chapterIcon.setAttribute('src', _img_pullup_svg__WEBPACK_IMPORTED_MODULE_4__);
      }
    }
  }]);

  return Chapter;
}();

var chapter = new Chapter();


/***/ }),

/***/ 35:
/*!***************************************!*\
  !*** ./src/views/editor/js/source.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "source": () => (/* binding */ source)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 144);



var Source = function () {
  function Source() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Source);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Source, [{
    key: "example",
    value: function example() {
      var e0 = {
        name: '插入排序',
        source: "\n\u51FD\u6570 \u63D2\u5165\u6392\u5E8F(\u76EE\u6807\u6570\u7EC4):\n    \u5BF9\u4E8E \u7D22\u5F15\u4E00 \u5728 \u8303\u56F4(0, \u957F(\u76EE\u6807\u6570\u7EC4) - 1):\n        \u8FD9\u4E2A = \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E00]\n        \u4E4B\u540E = \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E00 + 1]\n        \u5982\u679C \u8FD9\u4E2A > \u4E4B\u540E:\n            \u66FF\u6362 = \u4E4B\u540E\n            \u5BF9\u4E8E \u7D22\u5F15\u4E8C \u5728 \u8303\u56F4(\u7D22\u5F15\u4E00, -1, -1):\n                \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C+1] = \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C]\n                \u5982\u679C \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C] < \u66FF\u6362:\n                    \u7EC8\u6B62\n            \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C+1] = \u66FF\u6362\n            \u5F53 \u7D22\u5F15\u4E8C >= 0 \u4E0E \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C] >= \u66FF\u6362:\n                \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C+1] = \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C]\n                \u7D22\u5F15\u4E8C -= 1\n            \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C+1] = \u66FF\u6362\n    \u8FD4\u56DE \u76EE\u6807\u6570\u7EC4\n    \n\u6D4B\u8BD5\u6570\u7EC4 = [99, 16, 74, 4, 21, 45, 17, 56, 93, 86, 23, 40, 61, 31, 30, 79, 56, 6, 87, 52]\n\u6253\u5370(\u63D2\u5165\u6392\u5E8F(\u6D4B\u8BD5\u6570\u7EC4))\n"
      };
      var e1 = {
        name: '希尔排序',
        source: "\n\u51FD\u6570 \u5E0C\u5C14\u6392\u5E8F(\u76EE\u6807\u6570\u7EC4):\n    \u6B65\u957F = \u957F(\u76EE\u6807\u6570\u7EC4)\n    \u5F53 \u6B65\u957F > 0:\n        \u6B65\u957F //= 2\n        \u5BF9\u4E8E \u7D22\u5F15\u4E00 \u5728 \u8303\u56F4(\u6B65\u957F, \u957F(\u76EE\u6807\u6570\u7EC4)):\n            \u66FF\u6362 = \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E00]\n            \u7D22\u5F15\u4E8C = \u7D22\u5F15\u4E00\n            \u5F53 \u7D22\u5F15\u4E8C >= \u6B65\u957F \u4E0E \u66FF\u6362 < \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C-\u6B65\u957F]:\n                \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C] = \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C-\u6B65\u957F]\n                \u7D22\u5F15\u4E8C -= \u6B65\u957F\n            \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C] = \u66FF\u6362\n    \u8FD4\u56DE \u76EE\u6807\u6570\u7EC4\n    \n\u6D4B\u8BD5\u6570\u7EC4 = [99, 16, 74, 4, 21, 45, 17, 56, 93, 86, 23, 40, 61, 31, 30, 79, 56, 6, 87, 52]\n\u6253\u5370(\u5E0C\u5C14\u6392\u5E8F(\u6D4B\u8BD5\u6570\u7EC4))\n"
      };
      var e2 = {
        name: '冒泡排序',
        source: "\n\u51FD\u6570 \u5192\u6CE1\u6392\u5E8F(\u76EE\u6807\u6570\u7EC4):\n    \u5BF9\u4E8E \u7D22\u5F15\u4E00 \u5728 \u8303\u56F4(\u957F(\u76EE\u6807\u6570\u7EC4), 0, -1):\n        \u6807\u8BB0 = \u9519\n        \u5BF9\u4E8E \u7D22\u5F15\u4E8C \u5728 \u8303\u56F4(0, \u7D22\u5F15\u4E00 - 1):\n            \u5982\u679C \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C] > \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C+1]:\n                \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C], \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C+1] = \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C+1], \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C]\n        \u5982\u679C \u6807\u8BB0:\n            \u7EC8\u6B62\n    \u8FD4\u56DE \u76EE\u6807\u6570\u7EC4\n    \n\u6D4B\u8BD5\u6570\u7EC4 = [99, 16, 74, 4, 21, 45, 17, 56, 93, 86, 23, 40, 61, 31, 30, 79, 56, 6, 87, 52]\n\u6253\u5370(\u5192\u6CE1\u6392\u5E8F(\u6D4B\u8BD5\u6570\u7EC4))\n"
      };
      var e3 = {
        name: '快速排序',
        source: "\n\u51FD\u6570 \u5FEB\u901F\u6392\u5E8F(\u76EE\u6807\u6570\u7EC4):\n    \u51FD\u6570 _\u5FEB\u901F\u6392\u5E8F(\u76EE\u6807\u6570\u7EC4, \u5DE6\u6307\u9488, \u53F3\u6307\u9488):\n        \u67A2\u8F74 = \u76EE\u6807\u6570\u7EC4[\u5DE6\u6307\u9488]\n        \u539F\u5DE6\u6307\u9488 = \u5DE6\u6307\u9488\n        \u539F\u53F3\u6307\u9488 = \u53F3\u6307\u9488\n        \u5DE6\u6307\u9488\u7A7A\u6807\u8BB0 = 0  # \u5DE6\u6307\u9488\u4E3A\u7A7A\n        \u5F53 \u5DE6\u6307\u9488 != \u53F3\u6307\u9488:\n            \u5982\u679C \u5DE6\u6307\u9488\u7A7A\u6807\u8BB0:\n                \u5982\u679C (\u76EE\u6807\u6570\u7EC4[\u5DE6\u6307\u9488] >= \u67A2\u8F74):\n                    \u76EE\u6807\u6570\u7EC4[\u53F3\u6307\u9488] = \u76EE\u6807\u6570\u7EC4[\u5DE6\u6307\u9488]\n                    \u5DE6\u6307\u9488\u7A7A\u6807\u8BB0 = 0\n                \u5426\u5219:\n                    \u5DE6\u6307\u9488 += 1\n            \u5426\u5219:\n                \u5982\u679C (\u76EE\u6807\u6570\u7EC4[\u53F3\u6307\u9488] < \u67A2\u8F74):\n                    \u76EE\u6807\u6570\u7EC4[\u5DE6\u6307\u9488] = \u76EE\u6807\u6570\u7EC4[\u53F3\u6307\u9488]\n                    \u5DE6\u6307\u9488\u7A7A\u6807\u8BB0 = 1\n                \u5426\u5219:\n                    \u53F3\u6307\u9488 -= 1\n        \u4E2D\u6307\u9488 = \u5DE6\u6307\u9488\n        \u76EE\u6807\u6570\u7EC4[\u4E2D\u6307\u9488] = \u67A2\u8F74\n        \u5982\u679C \u539F\u5DE6\u6307\u9488 < \u4E2D\u6307\u9488 - 1:\n            _\u5FEB\u901F\u6392\u5E8F(\u76EE\u6807\u6570\u7EC4, \u539F\u5DE6\u6307\u9488, \u4E2D\u6307\u9488 - 1)\n        \u5982\u679C \u4E2D\u6307\u9488+1 < \u539F\u53F3\u6307\u9488:\n            _\u5FEB\u901F\u6392\u5E8F(\u76EE\u6807\u6570\u7EC4, \u4E2D\u6307\u9488+1, \u539F\u53F3\u6307\u9488)\n    \u5DE6\u6307\u9488 = 0\n    \u53F3\u6307\u9488 = \u957F(\u76EE\u6807\u6570\u7EC4) - 1\n    _\u5FEB\u901F\u6392\u5E8F(\u76EE\u6807\u6570\u7EC4, \u5DE6\u6307\u9488, \u53F3\u6307\u9488)\n    \u8FD4\u56DE \u76EE\u6807\u6570\u7EC4\n    \n\u6D4B\u8BD5\u6570\u7EC4 = [99, 16, 74, 4, 21, 45, 17, 56, 93, 86, 23, 40, 61, 31, 30, 79, 56, 6, 87, 52]\n\u6253\u5370(\u5FEB\u901F\u6392\u5E8F(\u6D4B\u8BD5\u6570\u7EC4))\n"
      };
      var e4 = {
        name: '选择排序',
        source: "\n\u51FD\u6570 \u9009\u62E9\u6392\u5E8F(\u76EE\u6807\u6570\u7EC4):\n    \u5BF9\u4E8E \u7D22\u5F15\u4E00 \u5728 \u8303\u56F4(\u957F(\u76EE\u6807\u6570\u7EC4)):\n        \u6700\u5C0F\u6570\u503C = \u7D22\u5F15\u4E00\n        \u5BF9\u4E8E \u7D22\u5F15\u4E8C \u5728 \u8303\u56F4(\u7D22\u5F15\u4E00, \u957F(\u76EE\u6807\u6570\u7EC4)):\n            \u5982\u679C \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E8C] < \u76EE\u6807\u6570\u7EC4[\u6700\u5C0F\u6570\u503C]:\n                \u6700\u5C0F\u6570\u503C = \u7D22\u5F15\u4E8C\n        \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E00], \u76EE\u6807\u6570\u7EC4[\u6700\u5C0F\u6570\u503C] = \u76EE\u6807\u6570\u7EC4[\u6700\u5C0F\u6570\u503C], \u76EE\u6807\u6570\u7EC4[\u7D22\u5F15\u4E00]\n    \u8FD4\u56DE \u76EE\u6807\u6570\u7EC4\n    \n\u6D4B\u8BD5\u6570\u7EC4 = [99, 16, 74, 4, 21, 45, 17, 56, 93, 86, 23, 40, 61, 31, 30, 79, 56, 6, 87, 52]\n\u6253\u5370(\u9009\u62E9\u6392\u5E8F(\u6D4B\u8BD5\u6570\u7EC4))\n"
      };
      return {
        'name': '例子',
        'id': 'example',
        'codes': [e0, e1, e2, e3, e4]
      };
    }
  }]);

  return Source;
}();

var source = new Source();


/***/ }),

/***/ 403:
/*!*******************************************!*\
  !*** ./src/views/editor/img/pulldown.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/55ba81eecd86e1b21fb1.svg";

/***/ }),

/***/ 114:
/*!*****************************************!*\
  !*** ./src/views/editor/img/pullup.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/85eefd4433bacecba811.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQvc3JjX3ZpZXdzX2VkaXRvcl9qc19jaGFwdGVyX2pzLTU1MmUwNDVjYzQyOGJmZjNiOGE0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUdNSTs7Ozs7OztXQUNGLGNBQUtDLEtBQUwsRUFBWTtBQUNSLFVBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDRSxVQUFOLENBQWlCQyxVQUE1Qjs7QUFDQSxhQUFPRixJQUFJLENBQUNHLFlBQUwsQ0FBa0IsT0FBbEIsTUFBK0IsU0FBdEMsRUFBaUQ7QUFDN0NILFFBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDRSxVQUFaO0FBQ0g7O0FBQ0RSLE1BQUFBLGdEQUFBLENBQVNNLElBQUksQ0FBQ0ssVUFBZDtBQUNBLFVBQUlDLFlBQVksR0FBR04sSUFBSSxDQUFDSyxVQUFMLENBQWdCLENBQWhCLENBQW5CO0FBQ0EsVUFBSUUsV0FBVyxHQUFHUCxJQUFJLENBQUNLLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUJBLFVBQW5CLENBQThCLENBQTlCLENBQWxCO0FBQ0EsVUFBSUcsTUFBTSxHQUFHRixZQUFZLENBQUNILFlBQWIsQ0FBMEIsUUFBMUIsQ0FBYjtBQUNBLFVBQUlNLFdBQVcsR0FBR1QsSUFBSSxDQUFDSyxVQUFMLENBQWdCLENBQWhCLENBQWxCOztBQUNBLFVBQUlHLE1BQU0sS0FBSyxNQUFmLEVBQXVCO0FBQ25CQyxRQUFBQSxXQUFXLENBQUNDLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLE1BQTVCO0FBQ0FMLFFBQUFBLFlBQVksQ0FBQ00sWUFBYixDQUEwQixRQUExQixFQUFvQyxPQUFwQztBQUNBTCxRQUFBQSxXQUFXLENBQUNLLFlBQVosQ0FBeUIsS0FBekIsRUFBZ0NmLDhDQUFoQztBQUNILE9BSkQsTUFJTztBQUNIWSxRQUFBQSxXQUFXLENBQUNDLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLE9BQTVCO0FBQ0FMLFFBQUFBLFlBQVksQ0FBQ00sWUFBYixDQUEwQixRQUExQixFQUFvQyxNQUFwQztBQUNBTCxRQUFBQSxXQUFXLENBQUNLLFlBQVosQ0FBeUIsS0FBekIsRUFBZ0NoQiw0Q0FBaEM7QUFDSDtBQUNKOzs7Ozs7QUFHTCxJQUFJaUIsT0FBTyxHQUFHLElBQUlmLE9BQUosRUFBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzdCTWdCOzs7Ozs7O1dBQ0YsbUJBQVU7QUFDTixVQUFJQyxFQUFFLEdBQUc7QUFDTEMsUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTHJCLFFBQUFBLE1BQU07QUFGRCxPQUFUO0FBd0JBLFVBQUlzQixFQUFFLEdBQUc7QUFDTEQsUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTHJCLFFBQUFBLE1BQU07QUFGRCxPQUFUO0FBb0JBLFVBQUl1QixFQUFFLEdBQUc7QUFDTEYsUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTHJCLFFBQUFBLE1BQU07QUFGRCxPQUFUO0FBaUJBLFVBQUl3QixFQUFFLEdBQUc7QUFDTEgsUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTHJCLFFBQUFBLE1BQU07QUFGRCxPQUFUO0FBcUNBLFVBQUl5QixFQUFFLEdBQUc7QUFDTEosUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTHJCLFFBQUFBLE1BQU07QUFGRCxPQUFUO0FBaUJBLGFBQU87QUFDSCxnQkFBUSxJQURMO0FBRUgsY0FBTSxTQUZIO0FBR0gsaUJBQVMsQ0FBQ29CLEVBQUQsRUFBS0UsRUFBTCxFQUFTQyxFQUFULEVBQWFDLEVBQWIsRUFBaUJDLEVBQWpCO0FBSE4sT0FBUDtBQUtIOzs7Ozs7QUFHTCxJQUFJekIsTUFBTSxHQUFHLElBQUltQixNQUFKLEVBQWIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96cHktaWRlLy4vc3JjL3ZpZXdzL2VkaXRvci9qcy9jaGFwdGVyLmpzIiwid2VicGFjazovL3pweS1pZGUvLi9zcmMvdmlld3MvZWRpdG9yL2pzL3NvdXJjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2xvZ30gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2xvZ1wiO1xuaW1wb3J0IHtzb3VyY2V9IGZyb20gXCIuL3NvdXJjZVwiO1xuaW1wb3J0IHB1bGxVcFN2ZyBmcm9tIFwiLi4vaW1nL3B1bGx1cC5zdmdcIlxuaW1wb3J0IHB1bGxEb3duU3ZnIGZyb20gXCIuLi9pbWcvcHVsbGRvd24uc3ZnXCJcblxuXG5jbGFzcyBDaGFwdGVyIHtcbiAgICBwdWxsKGV2ZW50KSB7XG4gICAgICAgIGxldCBub2RlID0gZXZlbnQuc3JjRWxlbWVudC5wYXJlbnROb2RlXG4gICAgICAgIHdoaWxlIChub2RlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSAhPT0gJ2NoYXB0ZXInKSB7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlXG4gICAgICAgIH1cbiAgICAgICAgbG9nLmluZm8obm9kZS5jaGlsZE5vZGVzKVxuICAgICAgICBsZXQgY2hhcHRlclRpdGxlID0gbm9kZS5jaGlsZE5vZGVzWzFdXG4gICAgICAgIGxldCBjaGFwdGVySWNvbiA9IG5vZGUuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdXG4gICAgICAgIGxldCBzdGF0dXMgPSBjaGFwdGVyVGl0bGUuZ2V0QXR0cmlidXRlKCdzdGF0dXMnKVxuICAgICAgICBsZXQgY2hhcHRlckxpc3QgPSBub2RlLmNoaWxkTm9kZXNbM11cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJvcGVuXCIpIHtcbiAgICAgICAgICAgIGNoYXB0ZXJMaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICAgIGNoYXB0ZXJUaXRsZS5zZXRBdHRyaWJ1dGUoJ3N0YXR1cycsICdjbG9zZScpXG4gICAgICAgICAgICBjaGFwdGVySWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIHB1bGxEb3duU3ZnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hhcHRlckxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICAgIGNoYXB0ZXJUaXRsZS5zZXRBdHRyaWJ1dGUoJ3N0YXR1cycsICdvcGVuJylcbiAgICAgICAgICAgIGNoYXB0ZXJJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgcHVsbFVwU3ZnKVxuICAgICAgICB9XG4gICAgfVxufVxuXG5sZXQgY2hhcHRlciA9IG5ldyBDaGFwdGVyKClcblxuZXhwb3J0IHtjaGFwdGVyfVxuXG4iLCJjbGFzcyBTb3VyY2Uge1xuICAgIGV4YW1wbGUoKSB7XG4gICAgICAgIGxldCBlMCA9IHtcbiAgICAgICAgICAgIG5hbWU6ICfmj5LlhaXmjpLluo8nLFxuICAgICAgICAgICAgc291cmNlOiBgXG7lh73mlbAg5o+S5YWl5o6S5bqPKOebruagh+aVsOe7hCk6XG4gICAg5a+55LqOIOe0ouW8leS4gCDlnKgg6IyD5Zu0KDAsIOmVvyjnm67moIfmlbDnu4QpIC0gMSk6XG4gICAgICAgIOi/meS4qiA9IOebruagh+aVsOe7hFvntKLlvJXkuIBdXG4gICAgICAgIOS5i+WQjiA9IOebruagh+aVsOe7hFvntKLlvJXkuIAgKyAxXVxuICAgICAgICDlpoLmnpwg6L+Z5LiqID4g5LmL5ZCOOlxuICAgICAgICAgICAg5pu/5o2iID0g5LmL5ZCOXG4gICAgICAgICAgICDlr7nkuo4g57Si5byV5LqMIOWcqCDojIPlm7Qo57Si5byV5LiALCAtMSwgLTEpOlxuICAgICAgICAgICAgICAgIOebruagh+aVsOe7hFvntKLlvJXkuowrMV0gPSDnm67moIfmlbDnu4Rb57Si5byV5LqMXVxuICAgICAgICAgICAgICAgIOWmguaenCDnm67moIfmlbDnu4Rb57Si5byV5LqMXSA8IOabv+aNojpcbiAgICAgICAgICAgICAgICAgICAg57uI5q2iXG4gICAgICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LqMKzFdID0g5pu/5o2iXG4gICAgICAgICAgICDlvZMg57Si5byV5LqMID49IDAg5LiOIOebruagh+aVsOe7hFvntKLlvJXkuoxdID49IOabv+aNojpcbiAgICAgICAgICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LqMKzFdID0g55uu5qCH5pWw57uEW+e0ouW8leS6jF1cbiAgICAgICAgICAgICAgICDntKLlvJXkuowgLT0gMVxuICAgICAgICAgICAg55uu5qCH5pWw57uEW+e0ouW8leS6jCsxXSA9IOabv+aNolxuICAgIOi/lOWbniDnm67moIfmlbDnu4RcbiAgICBcbua1i+ivleaVsOe7hCA9IFs5OSwgMTYsIDc0LCA0LCAyMSwgNDUsIDE3LCA1NiwgOTMsIDg2LCAyMywgNDAsIDYxLCAzMSwgMzAsIDc5LCA1NiwgNiwgODcsIDUyXVxu5omT5Y2wKOaPkuWFpeaOkuW6jyjmtYvor5XmlbDnu4QpKVxuYFxuICAgICAgICB9XG4gICAgICAgIGxldCBlMSA9IHtcbiAgICAgICAgICAgIG5hbWU6ICfluIzlsJTmjpLluo8nLFxuICAgICAgICAgICAgc291cmNlOiBgXG7lh73mlbAg5biM5bCU5o6S5bqPKOebruagh+aVsOe7hCk6XG4gICAg5q2l6ZW/ID0g6ZW/KOebruagh+aVsOe7hClcbiAgICDlvZMg5q2l6ZW/ID4gMDpcbiAgICAgICAg5q2l6ZW/IC8vPSAyXG4gICAgICAgIOWvueS6jiDntKLlvJXkuIAg5ZyoIOiMg+WbtCjmraXplb8sIOmVvyjnm67moIfmlbDnu4QpKTpcbiAgICAgICAgICAgIOabv+aNoiA9IOebruagh+aVsOe7hFvntKLlvJXkuIBdXG4gICAgICAgICAgICDntKLlvJXkuowgPSDntKLlvJXkuIBcbiAgICAgICAgICAgIOW9kyDntKLlvJXkuowgPj0g5q2l6ZW/IOS4jiDmm7/mjaIgPCDnm67moIfmlbDnu4Rb57Si5byV5LqMLeatpemVv106XG4gICAgICAgICAgICAgICAg55uu5qCH5pWw57uEW+e0ouW8leS6jF0gPSDnm67moIfmlbDnu4Rb57Si5byV5LqMLeatpemVv11cbiAgICAgICAgICAgICAgICDntKLlvJXkuowgLT0g5q2l6ZW/XG4gICAgICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LqMXSA9IOabv+aNolxuICAgIOi/lOWbniDnm67moIfmlbDnu4RcbiAgICBcbua1i+ivleaVsOe7hCA9IFs5OSwgMTYsIDc0LCA0LCAyMSwgNDUsIDE3LCA1NiwgOTMsIDg2LCAyMywgNDAsIDYxLCAzMSwgMzAsIDc5LCA1NiwgNiwgODcsIDUyXVxu5omT5Y2wKOW4jOWwlOaOkuW6jyjmtYvor5XmlbDnu4QpKVxuYFxuICAgICAgICB9XG4gICAgICAgIGxldCBlMiA9IHtcbiAgICAgICAgICAgIG5hbWU6ICflhpLms6HmjpLluo8nLFxuICAgICAgICAgICAgc291cmNlOiBgXG7lh73mlbAg5YaS5rOh5o6S5bqPKOebruagh+aVsOe7hCk6XG4gICAg5a+55LqOIOe0ouW8leS4gCDlnKgg6IyD5Zu0KOmVvyjnm67moIfmlbDnu4QpLCAwLCAtMSk6XG4gICAgICAgIOagh+iusCA9IOmUmVxuICAgICAgICDlr7nkuo4g57Si5byV5LqMIOWcqCDojIPlm7QoMCwg57Si5byV5LiAIC0gMSk6XG4gICAgICAgICAgICDlpoLmnpwg55uu5qCH5pWw57uEW+e0ouW8leS6jF0gPiDnm67moIfmlbDnu4Rb57Si5byV5LqMKzFdOlxuICAgICAgICAgICAgICAgIOebruagh+aVsOe7hFvntKLlvJXkuoxdLCDnm67moIfmlbDnu4Rb57Si5byV5LqMKzFdID0g55uu5qCH5pWw57uEW+e0ouW8leS6jCsxXSwg55uu5qCH5pWw57uEW+e0ouW8leS6jF1cbiAgICAgICAg5aaC5p6cIOagh+iusDpcbiAgICAgICAgICAgIOe7iOatolxuICAgIOi/lOWbniDnm67moIfmlbDnu4RcbiAgICBcbua1i+ivleaVsOe7hCA9IFs5OSwgMTYsIDc0LCA0LCAyMSwgNDUsIDE3LCA1NiwgOTMsIDg2LCAyMywgNDAsIDYxLCAzMSwgMzAsIDc5LCA1NiwgNiwgODcsIDUyXVxu5omT5Y2wKOWGkuazoeaOkuW6jyjmtYvor5XmlbDnu4QpKVxuYFxuICAgICAgICB9XG4gICAgICAgIGxldCBlMyA9IHtcbiAgICAgICAgICAgIG5hbWU6ICflv6vpgJ/mjpLluo8nLFxuICAgICAgICAgICAgc291cmNlOiBgXG7lh73mlbAg5b+r6YCf5o6S5bqPKOebruagh+aVsOe7hCk6XG4gICAg5Ye95pWwIF/lv6vpgJ/mjpLluo8o55uu5qCH5pWw57uELCDlt6bmjIfpkogsIOWPs+aMh+mSiCk6XG4gICAgICAgIOaeoui9tCA9IOebruagh+aVsOe7hFvlt6bmjIfpkohdXG4gICAgICAgIOWOn+W3puaMh+mSiCA9IOW3puaMh+mSiFxuICAgICAgICDljp/lj7PmjIfpkoggPSDlj7PmjIfpkohcbiAgICAgICAg5bem5oyH6ZKI56m65qCH6K6wID0gMCAgIyDlt6bmjIfpkojkuLrnqbpcbiAgICAgICAg5b2TIOW3puaMh+mSiCAhPSDlj7PmjIfpkog6XG4gICAgICAgICAgICDlpoLmnpwg5bem5oyH6ZKI56m65qCH6K6wOlxuICAgICAgICAgICAgICAgIOWmguaenCAo55uu5qCH5pWw57uEW+W3puaMh+mSiF0gPj0g5p6i6L20KTpcbiAgICAgICAgICAgICAgICAgICAg55uu5qCH5pWw57uEW+WPs+aMh+mSiF0gPSDnm67moIfmlbDnu4Rb5bem5oyH6ZKIXVxuICAgICAgICAgICAgICAgICAgICDlt6bmjIfpkojnqbrmoIforrAgPSAwXG4gICAgICAgICAgICAgICAg5ZCm5YiZOlxuICAgICAgICAgICAgICAgICAgICDlt6bmjIfpkoggKz0gMVxuICAgICAgICAgICAg5ZCm5YiZOlxuICAgICAgICAgICAgICAgIOWmguaenCAo55uu5qCH5pWw57uEW+WPs+aMh+mSiF0gPCDmnqLovbQpOlxuICAgICAgICAgICAgICAgICAgICDnm67moIfmlbDnu4Rb5bem5oyH6ZKIXSA9IOebruagh+aVsOe7hFvlj7PmjIfpkohdXG4gICAgICAgICAgICAgICAgICAgIOW3puaMh+mSiOepuuagh+iusCA9IDFcbiAgICAgICAgICAgICAgICDlkKbliJk6XG4gICAgICAgICAgICAgICAgICAgIOWPs+aMh+mSiCAtPSAxXG4gICAgICAgIOS4reaMh+mSiCA9IOW3puaMh+mSiFxuICAgICAgICDnm67moIfmlbDnu4Rb5Lit5oyH6ZKIXSA9IOaeoui9tFxuICAgICAgICDlpoLmnpwg5Y6f5bem5oyH6ZKIIDwg5Lit5oyH6ZKIIC0gMTpcbiAgICAgICAgICAgIF/lv6vpgJ/mjpLluo8o55uu5qCH5pWw57uELCDljp/lt6bmjIfpkogsIOS4reaMh+mSiCAtIDEpXG4gICAgICAgIOWmguaenCDkuK3mjIfpkogrMSA8IOWOn+WPs+aMh+mSiDpcbiAgICAgICAgICAgIF/lv6vpgJ/mjpLluo8o55uu5qCH5pWw57uELCDkuK3mjIfpkogrMSwg5Y6f5Y+z5oyH6ZKIKVxuICAgIOW3puaMh+mSiCA9IDBcbiAgICDlj7PmjIfpkoggPSDplb8o55uu5qCH5pWw57uEKSAtIDFcbiAgICBf5b+r6YCf5o6S5bqPKOebruagh+aVsOe7hCwg5bem5oyH6ZKILCDlj7PmjIfpkogpXG4gICAg6L+U5ZueIOebruagh+aVsOe7hFxuICAgIFxu5rWL6K+V5pWw57uEID0gWzk5LCAxNiwgNzQsIDQsIDIxLCA0NSwgMTcsIDU2LCA5MywgODYsIDIzLCA0MCwgNjEsIDMxLCAzMCwgNzksIDU2LCA2LCA4NywgNTJdXG7miZPljbAo5b+r6YCf5o6S5bqPKOa1i+ivleaVsOe7hCkpXG5gXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGU0ID0ge1xuICAgICAgICAgICAgbmFtZTogJ+mAieaLqeaOkuW6jycsXG4gICAgICAgICAgICBzb3VyY2U6IGBcbuWHveaVsCDpgInmi6nmjpLluo8o55uu5qCH5pWw57uEKTpcbiAgICDlr7nkuo4g57Si5byV5LiAIOWcqCDojIPlm7Qo6ZW/KOebruagh+aVsOe7hCkpOlxuICAgICAgICDmnIDlsI/mlbDlgLwgPSDntKLlvJXkuIBcbiAgICAgICAg5a+55LqOIOe0ouW8leS6jCDlnKgg6IyD5Zu0KOe0ouW8leS4gCwg6ZW/KOebruagh+aVsOe7hCkpOlxuICAgICAgICAgICAg5aaC5p6cIOebruagh+aVsOe7hFvntKLlvJXkuoxdIDwg55uu5qCH5pWw57uEW+acgOWwj+aVsOWAvF06XG4gICAgICAgICAgICAgICAg5pyA5bCP5pWw5YC8ID0g57Si5byV5LqMXG4gICAgICAgIOebruagh+aVsOe7hFvntKLlvJXkuIBdLCDnm67moIfmlbDnu4Rb5pyA5bCP5pWw5YC8XSA9IOebruagh+aVsOe7hFvmnIDlsI/mlbDlgLxdLCDnm67moIfmlbDnu4Rb57Si5byV5LiAXVxuICAgIOi/lOWbniDnm67moIfmlbDnu4RcbiAgICBcbua1i+ivleaVsOe7hCA9IFs5OSwgMTYsIDc0LCA0LCAyMSwgNDUsIDE3LCA1NiwgOTMsIDg2LCAyMywgNDAsIDYxLCAzMSwgMzAsIDc5LCA1NiwgNiwgODcsIDUyXVxu5omT5Y2wKOmAieaLqeaOkuW6jyjmtYvor5XmlbDnu4QpKVxuYFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ25hbWUnOiAn5L6L5a2QJyxcbiAgICAgICAgICAgICdpZCc6ICdleGFtcGxlJyxcbiAgICAgICAgICAgICdjb2Rlcyc6IFtlMCwgZTEsIGUyLCBlMywgZTRdXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCBzb3VyY2UgPSBuZXcgU291cmNlKClcblxuZXhwb3J0IHtzb3VyY2V9XG5cbiJdLCJuYW1lcyI6WyJsb2ciLCJzb3VyY2UiLCJwdWxsVXBTdmciLCJwdWxsRG93blN2ZyIsIkNoYXB0ZXIiLCJldmVudCIsIm5vZGUiLCJzcmNFbGVtZW50IiwicGFyZW50Tm9kZSIsImdldEF0dHJpYnV0ZSIsImluZm8iLCJjaGlsZE5vZGVzIiwiY2hhcHRlclRpdGxlIiwiY2hhcHRlckljb24iLCJzdGF0dXMiLCJjaGFwdGVyTGlzdCIsInN0eWxlIiwiZGlzcGxheSIsInNldEF0dHJpYnV0ZSIsImNoYXB0ZXIiLCJTb3VyY2UiLCJlMCIsIm5hbWUiLCJlMSIsImUyIiwiZTMiLCJlNCJdLCJzb3VyY2VSb290IjoiIn0=