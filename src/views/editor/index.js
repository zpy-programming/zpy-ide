import "./css/solarized.css"
import "./css/clear.css"
import "./css/index.css"

import {log} from "../../utils/log";

import {view} from "./view"
import {render} from "../../utils/render";

render.mount(view).then(() => {
    import("./js/code").then(({Code}) => {
        log.info(Code)
        let code = new Code()
    })
    import("./js/chapter").then(({chapter}) => {
        window.chapter = chapter
    })
    import("./js/ide").then(({ide}) => {
        window.ide = ide
    })
})
