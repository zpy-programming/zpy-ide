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
  regexp: "`/(?<=\\\\s)${key}(?=\\\\s)/gm`",
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
  regexp: "`/(?<=\\\\s)${key}(?=\\\\(.*\\\\))/gm`",
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
        _utils_log__WEBPACK_IMPORTED_MODULE_4__.log.info(eval(eval(regexp)));
        return eval(eval(regexp));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UDtBQUNIO0FBekJMO0FBQUE7QUFBQTtBQUFBLDZLQTJCSSxpQkFBV0EsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBQ1drQyxLQUFLLENBQUM7QUFDVEMsa0JBQUFBLE1BQU0sRUFBRSxNQURDO0FBRVRDLGtCQUFBQSxHQUFHLEVBQUVaLHFEQUZJO0FBR1RjLGtCQUFBQSxJQUFJLEVBQUU7QUFDRiw0QkFBUXRDO0FBRE47QUFIRyxpQkFBRCxDQURoQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQTNCSjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96cHktaWRlLy4vc3JjL3ZpZXdzL2VkaXRvci9qcy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8venB5LWlkZS8uL3NyYy92aWV3cy9lZGl0b3IvanMvaWRlLmpzIiwid2VicGFjazovL3pweS1pZGUvLi9zcmMvdmlld3MvZWRpdG9yL2pzL2tleXdvcmRzLmpzIiwid2VicGFjazovL3pweS1pZGUvLi9zcmMvdmlld3MvZWRpdG9yL2pzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly96cHktaWRlLy4vc3JjL3ZpZXdzL2VkaXRvci9qcy96cHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHpweUVkaXRvciA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwienB5LWNvZGVcIiksIHtcbiAgICBtb2RlOiAnenB5JywgLy8g6K+t6KiA5qih5byPXG4gICAgdGhlbWU6IFwic29sYXJpemVkXCIsIC8vIOS4u+mimFxuICAgIC8vIGtleU1hcDogXCJzdWJsaW1lXCIsIC8vIOW/q+mUrumUrumjjuagvFxuICAgIGxpbmVOdW1iZXJzOiB0cnVlLCAvLyDmmL7npLrooYzlj7dcbiAgICBzbWFydEluZGVudDogdHJ1ZSwgLy8g5pm66IO957yp6L+bXG4gICAgaW5kZW50VW5pdDogNCwgLy8g5pm66IO957yp6L+b5Y2V5L2N5Li6NOS4quepuuagvOmVv+W6plxuICAgIGluZGVudFdpdGhUYWJzOiB0cnVlLCAvLyDkvb/nlKjliLbooajnrKbov5vooYzmmbrog73nvKnov5tcbiAgICBsaW5lV3JhcHBpbmc6IHRydWUsIC8vIFxuICAgIC8vIOWcqOihjOanveS4rea3u+WKoOihjOWPt+aYvuekuuWZqOOAgeaKmOWPoOWZqOOAgeivreazleajgOa1i+WZqFxuICAgIGd1dHRlcnM6IFtcIkNvZGVNaXJyb3ItbGluZW51bWJlcnNcIiwgXCJDb2RlTWlycm9yLWZvbGRndXR0ZXJcIiwgXCJDb2RlTWlycm9yLWxpbnQtbWFya2Vyc1wiXSwgXG4gICAgZm9sZEd1dHRlcjogdHJ1ZSwgLy8g5ZCv55So6KGM5qe95Lit55qE5Luj56CB5oqY5Y+gXG4gICAgYXV0b2ZvY3VzOiB0cnVlLCAvLyDoh6rliqjogZrnhKZcbiAgICBtYXRjaEJyYWNrZXRzOiB0cnVlLCAvLyDljLnphY3nu5PmnZ/nrKblj7fvvIzmr5TlpoJcIl3jgIF9XCJcbiAgICBhdXRvQ2xvc2VCcmFja2V0czogdHJ1ZSwgLy8g6Ieq5Yqo6Zet5ZCI56ym5Y+3XG4gICAgc3R5bGVBY3RpdmVMaW5lOiB0cnVlLCAvLyDmmL7npLrpgInkuK3ooYznmoTmoLflvI9cbn0pO1xuXG5sZXQgcHlFZGl0b3IgPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB5dGhvbi1jb2RlXCIpLCB7XG4gICAgbW9kZTogJ3RleHQveC1weXRob24nLCAvLyDor63oqIDmqKHlvI9cbiAgICB0aGVtZTogXCJzb2xhcml6ZWRcIiwgLy8g5Li76aKYXG4gICAgLy8ga2V5TWFwOiBcInN1YmxpbWVcIiwgLy8g5b+r6ZSu6ZSu6aOO5qC8XG4gICAgbGluZU51bWJlcnM6IHRydWUsIC8vIOaYvuekuuihjOWPt1xuICAgIHNtYXJ0SW5kZW50OiB0cnVlLCAvLyDmmbrog73nvKnov5tcbiAgICBpbmRlbnRVbml0OiA0LCAvLyDmmbrog73nvKnov5vljZXkvY3kuLo05Liq56m65qC86ZW/5bqmXG4gICAgaW5kZW50V2l0aFRhYnM6IHRydWUsIC8vIOS9v+eUqOWItuihqOespui/m+ihjOaZuuiDvee8qei/m1xuICAgIGxpbmVXcmFwcGluZzogdHJ1ZSwgLy8gXG4gICAgLy8g5Zyo6KGM5qe95Lit5re75Yqg6KGM5Y+35pi+56S65Zmo44CB5oqY5Y+g5Zmo44CB6K+t5rOV5qOA5rWL5ZmoXG4gICAgZ3V0dGVyczogW1wiQ29kZU1pcnJvci1saW5lbnVtYmVyc1wiLCBcIkNvZGVNaXJyb3ItZm9sZGd1dHRlclwiLCBcIkNvZGVNaXJyb3ItbGludC1tYXJrZXJzXCJdLCBcbiAgICBmb2xkR3V0dGVyOiB0cnVlLCAvLyDlkK/nlKjooYzmp73kuK3nmoTku6PnoIHmipjlj6BcbiAgICBhdXRvZm9jdXM6IHRydWUsIC8vIOiHquWKqOiBmueEplxuICAgIG1hdGNoQnJhY2tldHM6IHRydWUsIC8vIOWMuemFjee7k+adn+espuWPt++8jOavlOWmglwiXeOAgX1cIlxuICAgIGF1dG9DbG9zZUJyYWNrZXRzOiB0cnVlLCAvLyDoh6rliqjpl63lkIjnrKblj7dcbiAgICBzdHlsZUFjdGl2ZUxpbmU6IHRydWUsIC8vIOaYvuekuumAieS4reihjOeahOagt+W8j1xufSk7XG5cbnpweUVkaXRvci5zZXRTaXplKG51bGwsIFwiNjN2aFwiKTtcbnB5RWRpdG9yLnNldFNpemUobnVsbCwgXCI2M3ZoXCIpO1xuXG5leHBvcnQge3pweUVkaXRvciwgcHlFZGl0b3J9IiwiaW1wb3J0IHtacHlDb21waWxlfSBmcm9tIFwiLi96cHlcIlxuaW1wb3J0IHtrZXl3b3Jkc30gZnJvbSBcIi4va2V5d29yZHNcIlxuaW1wb3J0IHt6cHlFZGl0b3IsIHB5RWRpdG9yfSBmcm9tIFwiLi9lZGl0b3JcIlxuaW1wb3J0IHtzb3VyY2V9IGZyb20gXCIuL3NvdXJjZVwiO1xuXG5jbGFzcyBJREUge1xuICAgIGNvbnN0cnVjdG9yKHt6cHlDb2RlLCBweUNvZGV9KSB7XG4gICAgICAgIHRoaXMuenB5Q29kZSA9IHpweUNvZGVcbiAgICAgICAgdGhpcy5weUNvZGUgPSBweUNvZGVcbiAgICAgICAgdGhpcy56cHkgPSBuZXcgWnB5Q29tcGlsZShrZXl3b3JkcylcbiAgICAgICAgaWYgKHB5Q29kZSkge1xuICAgICAgICAgICAgcHlFZGl0b3Iuc2V0T3B0aW9uKFwidmFsdWVcIiwgdGhpcy5weUNvZGUpXG4gICAgICAgICAgICB0aGlzLnB5Q29tcGlsZSgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHpweUNvZGUpIHtcbiAgICAgICAgICAgIHpweUVkaXRvci5zZXRPcHRpb24oXCJ2YWx1ZVwiLCB0aGlzLnpweUNvZGUpXG4gICAgICAgICAgICB0aGlzLnpweUNvbXBpbGUoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub3V0cHV0RWRpdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdXRwdXQtY29kZVwiKVxuICAgIH1cblxuICAgIG91dHB1dChjb2RlKSB7XG4gICAgICAgIHRoaXMub3V0cHV0RWRpdG9yLmlubmVyVGV4dCA9IGNvZGVcbiAgICB9XG5cbiAgICB6cHlSdW4oKSB7XG4gICAgICAgIHRoaXMuenB5Q29tcGlsZSgpXG4gICAgICAgIHRoaXMuenB5LmV4ZWModGhpcy5weUNvZGUpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQocmVzcG9uc2VbJ2RhdGEnXSlcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0KFwi6K+t5rOV6ZSZ6K+vXCIpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHlSdW4oKSB7XG4gICAgICAgIHRoaXMucHlDb21waWxlKClcbiAgICAgICAgdGhpcy56cHkuZXhlYyh0aGlzLnB5Q29kZSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dChyZXNwb25zZVsnZGF0YSddKVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQoXCLor63ms5XplJnor69cIilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB6cHlDb21waWxlKCkge1xuICAgICAgICB0aGlzLnpweUNvZGUgPSB6cHlFZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICAgICAgdGhpcy5weUNvZGUgPSB0aGlzLnpweS5jb21waWxlKHRoaXMuenB5Q29kZSwgJ3pweScpXG4gICAgICAgIHB5RWRpdG9yLnNldE9wdGlvbihcInZhbHVlXCIsIHRoaXMucHlDb2RlKVxuICAgIH1cblxuICAgIHB5Q29tcGlsZSgpIHtcbiAgICAgICAgdGhpcy5weUNvZGUgPSBweUVkaXRvci5nZXRWYWx1ZSgpO1xuICAgICAgICB0aGlzLnpweUNvZGUgPSB0aGlzLnpweS5jb21waWxlKHRoaXMucHlDb2RlLCAncHknKVxuICAgICAgICB6cHlFZGl0b3Iuc2V0T3B0aW9uKFwidmFsdWVcIiwgdGhpcy56cHlDb2RlKVxuICAgIH1cbn1cblxubGV0IHpweUNvZGUgPSBzb3VyY2UuZXhhbXBsZSgpLmNvZGVzWzBdWydzb3VyY2UnXVxubGV0IGlkZSA9IG5ldyBJREUoe3pweUNvZGV9KVxuXG5leHBvcnQge0lERSwgaWRlfSIsImNvbnN0IHJlc2VydmVkV29yZHMgPSB7XG4gICAgcmVnZXhwOiBcImAvKD88PVxcXFxcXFxccykke2tleX0oPz1cXFxcXFxcXHMpL2dtYFwiLFxuICAgIHdvcmRzOiB7XG4gICAgICAgIFwi5Ye95pWwXCI6IFwiZGVmXCIsXG4gICAgICAgIFwi5Yig6ZmkXCI6IFwiZGVsXCIsXG4gICAgICAgIFwi6Lez6L+HXCI6IFwicGFzc1wiLFxuICAgICAgICBcIue7iOatolwiOiBcImJyZWFrXCIsXG4gICAgICAgIFwi57un57utXCI6IFwiY29udGludWVcIixcbiAgICAgICAgXCLov5Tlm55cIjogXCJyZXR1cm5cIixcbiAgICAgICAgXCLku45cIjogXCJmcm9tXCIsXG4gICAgICAgIFwi5oqb5Ye6XCI6IFwicmFpc2VcIixcbiAgICAgICAgXCLnlJ/miJBcIjogXCJ5aWVsZFwiLFxuICAgICAgICBcIuWvvOWFpVwiOiBcImltcG9ydFwiLFxuICAgICAgICBcIuWFqOWxgFwiOiBcImdsb2JhbFwiLFxuICAgICAgICBcIumdnuWxgOmDqFwiOiBcIm5vbmxvY2FsXCIsXG4gICAgICAgIFwi5pat6KiAXCI6IFwiYXNzZXJ0XCIsXG4gICAgICAgIFwi5aaC5p6cXCI6IFwiaWZcIixcbiAgICAgICAgXCLmiJblpoJcIjogXCJlbGlmXCIsXG4gICAgICAgIFwi5ZCm5YiZXCI6IFwiZWxzZVwiLFxuICAgICAgICBcIuW9k1wiOiBcIndoaWxlXCIsXG4gICAgICAgIFwi5a+55LqOXCI6IFwiZm9yXCIsXG4gICAgICAgIFwi5bCd6K+VXCI6IFwidHJ5XCIsXG4gICAgICAgIFwi5o2V6I63XCI6IFwiZXhjZXB0XCIsXG4gICAgICAgIFwi5pyA5ZCOXCI6IFwiZmluYWxseVwiLFxuICAgICAgICBcIuS9nOS4ulwiOiBcImFzXCIsXG4gICAgICAgIFwi6ZqP552AXCI6IFwid2l0aFwiLFxuICAgICAgICBcIuWMv+WQjVwiOiBcImxhbWJkYVwiLFxuICAgICAgICBcIuaIllwiOiBcIm9yXCIsXG4gICAgICAgIFwi5LiOXCI6IFwiYW5kXCIsXG4gICAgICAgIFwi5LiNXCI6IFwibm90XCIsXG4gICAgICAgIFwi5ZyoXCI6IFwiaW5cIixcbiAgICAgICAgXCLnqbpcIjogXCJOb25lXCIsXG4gICAgICAgIFwi5a+5XCI6IFwiVHJ1ZVwiLFxuICAgICAgICBcIumUmVwiOiBcIkZhbHNlXCIsXG4gICAgICAgIFwi6Ieq5bexXCI6IFwic2VsZlwiLFxuICAgICAgICBcIuexu1wiOiBcImNsYXNzXCIsXG4gICAgICAgIFwi5byC5q2lXCI6IFwiYXN5bmNcIixcbiAgICAgICAgXCLnrYnlvoVcIjogXCJhd2FpdFwiXG4gICAgfVxufVxuXG5jb25zdCBmdW5jdGlvbldvcmRzID0ge1xuICAgIHJlZ2V4cDogXCJgLyg/PD1cXFxcXFxcXHMpJHtrZXl9KD89XFxcXFxcXFwoLipcXFxcXFxcXCkpL2dtYFwiLFxuICAgIHdvcmRzOiB7XG4gICAgICAgIFwi56ymXCI6IFwiY2hyXCIsXG4gICAgICAgIFwi5LqM6L+b5Yi2XCI6IFwiYmluXCIsXG4gICAgICAgIFwi5LiyXCI6IFwic3RyXCIsXG4gICAgICAgIFwi5YWr6L+b5Yi2XCI6IFwib2N0XCIsXG4gICAgICAgIFwi56ym5YC8XCI6IFwib3JkXCIsXG4gICAgICAgIFwi5Y2B5YWt6L+b5Yi2XCI6IFwiaGV4XCIsXG4gICAgICAgIFwi5YWD57uEXCI6IFwidHVwbGVcIixcbiAgICAgICAgXCLplb9cIjogXCJsZW5cIixcbiAgICAgICAgXCLpm4blkIhcIjogXCJzZXRcIixcbiAgICAgICAgXCLlhajkuLrnnJ9cIjogXCJhbGxcIixcbiAgICAgICAgXCLlrZflhbhcIjogXCJkaWN0XCIsXG4gICAgICAgIFwi5Lu75LiA5Li655yfXCI6IFwiYW55XCIsXG4gICAgICAgIFwi5YiX6KGoXCI6IFwibGlzdFwiLFxuICAgICAgICBcIui/reS7o1wiOiBcIml0ZXJcIixcbiAgICAgICAgXCLlhrvnu5Ppm4blkIhcIjogXCJmcm96ZW5zZXRcIixcbiAgICAgICAgXCLotoXnsbtcIjogXCJzdXBlclwiLFxuICAgICAgICBcIuWIh+eJh1wiOiBcInNsaWNlXCIsXG4gICAgICAgIFwi5LmY5pa5XCI6IFwicG93XCIsXG4gICAgICAgIFwi5a2X6IqCXCI6IFwiYnl0ZXNcIixcbiAgICAgICAgXCLmjpLluo9cIjogXCJzb3J0XCIsXG4gICAgICAgIFwi5YWo5bGA5a2X5YW4XCI6IFwiZ2xvYmFsc1wiLFxuICAgICAgICBcIuWtl+iKguaVsOe7hFwiOiBcImJ5dGVhcnJheVwiLFxuICAgICAgICBcIuWxgOmDqOWtl+WFuFwiOiBcImxvY2Fsc1wiLFxuICAgICAgICBcIuWxnuaAp1wiOiBcInByb3BlcnR5XCIsXG4gICAgICAgIFwi5a+56LGhXCI6IFwib2JqZWN0XCIsXG4gICAgICAgIFwi5Yig5bGe5oCnXCI6IFwiZGVsYXR0clwiLFxuICAgICAgICBcIuWPmOmHj+Wtl+WFuFwiOiBcInZhcnNcIixcbiAgICAgICAgXCLlj5blsZ7mgKdcIjogXCJnZXRhdHRyXCIsXG4gICAgICAgIFwi5Y+v6LCD55SoXCI6IFwiY2FsbGFibGVcIixcbiAgICAgICAgXCLmnInlsZ7mgKdcIjogXCJoYXNhdHRyXCIsXG4gICAgICAgIFwi5YaF5a2Y6KeG5Zu+XCI6IFwibWVtb3J5dmlld1wiLFxuICAgICAgICBcIuiuvuWxnuaAp1wiOiBcInNldGF0dHJcIixcbiAgICAgICAgXCLlk4jluIxcIjogXCJoYXNoXCIsXG4gICAgICAgIFwi5aSN5pWwXCI6IFwiY29tcGxleFwiLFxuICAgICAgICBcIuWVhuS9mVwiOiBcImRpdm1vZFwiLFxuICAgICAgICBcIuaVtOaVsFwiOiBcImludFwiLFxuICAgICAgICBcIuivhOS8sFwiOiBcImV2YWxcIixcbiAgICAgICAgXCLmta7ngrnmlbBcIjogXCJmbG9hdFwiLFxuICAgICAgICBcIuiMg+WbtFwiOiBcInJhbmdlXCIsXG4gICAgICAgIFwi5biD5bCUXCI6IFwiYm9vbFwiLFxuICAgICAgICBcIuihqOekulwiOiBcInJlcHJcIixcbiAgICAgICAgXCLovpPlhaVcIjogXCJpbnB1dFwiLFxuICAgICAgICBcIuaJk+WMhVwiOiBcInppcFwiLFxuICAgICAgICBcIuaJk+WNsFwiOiBcInByaW50XCIsXG4gICAgICAgIFwi5omT5byAXCI6IFwib3BlblwiLFxuICAgICAgICBcIuaJp+ihjFwiOiBcImV4ZWNcIixcbiAgICAgICAgXCLnvJbor5FcIjogXCJjb21waWxlXCIsXG4gICAgICAgIFwi5Y+N6L2sXCI6IFwicmV2ZXJzZWRcIixcbiAgICAgICAgXCLmmKDlsIRcIjogXCJtYXBcIixcbiAgICAgICAgXCLlkoxcIjogXCJzdW1cIixcbiAgICAgICAgXCLmmK/lrp7kvotcIjogXCJpc2luc3RhbmNlXCIsXG4gICAgICAgIFwi5p6a5Li+XCI6IFwiZW51bWVyYXRlXCIsXG4gICAgICAgIFwi5pyA5aSn5YC8XCI6IFwibWF4XCIsXG4gICAgICAgIFwi5pat54K5XCI6IFwiYnJlYWtwb2ludFwiLFxuICAgICAgICBcIuacgOWwj+WAvFwiOiBcIm1pblwiLFxuICAgICAgICBcIuaYr+WtkOexu1wiOiBcImlzc3ViY2xhc3NcIixcbiAgICAgICAgXCLnu53lr7nlgLxcIjogXCJhYnNcIixcbiAgICAgICAgXCLkuIvkuIDkuKpcIjogXCJuZXh0XCIsXG4gICAgICAgIFwi57G75Z6LXCI6IFwidHlwZVwiLFxuICAgICAgICBcIuetm+mAiVwiOiBcImZpbHRlclwiLFxuICAgICAgICBcIuagvOW8j+WMllwiOiBcImZvcm1hdFwiLFxuICAgICAgICBcIumdmeaAgeaWueazlVwiOiBcInN0YXRpY21ldGhvZFwiLFxuICAgICAgICBcIuiIjeWFpVwiOiBcInJvdW5kXCIsXG4gICAgICAgIFwi57G75pa55rOVXCI6IFwiY2xhc3NtZXRob2RcIixcbiAgICAgICAgXCLpgIDlh7pcIjogXCJleGl0XCIsXG4gICAgICAgIFwi5biu5YqpXCI6IFwiaGVscFwiLFxuICAgICAgICBcImFzY2lpXCI6IFwiYXNjaWlcIixcbiAgICAgICAgXCJpZFwiOiBcImlkXCIsXG4gICAgICAgIFwiZGlyXCI6IFwiZGlyXCJcbiAgICB9XG59XG5cbmNvbnN0IGtleXdvcmRzID0gW3Jlc2VydmVkV29yZHMsIGZ1bmN0aW9uV29yZHNdXG5cbmV4cG9ydCB7a2V5d29yZHN9XG4iLCJjbGFzcyBTb3VyY2Uge1xuICAgIGV4YW1wbGUoKSB7XG4gICAgICAgIGxldCBlMCA9IHtcbiAgICAgICAgICAgIG5hbWU6ICfmj5LlhaXmjpLluo8nLFxuICAgICAgICAgICAgc291cmNlOiBgXG7lh73mlbAg5o+S5YWl5o6S5bqPKOebruagh+aVsOe7hCk6XG4gICAg5a+55LqOIOe0ouW8leS4gCDlnKgg6IyD5Zu0KDAsIOmVvyjnm67moIfmlbDnu4QpIC0gMSk6XG4gICAgICAgIOi/meS4qiA9IOebruagh+aVsOe7hFvntKLlvJXkuIBdXG4gICAgICAgIOS5i+WQjiA9IOebruagh+aVsOe7hFvntKLlvJXkuIAgKyAxXVxuICAgICAgICDlpoLmnpwg6L+Z5LiqID4g5LmL5ZCOOlxuICAgICAgICAgICAg5pu/5o2iID0g5LmL5ZCOXG4gICAgICAgICAgICDlr7nkuo4g57Si5byV5LqMIOWcqCDojIPlm7Qo57Si5byV5LiALCAtMSwgLTEpOlxuICAgICAgICAgICAgICAgIOebruagh+aVsOe7hFvntKLlvJXkuowrMV0gPSDnm67moIfmlbDnu4Rb57Si5byV5LqMXVxuICAgICAgICAgICAgICAgIOWmguaenCDnm67moIfmlbDnu4Rb57Si5byV5LqMXSA8IOabv+aNojpcbiAgICAgICAgICAgICAgICAgICAg57uI5q2iXG4gICAgICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LqMKzFdID0g5pu/5o2iXG4gICAgICAgICAgICDlvZMg57Si5byV5LqMID49IDAg5LiOIOebruagh+aVsOe7hFvntKLlvJXkuoxdID49IOabv+aNojpcbiAgICAgICAgICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LqMKzFdID0g55uu5qCH5pWw57uEW+e0ouW8leS6jF1cbiAgICAgICAgICAgICAgICDntKLlvJXkuowgLT0gMVxuICAgICAgICAgICAg55uu5qCH5pWw57uEW+e0ouW8leS6jCsxXSA9IOabv+aNolxuICAgIOi/lOWbniDnm67moIfmlbDnu4RcbiAgICBcbua1i+ivleaVsOe7hCA9IFs5OSwgMTYsIDc0LCA0LCAyMSwgNDUsIDE3LCA1NiwgOTMsIDg2LCAyMywgNDAsIDYxLCAzMSwgMzAsIDc5LCA1NiwgNiwgODcsIDUyXVxu5omT5Y2wKOaPkuWFpeaOkuW6jyjmtYvor5XmlbDnu4QpKVxuYFxuICAgICAgICB9XG4gICAgICAgIGxldCBlMSA9IHtcbiAgICAgICAgICAgIG5hbWU6ICfluIzlsJTmjpLluo8nLFxuICAgICAgICAgICAgc291cmNlOiBgXG7lh73mlbAg5biM5bCU5o6S5bqPKOebruagh+aVsOe7hCk6XG4gICAg5q2l6ZW/ID0g6ZW/KOebruagh+aVsOe7hClcbiAgICDlvZMg5q2l6ZW/ID4gMDpcbiAgICAgICAg5q2l6ZW/IC8vPSAyXG4gICAgICAgIOWvueS6jiDntKLlvJXkuIAg5ZyoIOiMg+WbtCjmraXplb8sIOmVvyjnm67moIfmlbDnu4QpKTpcbiAgICAgICAgICAgIOabv+aNoiA9IOebruagh+aVsOe7hFvntKLlvJXkuIBdXG4gICAgICAgICAgICDntKLlvJXkuowgPSDntKLlvJXkuIBcbiAgICAgICAgICAgIOW9kyDntKLlvJXkuowgPj0g5q2l6ZW/IOS4jiDmm7/mjaIgPCDnm67moIfmlbDnu4Rb57Si5byV5LqMLeatpemVv106XG4gICAgICAgICAgICAgICAg55uu5qCH5pWw57uEW+e0ouW8leS6jF0gPSDnm67moIfmlbDnu4Rb57Si5byV5LqMLeatpemVv11cbiAgICAgICAgICAgICAgICDntKLlvJXkuowgLT0g5q2l6ZW/XG4gICAgICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LqMXSA9IOabv+aNolxuICAgIOi/lOWbniDnm67moIfmlbDnu4RcbiAgICBcbua1i+ivleaVsOe7hCA9IFs5OSwgMTYsIDc0LCA0LCAyMSwgNDUsIDE3LCA1NiwgOTMsIDg2LCAyMywgNDAsIDYxLCAzMSwgMzAsIDc5LCA1NiwgNiwgODcsIDUyXVxu5omT5Y2wKOW4jOWwlOaOkuW6jyjmtYvor5XmlbDnu4QpKVxuYFxuICAgICAgICB9XG4gICAgICAgIGxldCBlMiA9IHtcbiAgICAgICAgICAgIG5hbWU6ICflhpLms6HmjpLluo8nLFxuICAgICAgICAgICAgc291cmNlOiBgXG7lh73mlbAg5YaS5rOh5o6S5bqPKOebruagh+aVsOe7hCk6XG4gICAg5a+55LqOIOe0ouW8leS4gCDlnKgg6IyD5Zu0KOmVvyjnm67moIfmlbDnu4QpLCAwLCAtMSk6XG4gICAgICAgIOagh+iusCA9IOmUmVxuICAgICAgICDlr7nkuo4g57Si5byV5LqMIOWcqCDojIPlm7QoMCwg57Si5byV5LiAIC0gMSk6XG4gICAgICAgICAgICDlpoLmnpwg55uu5qCH5pWw57uEW+e0ouW8leS6jF0gPiDnm67moIfmlbDnu4Rb57Si5byV5LqMKzFdOlxuICAgICAgICAgICAgICAgIOebruagh+aVsOe7hFvntKLlvJXkuoxdLCDnm67moIfmlbDnu4Rb57Si5byV5LqMKzFdID0g55uu5qCH5pWw57uEW+e0ouW8leS6jCsxXSwg55uu5qCH5pWw57uEW+e0ouW8leS6jF1cbiAgICAgICAg5aaC5p6cIOagh+iusDpcbiAgICAgICAgICAgIOe7iOatolxuICAgIOi/lOWbniDnm67moIfmlbDnu4RcbiAgICBcbua1i+ivleaVsOe7hCA9IFs5OSwgMTYsIDc0LCA0LCAyMSwgNDUsIDE3LCA1NiwgOTMsIDg2LCAyMywgNDAsIDYxLCAzMSwgMzAsIDc5LCA1NiwgNiwgODcsIDUyXVxu5omT5Y2wKOWGkuazoeaOkuW6jyjmtYvor5XmlbDnu4QpKVxuYFxuICAgICAgICB9XG4gICAgICAgIGxldCBlMyA9IHtcbiAgICAgICAgICAgIG5hbWU6ICflv6vpgJ/mjpLluo8nLFxuICAgICAgICAgICAgc291cmNlOiBgXG7lh73mlbAg5b+r6YCf5o6S5bqPKOebruagh+aVsOe7hCk6XG4gICAg5Ye95pWwIF/lv6vpgJ/mjpLluo8o55uu5qCH5pWw57uELCDlt6bmjIfpkogsIOWPs+aMh+mSiCk6XG4gICAgICAgIOaeoui9tCA9IOebruagh+aVsOe7hFvlt6bmjIfpkohdXG4gICAgICAgIOWOn+W3puaMh+mSiCA9IOW3puaMh+mSiFxuICAgICAgICDljp/lj7PmjIfpkoggPSDlj7PmjIfpkohcbiAgICAgICAg5bem5oyH6ZKI56m65qCH6K6wID0gMCAgIyDlt6bmjIfpkojkuLrnqbpcbiAgICAgICAg5b2TIOW3puaMh+mSiCAhPSDlj7PmjIfpkog6XG4gICAgICAgICAgICDlpoLmnpwg5bem5oyH6ZKI56m65qCH6K6wOlxuICAgICAgICAgICAgICAgIOWmguaenCAo55uu5qCH5pWw57uEW+W3puaMh+mSiF0gPj0g5p6i6L20KTpcbiAgICAgICAgICAgICAgICAgICAg55uu5qCH5pWw57uEW+WPs+aMh+mSiF0gPSDnm67moIfmlbDnu4Rb5bem5oyH6ZKIXVxuICAgICAgICAgICAgICAgICAgICDlt6bmjIfpkojnqbrmoIforrAgPSAwXG4gICAgICAgICAgICAgICAg5ZCm5YiZOlxuICAgICAgICAgICAgICAgICAgICDlt6bmjIfpkoggKz0gMVxuICAgICAgICAgICAg5ZCm5YiZOlxuICAgICAgICAgICAgICAgIOWmguaenCAo55uu5qCH5pWw57uEW+WPs+aMh+mSiF0gPCDmnqLovbQpOlxuICAgICAgICAgICAgICAgICAgICDnm67moIfmlbDnu4Rb5bem5oyH6ZKIXSA9IOebruagh+aVsOe7hFvlj7PmjIfpkohdXG4gICAgICAgICAgICAgICAgICAgIOW3puaMh+mSiOepuuagh+iusCA9IDFcbiAgICAgICAgICAgICAgICDlkKbliJk6XG4gICAgICAgICAgICAgICAgICAgIOWPs+aMh+mSiCAtPSAxXG4gICAgICAgIOS4reaMh+mSiCA9IOW3puaMh+mSiFxuICAgICAgICDnm67moIfmlbDnu4Rb5Lit5oyH6ZKIXSA9IOaeoui9tFxuICAgICAgICDlpoLmnpwg5Y6f5bem5oyH6ZKIIDwg5Lit5oyH6ZKIIC0gMTpcbiAgICAgICAgICAgIF/lv6vpgJ/mjpLluo8o55uu5qCH5pWw57uELCDljp/lt6bmjIfpkogsIOS4reaMh+mSiCAtIDEpXG4gICAgICAgIOWmguaenCDkuK3mjIfpkogrMSA8IOWOn+WPs+aMh+mSiDpcbiAgICAgICAgICAgIF/lv6vpgJ/mjpLluo8o55uu5qCH5pWw57uELCDkuK3mjIfpkogrMSwg5Y6f5Y+z5oyH6ZKIKVxuICAgIOW3puaMh+mSiCA9IDBcbiAgICDlj7PmjIfpkoggPSDplb8o55uu5qCH5pWw57uEKSAtIDFcbiAgICBf5b+r6YCf5o6S5bqPKOebruagh+aVsOe7hCwg5bem5oyH6ZKILCDlj7PmjIfpkogpXG4gICAg6L+U5ZueIOebruagh+aVsOe7hFxuICAgIFxu5rWL6K+V5pWw57uEID0gWzk5LCAxNiwgNzQsIDQsIDIxLCA0NSwgMTcsIDU2LCA5MywgODYsIDIzLCA0MCwgNjEsIDMxLCAzMCwgNzksIDU2LCA2LCA4NywgNTJdXG7miZPljbAo5b+r6YCf5o6S5bqPKOa1i+ivleaVsOe7hCkpXG5gXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGU0ID0ge1xuICAgICAgICAgICAgbmFtZTogJ+mAieaLqeaOkuW6jycsXG4gICAgICAgICAgICBzb3VyY2U6IGBcbuWHveaVsCDpgInmi6nmjpLluo8o55uu5qCH5pWw57uEKTpcbiAgICDlr7nkuo4g57Si5byV5LiAIOWcqCDojIPlm7Qo6ZW/KOebruagh+aVsOe7hCkpOlxuICAgICAgICDmnIDlsI/mlbDlgLwgPSDntKLlvJXkuIBcbiAgICAgICAg5a+55LqOIOe0ouW8leS6jCDlnKgg6IyD5Zu0KOe0ouW8leS4gCwg6ZW/KOebruagh+aVsOe7hCkpOlxuICAgICAgICAgICAg5aaC5p6cIOebruagh+aVsOe7hFvntKLlvJXkuoxdIDwg55uu5qCH5pWw57uEW+acgOWwj+aVsOWAvF06XG4gICAgICAgICAgICAgICAg5pyA5bCP5pWw5YC8ID0g57Si5byV5LqMXG4gICAgICAgIOebruagh+aVsOe7hFvntKLlvJXkuIBdLCDnm67moIfmlbDnu4Rb5pyA5bCP5pWw5YC8XSA9IOebruagh+aVsOe7hFvmnIDlsI/mlbDlgLxdLCDnm67moIfmlbDnu4Rb57Si5byV5LiAXVxuICAgIOi/lOWbniDnm67moIfmlbDnu4RcbiAgICBcbua1i+ivleaVsOe7hCA9IFs5OSwgMTYsIDc0LCA0LCAyMSwgNDUsIDE3LCA1NiwgOTMsIDg2LCAyMywgNDAsIDYxLCAzMSwgMzAsIDc5LCA1NiwgNiwgODcsIDUyXVxu5omT5Y2wKOmAieaLqeaOkuW6jyjmtYvor5XmlbDnu4QpKVxuYFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ25hbWUnOiAn5L6L5a2QJyxcbiAgICAgICAgICAgICdpZCc6ICdleGFtcGxlJyxcbiAgICAgICAgICAgICdjb2Rlcyc6IFtlMCwgZTEsIGUyLCBlMywgZTRdXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCBzb3VyY2UgPSBuZXcgU291cmNlKClcblxuZXhwb3J0IHtzb3VyY2V9XG5cbiIsImltcG9ydCB7bG9nfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbG9nXCI7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NvbmZpZ1wiO1xuaW1wb3J0IHtrZXl3b3Jkc30gZnJvbSBcIi4va2V5d29yZHNcIjtcblxuZXhwb3J0IGNsYXNzIFpweUNvbXBpbGUge1xuICAgIGNvbnN0cnVjdG9yKGtleXdvcmRzKSB7XG4gICAgICAgIHRoaXMua2V5d29yZHMgPSBrZXl3b3Jkc1xuICAgICAgICBsb2cuaW5mbyh0aGlzLmtleXdvcmRzKVxuICAgIH1cblxuICAgIGNvbXBpbGUoY29kZSwgdHlwZSA9IFwienB5XCIpIHtcblxuICAgICAgICBmdW5jdGlvbiBkaXNwb3NlKGtleSwgcmVnZXhwKSB7XG4gICAgICAgICAgICBsb2cuaW5mbyhldmFsKGV2YWwocmVnZXhwKSkpXG4gICAgICAgICAgICByZXR1cm4gZXZhbChldmFsKHJlZ2V4cCkpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSAhPT0gXCJ6cHlcIiAmJiB0eXBlICE9PSBcInB5XCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbXBpbGUgY29kZSBzaG91bGQgYmUgb25lIG9mIHpweSwgcHlcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGtleXdvcmQgb2Yga2V5d29yZHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHdvcmQgaW4ga2V5d29yZC53b3Jkcykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBcInpweVwiKSBjb2RlID0gY29kZS5yZXBsYWNlKGRpc3Bvc2Uod29yZCwga2V5d29yZC5yZWdleHApLCBrZXl3b3JkLndvcmRzW3dvcmRdKVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwicHlcIikgY29kZSA9IGNvZGUucmVwbGFjZShkaXNwb3NlKGtleXdvcmQud29yZHNbd29yZF0sIGtleXdvcmQucmVnZXhwKSwgd29yZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2RlXG4gICAgfVxuXG4gICAgYXN5bmMgZXhlYyhjb2RlKSB7XG4gICAgICAgIHJldHVybiBheGlvcyh7XG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIHVybDogY29uZmlnLlVSTCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAnY29kZSc6IGNvZGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsienB5RWRpdG9yIiwiQ29kZU1pcnJvciIsImZyb21UZXh0QXJlYSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb2RlIiwidGhlbWUiLCJsaW5lTnVtYmVycyIsInNtYXJ0SW5kZW50IiwiaW5kZW50VW5pdCIsImluZGVudFdpdGhUYWJzIiwibGluZVdyYXBwaW5nIiwiZ3V0dGVycyIsImZvbGRHdXR0ZXIiLCJhdXRvZm9jdXMiLCJtYXRjaEJyYWNrZXRzIiwiYXV0b0Nsb3NlQnJhY2tldHMiLCJzdHlsZUFjdGl2ZUxpbmUiLCJweUVkaXRvciIsInNldFNpemUiLCJacHlDb21waWxlIiwia2V5d29yZHMiLCJzb3VyY2UiLCJJREUiLCJ6cHlDb2RlIiwicHlDb2RlIiwienB5Iiwic2V0T3B0aW9uIiwicHlDb21waWxlIiwienB5Q29tcGlsZSIsIm91dHB1dEVkaXRvciIsImNvZGUiLCJpbm5lclRleHQiLCJleGVjIiwidGhlbiIsInJlc3BvbnNlIiwib3V0cHV0IiwiZXJyIiwiZ2V0VmFsdWUiLCJjb21waWxlIiwiZXhhbXBsZSIsImNvZGVzIiwiaWRlIiwicmVzZXJ2ZWRXb3JkcyIsInJlZ2V4cCIsIndvcmRzIiwiZnVuY3Rpb25Xb3JkcyIsIlNvdXJjZSIsImUwIiwibmFtZSIsImUxIiwiZTIiLCJlMyIsImU0IiwibG9nIiwiY29uZmlnIiwiaW5mbyIsInR5cGUiLCJkaXNwb3NlIiwia2V5IiwiZXZhbCIsIkVycm9yIiwia2V5d29yZCIsIndvcmQiLCJyZXBsYWNlIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJVUkwiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==