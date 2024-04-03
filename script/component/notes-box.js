class notesBox extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
            <h2 align="center">Catatan yang telah di tambahkan</h2>
            <div class="notes" id="notes"></div>
        `;
    }
}

customElements.define('notes-box', notesBox);