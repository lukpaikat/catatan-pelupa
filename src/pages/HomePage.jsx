import React from 'react';
import NoteList from '../components/NoteList';
import { getActiveNotes, archiveNote, deleteNote } from '../utils/local-data';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: '',
    };
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleArchiveNote = this.handleArchiveNote.bind(this);
  }

  handleDeleteNote(id) {
    deleteNote(id);
    this.setState(() => (
      {
        notes: getActiveNotes(),
      }
    ));
  }

  handleArchiveNote(id) {
    archiveNote(id);
    this.setState(() => (
      {
        notes: getActiveNotes(),
      }
    ));
  }

  render() {
    const { notes } = this.state;
    return (
      <>
        <h2 className="text-lg 2xl:text-3xl font-bold text-white-text-color my-6">Catatan Aktif</h2>
        {/* search Bar */}
        <NoteList
          notes={notes}
          onMoveNote={this.handleDeleteNote}
          onDeleteNote={this.handleArchiveNote}
        />
      </>
    );
  }
}

export default HomePage;
