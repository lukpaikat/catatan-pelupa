import React from 'react';
import { getInitialData } from './utils/index';
import AppBar from './components/AppBar';
import NoteList from './components/NoteList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
    this.moveNote = this.moveNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
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
          <NoteList notes={notes} onMoveNote={this.moveNote} onDeleteNote={this.deleteNote} />
        </div>
      </>
    );
  }
}

export default App;
