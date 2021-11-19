import {log} from "../../../utils/log";
import {config} from "../../../utils/config";
import {keywords} from "./keywords";

export class ZpyCompile {
    constructor(keywords) {
        this.keywords = keywords
        log.info(this.keywords)
    }

    compile(code, type = "zpy") {

        if (type !== "zpy" && type !== "py") {
            throw new Error("Compile code should be one of zpy, py")
        }

        for (let keyword of keywords) {
            for (let word in keyword.words) {
                let regexp

                if (this.browser() === 'Safari') regexp = keyword.safariReg
                else regexp = keyword.regexp

                if (type === "zpy") code = code.replace(this.dispose(word, regexp), keyword.words[word])
                else if (type === "py") code = code.replace(this.dispose(keyword.words[word], regexp), word)
            }
        }
        return code
    }

    browser() {
        const explorer = window.navigator.userAgent
        //判断是否为IE浏览器
        if (explorer.indexOf("MSIE") >= 0) {
            return 'ie';
        }
        //判断是否为Firefox浏览器
        else if (explorer.indexOf("Firefox") >= 0) {
            return 'Firefox';
        }
        //判断是否为Chrome浏览器
        else if (explorer.indexOf("Chrome") >= 0) {
            return 'Chrome';
        }
        //判断是否为Opera浏览器
        else if (explorer.indexOf("Opera") >= 0) {
            return 'Opera';
        }
        //判断是否为Safari浏览器
        else if (explorer.indexOf("Safari") >= 0) {
            return 'Safari';
        } else {
            return 'None'
        }
    }

    dispose(key, regexp) {
        let expression = String(eval(regexp))
        return eval(expression)
    }

    async exec(code) {
        return axios({
            method: 'post',
            url: config.HOST + config.URL,
            data: {
                'code': code,
            },
        })
    }
}