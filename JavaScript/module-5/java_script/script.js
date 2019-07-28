"use strict";

const Notepad = function Notepad(notes = []) {
  this.notes = notes;
};

Notepad.prototype.getNotes = function() {
  return this.notes;
};

Notepad.prototype.findNoteById = function(id) {
  for (let i = 0; i < this.notes.length; i += 1) {
    const note = this.notes[i];
    if (note.id === id) {
      return this.notes[i];
    }
  }
};

Notepad.prototype.saveNote = function(note) {
  this.notes.push(note);
  return note;
};

Notepad.prototype.updateNoteContent = function(id, updatedContent) {
  let i = this.notes.findIndex(e => e.id === id);
  let note = this.notes[i];
  this.notes[i] = { ...note, ...updatedContent };
  return this.notes[i];
};

Notepad.prototype.updateNotePriority = function(id, priority) {
  const note = this.findNoteById(id);
  note.priority = priority;
  return note;
};

Notepad.prototype.filterNotesByQuery = function(query) {
  const NotesByQuery = [];
  for (let note of this.notes) {
    let noteTitle = note.title.toLowerCase();

    let noteBody = note.body.toLowerCase();
    let keyWord = query.toLowerCase();

    if (
      noteTitle.includes(keyWord) === true ||
      noteBody.includes(keyWord) === true
    ) {
      NotesByQuery.push(note);
      return NotesByQuery;
    }
  }
};

Notepad.prototype.filterNotesByPriority = function(priority) {
  const filteredNotes = [];
  for (let i = 0; i < this.notes.length; i += 1) {
    const note = this.notes[i];
    if (note.priority === priority) {
      filteredNotes.push(note);
    }
  }
  return filteredNotes;
};
Notepad.prototype.deleteNote = function(id) {
  const note = this.findNoteById(id);
  let i = this.notes.indexOf(note);

  this.notes.splice(i, 1);
  return this.notes;
};

Notepad.Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2
};

const initialNotes = [
  {
    id: "id-1",
    title: "JavaScript essentials",
    body:
      "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
    priority: Notepad.Priority.HIGH
  },
  {
    id: "id-2",
    title: "Refresh HTML and CSS",
    body:
      "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
    priority: Notepad.Priority.NORMAL
  }
];

const notepad = new Notepad(initialNotes);

console.log("Все текущие заметки: ", notepad.getNotes());

notepad.saveNote({
  id: "id-3",
  title: "Get comfy with Frontend frameworks",
  body:
    "First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.",
  priority: Notepad.Priority.NORMAL
});

notepad.saveNote({
  id: "id-4",
  title: "Winter clothes",
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Notepad.Priority.LOW
});

console.log("Все текущие заметки: ", notepad.getNotes());

notepad.updateNotePriority("id-4", Notepad.Priority.NORMAL);

console.log(
  "Заметки после обновления приоритета для id-4: ",
  notepad.getNotes()
);

notepad.updateNotePriority("id-3", Notepad.Priority.LOW);

console.log(
  "Заметки после обновления приоритета для id-3: ",
  notepad.getNotes()
);

console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery("html")
);

console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery("javascript")
);

console.log(
  "Отфильтровали заметки по нормальному приоритету: ",
  notepad.filterNotesByPriority(Notepad.Priority.NORMAL)
);

notepad.updateNoteContent("id-3", {
  title: "Get comfy with React.js or Vue.js"
});

console.log(
  "Заметки после обновления контента заметки с id-3: ",
  notepad.getNotes()
);

notepad.deleteNote("id-2");
console.log("Заметки после удаления с id -2: ", notepad.getNotes());
