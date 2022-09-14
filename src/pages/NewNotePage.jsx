import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import SubmitButton from '../components/SubmitButton';
import getNoteColorClassName from '../utils/getNoteColorClassName';

class NewNotePage extends React.Component {
  constructor(props) {
    super(props);
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
    const bodyHTML = event.target.innerHTML;

    this.setState((prevState) => ({
      ...prevState,
      body: bodyHTML,
    }));
  }

  onSubmit(event) {
    event.preventDefault();
    const { onAddNote } = this.props;
    onAddNote(this.state);
    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    const { title, body } = this.state;
    return (
      <section
        role="form"
        className={`py-2 px-6 w-full ${getNoteColorClassName() || 'bg-orange-note-color'} mx-auto rounded-lg transition-all duration-150`}
        onSubmit={this.onSubmit}
      >
        <label htmlFor="judulCatatan">
          <span className="sr-only">Judul Catatan</span>
          <input className="block placeholder-black placeholder-opacity-50 bg-transparent my-2 w-full rounded-lg p-2 text-black-text-color text-2xl xl:text-4xl font-bold" type="text" id="judulCatatan" value={title} maxLength="50" onChange={this.onTitleChange} placeholder="Judul Catatan ..." required />
        </label>
        <div
          className="new-note-body block w-full min-h-[75vh] my-2 border border-button-border-color bg-transparent p-2 placeholder-black placeholder-opacity-50 rounded-lg text-lg xl:text-xl"
          contentEditable
          data-placeholder="tulis catatan disini"
          onChange={this.onBodyChange}
        >
          {parse(body)}
        </div>
        <div className="flex justify-end">
          <SubmitButton text="Submit" />
        </div>
      </section>
    );
  }
}

NewNotePage.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};

export default NewNotePage;
