import React from 'react';
import { getInitialData } from './utils/index';
import AppBar from './components/AppBar';
import NoteList from './components/NoteList';
import NewNoteForm from './components/NewNoteForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      // eslint-disable-next-line react/no-unused-state
      searchKeyword: '',
    };
    this.onAddNote = this.onAddNote.bind(this);
    this.moveNote = this.moveNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.searchNote = this.searchNote.bind(this);
  }

  onAddNote({ title, body, color }) {
    this.setState((prevState) => {
      const currentList = prevState.notes;
      const id = +new Date();
      const createdAt = new Date(id).toISOString();
      const newItem = {
        id,
        title,
        body,
        createdAt,
        archived: false,
        color,
      };

      return {
        notes: [
          newItem,
          ...currentList,
        ],
      };
    });
  }

  moveNote(id) {
    this.setState((prevState) => {
      const oldNotes = prevState.notes;
      const newNotes = oldNotes.map((note) => {
        if (note.id === id) return { ...note, archived: !note.archived };
        return note;
      });
      return {
        notes: newNotes,
      };
    });
  }

  deleteNote(id) {
    this.setState((prevState) => {
      const oldNotes = prevState.notes;
      const newNotes = oldNotes.filter((note) => note.id !== id);

      return {
        notes: newNotes,
      };
    });
  }

  searchNote(keyWord) {
    this.setState(() => ({
      searchKeyword: keyWord,
    }));
  }

  render() {
    const { notes, searchKeyword } = this.state;
    let notesToRender = [];
    const upperCaseKeyword = searchKeyword.toUpperCase();
    if (searchKeyword) {
      const filteredNotes = notes.filter((note) => (
        note.title.toUpperCase().indexOf(upperCaseKeyword) > -1
        || note.body.toUpperCase().indexOf(upperCaseKeyword) > -1));
      notesToRender = filteredNotes;
    } else {
      notesToRender = notes;
    }

    return (
      <>
        <AppBar onSearchNote={this.searchNote} />
        <div className="px-2">
          <NewNoteForm onAddNote={this.onAddNote} />
          <NoteList
            notes={notesToRender}
            onMoveNote={this.moveNote}
            onDeleteNote={this.deleteNote}
          />
        </div>
      </>
    );
  }
}

export default App;
