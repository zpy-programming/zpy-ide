import {source} from "./source";
import {IDE, ide} from "./ide"
import pullUpSvg from "../img/pullup.svg"
import {log} from "../../../utils/log";
import {chapter} from "./chapter";

export class Code {

    constructor() {
        this.dom = document.getElementById('chapter')
        this.data = source
        this.render()
    }

    render() {
        for(let i = 0; i < this.data.length; i++) {
            let chapter = this.data[i]
            this.dom.innerHTML += `
                <div class="chapter">
                    <div class="chapter-title" status="open" onclick="chapter.pull(event)">
                        <img class="icon" id="run" src="${pullUpSvg}" alt="Pull Up" />
                        <p class="chapter-title-text">${chapter.name}</p>
                    </div>
                    <ul id="${chapter.id}" class="chapter-list"></ul>
                </div>`
            let chapterList = document.getElementById(chapter.id)
            let listStr = ''
            for (let j in chapter.codes) {
                let key = chapter.codes[j]
                let template = `<li class="chapter-item" onclick="code.inject(${i}, ${j})">${key.name}</li>`
                listStr += template
            }
            chapterList.innerHTML = listStr
        }
    }

    inject(chapter, index) {
        let zpyCode = this.source(chapter, index)
        try{
            window.ide = new IDE({ zpyCode })
        } catch (e) {
            log.error(e)
        }
    }

    source(chapter, index) {
        return this.data[chapter].codes[index]['source']
    }
}