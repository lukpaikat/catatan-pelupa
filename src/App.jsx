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
    };
    this.onAddNote = this.onAddNote.bind(this);
    this.moveNote = this.moveNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
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
          ...currentList,
          newItem,
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

  render() {
    const { notes } = this.state;

    return (
      <>
        <AppBar />
        <div className="px-2">
          <NewNoteForm onAddNote={this.onAddNote} />
          <NoteList notes={notes} onMoveNote={this.moveNote} onDeleteNote={this.deleteNote} />
        </div>
      </>
    );
  }
}

export default App;
