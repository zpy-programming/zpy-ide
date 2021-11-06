class Chapter {
    pull(event) {
        let node = event.srcElement.parentNode
        while (node.getAttribute('class') !== 'chapter') {
            node = node.parentNode
        }
        debug(node.childNodes)         
        let chapterTitle = node.childNodes[1]
        let chapterIcon = node.childNodes[1].childNodes[1]
        let status = chapterTitle.getAttribute('status')
        let chapterList = node.childNodes[3]
        if (status === "open") {
            chapterList.style.display = 'none'
            chapterTitle.setAttribute('status', 'close')
            chapterIcon.setAttribute('src', './assets/img/pulldown.svg')
        } else {
            chapterList.style.display = 'block'
            chapterTitle.setAttribute('status', 'open')
            chapterIcon.setAttribute('src', './assets/img/pullup.svg')
        }
    }
}



class Code {

    constructor() {
        this.dom = document.getElementById('chapter')
        this.data = source.example()
        this.render()
    }

    render() {
        let chapter = `
        <div class="chapter">
            <div class="chapter-title" status="open" onclick="chapter.pull(event)">
                <img class="icon" id="run" src="./assets/img/pullup.svg" />
                <p class="chapter-title-text">${this.data.name}</p>
            </div>
            <ul id="${this.data.example}" class="chapter-list"></ul>
        </div>`
        this.dom.innerHTML = chapter
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
        ide = new IDE({ zpyCode })
    }

    source(index) {
        return this.data.codes[index]['source']
    }
}


