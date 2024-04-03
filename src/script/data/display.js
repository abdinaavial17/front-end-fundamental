// // import fetchNote from "./remote.js";
// import notesData from "./notes.js";

// const displayNotes = () => {
//   const notes = document.getElementById("notes");

//   notesData.forEach((note) => {
//     const noteDiv = document.createElement("div");
//     noteDiv.classList.add("note");

//     const titleElement = document.createElement("h2");
//     const bodyElement = document.createElement("p");
//     const dateElement = document.createElement("p");
//     dateElement.classList.add("date");

//     titleElement.textContent = note.title;

//     const bodyLines = note.body.split("\n");
//     bodyLines.forEach((line) => {
//       const lineElement = document.createElement("span");
//       lineElement.textContent = line;
//       bodyElement.appendChild(lineElement);
//       bodyElement.appendChild(document.createElement("br"));
//     });

//     const createdAt = new Date(note.createdAt);
//     const formattedDate = createdAt.toLocaleDateString("id-ID", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//       hour: "numeric",
//       minute: "numeric",
//       hour12: false,
//     });
//     dateElement.textContent = "Di buat pada tanggal: " + formattedDate;

//     noteDiv.appendChild(titleElement);
//     noteDiv.appendChild(bodyElement);
//     noteDiv.appendChild(dateElement);

//     notes.appendChild(noteDiv);
//   });
// };

// export { displayNotes };
