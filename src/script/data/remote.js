function fetchNotes() {
    const baseUrl = 'https://notes-api.dicoding.dev/v2';

    const showLoadingIndicator = () => {
        document.getElementById('loadingIndicator').style.display = 'block';
    };

    const hideLoadingIndicator = () => {
        document.getElementById('loadingIndicator').style.display = 'none';
    };

    //   Menampilkan data
    const getNotes = async () => {
        showLoadingIndicator();
        try {
            const response = await fetch(`${baseUrl}/notes`);
            const responseJson = await response.json();
            hideLoadingIndicator();
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllNotes(responseJson.data);
            }
        } catch (error) {
            hideLoadingIndicator();
            showResponseMessage(error);
        }
    };

    //   Menambahkan data
    const insertNotes = (data) => {
        fetch(`${baseUrl}/notes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                showResponseMessage(responseJson.message);
                getNotes();
            })
            .catch((error) => {
                showResponseMessage(error);
            });
    };

    //   Menghapus data
    const removeNotes = (note_id) => {
        fetch(`${baseUrl}/notes/${note_id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                showResponseMessage(responseJson.message);
                getNotes();
            })
            .catch((error) => {
                showResponseMessage(error);
            });
    };

    //   Merender data notes
    const renderAllNotes = (data) => {
        const listNotesElement = document.getElementById('notes');

        listNotesElement.innerHTML = '';
        data.forEach((data, index) => {
            const delay = 50 * index;
            listNotesElement.innerHTML += `
            <div class="note" data-aos="fade-up" data-aos-delay="${delay}">
                <h2>${data.title}</h2>
                <p>${data.body}<br></p>
                <p class="date">Di buat pada tanggal: ${data.createdAt}</p>
                <button type="button" class="delete" id="${data.id}">Hapus</button>
            </div>
          `;
        });

        // Fungsi button hapus
        const buttons = document.querySelectorAll('.delete');
        buttons.forEach((button) => {
            button.addEventListener('click', (event) => {
                const note_id = event.target.id;

                removeNotes(note_id);
            });
        });
    };

    const showResponseMessage = (message = 'Cek koneksi internet anda') => {
        alert(message);
    };

    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('#form');
        const inputNotesTitle = document.querySelector('#title');
        const inputNotesBody = document.querySelector('#body');

        // Fungsi button tambah
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const data = {
                title: String(inputNotesTitle.value),
                body: String(inputNotesBody.value),
            };

            insertNotes(data);
        });

        getNotes();
    });
}

export default fetchNotes;
