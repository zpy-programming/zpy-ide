class Render {
    constructor(id) {
        this.id = id
        this.target = document.getElementById(this.id)
    }
    mount(view) {
        return new Promise(resolve => {
            this.target.innerHTML = view
            resolve()
        })
    }
}

const render = new Render("app")

export {render}