"use strict";
(self["webpackChunkzpy_ide"] = self["webpackChunkzpy_ide"] || []).push([["src_views_editor_js_ide_js"],{

/***/ 369:
/*!***************************!*\
  !*** ./src/utils/time.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "time": () => (/* binding */ time)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 144);



var Time = function () {
  function Time() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Time);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Time, [{
    key: "transformTimestamp",
    value: function transformTimestamp(timestamp) {
      var a = new Date(timestamp).getTime();
      var date = new Date(a);
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
      var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      var dayString = Y + M + D;
      var timeString = h + m + s;
      var dateString = dayString + '  ' + timeString;
      return {
        dayString: dayString,
        timeString: timeString,
        dateString: dateString
      };
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      var date = new Date();
      var year = date.getFullYear();
      var month = this.zeroFill(date.getMonth() + 1);
      var day = this.zeroFill(date.getDate());
      var hour = this.zeroFill(date.getHours());
      var minute = this.zeroFill(date.getMinutes());
      var second = this.zeroFill(date.getSeconds());
      return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    }
  }, {
    key: "zeroFill",
    value: function zeroFill(i) {
      if (i >= 0 && i <= 9) {
        return "0" + i;
      } else {
        return i;
      }
    }
  }]);

  return Time;
}();

var time = new Time();


/***/ }),

/***/ 147:
/*!***************************************!*\
  !*** ./src/views/editor/js/editor.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zpyEditor": () => (/* binding */ zpyEditor),
/* harmony export */   "pyEditor": () => (/* binding */ pyEditor)
/* harmony export */ });
var zpyEditor = CodeMirror.fromTextArea(document.getElementById("zpy-code"), {
  mode: 'zpy',
  theme: "solarized",
  lineNumbers: true,
  smartIndent: true,
  indentUnit: 4,
  indentWithTabs: true,
  lineWrapping: true,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
  foldGutter: true,
  autofocus: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  styleActiveLine: true
});
var pyEditor = CodeMirror.fromTextArea(document.getElementById("python-code"), {
  mode: 'text/x-python',
  theme: "solarized",
  lineNumbers: true,
  smartIndent: true,
  indentUnit: 4,
  indentWithTabs: true,
  lineWrapping: true,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
  foldGutter: true,
  autofocus: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  styleActiveLine: true
});
zpyEditor.setSize(null, "63vh");
pyEditor.setSize(null, "63vh");


/***/ }),

/***/ 288:
/*!************************************!*\
  !*** ./src/views/editor/js/ide.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IDE": () => (/* binding */ IDE),
/* harmony export */   "ide": () => (/* binding */ ide)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 144);
/* harmony import */ var _zpy_compiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zpy-compiler */ 322);
/* harmony import */ var _keywords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keywords */ 153);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor */ 147);
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./source */ 35);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/config */ 32);
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/time */ 369);









var IDE = function () {
  function IDE(_ref) {
    var zpyCode = _ref.zpyCode,
        pyCode = _ref.pyCode;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IDE);

    this.zpyCode = zpyCode;
    this.pyCode = pyCode;
    this.zpy = new _zpy_compiler__WEBPACK_IMPORTED_MODULE_2__.ZpyCompile(_keywords__WEBPACK_IMPORTED_MODULE_3__.keywords);

    if (pyCode) {
      _editor__WEBPACK_IMPORTED_MODULE_4__.pyEditor.setOption("value", this.pyCode);
      this.pyCompile();
    }

    if (zpyCode) {
      _editor__WEBPACK_IMPORTED_MODULE_4__.zpyEditor.setOption("value", this.zpyCode);
      this.zpyCompile();
    }

    this.outputEditor = document.getElementById("output-code");
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IDE, [{
    key: "output",
    value: function output(code) {
      this.outputEditor.innerText += "[".concat(_utils_time__WEBPACK_IMPORTED_MODULE_7__.time.getCurrentTime(), "]:\n");
      this.outputEditor.innerText += code + "\n\n";
    }
  }, {
    key: "zpyRun",
    value: function zpyRun() {
      var _this = this;

      this.zpyCompile();
      this.zpy.exec(this.pyCode).then(function (response) {
        _this.output(response['data']);
      })["catch"](function (err) {
        _this.output("[\u7F51\u7EDC\u9519\u8BEF] \u65E0\u6CD5\u8FDE\u63A5\u670D\u52A1\u5668: ".concat(_utils_config__WEBPACK_IMPORTED_MODULE_6__.config.HOST));
      });
    }
  }, {
    key: "pyRun",
    value: function pyRun() {
      var _this2 = this;

      this.pyCompile();
      this.zpy.exec(this.pyCode).then(function (response) {
        _this2.output(response['data']);
      })["catch"](function (err) {
        _this2.output("[\u7F51\u7EDC\u9519\u8BEF] \u65E0\u6CD5\u8FDE\u63A5\u670D\u52A1\u5668: ".concat(_utils_config__WEBPACK_IMPORTED_MODULE_6__.config.HOST));
      });
    }
  }, {
    key: "zpyCompile",
    value: function zpyCompile() {
      this.zpyCode = _editor__WEBPACK_IMPORTED_MODULE_4__.zpyEditor.getValue();
      this.pyCode = this.zpy.compile(this.zpyCode, 'zpy');
      _editor__WEBPACK_IMPORTED_MODULE_4__.pyEditor.setOption("value", this.pyCode);
    }
  }, {
    key: "pyCompile",
    value: function pyCompile() {
      this.pyCode = _editor__WEBPACK_IMPORTED_MODULE_4__.pyEditor.getValue();
      this.zpyCode = this.zpy.compile(this.pyCode, 'py');
      _editor__WEBPACK_IMPORTED_MODULE_4__.zpyEditor.setOption("value", this.zpyCode);
    }
  }]);

  return IDE;
}();

