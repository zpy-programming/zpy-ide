import {log} from "../../../utils/log";
import {config} from "../../../utils/config";
import {keywords} from "./keywords";

export class ZpyCompile {
    constructor(keywords) {
        this.keywords = keywords
        log.info(this.keywords)
    }

    compile(code, type = "zpy") {

        function dispose(key, regexp) {
            let expression = String(eval(regexp))
            log.info(expression)
            return eval(expression)
        }

        if (type !== "zpy" && type !== "py") {
            throw new Error("Compile code should be one of zpy, py")
        }

        for (let keyword of keywords) {
            for (let word in keyword.words) {
                if (type === "zpy") code = code.replace(dispose(word, keyword.regexp), keyword.words[word])
                else if (type === "py") code = code.replace(dispose(keyword.words[word], keyword.regexp), word)
            }
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