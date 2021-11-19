import {source} from "./source";
import {IDE, ide} from "./ide"
import pullUpSvg from "../img/pullup.svg"
import {log} from "../../../utils/log";

export class Code {

    constructor() {
        this.dom = document.getElementById('chapter')
        this.data = source.example()
        this.render()
    }

    render() {
        this.dom.innerHTML = `
        <div class="chapter">
            <div class="chapter-title" status="open" onclick="chapter.pull(event)">
                <img class="icon" id="run" src="${pullUpSvg}" />
                <p class="chapter-title-text">${this.data.name}</p>
            </div>
            <ul id="${this.data.example}" class="chapter-list"></ul>
        </div>`
        let chapterList = document.getElementById(this.data.example)

        let listStr = ''
        for (let i in this.data.codes) {
            let key = this.data.codes[i]
            let template = `<li class="chapter-item" onclick="code.inject(${i})">${key.name}</li>`
            listStr += template
        }
        chapterList.innerHTML = listStr
    }

    inject(index) {
        let zpyCode = this.source(index)
        try{
            window.ide = new IDE({ zpyCode })
        } catch (e) {
            log.error(e)
        }
    }

    source(index) {
        return this.data.codes[index]['source']
    }
}