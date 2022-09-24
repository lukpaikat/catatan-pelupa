import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import { getActiveNotes, archiveNote, deleteNote } from '../utils/local-data';
import filterNotes from '../utils/filterNotes';
import SearchBox from '../components/SearchBox';
import FloatingContainer from '../components/FloatingContainer';
import ActionButtonAdd from '../components/buttons/ActionButtonAdd';
import LocaleContext from '../contexts/LocaleContext';

// TODO: selagi effect dijalankan, data yang dikirim ke daftar adalah data skeleton?

function HomePageWrapper() {
  const navigate = useNavigate();
  const { locale } = React.useContext(LocaleContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchKeyword = searchParams.get('keyword');
  const changeSearchParams = (keyword) => {
    setSearchParams({ keyword });
  };
  const toAddNotePage = () => {
    navigate('/notes/new');
  };

  return (
    <HomePage
      locale={locale}
      toAddNotePage={toAddNotePage}
      defaultKeyword={searchKeyword}
      keywordChange={changeSearchParams}
    />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || '',
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
    const { toAddNotePage, locale } = this.props;
    const { notes, keyword } = this.state;
    const filteredNotes = filterNotes(notes, keyword);

    return (
      <>
        <h2 className="text-lg 2xl:text-3xl font-bold text-gray-text-color semi-and-dark:text-white-text-color my-6">{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
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
          <ActionButtonAdd onClick={toAddNotePage} />
        </FloatingContainer>
      </>
    );
  }
}

HomePage.propTypes = {
  locale: PropTypes.string.isRequired,
  toAddNotePage: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

HomePage.defaultProps = {
  defaultKeyword: '',
};

export default HomePageWrapper;