var zpyCode = _source__WEBPACK_IMPORTED_MODULE_5__.source[0].codes[0].source;
var ide = new IDE({
  zpyCode: zpyCode
});


/***/ }),

/***/ 153:
/*!*****************************************!*\
  !*** ./src/views/editor/js/keywords.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keywords": () => (/* binding */ keywords)
/* harmony export */ });
var reservedWords = {
  regexp: "`/(?<=\\\\s)${key}(?=[\\\\s:])/gm`",
  safariReg: "`/${key}(?=[\\\\s:])/gm`",
  words: {
    "函数": "def",
    "删除": "del",
    "跳过": "pass",
    "终止": "break",
    "继续": "continue",
    "返回": "return",
    "从": "from",
    "抛出": "raise",
    "生成": "yield",
    "导入": "import",
    "全局": "global",
    "非局部": "nonlocal",
    "断言": "assert",
    "如果": "if",
    "或如": "elif",
    "否则": "else",
    "当": "while",
    "对于": "for",
    "尝试": "try",
    "捕获": "except",
    "最后": "finally",
    "作为": "as",
    "随着": "with",
    "匿名": "lambda",
    "或": "or",
    "与": "and",
    "不": "not",
    "在": "in",
    "空": "None",
    "对": "True",
    "错": "False",
    "自己": "self",
    "类": "class",
    "异步": "async",
    "等待": "await"
  }
};
var functionWords = {
  regexp: "`/(?<=[^\u4E00-\u9FA5\\\\w])${key}(?=\\\\(.*\\\\))/gm`",
  safariReg: "`/${key}(?=\\\\(.*\\\\))/gm`",
  words: {
    "符": "chr",
    "二进制": "bin",
    "串": "str",
    "八进制": "oct",
    "符值": "ord",
    "十六进制": "hex",
    "元组": "tuple",
    "长": "len",
    "集合": "set",
    "全为真": "all",
    "字典": "dict",
    "任一为真": "any",
    "列表": "list",
    "迭代": "iter",
    "冻结集合": "frozenset",
    "超类": "super",
    "切片": "slice",
    "乘方": "pow",
    "字节": "bytes",
    "排序": "sort",
    "全局字典": "globals",
    "字节数组": "bytearray",
    "局部字典": "locals",
    "属性": "property",
    "对象": "object",
    "删属性": "delattr",
    "变量字典": "vars",
    "取属性": "getattr",
    "可调用": "callable",
    "有属性": "hasattr",
    "内存视图": "memoryview",
    "设属性": "setattr",
    "哈希": "hash",
    "复数": "complex",
    "商余": "divmod",
    "整数": "int",
    "评估": "eval",
    "浮点数": "float",
    "范围": "range",
    "布尔": "bool",
    "表示": "repr",
    "输入": "input",
    "打包": "zip",
    "打印": "print",
    "打开": "open",
    "执行": "exec",
    "编译": "compile",
    "反转": "reversed",
    "映射": "map",
    "和": "sum",
    "是实例": "isinstance",
    "枚举": "enumerate",
    "最大值": "max",
    "断点": "breakpoint",
    "最小值": "min",
    "是子类": "issubclass",
    "绝对值": "abs",
    "下一个": "next",
    "类型": "type",
    "筛选": "filter",
    "格式化": "format",
    "静态方法": "staticmethod",
    "舍入": "round",
    "类方法": "classmethod",
    "退出": "exit",
    "帮助": "help",
    "ascii": "ascii",
    "id": "id",
    "dir": "dir"
  }
};
var keywords = [reservedWords, functionWords];


/***/ }),

/***/ 322:
/*!*********************************************!*\
  !*** ./src/views/editor/js/zpy-compiler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZpyCompile": () => (/* binding */ ZpyCompile)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 861);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 144);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ 757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/log */ 185);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/config */ 32);
/* harmony import */ var _keywords__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keywords */ 153);





