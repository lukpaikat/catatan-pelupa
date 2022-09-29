import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ContentEditable from 'react-contenteditable';
import { toast } from 'react-toastify';
import { addNote } from '../utils/network-data';
import ActionButtonSave from '../components/buttons/ActionButtonSave';
import ActionLinkBack from '../components/buttons/ActionLinkBack';
import FloatingContainer from '../components/FloatingContainer';
import NotePaper from '../components/NotePaper';
import { HOME } from '../config/paths';
import LocaleContext from '../contexts/LocaleContext';
import InputFocusContext from '../contexts/InputFocusContext';
import dictionary from '../languages/dictionary';

function NewNotePageWrapper() {
  const navigate = useNavigate();
  const { inputFocusActivate, inputFocusDeactivate } = React.useContext(InputFocusContext);
  const { locale } = React.useContext(LocaleContext);

  const onAddNoteHandler = async (note) => {
    const { error, message } = await addNote(note);
    if (error) {
      toast.error(`${dictionary[locale].savingFailed}: ${message}`);
      return;
    }
    navigate(HOME);
  };

  return (
    <NewNotePage
      locale={locale}
      onAddNoteHandler={onAddNoteHandler}
      inputFocusActivate={inputFocusActivate}
      inputFocusDeactivate={inputFocusDeactivate}
    />
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
    const { locale, inputFocusActivate, inputFocusDeactivate } = this.props;
    const { title, body } = this.state;
    const {
      noteTitleInputPlaceholder,
      noteTitleInputLabel,
      noteBodyInputPlaceholder,
    } = dictionary[locale];
    return (
      <NotePaper noteTitle={title}>
        <label htmlFor="judulCatatan">
          <span className="sr-only">{noteTitleInputLabel}</span>
          <input
            className="block placeholder-black placeholder-opacity-50 bg-transparent
            my-2 w-full rounded-lg p-2 text-black-text-color dark:text-gray-200
            text-2xl lg:text-4xl 2xl:text-6xl font-bold placeholder:dark:text-gray-200 placeholder:dark:text-opacity-50"
            type="text"
            id="judulCatatan"
            value={title}
            maxLength="50"
            onChange={this.onTitleChange}
            onFocus={inputFocusActivate}
            onBlur={inputFocusDeactivate}
            placeholder={noteTitleInputPlaceholder}
            required
          />
        </label>
        <ContentEditable
          className="new-note-body block w-full min-h-[30vh] md:min-h-[50vh] h-fit mt-2 mb-4 p-2 rounded-lg text-xl lg:text-3xl 2xl:text-4xl dark:text-gray-200"
          innerRef={this.contentEditable}
          html={body}
          placeholder={noteBodyInputPlaceholder}
          onChange={this.onBodyChange}
          onFocus={inputFocusActivate}
          onBlur={inputFocusDeactivate}
        />
        <FloatingContainer>
          <ActionButtonSave onClick={this.onSubmit} />
          <ActionLinkBack to={HOME} />
        </FloatingContainer>
      </NotePaper>
    );
  }
}

NewNotePage.propTypes = {
  locale: PropTypes.string.isRequired,
  onAddNoteHandler: PropTypes.func.isRequired,
  inputFocusActivate: PropTypes.func.isRequired,
  inputFocusDeactivate: PropTypes.func.isRequired,
};

export default NewNotePageWrapper;
