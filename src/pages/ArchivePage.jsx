import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import { getArchivedNotes, unarchiveNote, deleteNote } from '../utils/local-data';
import filterNotes from '../utils/filterNotes';
import SearchBox from '../components/SearchBox';
import LocaleContext from '../contexts/LocaleContext';

function ArchivePageWrapper() {
  const { locale } = React.useContext(LocaleContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyword = searchParams.get('keyword');
  const changeSearchParams = (keyword) => {
    setSearchParams({ keyword });
  };

  return (
    <ArchivePage
      locale={locale}
      defaultKeyword={searchKeyword}
      keywordChange={changeSearchParams}
    />
  );
}

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || '',
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
    const { keywordChange } = this.props;
    this.setState(() => (
      {
        keyword,
      }
    ));

    keywordChange(keyword);
  }

  clearKeywordHandler() {
    const { keywordChange } = this.props;
    this.setState(() => (
      {
        keyword: '',
      }
    ));
    keywordChange('');
  }

  render() {
    const { locale } = this.props;
    const { notes, keyword } = this.state;
    const filteredNotes = filterNotes(notes, keyword);

    return (
      <>
        <h2 className="text-lg 2xl:text-3xl font-bold text-gray-text-color semi-and-dark:text-white-text-color my-6">{locale === 'id' ? 'Catatan Arsip' : 'Archived Notes'}</h2>
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

ArchivePage.propTypes = {
  locale: PropTypes.string.isRequired,
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

ArchivePage.defaultProps = {
  defaultKeyword: '',
};

export default ArchivePageWrapper;
