class inputBody extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="form-input">
                <label for="body">Isi :</label>
                  <textarea name="body" id="body" cols="20" rows="10" required></textarea>
            </div>
        `;
    }
}

customElements.define('input-body', inputBody);
