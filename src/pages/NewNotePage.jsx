import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ContentEditable from 'react-contenteditable';
import { addNote } from '../utils/local-data';
import ActionButtonSave from '../components/buttons/ActionButtonSave';
import FloatingContainer from '../components/FloatingContainer';
import NotePaper from '../components/NotePaper';
import { HOME } from '../config/paths';
import LocaleContext from '../contexts/LocaleContext';

function NewNotePageWrapper() {
  const navigate = useNavigate();
  const { locale } = React.useContext(LocaleContext);

  const onAddNoteHandler = (note) => {
    addNote(note);
    navigate(HOME);
  };

  return (
    <NewNotePage locale={locale} onAddNoteHandler={onAddNoteHandler} />
  );
}

class NewNotePage extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.state = {
      title: '',
      body: '',
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange(event) {
    const { value, maxLength } = event.target;
    const title = value.slice(0, maxLength);

    this.setState((prevState) => ({
      ...prevState,
      title,
    }));
  }

  onBodyChange(event) {
    this.setState(() => ({
      body: event.target.value,
    }));
  }

  onSubmit() {
    const { onAddNoteHandler } = this.props;
    onAddNoteHandler(this.state);
  }

  render() {
    const { locale } = this.props;
    const { title, body } = this.state;
    const notesSRTitle = locale === 'id' ? 'Judul Catatan' : 'Note Title';
    const notesTitleInputPlaceholder = locale === 'id' ? 'Judul Catatan ...' : 'Note Title ...';
    const notesBodyInputPlaceholder = locale === 'id' ? 'tulis catatannya disini' : 'write notes here';
    return (
      <NotePaper noteTitle={title}>
        <label htmlFor="judulCatatan">
          <span className="sr-only">{notesSRTitle}</span>
          <input
            className="block placeholder-black placeholder-opacity-50 bg-transparent
            my-2 w-full rounded-lg p-2 text-black-text-color dark:text-gray-200
            text-2xl lg:text-4xl 2xl:text-6xl font-bold placeholder:dark:text-gray-200 placeholder:dark:text-opacity-50"
            type="text"
            id="judulCatatan"
            value={title}
            maxLength="50"
            onChange={this.onTitleChange}
            placeholder={notesTitleInputPlaceholder}
            required
          />
        </label>
        <ContentEditable
          className="new-note-body block w-full min-h-[80vh] h-fit my-2 p-2 rounded-lg text-xl lg:text-3xl 2xl:text-4xl dark:text-gray-200"
          innerRef={this.contentEditable}
          html={body}
          placeholder={notesBodyInputPlaceholder}
          onChange={this.onBodyChange}
        />
        <FloatingContainer>
          <ActionButtonSave onClick={this.onSubmit} />
        </FloatingContainer>
      </NotePaper>
    );
  }
}

NewNotePage.propTypes = {
  locale: PropTypes.string.isRequired,
  onAddNoteHandler: PropTypes.func.isRequired,
};

export default NewNotePageWrapper;
