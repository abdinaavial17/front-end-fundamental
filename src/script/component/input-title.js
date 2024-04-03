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
            </div>
        `;
    }
}

customElements.define('input-title', inputTitle);
