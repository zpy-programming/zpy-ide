import {log} from "../../../utils/log";
import {source} from "./source";
import pullUpSvg from "../img/pullup.svg"
import pullDownSvg from "../img/pulldown.svg"


class Chapter {
    pull(event) {
        let node = event.srcElement.parentNode
        while (node.getAttribute('class') !== 'chapter') {
            node = node.parentNode
        }
        log.info(node.childNodes)
        let chapterTitle = node.childNodes[1]
        let chapterIcon = node.childNodes[1].childNodes[1]
        let status = chapterTitle.getAttribute('status')
        let chapterList = node.childNodes[3]
        if (status === "open") {
            chapterList.style.display = 'none'
            chapterTitle.setAttribute('status', 'close')
            chapterIcon.setAttribute('src', pullDownSvg)
        } else {
            chapterList.style.display = 'block'
            chapterTitle.setAttribute('status', 'open')
            chapterIcon.setAttribute('src', pullUpSvg)
        }
    }
}

let chapter = new Chapter()

export {chapter}

