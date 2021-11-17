let zpyEditor = CodeMirror.fromTextArea(document.getElementById("zpy-code"), {
    mode: 'zpy', // 语言模式
    theme: "solarized", // 主题
    // keyMap: "sublime", // 快键键风格
    lineNumbers: true, // 显示行号
    smartIndent: true, // 智能缩进
    indentUnit: 4, // 智能缩进单位为4个空格长度
    indentWithTabs: true, // 使用制表符进行智能缩进
    lineWrapping: true, // 
    // 在行槽中添加行号显示器、折叠器、语法检测器
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"], 
    foldGutter: true, // 启用行槽中的代码折叠
    autofocus: true, // 自动聚焦
    matchBrackets: true, // 匹配结束符号，比如"]、}"
    autoCloseBrackets: true, // 自动闭合符号
    styleActiveLine: true, // 显示选中行的样式
});

let pyEditor = CodeMirror.fromTextArea(document.getElementById("python-code"), {
    mode: 'text/x-python', // 语言模式
    theme: "solarized", // 主题
    // keyMap: "sublime", // 快键键风格
    lineNumbers: true, // 显示行号
    smartIndent: true, // 智能缩进
    indentUnit: 4, // 智能缩进单位为4个空格长度
    indentWithTabs: true, // 使用制表符进行智能缩进
    lineWrapping: true, // 
    // 在行槽中添加行号显示器、折叠器、语法检测器
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"], 
    foldGutter: true, // 启用行槽中的代码折叠
    autofocus: true, // 自动聚焦
    matchBrackets: true, // 匹配结束符号，比如"]、}"
    autoCloseBrackets: true, // 自动闭合符号
    styleActiveLine: true, // 显示选中行的样式
});

zpyEditor.setSize(null, "63vh");
pyEditor.setSize(null, "63vh");

export {zpyEditor, pyEditor}