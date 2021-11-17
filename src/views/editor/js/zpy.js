import {log} from "../../../utils/log";
import {config} from "../../../utils/config";

export class ZpyCompile {
    constructor() {
        this.keywords = {}
        log.info(arguments)
        for (let key of arguments) {
            this.keywords = { ...this.keywords, ...key }
        }
        log.info(this.keywords)
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
        return axios({
            method: 'post',
            url: config.URL,
            data: {
                'code': code,
            },
        })
    }
}