"use strict";
(self["webpackChunkzpy_ide"] = self["webpackChunkzpy_ide"] || []).push([["src_views_editor_js_ide_js"],{

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
/* harmony import */ var _zpy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zpy */ 336);
/* harmony import */ var _keywords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keywords */ 153);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor */ 147);
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./source */ 35);







var IDE = function () {
  function IDE(_ref) {
    var zpyCode = _ref.zpyCode,
        pyCode = _ref.pyCode;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IDE);

    this.zpyCode = zpyCode;
    this.pyCode = pyCode;
    this.zpy = new _zpy__WEBPACK_IMPORTED_MODULE_2__.ZpyCompile(_keywords__WEBPACK_IMPORTED_MODULE_3__.keywords);

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
      this.outputEditor.innerText = code;
    }
  }, {
    key: "zpyRun",
    value: function zpyRun() {
      var _this = this;

      this.zpyCompile();
      this.zpy.exec(this.pyCode).then(function (response) {
        _this.output(response['data']);
      })["catch"](function (err) {
        _this.output("语法错误");
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
        _this2.output("语法错误");
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

var zpyCode = _source__WEBPACK_IMPORTED_MODULE_5__.source.example().codes[0]['source'];
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
  regexp: "`/(?:\\\\s)${key}(?=\\\\s)/gm`",
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
  regexp: "`/(?:\\\\s)${key}(?=\\\\(.*\\\\))/gm`",
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

/***/ 336:
/*!************************************!*\
  !*** ./src/views/editor/js/zpy.js ***!
  \************************************/
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

      function dispose(key, regexp) {
        var expression = String(eval(regexp));
        _utils_log__WEBPACK_IMPORTED_MODULE_4__.log.info(expression);
        return eval(expression);
      }

      if (type !== "zpy" && type !== "py") {
        throw new Error("Compile code should be one of zpy, py");
      }

      var _iterator = _createForOfIteratorHelper(_keywords__WEBPACK_IMPORTED_MODULE_6__.keywords),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var keyword = _step.value;

          for (var word in keyword.words) {
            if (type === "zpy") code = code.replace(dispose(word, keyword.regexp), keyword.words[word]);else if (type === "py") code = code.replace(dispose(keyword.words[word], keyword.regexp), word);
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
    key: "exec",
    value: function () {
      var _exec = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(code) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", axios({
                  method: 'post',
                  url: _utils_config__WEBPACK_IMPORTED_MODULE_5__.config.URL,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQU9sQyxJQUFQO0FBQ0g7QUExQkw7QUFBQTtBQUFBO0FBQUEsNktBNEJJLGlCQUFXQSxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFDV29DLEtBQUssQ0FBQztBQUNUQyxrQkFBQUEsTUFBTSxFQUFFLE1BREM7QUFFVEMsa0JBQUFBLEdBQUcsRUFBRWQscURBRkk7QUFHVGdCLGtCQUFBQSxJQUFJLEVBQUU7QUFDRiw0QkFBUXhDO0FBRE47QUFIRyxpQkFBRCxDQURoQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQTVCSjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96cHktaWRlLy4vc3JjL3ZpZXdzL2VkaXRvci9qcy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8venB5LWlkZS8uL3NyYy92aWV3cy9lZGl0b3IvanMvaWRlLmpzIiwid2VicGFjazovL3pweS1pZGUvLi9zcmMvdmlld3MvZWRpdG9yL2pzL2tleXdvcmRzLmpzIiwid2VicGFjazovL3pweS1pZGUvLi9zcmMvdmlld3MvZWRpdG9yL2pzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly96cHktaWRlLy4vc3JjL3ZpZXdzL2VkaXRvci9qcy96cHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHpweUVkaXRvciA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwienB5LWNvZGVcIiksIHtcbiAgICBtb2RlOiAnenB5JywgLy8g6K+t6KiA5qih5byPXG4gICAgdGhlbWU6IFwic29sYXJpemVkXCIsIC8vIOS4u+mimFxuICAgIC8vIGtleU1hcDogXCJzdWJsaW1lXCIsIC8vIOW/q+mUrumUrumjjuagvFxuICAgIGxpbmVOdW1iZXJzOiB0cnVlLCAvLyDmmL7npLrooYzlj7dcbiAgICBzbWFydEluZGVudDogdHJ1ZSwgLy8g5pm66IO957yp6L+bXG4gICAgaW5kZW50VW5pdDogNCwgLy8g5pm66IO957yp6L+b5Y2V5L2N5Li6NOS4quepuuagvOmVv+W6plxuICAgIGluZGVudFdpdGhUYWJzOiB0cnVlLCAvLyDkvb/nlKjliLbooajnrKbov5vooYzmmbrog73nvKnov5tcbiAgICBsaW5lV3JhcHBpbmc6IHRydWUsIC8vIFxuICAgIC8vIOWcqOihjOanveS4rea3u+WKoOihjOWPt+aYvuekuuWZqOOAgeaKmOWPoOWZqOOAgeivreazleajgOa1i+WZqFxuICAgIGd1dHRlcnM6IFtcIkNvZGVNaXJyb3ItbGluZW51bWJlcnNcIiwgXCJDb2RlTWlycm9yLWZvbGRndXR0ZXJcIiwgXCJDb2RlTWlycm9yLWxpbnQtbWFya2Vyc1wiXSwgXG4gICAgZm9sZEd1dHRlcjogdHJ1ZSwgLy8g5ZCv55So6KGM5qe95Lit55qE5Luj56CB5oqY5Y+gXG4gICAgYXV0b2ZvY3VzOiB0cnVlLCAvLyDoh6rliqjogZrnhKZcbiAgICBtYXRjaEJyYWNrZXRzOiB0cnVlLCAvLyDljLnphY3nu5PmnZ/nrKblj7fvvIzmr5TlpoJcIl3jgIF9XCJcbiAgICBhdXRvQ2xvc2VCcmFja2V0czogdHJ1ZSwgLy8g6Ieq5Yqo6Zet5ZCI56ym5Y+3XG4gICAgc3R5bGVBY3RpdmVMaW5lOiB0cnVlLCAvLyDmmL7npLrpgInkuK3ooYznmoTmoLflvI9cbn0pO1xuXG5sZXQgcHlFZGl0b3IgPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB5dGhvbi1jb2RlXCIpLCB7XG4gICAgbW9kZTogJ3RleHQveC1weXRob24nLCAvLyDor63oqIDmqKHlvI9cbiAgICB0aGVtZTogXCJzb2xhcml6ZWRcIiwgLy8g5Li76aKYXG4gICAgLy8ga2V5TWFwOiBcInN1YmxpbWVcIiwgLy8g5b+r6ZSu6ZSu6aOO5qC8XG4gICAgbGluZU51bWJlcnM6IHRydWUsIC8vIOaYvuekuuihjOWPt1xuICAgIHNtYXJ0SW5kZW50OiB0cnVlLCAvLyDmmbrog73nvKnov5tcbiAgICBpbmRlbnRVbml0OiA0LCAvLyDmmbrog73nvKnov5vljZXkvY3kuLo05Liq56m65qC86ZW/5bqmXG4gICAgaW5kZW50V2l0aFRhYnM6IHRydWUsIC8vIOS9v+eUqOWItuihqOespui/m+ihjOaZuuiDvee8qei/m1xuICAgIGxpbmVXcmFwcGluZzogdHJ1ZSwgLy8gXG4gICAgLy8g5Zyo6KGM5qe95Lit5re75Yqg6KGM5Y+35pi+56S65Zmo44CB5oqY5Y+g5Zmo44CB6K+t5rOV5qOA5rWL5ZmoXG4gICAgZ3V0dGVyczogW1wiQ29kZU1pcnJvci1saW5lbnVtYmVyc1wiLCBcIkNvZGVNaXJyb3ItZm9sZGd1dHRlclwiLCBcIkNvZGVNaXJyb3ItbGludC1tYXJrZXJzXCJdLCBcbiAgICBmb2xkR3V0dGVyOiB0cnVlLCAvLyDlkK/nlKjooYzmp73kuK3nmoTku6PnoIHmipjlj6BcbiAgICBhdXRvZm9jdXM6IHRydWUsIC8vIOiHquWKqOiBmueEplxuICAgIG1hdGNoQnJhY2tldHM6IHRydWUsIC8vIOWMuemFjee7k+adn+espuWPt++8jOavlOWmglwiXeOAgX1cIlxuICAgIGF1dG9DbG9zZUJyYWNrZXRzOiB0cnVlLCAvLyDoh6rliqjpl63lkIjnrKblj7dcbiAgICBzdHlsZUFjdGl2ZUxpbmU6IHRydWUsIC8vIOaYvuekuumAieS4reihjOeahOagt+W8j1xufSk7XG5cbnpweUVkaXRvci5zZXRTaXplKG51bGwsIFwiNjN2aFwiKTtcbnB5RWRpdG9yLnNldFNpemUobnVsbCwgXCI2M3ZoXCIpO1xuXG5leHBvcnQge3pweUVkaXRvciwgcHlFZGl0b3J9IiwiaW1wb3J0IHtacHlDb21waWxlfSBmcm9tIFwiLi96cHlcIlxuaW1wb3J0IHtrZXl3b3Jkc30gZnJvbSBcIi4va2V5d29yZHNcIlxuaW1wb3J0IHt6cHlFZGl0b3IsIHB5RWRpdG9yfSBmcm9tIFwiLi9lZGl0b3JcIlxuaW1wb3J0IHtzb3VyY2V9IGZyb20gXCIuL3NvdXJjZVwiO1xuXG5jbGFzcyBJREUge1xuICAgIGNvbnN0cnVjdG9yKHt6cHlDb2RlLCBweUNvZGV9KSB7XG4gICAgICAgIHRoaXMuenB5Q29kZSA9IHpweUNvZGVcbiAgICAgICAgdGhpcy5weUNvZGUgPSBweUNvZGVcbiAgICAgICAgdGhpcy56cHkgPSBuZXcgWnB5Q29tcGlsZShrZXl3b3JkcylcbiAgICAgICAgaWYgKHB5Q29kZSkge1xuICAgICAgICAgICAgcHlFZGl0b3Iuc2V0T3B0aW9uKFwidmFsdWVcIiwgdGhpcy5weUNvZGUpXG4gICAgICAgICAgICB0aGlzLnB5Q29tcGlsZSgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHpweUNvZGUpIHtcbiAgICAgICAgICAgIHpweUVkaXRvci5zZXRPcHRpb24oXCJ2YWx1ZVwiLCB0aGlzLnpweUNvZGUpXG4gICAgICAgICAgICB0aGlzLnpweUNvbXBpbGUoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub3V0cHV0RWRpdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXQtY29kZVwiKVxuICAgIH1cblxuICAgIG91dHB1dChjb2RlKSB7XG4gICAgICAgIHRoaXMub3V0cHV0RWRpdG9yLmlubmVyVGV4dCA9IGNvZGVcbiAgICB9XG5cbiAgICB6cHlSdW4oKSB7XG4gICAgICAgIHRoaXMuenB5Q29tcGlsZSgpXG4gICAgICAgIHRoaXMuenB5LmV4ZWModGhpcy5weUNvZGUpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQocmVzcG9uc2VbJ2RhdGEnXSlcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0KFwi6K+t5rOV6ZSZ6K+vXCIpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHlSdW4oKSB7XG4gICAgICAgIHRoaXMucHlDb21waWxlKClcbiAgICAgICAgdGhpcy56cHkuZXhlYyh0aGlzLnB5Q29kZSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dChyZXNwb25zZVsnZGF0YSddKVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQoXCLor63ms5XplJnor69cIilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB6cHlDb21waWxlKCkge1xuICAgICAgICB0aGlzLnpweUNvZGUgPSB6cHlFZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICAgICAgdGhpcy5weUNvZGUgPSB0aGlzLnpweS5jb21waWxlKHRoaXMuenB5Q29kZSwgJ3pweScpXG4gICAgICAgIHB5RWRpdG9yLnNldE9wdGlvbihcInZhbHVlXCIsIHRoaXMucHlDb2RlKVxuICAgIH1cblxuICAgIHB5Q29tcGlsZSgpIHtcbiAgICAgICAgdGhpcy5weUNvZGUgPSBweUVkaXRvci5nZXRWYWx1ZSgpO1xuICAgICAgICB0aGlzLnpweUNvZGUgPSB0aGlzLnpweS5jb21waWxlKHRoaXMucHlDb2RlLCAncHknKVxuICAgICAgICB6cHlFZGl0b3Iuc2V0T3B0aW9uKFwidmFsdWVcIiwgdGhpcy56cHlDb2RlKVxuICAgIH1cbn1cblxubGV0IHpweUNvZGUgPSBzb3VyY2UuZXhhbXBsZSgpLmNvZGVzWzBdWydzb3VyY2UnXVxubGV0IGlkZSA9IG5ldyBJREUoe3pweUNvZGV9KVxuXG5leHBvcnQge0lERSwgaWRlfSIsImNvbnN0IHJlc2VydmVkV29yZHMgPSB7XG4gICAgcmVnZXhwOiBcImAvKD86XFxcXFxcXFxzKSR7a2V5fSg/PVxcXFxcXFxccykvZ21gXCIsXG4gICAgd29yZHM6IHtcbiAgICAgICAgXCLlh73mlbBcIjogXCJkZWZcIixcbiAgICAgICAgXCLliKDpmaRcIjogXCJkZWxcIixcbiAgICAgICAgXCLot7Pov4dcIjogXCJwYXNzXCIsXG4gICAgICAgIFwi57uI5q2iXCI6IFwiYnJlYWtcIixcbiAgICAgICAgXCLnu6fnu61cIjogXCJjb250aW51ZVwiLFxuICAgICAgICBcIui/lOWbnlwiOiBcInJldHVyblwiLFxuICAgICAgICBcIuS7jlwiOiBcImZyb21cIixcbiAgICAgICAgXCLmipvlh7pcIjogXCJyYWlzZVwiLFxuICAgICAgICBcIueUn+aIkFwiOiBcInlpZWxkXCIsXG4gICAgICAgIFwi5a+85YWlXCI6IFwiaW1wb3J0XCIsXG4gICAgICAgIFwi5YWo5bGAXCI6IFwiZ2xvYmFsXCIsXG4gICAgICAgIFwi6Z2e5bGA6YOoXCI6IFwibm9ubG9jYWxcIixcbiAgICAgICAgXCLmlq3oqIBcIjogXCJhc3NlcnRcIixcbiAgICAgICAgXCLlpoLmnpxcIjogXCJpZlwiLFxuICAgICAgICBcIuaIluWmglwiOiBcImVsaWZcIixcbiAgICAgICAgXCLlkKbliJlcIjogXCJlbHNlXCIsXG4gICAgICAgIFwi5b2TXCI6IFwid2hpbGVcIixcbiAgICAgICAgXCLlr7nkuo5cIjogXCJmb3JcIixcbiAgICAgICAgXCLlsJ3or5VcIjogXCJ0cnlcIixcbiAgICAgICAgXCLmjZXojrdcIjogXCJleGNlcHRcIixcbiAgICAgICAgXCLmnIDlkI5cIjogXCJmaW5hbGx5XCIsXG4gICAgICAgIFwi5L2c5Li6XCI6IFwiYXNcIixcbiAgICAgICAgXCLpmo/nnYBcIjogXCJ3aXRoXCIsXG4gICAgICAgIFwi5Yy/5ZCNXCI6IFwibGFtYmRhXCIsXG4gICAgICAgIFwi5oiWXCI6IFwib3JcIixcbiAgICAgICAgXCLkuI5cIjogXCJhbmRcIixcbiAgICAgICAgXCLkuI1cIjogXCJub3RcIixcbiAgICAgICAgXCLlnKhcIjogXCJpblwiLFxuICAgICAgICBcIuepulwiOiBcIk5vbmVcIixcbiAgICAgICAgXCLlr7lcIjogXCJUcnVlXCIsXG4gICAgICAgIFwi6ZSZXCI6IFwiRmFsc2VcIixcbiAgICAgICAgXCLoh6rlt7FcIjogXCJzZWxmXCIsXG4gICAgICAgIFwi57G7XCI6IFwiY2xhc3NcIixcbiAgICAgICAgXCLlvILmraVcIjogXCJhc3luY1wiLFxuICAgICAgICBcIuetieW+hVwiOiBcImF3YWl0XCJcbiAgICB9XG59XG5cbmNvbnN0IGZ1bmN0aW9uV29yZHMgPSB7XG4gICAgcmVnZXhwOiBcImAvKD86XFxcXFxcXFxzKSR7a2V5fSg/PVxcXFxcXFxcKC4qXFxcXFxcXFwpKS9nbWBcIixcbiAgICB3b3Jkczoge1xuICAgICAgICBcIuesplwiOiBcImNoclwiLFxuICAgICAgICBcIuS6jOi/m+WItlwiOiBcImJpblwiLFxuICAgICAgICBcIuS4slwiOiBcInN0clwiLFxuICAgICAgICBcIuWFq+i/m+WItlwiOiBcIm9jdFwiLFxuICAgICAgICBcIuespuWAvFwiOiBcIm9yZFwiLFxuICAgICAgICBcIuWNgeWFrei/m+WItlwiOiBcImhleFwiLFxuICAgICAgICBcIuWFg+e7hFwiOiBcInR1cGxlXCIsXG4gICAgICAgIFwi6ZW/XCI6IFwibGVuXCIsXG4gICAgICAgIFwi6ZuG5ZCIXCI6IFwic2V0XCIsXG4gICAgICAgIFwi5YWo5Li655yfXCI6IFwiYWxsXCIsXG4gICAgICAgIFwi5a2X5YW4XCI6IFwiZGljdFwiLFxuICAgICAgICBcIuS7u+S4gOS4uuecn1wiOiBcImFueVwiLFxuICAgICAgICBcIuWIl+ihqFwiOiBcImxpc3RcIixcbiAgICAgICAgXCLov63ku6NcIjogXCJpdGVyXCIsXG4gICAgICAgIFwi5Ya757uT6ZuG5ZCIXCI6IFwiZnJvemVuc2V0XCIsXG4gICAgICAgIFwi6LaF57G7XCI6IFwic3VwZXJcIixcbiAgICAgICAgXCLliIfniYdcIjogXCJzbGljZVwiLFxuICAgICAgICBcIuS5mOaWuVwiOiBcInBvd1wiLFxuICAgICAgICBcIuWtl+iKglwiOiBcImJ5dGVzXCIsXG4gICAgICAgIFwi5o6S5bqPXCI6IFwic29ydFwiLFxuICAgICAgICBcIuWFqOWxgOWtl+WFuFwiOiBcImdsb2JhbHNcIixcbiAgICAgICAgXCLlrZfoioLmlbDnu4RcIjogXCJieXRlYXJyYXlcIixcbiAgICAgICAgXCLlsYDpg6jlrZflhbhcIjogXCJsb2NhbHNcIixcbiAgICAgICAgXCLlsZ7mgKdcIjogXCJwcm9wZXJ0eVwiLFxuICAgICAgICBcIuWvueixoVwiOiBcIm9iamVjdFwiLFxuICAgICAgICBcIuWIoOWxnuaAp1wiOiBcImRlbGF0dHJcIixcbiAgICAgICAgXCLlj5jph4/lrZflhbhcIjogXCJ2YXJzXCIsXG4gICAgICAgIFwi5Y+W5bGe5oCnXCI6IFwiZ2V0YXR0clwiLFxuICAgICAgICBcIuWPr+iwg+eUqFwiOiBcImNhbGxhYmxlXCIsXG4gICAgICAgIFwi5pyJ5bGe5oCnXCI6IFwiaGFzYXR0clwiLFxuICAgICAgICBcIuWGheWtmOinhuWbvlwiOiBcIm1lbW9yeXZpZXdcIixcbiAgICAgICAgXCLorr7lsZ7mgKdcIjogXCJzZXRhdHRyXCIsXG4gICAgICAgIFwi5ZOI5biMXCI6IFwiaGFzaFwiLFxuICAgICAgICBcIuWkjeaVsFwiOiBcImNvbXBsZXhcIixcbiAgICAgICAgXCLllYbkvZlcIjogXCJkaXZtb2RcIixcbiAgICAgICAgXCLmlbTmlbBcIjogXCJpbnRcIixcbiAgICAgICAgXCLor4TkvLBcIjogXCJldmFsXCIsXG4gICAgICAgIFwi5rWu54K55pWwXCI6IFwiZmxvYXRcIixcbiAgICAgICAgXCLojIPlm7RcIjogXCJyYW5nZVwiLFxuICAgICAgICBcIuW4g+WwlFwiOiBcImJvb2xcIixcbiAgICAgICAgXCLooajnpLpcIjogXCJyZXByXCIsXG4gICAgICAgIFwi6L6T5YWlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgXCLmiZPljIVcIjogXCJ6aXBcIixcbiAgICAgICAgXCLmiZPljbBcIjogXCJwcmludFwiLFxuICAgICAgICBcIuaJk+W8gFwiOiBcIm9wZW5cIixcbiAgICAgICAgXCLmiafooYxcIjogXCJleGVjXCIsXG4gICAgICAgIFwi57yW6K+RXCI6IFwiY29tcGlsZVwiLFxuICAgICAgICBcIuWPjei9rFwiOiBcInJldmVyc2VkXCIsXG4gICAgICAgIFwi5pig5bCEXCI6IFwibWFwXCIsXG4gICAgICAgIFwi5ZKMXCI6IFwic3VtXCIsXG4gICAgICAgIFwi5piv5a6e5L6LXCI6IFwiaXNpbnN0YW5jZVwiLFxuICAgICAgICBcIuaemuS4vlwiOiBcImVudW1lcmF0ZVwiLFxuICAgICAgICBcIuacgOWkp+WAvFwiOiBcIm1heFwiLFxuICAgICAgICBcIuaWreeCuVwiOiBcImJyZWFrcG9pbnRcIixcbiAgICAgICAgXCLmnIDlsI/lgLxcIjogXCJtaW5cIixcbiAgICAgICAgXCLmmK/lrZDnsbtcIjogXCJpc3N1YmNsYXNzXCIsXG4gICAgICAgIFwi57ud5a+55YC8XCI6IFwiYWJzXCIsXG4gICAgICAgIFwi5LiL5LiA5LiqXCI6IFwibmV4dFwiLFxuICAgICAgICBcIuexu+Wei1wiOiBcInR5cGVcIixcbiAgICAgICAgXCLnrZvpgIlcIjogXCJmaWx0ZXJcIixcbiAgICAgICAgXCLmoLzlvI/ljJZcIjogXCJmb3JtYXRcIixcbiAgICAgICAgXCLpnZnmgIHmlrnms5VcIjogXCJzdGF0aWNtZXRob2RcIixcbiAgICAgICAgXCLoiI3lhaVcIjogXCJyb3VuZFwiLFxuICAgICAgICBcIuexu+aWueazlVwiOiBcImNsYXNzbWV0aG9kXCIsXG4gICAgICAgIFwi6YCA5Ye6XCI6IFwiZXhpdFwiLFxuICAgICAgICBcIuW4ruWKqVwiOiBcImhlbHBcIixcbiAgICAgICAgXCJhc2NpaVwiOiBcImFzY2lpXCIsXG4gICAgICAgIFwiaWRcIjogXCJpZFwiLFxuICAgICAgICBcImRpclwiOiBcImRpclwiXG4gICAgfVxufVxuXG5jb25zdCBrZXl3b3JkcyA9IFtyZXNlcnZlZFdvcmRzLCBmdW5jdGlvbldvcmRzXVxuXG5leHBvcnQge2tleXdvcmRzfVxuIiwiY2xhc3MgU291cmNlIHtcbiAgICBleGFtcGxlKCkge1xuICAgICAgICBsZXQgZTAgPSB7XG4gICAgICAgICAgICBuYW1lOiAn5o+S5YWl5o6S5bqPJyxcbiAgICAgICAgICAgIHNvdXJjZTogYFxu5Ye95pWwIOaPkuWFpeaOkuW6jyjnm67moIfmlbDnu4QpOlxuICAgIOWvueS6jiDntKLlvJXkuIAg5ZyoIOiMg+WbtCgwLCDplb8o55uu5qCH5pWw57uEKSAtIDEpOlxuICAgICAgICDov5nkuKogPSDnm67moIfmlbDnu4Rb57Si5byV5LiAXVxuICAgICAgICDkuYvlkI4gPSDnm67moIfmlbDnu4Rb57Si5byV5LiAICsgMV1cbiAgICAgICAg5aaC5p6cIOi/meS4qiA+IOS5i+WQjjpcbiAgICAgICAgICAgIOabv+aNoiA9IOS5i+WQjlxuICAgICAgICAgICAg5a+55LqOIOe0ouW8leS6jCDlnKgg6IyD5Zu0KOe0ouW8leS4gCwgLTEsIC0xKTpcbiAgICAgICAgICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LqMKzFdID0g55uu5qCH5pWw57uEW+e0ouW8leS6jF1cbiAgICAgICAgICAgICAgICDlpoLmnpwg55uu5qCH5pWw57uEW+e0ouW8leS6jF0gPCDmm7/mjaI6XG4gICAgICAgICAgICAgICAgICAgIOe7iOatolxuICAgICAgICAgICAg55uu5qCH5pWw57uEW+e0ouW8leS6jCsxXSA9IOabv+aNolxuICAgICAgICAgICAg5b2TIOe0ouW8leS6jCA+PSAwIOS4jiDnm67moIfmlbDnu4Rb57Si5byV5LqMXSA+PSDmm7/mjaI6XG4gICAgICAgICAgICAgICAg55uu5qCH5pWw57uEW+e0ouW8leS6jCsxXSA9IOebruagh+aVsOe7hFvntKLlvJXkuoxdXG4gICAgICAgICAgICAgICAg57Si5byV5LqMIC09IDFcbiAgICAgICAgICAgIOebruagh+aVsOe7hFvntKLlvJXkuowrMV0gPSDmm7/mjaJcbiAgICDov5Tlm54g55uu5qCH5pWw57uEXG4gICAgXG7mtYvor5XmlbDnu4QgPSBbOTksIDE2LCA3NCwgNCwgMjEsIDQ1LCAxNywgNTYsIDkzLCA4NiwgMjMsIDQwLCA2MSwgMzEsIDMwLCA3OSwgNTYsIDYsIDg3LCA1Ml1cbuaJk+WNsCjmj5LlhaXmjpLluo8o5rWL6K+V5pWw57uEKSlcbmBcbiAgICAgICAgfVxuICAgICAgICBsZXQgZTEgPSB7XG4gICAgICAgICAgICBuYW1lOiAn5biM5bCU5o6S5bqPJyxcbiAgICAgICAgICAgIHNvdXJjZTogYFxu5Ye95pWwIOW4jOWwlOaOkuW6jyjnm67moIfmlbDnu4QpOlxuICAgIOatpemVvyA9IOmVvyjnm67moIfmlbDnu4QpXG4gICAg5b2TIOatpemVvyA+IDA6XG4gICAgICAgIOatpemVvyAvLz0gMlxuICAgICAgICDlr7nkuo4g57Si5byV5LiAIOWcqCDojIPlm7Qo5q2l6ZW/LCDplb8o55uu5qCH5pWw57uEKSk6XG4gICAgICAgICAgICDmm7/mjaIgPSDnm67moIfmlbDnu4Rb57Si5byV5LiAXVxuICAgICAgICAgICAg57Si5byV5LqMID0g57Si5byV5LiAXG4gICAgICAgICAgICDlvZMg57Si5byV5LqMID49IOatpemVvyDkuI4g5pu/5o2iIDwg55uu5qCH5pWw57uEW+e0ouW8leS6jC3mraXplb9dOlxuICAgICAgICAgICAgICAgIOebruagh+aVsOe7hFvntKLlvJXkuoxdID0g55uu5qCH5pWw57uEW+e0ouW8leS6jC3mraXplb9dXG4gICAgICAgICAgICAgICAg57Si5byV5LqMIC09IOatpemVv1xuICAgICAgICAgICAg55uu5qCH5pWw57uEW+e0ouW8leS6jF0gPSDmm7/mjaJcbiAgICDov5Tlm54g55uu5qCH5pWw57uEXG4gICAgXG7mtYvor5XmlbDnu4QgPSBbOTksIDE2LCA3NCwgNCwgMjEsIDQ1LCAxNywgNTYsIDkzLCA4NiwgMjMsIDQwLCA2MSwgMzEsIDMwLCA3OSwgNTYsIDYsIDg3LCA1Ml1cbuaJk+WNsCjluIzlsJTmjpLluo8o5rWL6K+V5pWw57uEKSlcbmBcbiAgICAgICAgfVxuICAgICAgICBsZXQgZTIgPSB7XG4gICAgICAgICAgICBuYW1lOiAn5YaS5rOh5o6S5bqPJyxcbiAgICAgICAgICAgIHNvdXJjZTogYFxu5Ye95pWwIOWGkuazoeaOkuW6jyjnm67moIfmlbDnu4QpOlxuICAgIOWvueS6jiDntKLlvJXkuIAg5ZyoIOiMg+WbtCjplb8o55uu5qCH5pWw57uEKSwgMCwgLTEpOlxuICAgICAgICDmoIforrAgPSDplJlcbiAgICAgICAg5a+55LqOIOe0ouW8leS6jCDlnKgg6IyD5Zu0KDAsIOe0ouW8leS4gCAtIDEpOlxuICAgICAgICAgICAg5aaC5p6cIOebruagh+aVsOe7hFvntKLlvJXkuoxdID4g55uu5qCH5pWw57uEW+e0ouW8leS6jCsxXTpcbiAgICAgICAgICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LqMXSwg55uu5qCH5pWw57uEW+e0ouW8leS6jCsxXSA9IOebruagh+aVsOe7hFvntKLlvJXkuowrMV0sIOebruagh+aVsOe7hFvntKLlvJXkuoxdXG4gICAgICAgIOWmguaenCDmoIforrA6XG4gICAgICAgICAgICDnu4jmraJcbiAgICDov5Tlm54g55uu5qCH5pWw57uEXG4gICAgXG7mtYvor5XmlbDnu4QgPSBbOTksIDE2LCA3NCwgNCwgMjEsIDQ1LCAxNywgNTYsIDkzLCA4NiwgMjMsIDQwLCA2MSwgMzEsIDMwLCA3OSwgNTYsIDYsIDg3LCA1Ml1cbuaJk+WNsCjlhpLms6HmjpLluo8o5rWL6K+V5pWw57uEKSlcbmBcbiAgICAgICAgfVxuICAgICAgICBsZXQgZTMgPSB7XG4gICAgICAgICAgICBuYW1lOiAn5b+r6YCf5o6S5bqPJyxcbiAgICAgICAgICAgIHNvdXJjZTogYFxu5Ye95pWwIOW/q+mAn+aOkuW6jyjnm67moIfmlbDnu4QpOlxuICAgIOWHveaVsCBf5b+r6YCf5o6S5bqPKOebruagh+aVsOe7hCwg5bem5oyH6ZKILCDlj7PmjIfpkogpOlxuICAgICAgICDmnqLovbQgPSDnm67moIfmlbDnu4Rb5bem5oyH6ZKIXVxuICAgICAgICDljp/lt6bmjIfpkoggPSDlt6bmjIfpkohcbiAgICAgICAg5Y6f5Y+z5oyH6ZKIID0g5Y+z5oyH6ZKIXG4gICAgICAgIOW3puaMh+mSiOepuuagh+iusCA9IDAgICMg5bem5oyH6ZKI5Li656m6XG4gICAgICAgIOW9kyDlt6bmjIfpkoggIT0g5Y+z5oyH6ZKIOlxuICAgICAgICAgICAg5aaC5p6cIOW3puaMh+mSiOepuuagh+iusDpcbiAgICAgICAgICAgICAgICDlpoLmnpwgKOebruagh+aVsOe7hFvlt6bmjIfpkohdID49IOaeoui9tCk6XG4gICAgICAgICAgICAgICAgICAgIOebruagh+aVsOe7hFvlj7PmjIfpkohdID0g55uu5qCH5pWw57uEW+W3puaMh+mSiF1cbiAgICAgICAgICAgICAgICAgICAg5bem5oyH6ZKI56m65qCH6K6wID0gMFxuICAgICAgICAgICAgICAgIOWQpuWImTpcbiAgICAgICAgICAgICAgICAgICAg5bem5oyH6ZKIICs9IDFcbiAgICAgICAgICAgIOWQpuWImTpcbiAgICAgICAgICAgICAgICDlpoLmnpwgKOebruagh+aVsOe7hFvlj7PmjIfpkohdIDwg5p6i6L20KTpcbiAgICAgICAgICAgICAgICAgICAg55uu5qCH5pWw57uEW+W3puaMh+mSiF0gPSDnm67moIfmlbDnu4Rb5Y+z5oyH6ZKIXVxuICAgICAgICAgICAgICAgICAgICDlt6bmjIfpkojnqbrmoIforrAgPSAxXG4gICAgICAgICAgICAgICAg5ZCm5YiZOlxuICAgICAgICAgICAgICAgICAgICDlj7PmjIfpkoggLT0gMVxuICAgICAgICDkuK3mjIfpkoggPSDlt6bmjIfpkohcbiAgICAgICAg55uu5qCH5pWw57uEW+S4reaMh+mSiF0gPSDmnqLovbRcbiAgICAgICAg5aaC5p6cIOWOn+W3puaMh+mSiCA8IOS4reaMh+mSiCAtIDE6XG4gICAgICAgICAgICBf5b+r6YCf5o6S5bqPKOebruagh+aVsOe7hCwg5Y6f5bem5oyH6ZKILCDkuK3mjIfpkoggLSAxKVxuICAgICAgICDlpoLmnpwg5Lit5oyH6ZKIKzEgPCDljp/lj7PmjIfpkog6XG4gICAgICAgICAgICBf5b+r6YCf5o6S5bqPKOebruagh+aVsOe7hCwg5Lit5oyH6ZKIKzEsIOWOn+WPs+aMh+mSiClcbiAgICDlt6bmjIfpkoggPSAwXG4gICAg5Y+z5oyH6ZKIID0g6ZW/KOebruagh+aVsOe7hCkgLSAxXG4gICAgX+W/q+mAn+aOkuW6jyjnm67moIfmlbDnu4QsIOW3puaMh+mSiCwg5Y+z5oyH6ZKIKVxuICAgIOi/lOWbniDnm67moIfmlbDnu4RcbiAgICBcbua1i+ivleaVsOe7hCA9IFs5OSwgMTYsIDc0LCA0LCAyMSwgNDUsIDE3LCA1NiwgOTMsIDg2LCAyMywgNDAsIDYxLCAzMSwgMzAsIDc5LCA1NiwgNiwgODcsIDUyXVxu5omT5Y2wKOW/q+mAn+aOkuW6jyjmtYvor5XmlbDnu4QpKVxuYFxuICAgICAgICB9XG4gICAgICAgIGxldCBlNCA9IHtcbiAgICAgICAgICAgIG5hbWU6ICfpgInmi6nmjpLluo8nLFxuICAgICAgICAgICAgc291cmNlOiBgXG7lh73mlbAg6YCJ5oup5o6S5bqPKOebruagh+aVsOe7hCk6XG4gICAg5a+55LqOIOe0ouW8leS4gCDlnKgg6IyD5Zu0KOmVvyjnm67moIfmlbDnu4QpKTpcbiAgICAgICAg5pyA5bCP5pWw5YC8ID0g57Si5byV5LiAXG4gICAgICAgIOWvueS6jiDntKLlvJXkuowg5ZyoIOiMg+WbtCjntKLlvJXkuIAsIOmVvyjnm67moIfmlbDnu4QpKTpcbiAgICAgICAgICAgIOWmguaenCDnm67moIfmlbDnu4Rb57Si5byV5LqMXSA8IOebruagh+aVsOe7hFvmnIDlsI/mlbDlgLxdOlxuICAgICAgICAgICAgICAgIOacgOWwj+aVsOWAvCA9IOe0ouW8leS6jFxuICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LiAXSwg55uu5qCH5pWw57uEW+acgOWwj+aVsOWAvF0gPSDnm67moIfmlbDnu4Rb5pyA5bCP5pWw5YC8XSwg55uu5qCH5pWw57uEW+e0ouW8leS4gF1cbiAgICDov5Tlm54g55uu5qCH5pWw57uEXG4gICAgXG7mtYvor5XmlbDnu4QgPSBbOTksIDE2LCA3NCwgNCwgMjEsIDQ1LCAxNywgNTYsIDkzLCA4NiwgMjMsIDQwLCA2MSwgMzEsIDMwLCA3OSwgNTYsIDYsIDg3LCA1Ml1cbuaJk+WNsCjpgInmi6nmjpLluo8o5rWL6K+V5pWw57uEKSlcbmBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICduYW1lJzogJ+S+i+WtkCcsXG4gICAgICAgICAgICAnaWQnOiAnZXhhbXBsZScsXG4gICAgICAgICAgICAnY29kZXMnOiBbZTAsIGUxLCBlMiwgZTMsIGU0XVxuICAgICAgICB9XG4gICAgfVxufVxuXG5sZXQgc291cmNlID0gbmV3IFNvdXJjZSgpXG5cbmV4cG9ydCB7c291cmNlfVxuXG4iLCJpbXBvcnQge2xvZ30gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2xvZ1wiO1xuaW1wb3J0IHtjb25maWd9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jb25maWdcIjtcbmltcG9ydCB7a2V5d29yZHN9IGZyb20gXCIuL2tleXdvcmRzXCI7XG5cbmV4cG9ydCBjbGFzcyBacHlDb21waWxlIHtcbiAgICBjb25zdHJ1Y3RvcihrZXl3b3Jkcykge1xuICAgICAgICB0aGlzLmtleXdvcmRzID0ga2V5d29yZHNcbiAgICAgICAgbG9nLmluZm8odGhpcy5rZXl3b3JkcylcbiAgICB9XG5cbiAgICBjb21waWxlKGNvZGUsIHR5cGUgPSBcInpweVwiKSB7XG5cbiAgICAgICAgZnVuY3Rpb24gZGlzcG9zZShrZXksIHJlZ2V4cCkge1xuICAgICAgICAgICAgbGV0IGV4cHJlc3Npb24gPSBTdHJpbmcoZXZhbChyZWdleHApKVxuICAgICAgICAgICAgbG9nLmluZm8oZXhwcmVzc2lvbilcbiAgICAgICAgICAgIHJldHVybiBldmFsKGV4cHJlc3Npb24pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSAhPT0gXCJ6cHlcIiAmJiB0eXBlICE9PSBcInB5XCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbXBpbGUgY29kZSBzaG91bGQgYmUgb25lIG9mIHpweSwgcHlcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGtleXdvcmQgb2Yga2V5d29yZHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHdvcmQgaW4ga2V5d29yZC53b3Jkcykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBcInpweVwiKSBjb2RlID0gY29kZS5yZXBsYWNlKGRpc3Bvc2Uod29yZCwga2V5d29yZC5yZWdleHApLCBrZXl3b3JkLndvcmRzW3dvcmRdKVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwicHlcIikgY29kZSA9IGNvZGUucmVwbGFjZShkaXNwb3NlKGtleXdvcmQud29yZHNbd29yZF0sIGtleXdvcmQucmVnZXhwKSwgd29yZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2RlXG4gICAgfVxuXG4gICAgYXN5bmMgZXhlYyhjb2RlKSB7XG4gICAgICAgIHJldHVybiBheGlvcyh7XG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIHVybDogY29uZmlnLlVSTCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAnY29kZSc6IGNvZGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsienB5RWRpdG9yIiwiQ29kZU1pcnJvciIsImZyb21UZXh0QXJlYSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb2RlIiwidGhlbWUiLCJsaW5lTnVtYmVycyIsInNtYXJ0SW5kZW50IiwiaW5kZW50VW5pdCIsImluZGVudFdpdGhUYWJzIiwibGluZVdyYXBwaW5nIiwiZ3V0dGVycyIsImZvbGRHdXR0ZXIiLCJhdXRvZm9jdXMiLCJtYXRjaEJyYWNrZXRzIiwiYXV0b0Nsb3NlQnJhY2tldHMiLCJzdHlsZUFjdGl2ZUxpbmUiLCJweUVkaXRvciIsInNldFNpemUiLCJacHlDb21waWxlIiwia2V5d29yZHMiLCJzb3VyY2UiLCJJREUiLCJ6cHlDb2RlIiwicHlDb2RlIiwienB5Iiwic2V0T3B0aW9uIiwicHlDb21waWxlIiwienB5Q29tcGlsZSIsIm91dHB1dEVkaXRvciIsImNvZGUiLCJpbm5lclRleHQiLCJleGVjIiwidGhlbiIsInJlc3BvbnNlIiwib3V0cHV0IiwiZXJyIiwiZ2V0VmFsdWUiLCJjb21waWxlIiwiZXhhbXBsZSIsImNvZGVzIiwiaWRlIiwicmVzZXJ2ZWRXb3JkcyIsInJlZ2V4cCIsIndvcmRzIiwiZnVuY3Rpb25Xb3JkcyIsIlNvdXJjZSIsImUwIiwibmFtZSIsImUxIiwiZTIiLCJlMyIsImU0IiwibG9nIiwiY29uZmlnIiwiaW5mbyIsInR5cGUiLCJkaXNwb3NlIiwia2V5IiwiZXhwcmVzc2lvbiIsIlN0cmluZyIsImV2YWwiLCJFcnJvciIsImtleXdvcmQiLCJ3b3JkIiwicmVwbGFjZSIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiVVJMIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=