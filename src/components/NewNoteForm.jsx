import React from 'react';
import PropTypes from 'prop-types';
import SubmitButton from './SubmitButton';
import getNoteColorClassName from '../utils/getNoteColorClassName';

class NewNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      color: 'orange',
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
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
    const { value: body } = event.target;

    this.setState((prevState) => ({
      ...prevState,
      body,
    }));
  }

  onColorChange(event) {
    const { value: color } = event.target;

    this.setState((prevState) => ({
      ...prevState,
      color,
    }));
  }

  onSubmit(event) {
    event.preventDefault();
    const { onAddNote } = this.props;
    onAddNote(this.state);
    this.setState({
      title: '',
      body: '',
      color: 'orange',
    });
  }

  render() {
    const { title, body } = this.state;
    return (
      <form className={`py-2 px-6 w-full max-w-lg 2xl:max-w-2xl ${getNoteColorClassName() || 'bg-orange-note-color'} mx-auto rounded-lg transition-all duration-150`} onSubmit={this.onSubmit}>
        <label htmlFor="judulCatatan">
          <span className="sr-only">Judul Catatan</span>
          <input className="block placeholder-black placeholder-opacity-50 bg-transparent border border-button-border-color my-2 w-full rounded-lg p-2 text-black-text-color 2xl:text-xl" type="text" id="judulCatatan" value={title} maxLength="50" onChange={this.onTitleChange} placeholder="Judul Catatan" required />
        </label>
        <textarea className="block w-full my-2 border border-button-border-color bg-transparent p-2 placeholder-black placeholder-opacity-50 rounded-lg 2xl:text-xl" rows="8" placeholder="tulis catatan disini" onChange={this.onBodyChange} value={body} />
        <div className="flex justify-end">
          <SubmitButton text="Submit" />
        </div>
      </form>
    );
  }
}

NewNoteForm.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};

export default NewNoteForm;
