class Toggle {
    constructor(e) {
        this.e = e;
        this.toggle = this.e.querySelector('.toggle');
        this.paragraph = this.e.querySelector('p');
        this.toggle.addEventListener('click', () => {this.select()});
        this.toggle.addEventListener('mouseover', () => {this.mouseover()});
        this.toggle.addEventListener('mouseleave', () => {this.mouseleave()})

    }
    select() {
        const visibility = this.paragraph.style.visibility;
        if (visibility === 'visible') {
            this.paragraph.style.visibility = "hidden";
        } else {
            this.paragraph.style.visibility = "visible";
        }
    }
    mouseover() {
        this.toggle.style.color = "green"
        this.toggle.style.background = "white"
    }
    mouseleave() {
        this.toggle.style.color = "white"
        this.toggle.style.background = "green"
    }
}

let toggles = document.querySelectorAll('.mainInfo')

toggles.forEach(function(e) {
    return new Toggle(e)
})