(self["webpackChunkzpy_ide"] = self["webpackChunkzpy_ide"] || []).push([["src_views_editor_js_zpy-mode_js"],{

/***/ 969:
/*!*****************************************!*\
  !*** ./src/views/editor/js/zpy-mode.js ***!
  \*****************************************/
/***/ (() => {

CodeMirror.defineSimpleMode("zpy", {
  start: [{
    regex: /"(?:[^\\]|\\.)*?(?:"|$)/,
    token: "string"
  }, {
    regex: /(function)(\s+)([a-z$][\w$]*)/,
    token: ["keyword", null, "variable-2"]
  }, {
    regex: /类|函数|删除|跳过|终止|继续|返回|从|抛出|生成|导入|全局|非局部|断言|如果|或如|否则|当|对于|在|尝试|捕获|最后|作为|随着|匿名|自己|异步|等待|class|def|del|pass|break|continue|return|from|raise|yield|import|global|nonlocal|assert|if|elif|else|while|for|in|try|except|finally|as|with|lambda|self|async|await/,
    token: "keyword"
  }, {
    regex: /或|与|不|空|对|错|or|and|not|None|True|False/,
    token: "atom"
  }, {
    regex: /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i,
    token: "number"
  }, {
    regex: /^#.*/,
    token: "comment"
  }, {
    regex: /\/(?:[^\\]|\\.)*?\//,
    token: "variable-3"
  }, {
    regex: /\/\*/,
    token: "comment",
    next: "comment"
  }, {
    regex: /[-+\/*=<>!]+/,
    token: "operator"
  }, {
    regex: /[\{\[\(]/,
    indent: true
  }, {
    regex: /[\}\]\)]/,
    dedent: true
  }, {
    regex: /[a-z$][\w$]*/,
    token: "variable"
  }, {
    regex: /<</,
    token: "meta",
    mode: {
      spec: "xml",
      end: />>/
    }
  }],
  comment: [{
    regex: /.*?\*\//,
    token: "comment",
    next: "start"
  }, {
    regex: /.*/,
    token: "comment"
  }],
  meta: {
    dontIndentStates: ["comment"],
    lineComment: "//"
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXQvc3JjX3ZpZXdzX2VkaXRvcl9qc196cHktbW9kZV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBQSxVQUFVLENBQUNDLGdCQUFYLENBQTRCLEtBQTVCLEVBQW1DO0FBRWpDQyxFQUFBQSxLQUFLLEVBQUUsQ0FFTDtBQUFDQyxJQUFBQSxLQUFLLEVBQUUseUJBQVI7QUFBbUNDLElBQUFBLEtBQUssRUFBRTtBQUExQyxHQUZLLEVBS0w7QUFBQ0QsSUFBQUEsS0FBSyxFQUFFLCtCQUFSO0FBQ0NDLElBQUFBLEtBQUssRUFBRSxDQUFDLFNBQUQsRUFBWSxJQUFaLEVBQWtCLFlBQWxCO0FBRFIsR0FMSyxFQVNMO0FBQUNELElBQUFBLEtBQUssRUFBRSwwUEFBUjtBQUFvUUMsSUFBQUEsS0FBSyxFQUFFO0FBQTNRLEdBVEssRUFVTDtBQUFDRCxJQUFBQSxLQUFLLEVBQUUsd0NBQVI7QUFBa0RDLElBQUFBLEtBQUssRUFBRTtBQUF6RCxHQVZLLEVBV0w7QUFBQ0QsSUFBQUEsS0FBSyxFQUFFLG9EQUFSO0FBQThEQyxJQUFBQSxLQUFLLEVBQUU7QUFBckUsR0FYSyxFQVlMO0FBQUNELElBQUFBLEtBQUssRUFBRSxNQUFSO0FBQWdCQyxJQUFBQSxLQUFLLEVBQUU7QUFBdkIsR0FaSyxFQWFMO0FBQUNELElBQUFBLEtBQUssRUFBRSxxQkFBUjtBQUErQkMsSUFBQUEsS0FBSyxFQUFFO0FBQXRDLEdBYkssRUFlTDtBQUFDRCxJQUFBQSxLQUFLLEVBQUUsTUFBUjtBQUFnQkMsSUFBQUEsS0FBSyxFQUFFLFNBQXZCO0FBQWtDQyxJQUFBQSxJQUFJLEVBQUU7QUFBeEMsR0FmSyxFQWdCTDtBQUFDRixJQUFBQSxLQUFLLEVBQUUsY0FBUjtBQUF3QkMsSUFBQUEsS0FBSyxFQUFFO0FBQS9CLEdBaEJLLEVBa0JMO0FBQUNELElBQUFBLEtBQUssRUFBRSxVQUFSO0FBQW9CRyxJQUFBQSxNQUFNLEVBQUU7QUFBNUIsR0FsQkssRUFtQkw7QUFBQ0gsSUFBQUEsS0FBSyxFQUFFLFVBQVI7QUFBb0JJLElBQUFBLE1BQU0sRUFBRTtBQUE1QixHQW5CSyxFQW9CTDtBQUFDSixJQUFBQSxLQUFLLEVBQUUsY0FBUjtBQUF3QkMsSUFBQUEsS0FBSyxFQUFFO0FBQS9CLEdBcEJLLEVBd0JMO0FBQUNELElBQUFBLEtBQUssRUFBRSxJQUFSO0FBQWNDLElBQUFBLEtBQUssRUFBRSxNQUFyQjtBQUE2QkksSUFBQUEsSUFBSSxFQUFFO0FBQUNDLE1BQUFBLElBQUksRUFBRSxLQUFQO0FBQWNDLE1BQUFBLEdBQUcsRUFBRTtBQUFuQjtBQUFuQyxHQXhCSyxDQUYwQjtBQTZCakNDLEVBQUFBLE9BQU8sRUFBRSxDQUNQO0FBQUNSLElBQUFBLEtBQUssRUFBRSxTQUFSO0FBQW1CQyxJQUFBQSxLQUFLLEVBQUUsU0FBMUI7QUFBcUNDLElBQUFBLElBQUksRUFBRTtBQUEzQyxHQURPLEVBRVA7QUFBQ0YsSUFBQUEsS0FBSyxFQUFFLElBQVI7QUFBY0MsSUFBQUEsS0FBSyxFQUFFO0FBQXJCLEdBRk8sQ0E3QndCO0FBcUNqQ1EsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLGdCQUFnQixFQUFFLENBQUMsU0FBRCxDQURkO0FBRUpDLElBQUFBLFdBQVcsRUFBRTtBQUZUO0FBckMyQixDQUFuQyIsInNvdXJjZXMiOlsid2VicGFjazovL3pweS1pZGUvLi9zcmMvdmlld3MvZWRpdG9yL2pzL3pweS1tb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIEV4YW1wbGUgZGVmaW5pdGlvbiBvZiBhIHNpbXBsZSBtb2RlIHRoYXQgdW5kZXJzdGFuZHMgYSBzdWJzZXQgb2ZcbiAqIEphdmFTY3JpcHQ6XG4gKi9cblxuQ29kZU1pcnJvci5kZWZpbmVTaW1wbGVNb2RlKFwienB5XCIsIHtcbiAgLy8gVGhlIHN0YXJ0IHN0YXRlIGNvbnRhaW5zIHRoZSBydWxlcyB0aGF0IGFyZSBpbml0aWFsbHkgdXNlZFxuICBzdGFydDogW1xuICAgIC8vIFRoZSByZWdleCBtYXRjaGVzIHRoZSB0b2tlbiwgdGhlIHRva2VuIHByb3BlcnR5IGNvbnRhaW5zIHRoZSB0eXBlXG4gICAge3JlZ2V4OiAvXCIoPzpbXlxcXFxdfFxcXFwuKSo/KD86XCJ8JCkvLCB0b2tlbjogXCJzdHJpbmdcIn0sXG4gICAgLy8gWW91IGNhbiBtYXRjaCBtdWx0aXBsZSB0b2tlbnMgYXQgb25jZS4gTm90ZSB0aGF0IHRoZSBjYXB0dXJlZFxuICAgIC8vIGdyb3VwcyBtdXN0IHNwYW4gdGhlIHdob2xlIHN0cmluZyBpbiB0aGlzIGNhc2VcbiAgICB7cmVnZXg6IC8oZnVuY3Rpb24pKFxccyspKFthLXokXVtcXHckXSopLyxcbiAgICAgdG9rZW46IFtcImtleXdvcmRcIiwgbnVsbCwgXCJ2YXJpYWJsZS0yXCJdfSxcbiAgICAvLyBSdWxlcyBhcmUgbWF0Y2hlZCBpbiB0aGUgb3JkZXIgaW4gd2hpY2ggdGhleSBhcHBlYXIsIHNvIHRoZXJlIGlzXG4gICAgLy8gbm8gYW1iaWd1aXR5IGJldHdlZW4gdGhpcyBvbmUgYW5kIHRoZSBvbmUgYWJvdmVcbiAgICB7cmVnZXg6IC/nsbt85Ye95pWwfOWIoOmZpHzot7Pov4d857uI5q2ifOe7p+e7rXzov5Tlm5585LuOfOaKm+WHunznlJ/miJB85a+85YWlfOWFqOWxgHzpnZ7lsYDpg6h85pat6KiAfOWmguaenHzmiJblpoJ85ZCm5YiZfOW9k3zlr7nkuo585ZyofOWwneivlXzmjZXojrd85pyA5ZCOfOS9nOS4unzpmo/nnYB85Yy/5ZCNfOiHquW3sXzlvILmraV8562J5b6FfGNsYXNzfGRlZnxkZWx8cGFzc3xicmVha3xjb250aW51ZXxyZXR1cm58ZnJvbXxyYWlzZXx5aWVsZHxpbXBvcnR8Z2xvYmFsfG5vbmxvY2FsfGFzc2VydHxpZnxlbGlmfGVsc2V8d2hpbGV8Zm9yfGlufHRyeXxleGNlcHR8ZmluYWxseXxhc3x3aXRofGxhbWJkYXxzZWxmfGFzeW5jfGF3YWl0LywgdG9rZW46IFwia2V5d29yZFwifSxcbiAgICB7cmVnZXg6IC/miJZ85LiOfOS4jXznqbp85a+5fOmUmXxvcnxhbmR8bm90fE5vbmV8VHJ1ZXxGYWxzZS8sIHRva2VuOiBcImF0b21cIn0sXG4gICAge3JlZ2V4OiAvMHhbYS1mXFxkXSt8Wy0rXT8oPzpcXC5cXGQrfFxcZCtcXC4/XFxkKikoPzplWy0rXT9cXGQrKT8vaSwgdG9rZW46IFwibnVtYmVyXCJ9LFxuICAgIHtyZWdleDogL14jLiovLCB0b2tlbjogXCJjb21tZW50XCJ9LFxuICAgIHtyZWdleDogL1xcLyg/OlteXFxcXF18XFxcXC4pKj9cXC8vLCB0b2tlbjogXCJ2YXJpYWJsZS0zXCJ9LFxuICAgIC8vIEEgbmV4dCBwcm9wZXJ0eSB3aWxsIGNhdXNlIHRoZSBtb2RlIHRvIG1vdmUgdG8gYSBkaWZmZXJlbnQgc3RhdGVcbiAgICB7cmVnZXg6IC9cXC9cXCovLCB0b2tlbjogXCJjb21tZW50XCIsIG5leHQ6IFwiY29tbWVudFwifSxcbiAgICB7cmVnZXg6IC9bLStcXC8qPTw+IV0rLywgdG9rZW46IFwib3BlcmF0b3JcIn0sXG4gICAgLy8gaW5kZW50IGFuZCBkZWRlbnQgcHJvcGVydGllcyBndWlkZSBhdXRvaW5kZW50YXRpb25cbiAgICB7cmVnZXg6IC9bXFx7XFxbXFwoXS8sIGluZGVudDogdHJ1ZX0sXG4gICAge3JlZ2V4OiAvW1xcfVxcXVxcKV0vLCBkZWRlbnQ6IHRydWV9LFxuICAgIHtyZWdleDogL1thLXokXVtcXHckXSovLCB0b2tlbjogXCJ2YXJpYWJsZVwifSxcbiAgICAvLyBZb3UgY2FuIGVtYmVkIG90aGVyIG1vZGVzIHdpdGggdGhlIG1vZGUgcHJvcGVydHkuIFRoaXMgcnVsZVxuICAgIC8vIGNhdXNlcyBhbGwgY29kZSBiZXR3ZWVuIDw8IGFuZCA+PiB0byBiZSBoaWdobGlnaHRlZCB3aXRoIHRoZSBYTUxcbiAgICAvLyBtb2RlLlxuICAgIHtyZWdleDogLzw8LywgdG9rZW46IFwibWV0YVwiLCBtb2RlOiB7c3BlYzogXCJ4bWxcIiwgZW5kOiAvPj4vfX1cbiAgXSxcbiAgLy8gVGhlIG11bHRpLWxpbmUgY29tbWVudCBzdGF0ZS5cbiAgY29tbWVudDogW1xuICAgIHtyZWdleDogLy4qP1xcKlxcLy8sIHRva2VuOiBcImNvbW1lbnRcIiwgbmV4dDogXCJzdGFydFwifSxcbiAgICB7cmVnZXg6IC8uKi8sIHRva2VuOiBcImNvbW1lbnRcIn1cbiAgXSxcbiAgLy8gVGhlIG1ldGEgcHJvcGVydHkgY29udGFpbnMgZ2xvYmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBtb2RlLiBJdFxuICAvLyBjYW4gY29udGFpbiBwcm9wZXJ0aWVzIGxpa2UgbGluZUNvbW1lbnQsIHdoaWNoIGFyZSBzdXBwb3J0ZWQgYnlcbiAgLy8gYWxsIG1vZGVzLCBhbmQgYWxzbyBkaXJlY3RpdmVzIGxpa2UgZG9udEluZGVudFN0YXRlcywgd2hpY2ggYXJlXG4gIC8vIHNwZWNpZmljIHRvIHNpbXBsZSBtb2Rlcy5cbiAgbWV0YToge1xuICAgIGRvbnRJbmRlbnRTdGF0ZXM6IFtcImNvbW1lbnRcIl0sXG4gICAgbGluZUNvbW1lbnQ6IFwiLy9cIlxuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJDb2RlTWlycm9yIiwiZGVmaW5lU2ltcGxlTW9kZSIsInN0YXJ0IiwicmVnZXgiLCJ0b2tlbiIsIm5leHQiLCJpbmRlbnQiLCJkZWRlbnQiLCJtb2RlIiwic3BlYyIsImVuZCIsImNvbW1lbnQiLCJtZXRhIiwiZG9udEluZGVudFN0YXRlcyIsImxpbmVDb21tZW50Il0sInNvdXJjZVJvb3QiOiIifQ==