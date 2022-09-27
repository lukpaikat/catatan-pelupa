import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import { getArchivedNotes, unarchiveNote, deleteNote } from '../utils/network-data';
import filterNotes from '../utils/filterNotes';
import SearchBox from '../components/SearchBox';
import LocaleContext from '../contexts/LocaleContext';
import dictionary from '../languages/dictionary';

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
      notes: [],
      keyword: props.defaultKeyword || '',
    };
    this.handleGetArchivedNotes = this.handleGetArchivedNotes.bind(this);
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.unarchiveNoteHandler = this.unarchiveNoteHandler.bind(this);
    this.keywordChangeHandler = this.keywordChangeHandler.bind(this);
    this.clearKeywordHandler = this.clearKeywordHandler.bind(this);
  }

  async componentDidMount() {
    this.handleGetArchivedNotes();
  }

  async handleGetArchivedNotes() {
    const { error, data } = await getArchivedNotes();
    if (error) {
      // TODO: translate alert
      // TODO: use custom alert from library
      // eslint-disable-next-line no-alert
      alert('failed to retrieve notes');
    } else {
      this.setState(() => ({ notes: data }));
    }
  }

  async unarchiveNoteHandler(id) {
    const { error } = await unarchiveNote(id);
    if (error) {
      // eslint-disable-next-line no-alert
      alert('failed to activate note');
      return;
    }
    this.handleGetArchivedNotes();
  }

  async deleteNoteHandler(id) {
    const { error } = await deleteNote(id);
    if (error) {
      // eslint-disable-next-line no-alert
      alert('failed to delete note');
      return;
    }
    this.handleGetArchivedNotes();
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
        <h2 className="text-lg 2xl:text-3xl font-bold text-gray-text-color semi-and-dark:text-white-text-color my-6">
          {dictionary[locale].archivedNotes}
        </h2>
        <SearchBox
          keyword={keyword}
          clearKeyword={this.clearKeywordHandler}
          keywordChange={this.keywordChangeHandler}
        />
        <NoteList
          notes={filteredNotes}
          onMoveNote={this.unarchiveNoteHandler}
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
