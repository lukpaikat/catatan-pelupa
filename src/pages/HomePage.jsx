import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/network-data';
import filterNotes from '../utils/filterNotes';
import SearchBox from '../components/SearchBox';
import FloatingContainer from '../components/FloatingContainer';
import ActionButtonAdd from '../components/buttons/ActionButtonAdd';
import LocaleContext from '../contexts/LocaleContext';
import dictionary from '../languages/dictionary';

// TODO: selagi effect dijalankan, data yang dikirim ke daftar adalah data skeleton?
// TODO: ada bug menampilkan catatan tidak ada saat loading data
// solusi pakai todo yang pertama
// TODO: translate alerts

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
      notes: [],
      keyword: props.defaultKeyword || '',
    };
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.archiveNoteHandler = this.archiveNoteHandler.bind(this);
    this.keywordChangeHandler = this.keywordChangeHandler.bind(this);
    this.clearKeywordHandler = this.clearKeywordHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getActiveNotes();

    this.setState(() => ({ notes: data }));
  }

  async archiveNoteHandler(id) {
    const { error } = await archiveNote(id);
    if (error) {
      // eslint-disable-next-line no-alert
      alert('failed to archive note');
      return;
    }
    const { data } = await getActiveNotes();
    this.setState(() => (
      {
        notes: data,
      }
    ));
  }

  async deleteNoteHandler(id) {
    const { error } = await deleteNote(id);
    if (error) {
      // eslint-disable-next-line no-alert
      alert('failed to remove note');
      return;
    }
    const { data } = await getActiveNotes();
    this.setState(() => (
      {
        notes: data,
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
        <h2 className="text-lg 2xl:text-3xl font-bold text-gray-text-color semi-and-dark:text-white-text-color my-6">
          {dictionary[locale].activeNotes}
        </h2>
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
