class Toggle {
    constructor(e) {
        this.e = e;
        this.toggle = this.e.querySelector('.toggle');
        this.paragraph = this.e.querySelector('p');
        this.toggle.addEventListener('click', () => {this.select()})

    }
    select() {
        const visibility = this.paragraph.style.visibility;
        if (visibility === 'visible') {
            this.paragraph.style.visibility = "hidden";
        } else {
            this.paragraph.style.visibility = "visible";
        }
    }
}

let toggles = document.querySelectorAll('.mainInfo')

toggles.forEach(function(e) {
    return new Toggle(e)
})