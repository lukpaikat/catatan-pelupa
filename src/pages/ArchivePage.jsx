import React from 'react';
import NoteList from '../components/NoteList';
import { getArchivedNotes, unarchiveNote, deleteNote } from '../utils/local-data';
import filterNotes from '../utils/filterNotes';
import SearchBox from '../components/SearchBox';

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: '',
    };
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.archiveNoteHandler = this.archiveNoteHandler.bind(this);
    this.keywordChangeHandler = this.keywordChangeHandler.bind(this);
    this.clearKeywordHandler = this.clearKeywordHandler.bind(this);
  }

  archiveNoteHandler(id) {
    unarchiveNote(id);
    this.setState(() => (
      {
        notes: getArchivedNotes(),
      }
    ));
  }

  deleteNoteHandler(id) {
    deleteNote(id);
    this.setState(() => (
      {
        notes: getArchivedNotes(),
      }
    ));
  }

  keywordChangeHandler(keyword) {
    this.setState(() => (
      {
        keyword,
      }
    ));
  }

  clearKeywordHandler() {
    this.setState(() => (
      {
        keyword: '',
      }
    ));
  }

  render() {
    const { notes, keyword } = this.state;
    const filteredNotes = filterNotes(notes, keyword);

    return (
      <>
        <h2 className="text-lg 2xl:text-3xl font-bold text-white-text-color my-6">Catatan Arsip</h2>
        <SearchBox
          keyword={keyword}
          clearKeyword={this.clearKeywordHandler}
          keywordChange={this.keywordChangeHandler}
        />
        <NoteList
          notes={filteredNotes}
          onMoveNote={this.archiveNoteHandler}
          onDeleteNote={this.deleteNoteHandler}
        />
      </>
    );
  }
}

export default ArchivePage;
