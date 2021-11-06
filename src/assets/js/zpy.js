class ZpyCompile {
    constructor() {
        this.keywords = {}
        console.log(arguments)
        for (let key of arguments) {
            this.keywords = { ...this.keywords, ...key }
        }
        debug(this.keywords)
    }
    compile(code, type = "zpy") {
        function dispose(key) {
            return new RegExp(key, 'g')
        }

        if (type !== "zpy" && type !== "py") {
            throw new Error("Compile code should be one of zpy, py")
        }

        for (let key in this.keywords) {
            if (type === "zpy") code = code.replace(dispose(key), this.keywords[key])
            else if (type === "py") code = code.replace(dispose(this.keywords[key]), key)
        }

        return code
    }
    async exec(code) {
        const url = URL
        return axios({
            method: 'post',
            url: url,
            data: {
                'code': code,
            },
        })

    }
}

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