import {ZpyCompile} from "./zpy"
import {reservedWords, functionWords} from "./keywords"
import {zpyEditor, pyEditor} from "./editor"
import {source} from "./source";

class IDE {
    constructor({zpyCode, pyCode}) {
        this.zpyCode = zpyCode
        this.pyCode = pyCode
        this.zpy = new ZpyCompile(reservedWords, functionWords)
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
        this.outputEditor.innerText = code
    }

    zpyRun() {
        this.zpyCompile()
        this.zpy.exec(this.pyCode).then(response => {
            this.output(response['data'])
        }).catch(err => {
            this.output("语法错误")
        })
    }

    pyRun() {
        this.pyCompile()
        this.zpy.exec(this.pyCode).then(response => {
            this.output(response['data'])
        }).catch(err => {
            this.output("语法错误")
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