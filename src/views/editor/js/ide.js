import {ZpyCompile} from "./zpy-compiler"
import {keywords} from "./keywords"
import {zpyEditor, pyEditor} from "./editor"
import {source} from "./source"
import {config} from "../../../utils/config"
import {time} from "../../../utils/time"

class IDE {
    constructor({zpyCode, pyCode}) {
        this.zpyCode = zpyCode
        this.pyCode = pyCode
        this.zpy = new ZpyCompile(keywords)
        if (pyCode) {
            pyEditor.setOption("value", this.pyCode)
            this.pyCompile()
        }
        if (zpyCode) {
            zpyEditor.setOption("value", this.zpyCode)
            this.zpyCompile()
        }
        this.outputEditor = document.getElementById("output-code")
    }

    output(code) {
        this.outputEditor.innerText += `[${time.getCurrentTime()}]:\n`
        this.outputEditor.innerText += code + "\n\n"
    }

    zpyRun() {
        this.zpyCompile()
        this.zpy.exec(this.pyCode).then(response => {
            this.output(response['data'])
        }).catch(err => {
            this.output(`[网络错误] 无法连接服务器: ${config.HOST}`)
        })
    }

    pyRun() {
        this.pyCompile()
        this.zpy.exec(this.pyCode).then(response => {
            this.output(response['data'])
        }).catch(err => {
            this.output(`[网络错误] 无法连接服务器: ${config.HOST}`)
        })
    }

    zpyCompile() {
        this.zpyCode = zpyEditor.getValue();
        this.pyCode = this.zpy.compile(this.zpyCode, 'zpy')
        pyEditor.setOption("value", this.pyCode)
    }

    pyCompile() {
        this.pyCode = pyEditor.getValue();
        this.zpyCode = this.zpy.compile(this.pyCode, 'py')
        zpyEditor.setOption("value", this.zpyCode)
    }
}

let zpyCode = source.example().codes[0]['source']
let ide = new IDE({zpyCode})

export {IDE, ide}