const fs = require("fs");
const chalk = require("chalk");
const getNotes = () => {
  console.log(loadNotes());
};

const listNotes = () => {
  console.log(chalk.blueBright.inverse('Your Notes'))
  const notes = loadNotes()
  notes.forEach(note => {
    console.log(note.title);
  });
};

const readNote = (title) =>{
const notes = loadNotes();
const note = notes.find((note) => note.title === title);
if(note){
  console.log(chalk.green.inverse.bold(note.title))
  console.log(chalk.inverse.italic(note.body))
}else{
  console.log(chalk.bgRed.inverse('Not notes'))
}
}

const addNote = (title, body) => {
  let notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.inverse("New note added!"));
  } else {
    console.log(chalk.inverse('Note title taken!'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((note) => note.title !== title);
  
  if (notes.length === newNotes.length) {
    console.log(chalk.red.inverse("There is no such note!"));
  } else {
    saveNotes(newNotes);
    console.log(chalk.green.inverse("Note removed!"));
  }
};

const saveNotes = function (notes) {
  fs.writeFileSync("notes.db", JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    let notes = fs.readFileSync("notes.db").toString();
    return JSON.parse(notes);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
