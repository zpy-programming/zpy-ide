import runSvg from "./img/run.svg";
import compileSvg from "./img/compile.svg";

let view = `
    <div class="container">
        <div class="sidebar item">
            <div class="header sidebar-header">
                <p class="title">Zpy IDE</p>
            </div>
            <div class="dictionary" id="chapter">
                <!-- <div class="chapter">
                  <div class="chapter-title" status="open" onclick="chapter.pull(event)">
                    <img class="icon" id="run" src="./editor/img/pullup.svg" />
                    <p class="chapter-title-text">例子</p>
                  </div>
                  <ul id="example" class="chapter-list">
                    <li class="chapter-item">简单排序算法</li>
                    <li class="chapter-item">简单排序算法</li>
                    <li class="chapter-item">简单排序算法</li>
                    <li class="chapter-item">简单排序算法</li>
                  </ul>
                </div> -->
            </div>
        </div>

        <div class="main">
            <div class="code-container">
                <div class="editor item" id="zpy-editor">
                    <div class="header">
                        <p class="title editor-title">zpy编辑区</p>
                        <div class="toolbar">
                            <div class="tool" type="button" title="运行" onClick="ide.zpyRun()">
                                <img class="icon" id="zpy-run" src="${runSvg}"/>
                            </div>
                            <div class="tool" type="button" title="编译" onClick="ide.zpyCompile()">
                                <img class="icon" id="zpy-compile" src="${compileSvg}"/>
                            </div>
                        </div>
                    </div>
                    <label for="zpy-code">
                        <textarea id="zpy-code"></textarea>
                    </label>
                </div>
                <div class="editor item" id="python-editor">
                    <div class="header">
                        <p class="title editor-title">python编辑区</p>
                        <div class="toolbar">
                            <div class="tool" type="button" title="运行" onClick="ide.pyRun()">
                                <img class="icon" id="py-run" src="${runSvg}" alt="py-run"/>
                            </div>
                            <div class="tool" type="button" title="编译" onClick="ide.pyCompile()">
                                <img class="icon" id="py-compile" src="${compileSvg}" alt="py-compile"/>
                            </div>
                        </div>
                    </div>
                    <label for="python-code">
                        <textarea id="python-code"></textarea>
                    </label>
                </div>
            </div>
            <div class="output-container item">
                <pre id="output-code" readOnly></pre>
            </div>
        </div>
    </div>
`
export {view}