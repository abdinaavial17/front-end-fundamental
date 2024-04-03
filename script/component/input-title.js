class inputTitle extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="form-input">
                <label for="title">Judul :</label>
                <input type="text" name="title" id="title" required autocomplete="off">
                <p class="validity-title" id="validity-title"></p>
            </div>
        `;
    }
}

customElements.define('input-title', inputTitle);