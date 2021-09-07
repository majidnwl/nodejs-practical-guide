const fs = require('fs');

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);
    if(duplicateNote) {
        console.log('Title is taken!');
    } else {
        notes.push({
            title: title,
            body: body
        })
        saveNote(notes);

        console.log('Note is added!')
    }
}

const saveNote = function (notes) {
    const noteJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', noteJSON)
}

const loadNotes = function () {
    try {
        const bufferData = fs.readFileSync('notes.json');
        const dataJSON = bufferData.toString();
        return JSON.parse(dataJSON);
    } catch (err) {
        return [];
    }
}


module.exports = {
    addNote: addNote
}
