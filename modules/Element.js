export class Element {
    constructor(elemName) {
        this.node = document.createElement(elemName)
    }

    addClassName(className) {
        this.node.classList.add(className)
        return this
    }

    onClick(func) {
       this.node.onclick = func
       
       return this
    }

    render(children = []) {
        children.forEach(child => {

            this.node.append(child)
        })
        

        return this.node
    }

    update(children = []) {

        this.node.innerHTML = ''

        children.forEach(child => {
            this.node.append(child)
        })
       
    }
}


