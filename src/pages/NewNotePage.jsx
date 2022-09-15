import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import ContentEditable from 'react-contenteditable';
import getNoteColorClassName from '../utils/getNoteColorClassName';
import { addNote } from '../utils/local-data';
import ActionButton from '../components/ActionButton';
import FloatingContainer from '../components/FloatingContainer';

function NewNotePageWrapper() {
  const navigate = useNavigate();

  const onAddNoteHandler = (note) => {
    addNote(note);
    navigate('/');
  };

  return (
    <NewNotePage onAddNoteHandler={onAddNoteHandler} />
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
    const { title, body } = this.state;
    return (
      <section
        role="form"
        className={`py-2 px-6 w-full ${getNoteColorClassName(title) || 'bg-orange-note-color'} mx-auto rounded-lg transition-all duration-150`}
        onSubmit={this.onSubmit}
      >
        <label htmlFor="judulCatatan">
          <span className="sr-only">Judul Catatan</span>
          <input className="block placeholder-black placeholder-opacity-50 bg-transparent my-2 w-full rounded-lg p-2 text-black-text-color text-2xl lg:text-4xl 2xl:text-6xl font-bold" type="text" id="judulCatatan" value={title} maxLength="50" onChange={this.onTitleChange} placeholder="Judul Catatan ..." required />
        </label>
        <ContentEditable
          className="new-note-body block w-full min-h-[80vh] h-fit my-2 p-2 rounded-lg text-xl lg:text-3xl 2xl:text-4xl"
          innerRef={this.contentEditable}
          html={body}
          data-placeholder="tulis catatan disini"
          onChange={this.onBodyChange}
        />
        <FloatingContainer>
          <ActionButton title="save" onClick={this.onSubmit} />
        </FloatingContainer>
      </section>
    );
  }
}

NewNotePage.propTypes = {
  onAddNoteHandler: PropTypes.func.isRequired,
};

export default NewNotePageWrapper;
