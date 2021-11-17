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
    this.zpy = new _zpy__WEBPACK_IMPORTED_MODULE_2__.ZpyCompile(_keywords__WEBPACK_IMPORTED_MODULE_3__.reservedWords, _keywords__WEBPACK_IMPORTED_MODULE_3__.functionWords);

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
/* harmony export */   "reservedWords": () => (/* binding */ reservedWords),
/* harmony export */   "functionWords": () => (/* binding */ functionWords)
/* harmony export */ });
var reservedWords = {
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
};
var functionWords = {
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
};


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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 942);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 144);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ 757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/log */ 185);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/config */ 32);






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var ZpyCompile = function () {
  function ZpyCompile() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ZpyCompile);

    this.keywords = {};
    _utils_log__WEBPACK_IMPORTED_MODULE_5__.log.info(arguments);

    var _iterator = _createForOfIteratorHelper(arguments),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;
        this.keywords = _objectSpread(_objectSpread({}, this.keywords), key);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    _utils_log__WEBPACK_IMPORTED_MODULE_5__.log.info(this.keywords);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ZpyCompile, [{
    key: "compile",
    value: function compile(code) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "zpy";

      function dispose(key) {
        return new RegExp(key, 'g');
      }

      if (type !== "zpy" && type !== "py") {
        throw new Error("Compile code should be one of zpy, py");
      }

      for (var key in this.keywords) {
        if (type === "zpy") code = code.replace(dispose(key), this.keywords[key]);else if (type === "py") code = code.replace(dispose(this.keywords[key]), key);
      }

      return code;
    }
  }, {
    key: "exec",
    value: function () {
      var _exec = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(code) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", axios({
                  method: 'post',
                  url: _utils_config__WEBPACK_IMPORTED_MODULE_6__.config.URL,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQvc3JjX3ZpZXdzX2VkaXRvcl9qc19pZGVfanMtNTUyZTA0NWNjNDI4YmZmM2I4YTQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsVUFBVSxDQUFDQyxZQUFYLENBQXdCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBeEIsRUFBNkQ7QUFDekVDLEVBQUFBLElBQUksRUFBRSxLQURtRTtBQUV6RUMsRUFBQUEsS0FBSyxFQUFFLFdBRmtFO0FBSXpFQyxFQUFBQSxXQUFXLEVBQUUsSUFKNEQ7QUFLekVDLEVBQUFBLFdBQVcsRUFBRSxJQUw0RDtBQU16RUMsRUFBQUEsVUFBVSxFQUFFLENBTjZEO0FBT3pFQyxFQUFBQSxjQUFjLEVBQUUsSUFQeUQ7QUFRekVDLEVBQUFBLFlBQVksRUFBRSxJQVIyRDtBQVV6RUMsRUFBQUEsT0FBTyxFQUFFLENBQUMsd0JBQUQsRUFBMkIsdUJBQTNCLEVBQW9ELHlCQUFwRCxDQVZnRTtBQVd6RUMsRUFBQUEsVUFBVSxFQUFFLElBWDZEO0FBWXpFQyxFQUFBQSxTQUFTLEVBQUUsSUFaOEQ7QUFhekVDLEVBQUFBLGFBQWEsRUFBRSxJQWIwRDtBQWN6RUMsRUFBQUEsaUJBQWlCLEVBQUUsSUFkc0Q7QUFlekVDLEVBQUFBLGVBQWUsRUFBRTtBQWZ3RCxDQUE3RCxDQUFoQjtBQWtCQSxJQUFJQyxRQUFRLEdBQUdqQixVQUFVLENBQUNDLFlBQVgsQ0FBd0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUF4QixFQUFnRTtBQUMzRUMsRUFBQUEsSUFBSSxFQUFFLGVBRHFFO0FBRTNFQyxFQUFBQSxLQUFLLEVBQUUsV0FGb0U7QUFJM0VDLEVBQUFBLFdBQVcsRUFBRSxJQUo4RDtBQUszRUMsRUFBQUEsV0FBVyxFQUFFLElBTDhEO0FBTTNFQyxFQUFBQSxVQUFVLEVBQUUsQ0FOK0Q7QUFPM0VDLEVBQUFBLGNBQWMsRUFBRSxJQVAyRDtBQVEzRUMsRUFBQUEsWUFBWSxFQUFF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LGtCQUFBQSxHQUFHLEVBQUVaLHFEQUZJO0FBR1RjLGtCQUFBQSxJQUFJLEVBQUU7QUFDRiw0QkFBUWxDO0FBRE47QUFIRyxpQkFBRCxDQURoQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQXpCSjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96cHktaWRlLy4vc3JjL3ZpZXdzL2VkaXRvci9qcy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8venB5LWlkZS8uL3NyYy92aWV3cy9lZGl0b3IvanMvaWRlLmpzIiwid2VicGFjazovL3pweS1pZGUvLi9zcmMvdmlld3MvZWRpdG9yL2pzL2tleXdvcmRzLmpzIiwid2VicGFjazovL3pweS1pZGUvLi9zcmMvdmlld3MvZWRpdG9yL2pzL3NvdXJjZS5qcyIsIndlYnBhY2s6Ly96cHktaWRlLy4vc3JjL3ZpZXdzL2VkaXRvci9qcy96cHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHpweUVkaXRvciA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwienB5LWNvZGVcIiksIHtcbiAgICBtb2RlOiAnenB5JywgLy8g6K+t6KiA5qih5byPXG4gICAgdGhlbWU6IFwic29sYXJpemVkXCIsIC8vIOS4u+mimFxuICAgIC8vIGtleU1hcDogXCJzdWJsaW1lXCIsIC8vIOW/q+mUrumUrumjjuagvFxuICAgIGxpbmVOdW1iZXJzOiB0cnVlLCAvLyDmmL7npLrooYzlj7dcbiAgICBzbWFydEluZGVudDogdHJ1ZSwgLy8g5pm66IO957yp6L+bXG4gICAgaW5kZW50VW5pdDogNCwgLy8g5pm66IO957yp6L+b5Y2V5L2N5Li6NOS4quepuuagvOmVv+W6plxuICAgIGluZGVudFdpdGhUYWJzOiB0cnVlLCAvLyDkvb/nlKjliLbooajnrKbov5vooYzmmbrog73nvKnov5tcbiAgICBsaW5lV3JhcHBpbmc6IHRydWUsIC8vIFxuICAgIC8vIOWcqOihjOanveS4rea3u+WKoOihjOWPt+aYvuekuuWZqOOAgeaKmOWPoOWZqOOAgeivreazleajgOa1i+WZqFxuICAgIGd1dHRlcnM6IFtcIkNvZGVNaXJyb3ItbGluZW51bWJlcnNcIiwgXCJDb2RlTWlycm9yLWZvbGRndXR0ZXJcIiwgXCJDb2RlTWlycm9yLWxpbnQtbWFya2Vyc1wiXSwgXG4gICAgZm9sZEd1dHRlcjogdHJ1ZSwgLy8g5ZCv55So6KGM5qe95Lit55qE5Luj56CB5oqY5Y+gXG4gICAgYXV0b2ZvY3VzOiB0cnVlLCAvLyDoh6rliqjogZrnhKZcbiAgICBtYXRjaEJyYWNrZXRzOiB0cnVlLCAvLyDljLnphY3nu5PmnZ/nrKblj7fvvIzmr5TlpoJcIl3jgIF9XCJcbiAgICBhdXRvQ2xvc2VCcmFja2V0czogdHJ1ZSwgLy8g6Ieq5Yqo6Zet5ZCI56ym5Y+3XG4gICAgc3R5bGVBY3RpdmVMaW5lOiB0cnVlLCAvLyDmmL7npLrpgInkuK3ooYznmoTmoLflvI9cbn0pO1xuXG5sZXQgcHlFZGl0b3IgPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInB5dGhvbi1jb2RlXCIpLCB7XG4gICAgbW9kZTogJ3RleHQveC1weXRob24nLCAvLyDor63oqIDmqKHlvI9cbiAgICB0aGVtZTogXCJzb2xhcml6ZWRcIiwgLy8g5Li76aKYXG4gICAgLy8ga2V5TWFwOiBcInN1YmxpbWVcIiwgLy8g5b+r6ZSu6ZSu6aOO5qC8XG4gICAgbGluZU51bWJlcnM6IHRydWUsIC8vIOaYvuekuuihjOWPt1xuICAgIHNtYXJ0SW5kZW50OiB0cnVlLCAvLyDmmbrog73nvKnov5tcbiAgICBpbmRlbnRVbml0OiA0LCAvLyDmmbrog73nvKnov5vljZXkvY3kuLo05Liq56m65qC86ZW/5bqmXG4gICAgaW5kZW50V2l0aFRhYnM6IHRydWUsIC8vIOS9v+eUqOWItuihqOespui/m+ihjOaZuuiDvee8qei/m1xuICAgIGxpbmVXcmFwcGluZzogdHJ1ZSwgLy8gXG4gICAgLy8g5Zyo6KGM5qe95Lit5re75Yqg6KGM5Y+35pi+56S65Zmo44CB5oqY5Y+g5Zmo44CB6K+t5rOV5qOA5rWL5ZmoXG4gICAgZ3V0dGVyczogW1wiQ29kZU1pcnJvci1saW5lbnVtYmVyc1wiLCBcIkNvZGVNaXJyb3ItZm9sZGd1dHRlclwiLCBcIkNvZGVNaXJyb3ItbGludC1tYXJrZXJzXCJdLCBcbiAgICBmb2xkR3V0dGVyOiB0cnVlLCAvLyDlkK/nlKjooYzmp73kuK3nmoTku6PnoIHmipjlj6BcbiAgICBhdXRvZm9jdXM6IHRydWUsIC8vIOiHquWKqOiBmueEplxuICAgIG1hdGNoQnJhY2tldHM6IHRydWUsIC8vIOWMuemFjee7k+adn+espuWPt++8jOavlOWmglwiXeOAgX1cIlxuICAgIGF1dG9DbG9zZUJyYWNrZXRzOiB0cnVlLCAvLyDoh6rliqjpl63lkIjnrKblj7dcbiAgICBzdHlsZUFjdGl2ZUxpbmU6IHRydWUsIC8vIOaYvuekuumAieS4reihjOeahOagt+W8j1xufSk7XG5cbnpweUVkaXRvci5zZXRTaXplKG51bGwsIFwiNjN2aFwiKTtcbnB5RWRpdG9yLnNldFNpemUobnVsbCwgXCI2M3ZoXCIpO1xuXG5leHBvcnQge3pweUVkaXRvciwgcHlFZGl0b3J9IiwiaW1wb3J0IHtacHlDb21waWxlfSBmcm9tIFwiLi96cHlcIlxuaW1wb3J0IHtyZXNlcnZlZFdvcmRzLCBmdW5jdGlvbldvcmRzfSBmcm9tIFwiLi9rZXl3b3Jkc1wiXG5pbXBvcnQge3pweUVkaXRvciwgcHlFZGl0b3J9IGZyb20gXCIuL2VkaXRvclwiXG5pbXBvcnQge3NvdXJjZX0gZnJvbSBcIi4vc291cmNlXCI7XG5cbmNsYXNzIElERSB7XG4gICAgY29uc3RydWN0b3Ioe3pweUNvZGUsIHB5Q29kZX0pIHtcbiAgICAgICAgdGhpcy56cHlDb2RlID0genB5Q29kZVxuICAgICAgICB0aGlzLnB5Q29kZSA9IHB5Q29kZVxuICAgICAgICB0aGlzLnpweSA9IG5ldyBacHlDb21waWxlKHJlc2VydmVkV29yZHMsIGZ1bmN0aW9uV29yZHMpXG4gICAgICAgIGlmIChweUNvZGUpIHtcbiAgICAgICAgICAgIHB5RWRpdG9yLnNldE9wdGlvbihcInZhbHVlXCIsIHRoaXMucHlDb2RlKVxuICAgICAgICAgICAgdGhpcy5weUNvbXBpbGUoKVxuICAgICAgICB9XG4gICAgICAgIGlmICh6cHlDb2RlKSB7XG4gICAgICAgICAgICB6cHlFZGl0b3Iuc2V0T3B0aW9uKFwidmFsdWVcIiwgdGhpcy56cHlDb2RlKVxuICAgICAgICAgICAgdGhpcy56cHlDb21waWxlKClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm91dHB1dEVkaXRvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0LWNvZGVcIilcbiAgICB9XG5cbiAgICBvdXRwdXQoY29kZSkge1xuICAgICAgICB0aGlzLm91dHB1dEVkaXRvci5pbm5lclRleHQgPSBjb2RlXG4gICAgfVxuXG4gICAgenB5UnVuKCkge1xuICAgICAgICB0aGlzLnpweUNvbXBpbGUoKVxuICAgICAgICB0aGlzLnpweS5leGVjKHRoaXMucHlDb2RlKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0KHJlc3BvbnNlWydkYXRhJ10pXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICB0aGlzLm91dHB1dChcIuivreazlemUmeivr1wiKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB5UnVuKCkge1xuICAgICAgICB0aGlzLnB5Q29tcGlsZSgpXG4gICAgICAgIHRoaXMuenB5LmV4ZWModGhpcy5weUNvZGUpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXQocmVzcG9uc2VbJ2RhdGEnXSlcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMub3V0cHV0KFwi6K+t5rOV6ZSZ6K+vXCIpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgenB5Q29tcGlsZSgpIHtcbiAgICAgICAgdGhpcy56cHlDb2RlID0genB5RWRpdG9yLmdldFZhbHVlKCk7XG4gICAgICAgIHRoaXMucHlDb2RlID0gdGhpcy56cHkuY29tcGlsZSh0aGlzLnpweUNvZGUsICd6cHknKVxuICAgICAgICBweUVkaXRvci5zZXRPcHRpb24oXCJ2YWx1ZVwiLCB0aGlzLnB5Q29kZSlcbiAgICB9XG5cbiAgICBweUNvbXBpbGUoKSB7XG4gICAgICAgIHRoaXMucHlDb2RlID0gcHlFZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICAgICAgdGhpcy56cHlDb2RlID0gdGhpcy56cHkuY29tcGlsZSh0aGlzLnB5Q29kZSwgJ3B5JylcbiAgICAgICAgenB5RWRpdG9yLnNldE9wdGlvbihcInZhbHVlXCIsIHRoaXMuenB5Q29kZSlcbiAgICB9XG59XG5cbmxldCB6cHlDb2RlID0gc291cmNlLmV4YW1wbGUoKS5jb2Rlc1swXVsnc291cmNlJ11cbmxldCBpZGUgPSBuZXcgSURFKHt6cHlDb2RlfSlcblxuZXhwb3J0IHtJREUsIGlkZX0iLCJjb25zdCByZXNlcnZlZFdvcmRzID0ge1xuICAgIFwi5Ye95pWwXCI6IFwiZGVmXCIsXG4gICAgXCLliKDpmaRcIjogXCJkZWxcIixcbiAgICBcIui3s+i/h1wiOiBcInBhc3NcIixcbiAgICBcIue7iOatolwiOiBcImJyZWFrXCIsXG4gICAgXCLnu6fnu61cIjogXCJjb250aW51ZVwiLFxuICAgIFwi6L+U5ZueXCI6IFwicmV0dXJuXCIsXG4gICAgXCLku45cIjogXCJmcm9tXCIsXG4gICAgXCLmipvlh7pcIjogXCJyYWlzZVwiLFxuICAgIFwi55Sf5oiQXCI6IFwieWllbGRcIixcbiAgICBcIuWvvOWFpVwiOiBcImltcG9ydFwiLFxuICAgIFwi5YWo5bGAXCI6IFwiZ2xvYmFsXCIsXG4gICAgXCLpnZ7lsYDpg6hcIjogXCJub25sb2NhbFwiLFxuICAgIFwi5pat6KiAXCI6IFwiYXNzZXJ0XCIsXG4gICAgXCLlpoLmnpxcIjogXCJpZlwiLFxuICAgIFwi5oiW5aaCXCI6IFwiZWxpZlwiLFxuICAgIFwi5ZCm5YiZXCI6IFwiZWxzZVwiLFxuICAgIFwi5b2TXCI6IFwid2hpbGVcIixcbiAgICBcIuWvueS6jlwiOiBcImZvclwiLFxuICAgIFwi5bCd6K+VXCI6IFwidHJ5XCIsXG4gICAgXCLmjZXojrdcIjogXCJleGNlcHRcIixcbiAgICBcIuacgOWQjlwiOiBcImZpbmFsbHlcIixcbiAgICBcIuS9nOS4ulwiOiBcImFzXCIsXG4gICAgXCLpmo/nnYBcIjogXCJ3aXRoXCIsXG4gICAgXCLljL/lkI1cIjogXCJsYW1iZGFcIixcbiAgICBcIuaIllwiOiBcIm9yXCIsXG4gICAgXCLkuI5cIjogXCJhbmRcIixcbiAgICBcIuS4jVwiOiBcIm5vdFwiLFxuICAgIFwi5ZyoXCI6IFwiaW5cIixcbiAgICBcIuepulwiOiBcIk5vbmVcIixcbiAgICBcIuWvuVwiOiBcIlRydWVcIixcbiAgICBcIumUmVwiOiBcIkZhbHNlXCIsXG4gICAgXCLoh6rlt7FcIjogXCJzZWxmXCIsXG4gICAgXCLnsbtcIjogXCJjbGFzc1wiLFxuICAgIFwi5byC5q2lXCI6IFwiYXN5bmNcIixcbiAgICBcIuetieW+hVwiOiBcImF3YWl0XCJcbn1cblxuY29uc3QgZnVuY3Rpb25Xb3JkcyA9IHtcbiAgICBcIuesplwiOiBcImNoclwiLFxuICAgIFwi5LqM6L+b5Yi2XCI6IFwiYmluXCIsXG4gICAgXCLkuLJcIjogXCJzdHJcIixcbiAgICBcIuWFq+i/m+WItlwiOiBcIm9jdFwiLFxuICAgIFwi56ym5YC8XCI6IFwib3JkXCIsXG4gICAgXCLljYHlha3ov5vliLZcIjogXCJoZXhcIixcbiAgICBcIuWFg+e7hFwiOiBcInR1cGxlXCIsXG4gICAgXCLplb9cIjogXCJsZW5cIixcbiAgICBcIumbhuWQiFwiOiBcInNldFwiLFxuICAgIFwi5YWo5Li655yfXCI6IFwiYWxsXCIsXG4gICAgXCLlrZflhbhcIjogXCJkaWN0XCIsXG4gICAgXCLku7vkuIDkuLrnnJ9cIjogXCJhbnlcIixcbiAgICBcIuWIl+ihqFwiOiBcImxpc3RcIixcbiAgICBcIui/reS7o1wiOiBcIml0ZXJcIixcbiAgICBcIuWGu+e7k+mbhuWQiFwiOiBcImZyb3plbnNldFwiLFxuICAgIFwi6LaF57G7XCI6IFwic3VwZXJcIixcbiAgICBcIuWIh+eJh1wiOiBcInNsaWNlXCIsXG4gICAgXCLkuZjmlrlcIjogXCJwb3dcIixcbiAgICBcIuWtl+iKglwiOiBcImJ5dGVzXCIsXG4gICAgXCLmjpLluo9cIjogXCJzb3J0XCIsXG4gICAgXCLlhajlsYDlrZflhbhcIjogXCJnbG9iYWxzXCIsXG4gICAgXCLlrZfoioLmlbDnu4RcIjogXCJieXRlYXJyYXlcIixcbiAgICBcIuWxgOmDqOWtl+WFuFwiOiBcImxvY2Fsc1wiLFxuICAgIFwi5bGe5oCnXCI6IFwicHJvcGVydHlcIixcbiAgICBcIuWvueixoVwiOiBcIm9iamVjdFwiLFxuICAgIFwi5Yig5bGe5oCnXCI6IFwiZGVsYXR0clwiLFxuICAgIFwi5Y+Y6YeP5a2X5YW4XCI6IFwidmFyc1wiLFxuICAgIFwi5Y+W5bGe5oCnXCI6IFwiZ2V0YXR0clwiLFxuICAgIFwi5Y+v6LCD55SoXCI6IFwiY2FsbGFibGVcIixcbiAgICBcIuacieWxnuaAp1wiOiBcImhhc2F0dHJcIixcbiAgICBcIuWGheWtmOinhuWbvlwiOiBcIm1lbW9yeXZpZXdcIixcbiAgICBcIuiuvuWxnuaAp1wiOiBcInNldGF0dHJcIixcbiAgICBcIuWTiOW4jFwiOiBcImhhc2hcIixcbiAgICBcIuWkjeaVsFwiOiBcImNvbXBsZXhcIixcbiAgICBcIuWVhuS9mVwiOiBcImRpdm1vZFwiLFxuICAgIFwi5pW05pWwXCI6IFwiaW50XCIsXG4gICAgXCLor4TkvLBcIjogXCJldmFsXCIsXG4gICAgXCLmta7ngrnmlbBcIjogXCJmbG9hdFwiLFxuICAgIFwi6IyD5Zu0XCI6IFwicmFuZ2VcIixcbiAgICBcIuW4g+WwlFwiOiBcImJvb2xcIixcbiAgICBcIuihqOekulwiOiBcInJlcHJcIixcbiAgICBcIui+k+WFpVwiOiBcImlucHV0XCIsXG4gICAgXCLmiZPljIVcIjogXCJ6aXBcIixcbiAgICBcIuaJk+WNsFwiOiBcInByaW50XCIsXG4gICAgXCLmiZPlvIBcIjogXCJvcGVuXCIsXG4gICAgXCLmiafooYxcIjogXCJleGVjXCIsXG4gICAgXCLnvJbor5FcIjogXCJjb21waWxlXCIsXG4gICAgXCLlj43ovaxcIjogXCJyZXZlcnNlZFwiLFxuICAgIFwi5pig5bCEXCI6IFwibWFwXCIsXG4gICAgXCLlkoxcIjogXCJzdW1cIixcbiAgICBcIuaYr+WunuS+i1wiOiBcImlzaW5zdGFuY2VcIixcbiAgICBcIuaemuS4vlwiOiBcImVudW1lcmF0ZVwiLFxuICAgIFwi5pyA5aSn5YC8XCI6IFwibWF4XCIsXG4gICAgXCLmlq3ngrlcIjogXCJicmVha3BvaW50XCIsXG4gICAgXCLmnIDlsI/lgLxcIjogXCJtaW5cIixcbiAgICBcIuaYr+WtkOexu1wiOiBcImlzc3ViY2xhc3NcIixcbiAgICBcIue7neWvueWAvFwiOiBcImFic1wiLFxuICAgIFwi5LiL5LiA5LiqXCI6IFwibmV4dFwiLFxuICAgIFwi57G75Z6LXCI6IFwidHlwZVwiLFxuICAgIFwi562b6YCJXCI6IFwiZmlsdGVyXCIsXG4gICAgXCLmoLzlvI/ljJZcIjogXCJmb3JtYXRcIixcbiAgICBcIumdmeaAgeaWueazlVwiOiBcInN0YXRpY21ldGhvZFwiLFxuICAgIFwi6IiN5YWlXCI6IFwicm91bmRcIixcbiAgICBcIuexu+aWueazlVwiOiBcImNsYXNzbWV0aG9kXCIsXG4gICAgXCLpgIDlh7pcIjogXCJleGl0XCIsXG4gICAgXCLluK7liqlcIjogXCJoZWxwXCIsXG4gICAgXCJhc2NpaVwiOiBcImFzY2lpXCIsXG4gICAgXCJpZFwiOiBcImlkXCIsXG4gICAgXCJkaXJcIjogXCJkaXJcIlxufVxuXG5leHBvcnQge3Jlc2VydmVkV29yZHMsIGZ1bmN0aW9uV29yZHN9XG4iLCJjbGFzcyBTb3VyY2Uge1xuICAgIGV4YW1wbGUoKSB7XG4gICAgICAgIGxldCBlMCA9IHtcbiAgICAgICAgICAgIG5hbWU6ICfmj5LlhaXmjpLluo8nLFxuICAgICAgICAgICAgc291cmNlOiBgXG7lh73mlbAg5o+S5YWl5o6S5bqPKOebruagh+aVsOe7hCk6XG4gICAg5a+55LqOIOe0ouW8leS4gCDlnKgg6IyD5Zu0KDAsIOmVvyjnm67moIfmlbDnu4QpIC0gMSk6XG4gICAgICAgIOi/meS4qiA9IOebruagh+aVsOe7hFvntKLlvJXkuIBdXG4gICAgICAgIOS5i+WQjiA9IOebruagh+aVsOe7hFvntKLlvJXkuIAgKyAxXVxuICAgICAgICDlpoLmnpwg6L+Z5LiqID4g5LmL5ZCOOlxuICAgICAgICAgICAg5pu/5o2iID0g5LmL5ZCOXG4gICAgICAgICAgICDlr7nkuo4g57Si5byV5LqMIOWcqCDojIPlm7Qo57Si5byV5LiALCAtMSwgLTEpOlxuICAgICAgICAgICAgICAgIOebruagh+aVsOe7hFvntKLlvJXkuowrMV0gPSDnm67moIfmlbDnu4Rb57Si5byV5LqMXVxuICAgICAgICAgICAgICAgIOWmguaenCDnm67moIfmlbDnu4Rb57Si5byV5LqMXSA8IOabv+aNojpcbiAgICAgICAgICAgICAgICAgICAg57uI5q2iXG4gICAgICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LqMKzFdID0g5pu/5o2iXG4gICAgICAgICAgICDlvZMg57Si5byV5LqMID49IDAg5LiOIOebruagh+aVsOe7hFvntKLlvJXkuoxdID49IOabv+aNojpcbiAgICAgICAgICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LqMKzFdID0g55uu5qCH5pWw57uEW+e0ouW8leS6jF1cbiAgICAgICAgICAgICAgICDntKLlvJXkuowgLT0gMVxuICAgICAgICAgICAg55uu5qCH5pWw57uEW+e0ouW8leS6jCsxXSA9IOabv+aNolxuICAgIOi/lOWbniDnm67moIfmlbDnu4RcbiAgICBcbua1i+ivleaVsOe7hCA9IFs5OSwgMTYsIDc0LCA0LCAyMSwgNDUsIDE3LCA1NiwgOTMsIDg2LCAyMywgNDAsIDYxLCAzMSwgMzAsIDc5LCA1NiwgNiwgODcsIDUyXVxu5omT5Y2wKOaPkuWFpeaOkuW6jyjmtYvor5XmlbDnu4QpKVxuYFxuICAgICAgICB9XG4gICAgICAgIGxldCBlMSA9IHtcbiAgICAgICAgICAgIG5hbWU6ICfluIzlsJTmjpLluo8nLFxuICAgICAgICAgICAgc291cmNlOiBgXG7lh73mlbAg5biM5bCU5o6S5bqPKOebruagh+aVsOe7hCk6XG4gICAg5q2l6ZW/ID0g6ZW/KOebruagh+aVsOe7hClcbiAgICDlvZMg5q2l6ZW/ID4gMDpcbiAgICAgICAg5q2l6ZW/IC8vPSAyXG4gICAgICAgIOWvueS6jiDntKLlvJXkuIAg5ZyoIOiMg+WbtCjmraXplb8sIOmVvyjnm67moIfmlbDnu4QpKTpcbiAgICAgICAgICAgIOabv+aNoiA9IOebruagh+aVsOe7hFvntKLlvJXkuIBdXG4gICAgICAgICAgICDntKLlvJXkuowgPSDntKLlvJXkuIBcbiAgICAgICAgICAgIOW9kyDntKLlvJXkuowgPj0g5q2l6ZW/IOS4jiDmm7/mjaIgPCDnm67moIfmlbDnu4Rb57Si5byV5LqMLeatpemVv106XG4gICAgICAgICAgICAgICAg55uu5qCH5pWw57uEW+e0ouW8leS6jF0gPSDnm67moIfmlbDnu4Rb57Si5byV5LqMLeatpemVv11cbiAgICAgICAgICAgICAgICDntKLlvJXkuowgLT0g5q2l6ZW/XG4gICAgICAgICAgICDnm67moIfmlbDnu4Rb57Si5byV5LqMXSA9IOabv+aNolxuICAgIOi/lOWbniDnm67moIfmlbDnu4RcbiAgICBcbua1i+ivleaVsOe7hCA9IFs5OSwgMTYsIDc0LCA0LCAyMSwgNDUsIDE3LCA1NiwgOTMsIDg2LCAyMywgNDAsIDYxLCAzMSwgMzAsIDc5LCA1NiwgNiwgODcsIDUyXVxu5omT5Y2wKOW4jOWwlOaOkuW6jyjmtYvor5XmlbDnu4QpKVxuYFxuICAgICAgICB9XG4gICAgICAgIGxldCBlMiA9IHtcbiAgICAgICAgICAgIG5hbWU6ICflhpLms6HmjpLluo8nLFxuICAgICAgICAgICAgc291cmNlOiBgXG7lh73mlbAg5YaS5rOh5o6S5bqPKOebruagh+aVsOe7hCk6XG4gICAg5a+55LqOIOe0ouW8leS4gCDlnKgg6IyD5Zu0KOmVvyjnm67moIfmlbDnu4QpLCAwLCAtMSk6XG4gICAgICAgIOagh+iusCA9IOmUmVxuICAgICAgICDlr7nkuo4g57Si5byV5LqMIOWcqCDojIPlm7QoMCwg57Si5byV5LiAIC0gMSk6XG4gICAgICAgICAgICDlpoLmnpwg55uu5qCH5pWw57uEW+e0ouW8leS6jF0gPiDnm67moIfmlbDnu4Rb57Si5byV5LqMKzFdOlxuICAgICAgICAgICAgICAgIOebruagh+aVsOe7hFvntKLlvJXkuoxdLCDnm67moIfmlbDnu4Rb57Si5byV5LqMKzFdID0g55uu5qCH5pWw57uEW+e0ouW8leS6jCsxXSwg55uu5qCH5pWw57uEW+e0ouW8leS6jF1cbiAgICAgICAg5aaC5p6cIOagh+iusDpcbiAgICAgICAgICAgIOe7iOatolxuICAgIOi/lOWbniDnm67moIfmlbDnu4RcbiAgICBcbua1i+ivleaVsOe7hCA9IFs5OSwgMTYsIDc0LCA0LCAyMSwgNDUsIDE3LCA1NiwgOTMsIDg2LCAyMywgNDAsIDYxLCAzMSwgMzAsIDc5LCA1NiwgNiwgODcsIDUyXVxu5omT5Y2wKOWGkuazoeaOkuW6jyjmtYvor5XmlbDnu4QpKVxuYFxuICAgICAgICB9XG4gICAgICAgIGxldCBlMyA9IHtcbiAgICAgICAgICAgIG5hbWU6ICflv6vpgJ/mjpLluo8nLFxuICAgICAgICAgICAgc291cmNlOiBgXG7lh73mlbAg5b+r6YCf5o6S5bqPKOebruagh+aVsOe7hCk6XG4gICAg5Ye95pWwIF/lv6vpgJ/mjpLluo8o55uu5qCH5pWw57uELCDlt6bmjIfpkogsIOWPs+aMh+mSiCk6XG4gICAgICAgIOaeoui9tCA9IOebruagh+aVsOe7hFvlt6bmjIfpkohdXG4gICAgICAgIOWOn+W3puaMh+mSiCA9IOW3puaMh+mSiFxuICAgICAgICDljp/lj7PmjIfpkoggPSDlj7PmjIfpkohcbiAgICAgICAg5bem5oyH6ZKI56m65qCH6K6wID0gMCAgIyDlt6bmjIfpkojkuLrnqbpcbiAgICAgICAg5b2TIOW3puaMh+mSiCAhPSDlj7PmjIfpkog6XG4gICAgICAgICAgICDlpoLmnpwg5bem5oyH6ZKI56m65qCH6K6wOlxuICAgICAgICAgICAgICAgIOWmguaenCAo55uu5qCH5pWw57uEW+W3puaMh+mSiF0gPj0g5p6i6L20KTpcbiAgICAgICAgICAgICAgICAgICAg55uu5qCH5pWw57uEW+WPs+aMh+mSiF0gPSDnm67moIfmlbDnu4Rb5bem5oyH6ZKIXVxuICAgICAgICAgICAgICAgICAgICDlt6bmjIfpkojnqbrmoIforrAgPSAwXG4gICAgICAgICAgICAgICAg5ZCm5YiZOlxuICAgICAgICAgICAgICAgICAgICDlt6bmjIfpkoggKz0gMVxuICAgICAgICAgICAg5ZCm5YiZOlxuICAgICAgICAgICAgICAgIOWmguaenCAo55uu5qCH5pWw57uEW+WPs+aMh+mSiF0gPCDmnqLovbQpOlxuICAgICAgICAgICAgICAgICAgICDnm67moIfmlbDnu4Rb5bem5oyH6ZKIXSA9IOebruagh+aVsOe7hFvlj7PmjIfpkohdXG4gICAgICAgICAgICAgICAgICAgIOW3puaMh+mSiOepuuagh+iusCA9IDFcbiAgICAgICAgICAgICAgICDlkKbliJk6XG4gICAgICAgICAgICAgICAgICAgIOWPs+aMh+mSiCAtPSAxXG4gICAgICAgIOS4reaMh+mSiCA9IOW3puaMh+mSiFxuICAgICAgICDnm67moIfmlbDnu4Rb5Lit5oyH6ZKIXSA9IOaeoui9tFxuICAgICAgICDlpoLmnpwg5Y6f5bem5oyH6ZKIIDwg5Lit5oyH6ZKIIC0gMTpcbiAgICAgICAgICAgIF/lv6vpgJ/mjpLluo8o55uu5qCH5pWw57uELCDljp/lt6bmjIfpkogsIOS4reaMh+mSiCAtIDEpXG4gICAgICAgIOWmguaenCDkuK3mjIfpkogrMSA8IOWOn+WPs+aMh+mSiDpcbiAgICAgICAgICAgIF/lv6vpgJ/mjpLluo8o55uu5qCH5pWw57uELCDkuK3mjIfpkogrMSwg5Y6f5Y+z5oyH6ZKIKVxuICAgIOW3puaMh+mSiCA9IDBcbiAgICDlj7PmjIfpkoggPSDplb8o55uu5qCH5pWw57uEKSAtIDFcbiAgICBf5b+r6YCf5o6S5bqPKOebruagh+aVsOe7hCwg5bem5oyH6ZKILCDlj7PmjIfpkogpXG4gICAg6L+U5ZueIOebruagh+aVsOe7hFxuICAgIFxu5rWL6K+V5pWw57uEID0gWzk5LCAxNiwgNzQsIDQsIDIxLCA0NSwgMTcsIDU2LCA5MywgODYsIDIzLCA0MCwgNjEsIDMxLCAzMCwgNzksIDU2LCA2LCA4NywgNTJdXG7miZPljbAo5b+r6YCf5o6S5bqPKOa1i+ivleaVsOe7hCkpXG5gXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGU0ID0ge1xuICAgICAgICAgICAgbmFtZTogJ+mAieaLqeaOkuW6jycsXG4gICAgICAgICAgICBzb3VyY2U6IGBcbuWHveaVsCDpgInmi6nmjpLluo8o55uu5qCH5pWw57uEKTpcbiAgICDlr7nkuo4g57Si5byV5LiAIOWcqCDojIPlm7Qo6ZW/KOebruagh+aVsOe7hCkpOlxuICAgICAgICDmnIDlsI/mlbDlgLwgPSDntKLlvJXkuIBcbiAgICAgICAg5a+55LqOIOe0ouW8leS6jCDlnKgg6IyD5Zu0KOe0ouW8leS4gCwg6ZW/KOebruagh+aVsOe7hCkpOlxuICAgICAgICAgICAg5aaC5p6cIOebruagh+aVsOe7hFvntKLlvJXkuoxdIDwg55uu5qCH5pWw57uEW+acgOWwj+aVsOWAvF06XG4gICAgICAgICAgICAgICAg5pyA5bCP5pWw5YC8ID0g57Si5byV5LqMXG4gICAgICAgIOebruagh+aVsOe7hFvntKLlvJXkuIBdLCDnm67moIfmlbDnu4Rb5pyA5bCP5pWw5YC8XSA9IOebruagh+aVsOe7hFvmnIDlsI/mlbDlgLxdLCDnm67moIfmlbDnu4Rb57Si5byV5LiAXVxuICAgIOi/lOWbniDnm67moIfmlbDnu4RcbiAgICBcbua1i+ivleaVsOe7hCA9IFs5OSwgMTYsIDc0LCA0LCAyMSwgNDUsIDE3LCA1NiwgOTMsIDg2LCAyMywgNDAsIDYxLCAzMSwgMzAsIDc5LCA1NiwgNiwgODcsIDUyXVxu5omT5Y2wKOmAieaLqeaOkuW6jyjmtYvor5XmlbDnu4QpKVxuYFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ25hbWUnOiAn5L6L5a2QJyxcbiAgICAgICAgICAgICdpZCc6ICdleGFtcGxlJyxcbiAgICAgICAgICAgICdjb2Rlcyc6IFtlMCwgZTEsIGUyLCBlMywgZTRdXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCBzb3VyY2UgPSBuZXcgU291cmNlKClcblxuZXhwb3J0IHtzb3VyY2V9XG5cbiIsImltcG9ydCB7bG9nfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbG9nXCI7XG5pbXBvcnQge2NvbmZpZ30gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NvbmZpZ1wiO1xuXG5leHBvcnQgY2xhc3MgWnB5Q29tcGlsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMua2V5d29yZHMgPSB7fVxuICAgICAgICBsb2cuaW5mbyhhcmd1bWVudHMpXG4gICAgICAgIGZvciAobGV0IGtleSBvZiBhcmd1bWVudHMpIHtcbiAgICAgICAgICAgIHRoaXMua2V5d29yZHMgPSB7IC4uLnRoaXMua2V5d29yZHMsIC4uLmtleSB9XG4gICAgICAgIH1cbiAgICAgICAgbG9nLmluZm8odGhpcy5rZXl3b3JkcylcbiAgICB9XG4gICAgY29tcGlsZShjb2RlLCB0eXBlID0gXCJ6cHlcIikge1xuICAgICAgICBmdW5jdGlvbiBkaXNwb3NlKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoa2V5LCAnZycpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSAhPT0gXCJ6cHlcIiAmJiB0eXBlICE9PSBcInB5XCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbXBpbGUgY29kZSBzaG91bGQgYmUgb25lIG9mIHpweSwgcHlcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmtleXdvcmRzKSB7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJ6cHlcIikgY29kZSA9IGNvZGUucmVwbGFjZShkaXNwb3NlKGtleSksIHRoaXMua2V5d29yZHNba2V5XSlcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwicHlcIikgY29kZSA9IGNvZGUucmVwbGFjZShkaXNwb3NlKHRoaXMua2V5d29yZHNba2V5XSksIGtleSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb2RlXG4gICAgfVxuICAgIGFzeW5jIGV4ZWMoY29kZSkge1xuICAgICAgICByZXR1cm4gYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICB1cmw6IGNvbmZpZy5VUkwsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgJ2NvZGUnOiBjb2RlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICB9XG59Il0sIm5hbWVzIjpbInpweUVkaXRvciIsIkNvZGVNaXJyb3IiLCJmcm9tVGV4dEFyZWEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibW9kZSIsInRoZW1lIiwibGluZU51bWJlcnMiLCJzbWFydEluZGVudCIsImluZGVudFVuaXQiLCJpbmRlbnRXaXRoVGFicyIsImxpbmVXcmFwcGluZyIsImd1dHRlcnMiLCJmb2xkR3V0dGVyIiwiYXV0b2ZvY3VzIiwibWF0Y2hCcmFja2V0cyIsImF1dG9DbG9zZUJyYWNrZXRzIiwic3R5bGVBY3RpdmVMaW5lIiwicHlFZGl0b3IiLCJzZXRTaXplIiwiWnB5Q29tcGlsZSIsInJlc2VydmVkV29yZHMiLCJmdW5jdGlvbldvcmRzIiwic291cmNlIiwiSURFIiwienB5Q29kZSIsInB5Q29kZSIsInpweSIsInNldE9wdGlvbiIsInB5Q29tcGlsZSIsInpweUNvbXBpbGUiLCJvdXRwdXRFZGl0b3IiLCJjb2RlIiwiaW5uZXJUZXh0IiwiZXhlYyIsInRoZW4iLCJyZXNwb25zZSIsIm91dHB1dCIsImVyciIsImdldFZhbHVlIiwiY29tcGlsZSIsImV4YW1wbGUiLCJjb2RlcyIsImlkZSIsIlNvdXJjZSIsImUwIiwibmFtZSIsImUxIiwiZTIiLCJlMyIsImU0IiwibG9nIiwiY29uZmlnIiwia2V5d29yZHMiLCJpbmZvIiwiYXJndW1lbnRzIiwia2V5IiwidHlwZSIsImRpc3Bvc2UiLCJSZWdFeHAiLCJFcnJvciIsInJlcGxhY2UiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsIlVSTCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9