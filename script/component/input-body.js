class inputBody extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="form-input">
                <label for="body">Isi :</label>
                <textarea name="body" id="body" cols="20" rows="10" required></textarea>
                <p class="validity-body" id="validity-body"></p>
            </div>
        `;
    }
}

customElements.define('input-body', inputBody);