function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var ZpyCompile = function () {
  function ZpyCompile(keywords) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ZpyCompile);

    this.keywords = keywords;
    _utils_log__WEBPACK_IMPORTED_MODULE_4__.log.info(this.keywords);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ZpyCompile, [{
    key: "compile",
    value: function compile(code) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "zpy";

      if (type !== "zpy" && type !== "py") {
        throw new Error("Compile code should be one of zpy, py");
      }

      var _iterator = _createForOfIteratorHelper(_keywords__WEBPACK_IMPORTED_MODULE_6__.keywords),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var keyword = _step.value;

          for (var word in keyword.words) {
            var regexp = void 0;
            if (this.browser() === 'Safari') regexp = keyword.safariReg;else regexp = keyword.regexp;
            if (type === "zpy") code = code.replace(this.dispose(word, regexp), keyword.words[word]);else if (type === "py") code = code.replace(this.dispose(keyword.words[word], regexp), word);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return code;
    }
  }, {
    key: "browser",
    value: function browser() {
      var explorer = window.navigator.userAgent;

      if (explorer.indexOf("MSIE") >= 0) {
        return 'ie';
      } else if (explorer.indexOf("Firefox") >= 0) {
        return 'Firefox';
      } else if (explorer.indexOf("Chrome") >= 0) {
        return 'Chrome';
      } else if (explorer.indexOf("Opera") >= 0) {
        return 'Opera';
      } else if (explorer.indexOf("Safari") >= 0) {
        return 'Safari';
      } else {
        return 'None';
      }
    }
  }, {
    key: "dispose",
    value: function dispose(key, regexp) {
      var expression = String(eval(regexp));
      return eval(expression);
    }
  }, {
    key: "exec",
    value: function () {
      var _exec = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(code) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", axios({
                  method: 'post',
                  url: _utils_config__WEBPACK_IMPORTED_MODULE_5__.config.HOST + _utils_config__WEBPACK_IMPORTED_MODULE_5__.config.URL,
                  data: {
                    'code': code
                  }
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function exec(_x) {
        return _exec.apply(this, arguments);
      }

      return exec;
    }()
  }]);

  return ZpyCompile;
}();

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVA7QUFDSCxPQUZJLE1BRUU7QUFDSCxlQUFPLE1BQVA7QUFDSDtBQUNKO0FBbERMO0FBQUE7QUFBQSxXQW9ESSxpQkFBUUMsR0FBUixFQUFhbEIsTUFBYixFQUFxQjtBQUNqQixVQUFJbUIsVUFBVSxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQ3JCLE1BQUQsQ0FBTCxDQUF2QjtBQUNBLGFBQU9xQixJQUFJLENBQUNGLFVBQUQsQ0FBWDtBQUNIO0FBdkRMO0FBQUE7QUFBQTtBQUFBLDZLQXlESSxpQkFBV2pDLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQUNXb0MsS0FBSyxDQUFDO0FBQ1RDLGtCQUFBQSxNQUFNLEVBQUUsTUFEQztBQUVUQyxrQkFBQUEsR0FBRyxFQUFFL0Msc0RBQUEsR0FBY0EscURBRlY7QUFHVGlELGtCQUFBQSxJQUFJLEVBQUU7QUFDRiw0QkFBUXhDO0FBRE47QUFIRyxpQkFBRCxDQURoQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQXpESjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96cHktaWRlLy4vc3JjL3V0aWxzL3RpbWUuanMiLCJ3ZWJwYWNrOi8venB5LWlkZS8uL3NyYy92aWV3cy9lZGl0b3IvanMvZWRpdG9yLmpzIiwid2VicGFjazovL3pweS1pZGUvLi9zcmMvdmlld3MvZWRpdG9yL2pzL2lkZS5qcyIsIndlYnBhY2s6Ly96cHktaWRlLy4vc3JjL3ZpZXdzL2VkaXRvci9qcy9rZXl3b3Jkcy5qcyIsIndlYnBhY2s6Ly96cHktaWRlLy4vc3JjL3ZpZXdzL2VkaXRvci9qcy96cHktY29tcGlsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGltZSB7XG4gICAgdHJhbnNmb3JtVGltZXN0YW1wKHRpbWVzdGFtcCkge1xuICAgICAgICAvL+WwhuKAnDIwMjEtMDctMDZUMDY6MjM6NTcuMDAwKzAwOjAw4oCdIO+8jOi9rOaNouS4ujIwMjEtMDctMDYgMTQ6MjM6NTdcbiAgICAgICAgbGV0IGEgPSBuZXcgRGF0ZSh0aW1lc3RhbXApLmdldFRpbWUoKVxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoYSlcbiAgICAgICAgY29uc3QgWSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJ1xuICAgICAgICBjb25zdCBNID0gKGRhdGUuZ2V0TW9udGgoKSArIDEgPCAxMCA/ICcwJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKSA6IGRhdGUuZ2V0TW9udGgoKSArIDEpICsgJy0nXG4gICAgICAgIGNvbnN0IEQgPSAoZGF0ZS5nZXREYXRlKCkgPCAxMCA/ICcwJyArIGRhdGUuZ2V0RGF0ZSgpIDogZGF0ZS5nZXREYXRlKCkpXG4gICAgICAgIGNvbnN0IGggPSAoZGF0ZS5nZXRIb3VycygpIDwgMTAgPyAnMCcgKyBkYXRlLmdldEhvdXJzKCkgOiBkYXRlLmdldEhvdXJzKCkpICsgJzonXG4gICAgICAgIGNvbnN0IG0gPSAoZGF0ZS5nZXRNaW51dGVzKCkgPCAxMCA/ICcwJyArIGRhdGUuZ2V0TWludXRlcygpIDogZGF0ZS5nZXRNaW51dGVzKCkpICsgJzonXG4gICAgICAgIGNvbnN0IHMgPSAoZGF0ZS5nZXRTZWNvbmRzKCkgPCAxMCA/ICcwJyArIGRhdGUuZ2V0U2Vjb25kcygpIDogZGF0ZS5nZXRTZWNvbmRzKCkpXG4gICAgICAgIGNvbnN0IGRheVN0cmluZyA9IFkgKyBNICsgRFxuICAgICAgICBjb25zdCB0aW1lU3RyaW5nID0gaCArIG0gKyBzXG4gICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBkYXlTdHJpbmcgKyAnICAnICsgdGltZVN0cmluZ1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGF0ZVN0cmluZycsIGRhdGVTdHJpbmcpIC8vID4gZGF0ZVN0cmluZyAyMDIxLTA3LTA2IDE0OjIzOjU3XG4gICAgICAgIHJldHVybiB7ZGF5U3RyaW5nLCB0aW1lU3RyaW5nLCBkYXRlU3RyaW5nfVxuICAgIH1cblxuICAgIGdldEN1cnJlbnRUaW1lKCkge1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7Ly/lvZPliY3ml7bpl7RcbiAgICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgICAgbGV0IG1vbnRoID0gdGhpcy56ZXJvRmlsbChkYXRlLmdldE1vbnRoKCkgKyAxKTsvL+aciFxuICAgICAgICBsZXQgZGF5ID0gdGhpcy56ZXJvRmlsbChkYXRlLmdldERhdGUoKSk7Ly/ml6VcbiAgICAgICAgbGV0IGhvdXIgPSB0aGlzLnplcm9GaWxsKGRhdGUuZ2V0SG91cnMoKSk7Ly/ml7ZcbiAgICAgICAgbGV0IG1pbnV0ZSA9IHRoaXMuemVyb0ZpbGwoZGF0ZS5nZXRNaW51dGVzKCkpOy8v5YiGXG4gICAgICAgIGxldCBzZWNvbmQgPSB0aGlzLnplcm9GaWxsKGRhdGUuZ2V0U2Vjb25kcygpKTsvL+enklxuXG4gICAgICAgIC8v5b2T5YmN5pe26Ze0XG4gICAgICAgIHJldHVybiB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5XG4gICAgICAgICAgICArIFwiIFwiICsgaG91ciArIFwiOlwiICsgbWludXRlICsgXCI6XCIgKyBzZWNvbmQ7XG4gICAgfVxuXG4gICAgemVyb0ZpbGwoaSkge1xuICAgICAgICAvLyDooaXpm7ZcbiAgICAgICAgaWYgKGkgPj0gMCAmJiBpIDw9IDkpIHtcbiAgICAgICAgICAgIHJldHVybiBcIjBcIiArIGk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgdGltZSA9IG5ldyBUaW1lKClcblxuZXhwb3J0IHt0aW1lfSIsImxldCB6cHlFZGl0b3IgPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInpweS1jb2RlXCIpLCB7XG4gICAgbW9kZTogJ3pweScsIC8vIOivreiogOaooeW8j1xuICAgIHRoZW1lOiBcInNvbGFyaXplZFwiLCAvLyDkuLvpophcbiAgICAvLyBrZXlNYXA6IFwic3VibGltZVwiLCAvLyDlv6vplK7plK7po47moLxcbiAgICBsaW5lTnVtYmVyczogdHJ1ZSwgLy8g5pi+56S66KGM5Y+3XG4gICAgc21hcnRJbmRlbnQ6IHRydWUsIC8vIOaZuuiDvee8qei/m1xuICAgIGluZGVudFVuaXQ6IDQsIC8vIOaZuuiDvee8qei/m+WNleS9jeS4ujTkuKrnqbrmoLzplb/luqZcbiAgICBpbmRlbnRXaXRoVGFiczogdHJ1ZSwgLy8g5L2/55So5Yi26KGo56ym6L+b6KGM5pm66IO957yp6L+bXG4gICAgbGluZVdyYXBwaW5nOiB0cnVlLCAvLyBcbiAgICAvLyDlnKjooYzmp73kuK3mt7vliqDooYzlj7fmmL7npLrlmajjgIHmipjlj6DlmajjgIHor63ms5Xmo4DmtYvlmahcbiAgICBndXR0ZXJzOiBbXCJDb2RlTWlycm9yLWxpbmVudW1iZXJzXCIsIFwiQ29kZU1pcnJvci1mb2xkZ3V0dGVyXCIsIFwiQ29kZU1pcnJvci1saW50LW1hcmtlcnNcIl0sIFxuICAgIGZvbGRHdXR0ZXI6IHRydWUsIC8vIOWQr+eUqOihjOanveS4reeahOS7o+eggeaKmOWPoFxuICAgIGF1dG9mb2N1czogdHJ1ZSwgLy8g6Ieq5Yqo6IGa54SmXG4gICAgbWF0Y2hCcmFja2V0czogdHJ1ZSwgLy8g5Yy56YWN57uT5p2f56ym5Y+377yM5q+U5aaCXCJd44CBfVwiXG4gICAgYXV0b0Nsb3NlQnJhY2tldHM6IHRydWUsIC8vIOiHquWKqOmXreWQiOespuWPt1xuICAgIHN0eWxlQWN0aXZlTGluZTogdHJ1ZSwgLy8g5pi+56S66YCJ5Lit6KGM55qE5qC35byPXG59KTtcblxubGV0IHB5RWRpdG9yID0gQ29kZU1pcnJvci5mcm9tVGV4dEFyZWEoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJweXRob24tY29kZVwiKSwge1xuICAgIG1vZGU6ICd0ZXh0L3gtcHl0aG9uJywgLy8g6K+t6KiA5qih5byPXG4gICAgdGhlbWU6IFwic29sYXJpemVkXCIsIC8vIOS4u+mimFxuICAgIC8vIGtleU1hcDogXCJzdWJsaW1lXCIsIC8vIOW/q+mUrumUrumjjuagvFxuICAgIGxpbmVOdW1iZXJzOiB0cnVlLCAvLyDmmL7npLrooYzlj7dcbiAgICBzbWFydEluZGVudDogdHJ1ZSwgLy8g5pm66IO957yp6L+bXG4gICAgaW5kZW50VW5pdDogNCwgLy8g5pm66IO957yp6L+b5Y2V5L2N5Li6NOS4quepuuagvOmVv+W6plxuICAgIGluZGVudFdpdGhUYWJzOiB0cnVlLCAvLyDkvb/nlKjliLbooajnrKbov5vooYzmmbrog73nvKnov5tcbiAgICBsaW5lV3JhcHBpbmc6IHRydWUsIC8vIFxuICAgIC8vIOWcqOihjOanveS4rea3u+WKoOihjOWPt+aYvuekuuWZqOOAgeaKmOWPoOWZqOOAgeivreazleajgOa1i+WZqFxuICAgIGd1dHRlcnM6IFtcIkNvZGVNaXJyb3ItbGluZW51bWJlcnNcIiwgXCJDb2RlTWlycm9yLWZvbGRndXR0ZXJcIiwgXCJDb2RlTWlycm9yLWxpbnQtbWFya2Vyc1wiXSwgXG4gICAgZm9sZEd1dHRlcjogdHJ1ZSwgLy8g5ZCv55So6KGM5qe95Lit55qE5Luj56CB5oqY5Y+gXG4gICAgYXV0b2ZvY3VzOiB0cnVlLCAvLyDoh6rliqjogZrnhKZcbiAgICBtYXRjaEJyYWNrZXRzOiB0cnVlLCAvLyDljLnphY3nu5PmnZ/nrKblj7fvvIzmr5TlpoJcIl3jgIF9XCJcbiAgICBhdXRvQ2xvc2VCcmFja2V0czogdHJ1ZSwgLy8g6Ieq5Yqo6Zet5ZCI56ym5Y+3XG4gICAgc3R5bGVBY3RpdmVMaW5lOiB0cnVlLCAvLyDmmL7npLrpgInkuK3ooYznmoTmoLflvI9cbn0pO1xuXG56cHlFZGl0b3Iuc2V0U2l6ZShudWxsLCBcIjYzdmhcIik7XG5weUVkaXRvci5zZXRTaXplKG51bGwsIFwiNjN2aFwiKTtcblxuZXhwb3J0IHt6cHlFZGl0b3IsIHB5RWRpdG9yfSIsImltcG9ydCB7WnB5Q29tcGlsZX0gZnJvbSBcIi4venB5LWNvbXBpbGVyXCJcbmltcG9ydCB7a2V5d29yZHN9IGZyb20gXCIuL2tleXdvcmRzXCJcbmltcG9ydCB7enB5RWRpdG9yLCBweUVkaXRvcn0gZnJvbSBcIi4vZWRpdG9yXCJcbmltcG9ydCB7c291cmNlfSBmcm9tIFwiLi9zb3VyY2VcIlxuaW1wb3J0IHtjb25maWd9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jb25maWdcIlxuaW1wb3J0IHt0aW1lfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdGltZVwiXG5cbmNsYXNzIElERSB7XG4gICAgY29uc3RydWN0b3Ioe3pweUNvZGUsIHB5Q29kZX0pIHtcbiAgICAgICAgdGhpcy56cHlDb2RlID0genB5Q29kZVxuICAgICAgICB0aGlzLnB5Q29kZSA9IHB5Q29kZVxuICAgICAgICB0aGlzLnpweSA9IG5ldyBacHlDb21waWxlKGtleXdvcmRzKVxuICAgICAgICBpZiAocHlDb2RlKSB7XG4gICAgICAgICAgICBweUVkaXRvci5zZXRPcHRpb24oXCJ2YWx1ZVwiLCB0aGlzLnB5Q29kZSlcbiAgICAgICAgICAgIHRoaXMucHlDb21waWxlKClcbiAgICAgICAgfVxuICAgICAgICBpZiAoenB5Q29kZSkge1xuICAgICAgICAgICAgenB5RWRpdG9yLnNldE9wdGlvbihcInZhbHVlXCIsIHRoaXMuenB5Q29kZSlcbiAgICAgICAgICAgIHRoaXMuenB5Q29tcGlsZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vdXRwdXRFZGl0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dC1jb2RlXCIpXG4gICAgfVxuXG4gICAgb3V0cHV0KGNvZGUpIHtcbiAgICAgICAgdGhpcy5vdXRwdXRFZGl0b3IuaW5uZXJUZXh0ICs9IGBbJHt0aW1lLmdldEN1cnJlbnRUaW1lKCl9XTpcXG5gXG4gICAgICAgIHRoaXMub3V0cHV0RWRpdG9yLmlubmVyVGV4dCArPSBjb2RlICsgXCJcXG5cXG5cIlxuICAgIH1cblxuICAgIHpweVJ1bigpIHtcbiAgICAgICAgdGhpcy56cHlDb21waWxlKClcbiAgICAgICAgdGhpcy56cHkuZXhlYyh0aGlzLnB5Q29kZSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dChyZXNwb25zZVsnZGF0YSddKVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQoYFvnvZHnu5zplJnor69dIOaXoOazlei/nuaOpeacjeWKoeWZqDogJHtjb25maWcuSE9TVH1gKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB5UnVuKCkge1xuICAgICAgICB0aGlzLnB5Q29tcGlsZSgpXG4gICAgICAgIHRoaXMuenB5LmV4ZWModGhpcy5weUNvZGUpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQocmVzcG9uc2VbJ2RhdGEnXSlcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0KGBb572R57uc6ZSZ6K+vXSDml6Dms5Xov57mjqXmnI3liqHlmag6ICR7Y29uZmlnLkhPU1R9YClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB6cHlDb21waWxlKCkge1xuICAgICAgICB0aGlzLnpweUNvZGUgPSB6cHlFZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICAgICAgdGhpcy5weUNvZGUgPSB0aGlzLnpweS5jb21waWxlKHRoaXMuenB5Q29kZSwgJ3pweScpXG4gICAgICAgIHB5RWRpdG9yLnNldE9wdGlvbihcInZhbHVlXCIsIHRoaXMucHlDb2RlKVxuICAgIH1cblxuICAgIHB5Q29tcGlsZSgpIHtcbiAgICAgICAgdGhpcy5weUNvZGUgPSBweUVkaXRvci5nZXRWYWx1ZSgpO1xuICAgICAgICB0aGlzLnpweUNvZGUgPSB0aGlzLnpweS5jb21waWxlKHRoaXMucHlDb2RlLCAncHknKVxuICAgICAgICB6cHlFZGl0b3Iuc2V0T3B0aW9uKFwidmFsdWVcIiwgdGhpcy56cHlDb2RlKVxuICAgIH1cbn1cblxubGV0IHpweUNvZGUgPSBzb3VyY2VbMF0uY29kZXNbMF1bJ3NvdXJjZSddXG5sZXQgaWRlID0gbmV3IElERSh7enB5Q29kZX0pXG5cbmV4cG9ydCB7SURFLCBpZGV9IiwiY29uc3QgcmVzZXJ2ZWRXb3JkcyA9IHtcbiAgICByZWdleHA6IFwiYC8oPzw9XFxcXFxcXFxzKSR7a2V5fSg/PVtcXFxcXFxcXHM6XSkvZ21gXCIsXG4gICAgc2FmYXJpUmVnOiBcImAvJHtrZXl9KD89W1xcXFxcXFxcczpdKS9nbWBcIixcbiAgICB3b3Jkczoge1xuICAgICAgICBcIuWHveaVsFwiOiBcImRlZlwiLFxuICAgICAgICBcIuWIoOmZpFwiOiBcImRlbFwiLFxuICAgICAgICBcIui3s+i/h1wiOiBcInBhc3NcIixcbiAgICAgICAgXCLnu4jmraJcIjogXCJicmVha1wiLFxuICAgICAgICBcIue7p+e7rVwiOiBcImNvbnRpbnVlXCIsXG4gICAgICAgIFwi6L+U5ZueXCI6IFwicmV0dXJuXCIsXG4gICAgICAgIFwi5LuOXCI6IFwiZnJvbVwiLFxuICAgICAgICBcIuaKm+WHulwiOiBcInJhaXNlXCIsXG4gICAgICAgIFwi55Sf5oiQXCI6IFwieWllbGRcIixcbiAgICAgICAgXCLlr7zlhaVcIjogXCJpbXBvcnRcIixcbiAgICAgICAgXCLlhajlsYBcIjogXCJnbG9iYWxcIixcbiAgICAgICAgXCLpnZ7lsYDpg6hcIjogXCJub25sb2NhbFwiLFxuICAgICAgICBcIuaWreiogFwiOiBcImFzc2VydFwiLFxuICAgICAgICBcIuWmguaenFwiOiBcImlmXCIsXG4gICAgICAgIFwi5oiW5aaCXCI6IFwiZWxpZlwiLFxuICAgICAgICBcIuWQpuWImVwiOiBcImVsc2VcIixcbiAgICAgICAgXCLlvZNcIjogXCJ3aGlsZVwiLFxuICAgICAgICBcIuWvueS6jlwiOiBcImZvclwiLFxuICAgICAgICBcIuWwneivlVwiOiBcInRyeVwiLFxuICAgICAgICBcIuaNleiOt1wiOiBcImV4Y2VwdFwiLFxuICAgICAgICBcIuacgOWQjlwiOiBcImZpbmFsbHlcIixcbiAgICAgICAgXCLkvZzkuLpcIjogXCJhc1wiLFxuICAgICAgICBcIumaj+edgFwiOiBcIndpdGhcIixcbiAgICAgICAgXCLljL/lkI1cIjogXCJsYW1iZGFcIixcbiAgICAgICAgXCLmiJZcIjogXCJvclwiLFxuICAgICAgICBcIuS4jlwiOiBcImFuZFwiLFxuICAgICAgICBcIuS4jVwiOiBcIm5vdFwiLFxuICAgICAgICBcIuWcqFwiOiBcImluXCIsXG4gICAgICAgIFwi56m6XCI6IFwiTm9uZVwiLFxuICAgICAgICBcIuWvuVwiOiBcIlRydWVcIixcbiAgICAgICAgXCLplJlcIjogXCJGYWxzZVwiLFxuICAgICAgICBcIuiHquW3sVwiOiBcInNlbGZcIixcbiAgICAgICAgXCLnsbtcIjogXCJjbGFzc1wiLFxuICAgICAgICBcIuW8guatpVwiOiBcImFzeW5jXCIsXG4gICAgICAgIFwi562J5b6FXCI6IFwiYXdhaXRcIlxuICAgIH1cbn1cblxuY29uc3QgZnVuY3Rpb25Xb3JkcyA9IHtcbiAgICByZWdleHA6IFwiYC8oPzw9W15cXHU0ZTAwLVxcdTlmYTVcXFxcXFxcXHddKSR7a2V5fSg/PVxcXFxcXFxcKC4qXFxcXFxcXFwpKS9nbWBcIixcbiAgICBzYWZhcmlSZWc6IFwiYC8ke2tleX0oPz1cXFxcXFxcXCguKlxcXFxcXFxcKSkvZ21gXCIsXG4gICAgd29yZHM6IHtcbiAgICAgICAgXCLnrKZcIjogXCJjaHJcIixcbiAgICAgICAgXCLkuozov5vliLZcIjogXCJiaW5cIixcbiAgICAgICAgXCLkuLJcIjogXCJzdHJcIixcbiAgICAgICAgXCLlhavov5vliLZcIjogXCJvY3RcIixcbiAgICAgICAgXCLnrKblgLxcIjogXCJvcmRcIixcbiAgICAgICAgXCLljYHlha3ov5vliLZcIjogXCJoZXhcIixcbiAgICAgICAgXCLlhYPnu4RcIjogXCJ0dXBsZVwiLFxuICAgICAgICBcIumVv1wiOiBcImxlblwiLFxuICAgICAgICBcIumbhuWQiFwiOiBcInNldFwiLFxuICAgICAgICBcIuWFqOS4uuecn1wiOiBcImFsbFwiLFxuICAgICAgICBcIuWtl+WFuFwiOiBcImRpY3RcIixcbiAgICAgICAgXCLku7vkuIDkuLrnnJ9cIjogXCJhbnlcIixcbiAgICAgICAgXCLliJfooahcIjogXCJsaXN0XCIsXG4gICAgICAgIFwi6L+t5LujXCI6IFwiaXRlclwiLFxuICAgICAgICBcIuWGu+e7k+mbhuWQiFwiOiBcImZyb3plbnNldFwiLFxuICAgICAgICBcIui2heexu1wiOiBcInN1cGVyXCIsXG4gICAgICAgIFwi5YiH54mHXCI6IFwic2xpY2VcIixcbiAgICAgICAgXCLkuZjmlrlcIjogXCJwb3dcIixcbiAgICAgICAgXCLlrZfoioJcIjogXCJieXRlc1wiLFxuICAgICAgICBcIuaOkuW6j1wiOiBcInNvcnRcIixcbiAgICAgICAgXCLlhajlsYDlrZflhbhcIjogXCJnbG9iYWxzXCIsXG4gICAgICAgIFwi5a2X6IqC5pWw57uEXCI6IFwiYnl0ZWFycmF5XCIsXG4gICAgICAgIFwi5bGA6YOo5a2X5YW4XCI6IFwibG9jYWxzXCIsXG4gICAgICAgIFwi5bGe5oCnXCI6IFwicHJvcGVydHlcIixcbiAgICAgICAgXCLlr7nosaFcIjogXCJvYmplY3RcIixcbiAgICAgICAgXCLliKDlsZ7mgKdcIjogXCJkZWxhdHRyXCIsXG4gICAgICAgIFwi5Y+Y6YeP5a2X5YW4XCI6IFwidmFyc1wiLFxuICAgICAgICBcIuWPluWxnuaAp1wiOiBcImdldGF0dHJcIixcbiAgICAgICAgXCLlj6/osIPnlKhcIjogXCJjYWxsYWJsZVwiLFxuICAgICAgICBcIuacieWxnuaAp1wiOiBcImhhc2F0dHJcIixcbiAgICAgICAgXCLlhoXlrZjop4blm75cIjogXCJtZW1vcnl2aWV3XCIsXG4gICAgICAgIFwi6K6+5bGe5oCnXCI6IFwic2V0YXR0clwiLFxuICAgICAgICBcIuWTiOW4jFwiOiBcImhhc2hcIixcbiAgICAgICAgXCLlpI3mlbBcIjogXCJjb21wbGV4XCIsXG4gICAgICAgIFwi5ZWG5L2ZXCI6IFwiZGl2bW9kXCIsXG4gICAgICAgIFwi5pW05pWwXCI6IFwiaW50XCIsXG4gICAgICAgIFwi6K+E5LywXCI6IFwiZXZhbFwiLFxuICAgICAgICBcIua1rueCueaVsFwiOiBcImZsb2F0XCIsXG4gICAgICAgIFwi6IyD5Zu0XCI6IFwicmFuZ2VcIixcbiAgICAgICAgXCLluIPlsJRcIjogXCJib29sXCIsXG4gICAgICAgIFwi6KGo56S6XCI6IFwicmVwclwiLFxuICAgICAgICBcIui+k+WFpVwiOiBcImlucHV0XCIsXG4gICAgICAgIFwi5omT5YyFXCI6IFwiemlwXCIsXG4gICAgICAgIFwi5omT5Y2wXCI6IFwicHJpbnRcIixcbiAgICAgICAgXCLmiZPlvIBcIjogXCJvcGVuXCIsXG4gICAgICAgIFwi5omn6KGMXCI6IFwiZXhlY1wiLFxuICAgICAgICBcIue8luivkVwiOiBcImNvbXBpbGVcIixcbiAgICAgICAgXCLlj43ovaxcIjogXCJyZXZlcnNlZFwiLFxuICAgICAgICBcIuaYoOWwhFwiOiBcIm1hcFwiLFxuICAgICAgICBcIuWSjFwiOiBcInN1bVwiLFxuICAgICAgICBcIuaYr+WunuS+i1wiOiBcImlzaW5zdGFuY2VcIixcbiAgICAgICAgXCLmnprkuL5cIjogXCJlbnVtZXJhdGVcIixcbiAgICAgICAgXCLmnIDlpKflgLxcIjogXCJtYXhcIixcbiAgICAgICAgXCLmlq3ngrlcIjogXCJicmVha3BvaW50XCIsXG4gICAgICAgIFwi5pyA5bCP5YC8XCI6IFwibWluXCIsXG4gICAgICAgIFwi5piv5a2Q57G7XCI6IFwiaXNzdWJjbGFzc1wiLFxuICAgICAgICBcIue7neWvueWAvFwiOiBcImFic1wiLFxuICAgICAgICBcIuS4i+S4gOS4qlwiOiBcIm5leHRcIixcbiAgICAgICAgXCLnsbvlnotcIjogXCJ0eXBlXCIsXG4gICAgICAgIFwi562b6YCJXCI6IFwiZmlsdGVyXCIsXG4gICAgICAgIFwi5qC85byP5YyWXCI6IFwiZm9ybWF0XCIsXG4gICAgICAgIFwi6Z2Z5oCB5pa55rOVXCI6IFwic3RhdGljbWV0aG9kXCIsXG4gICAgICAgIFwi6IiN5YWlXCI6IFwicm91bmRcIixcbiAgICAgICAgXCLnsbvmlrnms5VcIjogXCJjbGFzc21ldGhvZFwiLFxuICAgICAgICBcIumAgOWHulwiOiBcImV4aXRcIixcbiAgICAgICAgXCLluK7liqlcIjogXCJoZWxwXCIsXG4gICAgICAgIFwiYXNjaWlcIjogXCJhc2NpaVwiLFxuICAgICAgICBcImlkXCI6IFwiaWRcIixcbiAgICAgICAgXCJkaXJcIjogXCJkaXJcIlxuICAgIH1cbn1cblxuY29uc3Qga2V5d29yZHMgPSBbcmVzZXJ2ZWRXb3JkcywgZnVuY3Rpb25Xb3Jkc11cblxuZXhwb3J0IHtrZXl3b3Jkc31cbiIsImltcG9ydCB7bG9nfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbG9nXCI7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NvbmZpZ1wiO1xuaW1wb3J0IHtrZXl3b3Jkc30gZnJvbSBcIi4va2V5d29yZHNcIjtcblxuZXhwb3J0IGNsYXNzIFpweUNvbXBpbGUge1xuICAgIGNvbnN0cnVjdG9yKGtleXdvcmRzKSB7XG4gICAgICAgIHRoaXMua2V5d29yZHMgPSBrZXl3b3Jkc1xuICAgICAgICBsb2cuaW5mbyh0aGlzLmtleXdvcmRzKVxuICAgIH1cblxuICAgIGNvbXBpbGUoY29kZSwgdHlwZSA9IFwienB5XCIpIHtcblxuICAgICAgICBpZiAodHlwZSAhPT0gXCJ6cHlcIiAmJiB0eXBlICE9PSBcInB5XCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbXBpbGUgY29kZSBzaG91bGQgYmUgb25lIG9mIHpweSwgcHlcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGtleXdvcmQgb2Yga2V5d29yZHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHdvcmQgaW4ga2V5d29yZC53b3Jkcykge1xuICAgICAgICAgICAgICAgIGxldCByZWdleHBcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJyb3dzZXIoKSA9PT0gJ1NhZmFyaScpIHJlZ2V4cCA9IGtleXdvcmQuc2FmYXJpUmVnXG4gICAgICAgICAgICAgICAgZWxzZSByZWdleHAgPSBrZXl3b3JkLnJlZ2V4cFxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwienB5XCIpIGNvZGUgPSBjb2RlLnJlcGxhY2UodGhpcy5kaXNwb3NlKHdvcmQsIHJlZ2V4cCksIGtleXdvcmQud29yZHNbd29yZF0pXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJweVwiKSBjb2RlID0gY29kZS5yZXBsYWNlKHRoaXMuZGlzcG9zZShrZXl3b3JkLndvcmRzW3dvcmRdLCByZWdleHApLCB3b3JkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2RlXG4gICAgfVxuXG4gICAgYnJvd3NlcigpIHtcbiAgICAgICAgY29uc3QgZXhwbG9yZXIgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgICAgICAvL+WIpOaWreaYr+WQpuS4uklF5rWP6KeI5ZmoXG4gICAgICAgIGlmIChleHBsb3Jlci5pbmRleE9mKFwiTVNJRVwiKSA+PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2llJztcbiAgICAgICAgfVxuICAgICAgICAvL+WIpOaWreaYr+WQpuS4ukZpcmVmb3jmtY/op4jlmahcbiAgICAgICAgZWxzZSBpZiAoZXhwbG9yZXIuaW5kZXhPZihcIkZpcmVmb3hcIikgPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICdGaXJlZm94JztcbiAgICAgICAgfVxuICAgICAgICAvL+WIpOaWreaYr+WQpuS4ukNocm9tZea1j+iniOWZqFxuICAgICAgICBlbHNlIGlmIChleHBsb3Jlci5pbmRleE9mKFwiQ2hyb21lXCIpID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnQ2hyb21lJztcbiAgICAgICAgfVxuICAgICAgICAvL+WIpOaWreaYr+WQpuS4uk9wZXJh5rWP6KeI5ZmoXG4gICAgICAgIGVsc2UgaWYgKGV4cGxvcmVyLmluZGV4T2YoXCJPcGVyYVwiKSA+PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ09wZXJhJztcbiAgICAgICAgfVxuICAgICAgICAvL+WIpOaWreaYr+WQpuS4ulNhZmFyaea1j+iniOWZqFxuICAgICAgICBlbHNlIGlmIChleHBsb3Jlci5pbmRleE9mKFwiU2FmYXJpXCIpID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnU2FmYXJpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnTm9uZSdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3Bvc2Uoa2V5LCByZWdleHApIHtcbiAgICAgICAgbGV0IGV4cHJlc3Npb24gPSBTdHJpbmcoZXZhbChyZWdleHApKVxuICAgICAgICByZXR1cm4gZXZhbChleHByZXNzaW9uKVxuICAgIH1cblxuICAgIGFzeW5jIGV4ZWMoY29kZSkge1xuICAgICAgICByZXR1cm4gYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICB1cmw6IGNvbmZpZy5IT1NUICsgY29uZmlnLlVSTCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAnY29kZSc6IGNvZGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsiVGltZSIsInRpbWVzdGFtcCIsImEiLCJEYXRlIiwiZ2V0VGltZSIsImRhdGUiLCJZIiwiZ2V0RnVsbFllYXIiLCJNIiwiZ2V0TW9udGgiLCJEIiwiZ2V0RGF0ZSIsImgiLCJnZXRIb3VycyIsIm0iLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiLCJkYXlTdHJpbmciLCJ0aW1lU3RyaW5nIiwiZGF0ZVN0cmluZyIsInllYXIiLCJtb250aCIsInplcm9GaWxsIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsImkiLCJ0aW1lIiwienB5RWRpdG9yIiwiQ29kZU1pcnJvciIsImZyb21UZXh0QXJlYSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb2RlIiwidGhlbWUiLCJsaW5lTnVtYmVycyIsInNtYXJ0SW5kZW50IiwiaW5kZW50VW5pdCIsImluZGVudFdpdGhUYWJzIiwibGluZVdyYXBwaW5nIiwiZ3V0dGVycyIsImZvbGRHdXR0ZXIiLCJhdXRvZm9jdXMiLCJtYXRjaEJyYWNrZXRzIiwiYXV0b0Nsb3NlQnJhY2tldHMiLCJzdHlsZUFjdGl2ZUxpbmUiLCJweUVkaXRvciIsInNldFNpemUiLCJacHlDb21waWxlIiwia2V5d29yZHMiLCJzb3VyY2UiLCJjb25maWciLCJJREUiLCJ6cHlDb2RlIiwicHlDb2RlIiwienB5Iiwic2V0T3B0aW9uIiwicHlDb21waWxlIiwienB5Q29tcGlsZSIsIm91dHB1dEVkaXRvciIsImNvZGUiLCJpbm5lclRleHQiLCJnZXRDdXJyZW50VGltZSIsImV4ZWMiLCJ0aGVuIiwicmVzcG9uc2UiLCJvdXRwdXQiLCJlcnIiLCJIT1NUIiwiZ2V0VmFsdWUiLCJjb21waWxlIiwiY29kZXMiLCJpZGUiLCJyZXNlcnZlZFdvcmRzIiwicmVnZXhwIiwic2FmYXJpUmVnIiwid29yZHMiLCJmdW5jdGlvbldvcmRzIiwibG9nIiwiaW5mbyIsInR5cGUiLCJFcnJvciIsImtleXdvcmQiLCJ3b3JkIiwiYnJvd3NlciIsInJlcGxhY2UiLCJkaXNwb3NlIiwiZXhwbG9yZXIiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwia2V5IiwiZXhwcmVzc2lvbiIsIlN0cmluZyIsImV2YWwiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsIlVSTCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9