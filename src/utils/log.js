import {config} from "./config";

class Log {
    constructor() {
        this.debug = config.DEBUG
    }
    info(text) {
        if (this.debug) {
            console.log(text)
        }
    }
    error(text) {
        if (this.debug) {
            console.error(text)
        }
    }
    warn(text) {
        if (this.debug) {
            console.warn(text)
        }
    }
}

const log = new Log()

export {log}