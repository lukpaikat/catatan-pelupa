import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import NoteList from '../components/NoteList';
import { getActiveNotes, archiveNote, deleteNote } from '../utils/local-data';
import filterNotes from '../utils/filterNotes';
import SearchBox from '../components/SearchBox';
import FloatingContainer from '../components/FloatingContainer';
import ActionButton from '../components/ActionButton';

function HomePageWrapper() {
  const navigate = useNavigate();
  const toAddNotePage = () => {
    navigate('/notes/new');
  };

  return <HomePage toAddNotePage={toAddNotePage} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: '',
    };
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.archiveNoteHandler = this.archiveNoteHandler.bind(this);
    this.keywordChangeHandler = this.keywordChangeHandler.bind(this);
    this.clearKeywordHandler = this.clearKeywordHandler.bind(this);
  }

  archiveNoteHandler(id) {
    archiveNote(id);
    this.setState(() => (
      {
        notes: getActiveNotes(),
      }
    ));
  }

  deleteNoteHandler(id) {
    deleteNote(id);
    this.setState(() => (
      {
        notes: getActiveNotes(),
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
    const { toAddNotePage } = this.props;
    const { notes, keyword } = this.state;
    const filteredNotes = filterNotes(notes, keyword);

    return (
      <>
        <h2 className="text-lg 2xl:text-3xl font-bold text-white-text-color my-6">Catatan Aktif</h2>
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
        <FloatingContainer>
          <ActionButton title="add" onClick={toAddNotePage} />
        </FloatingContainer>
      </>
    );
  }
}

HomePage.propTypes = {
  toAddNotePage: PropTypes.func.isRequired,
};

export default HomePageWrapper;
