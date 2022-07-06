import React from 'react';
import SubmitButton from './SubmitButton';

class NewNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      archived: false,
      color: 'orange',
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
    const { value: body } = event.target;

    this.setState((prevState) => ({
      ...prevState,
      body,
    }));
  }

  onSubmit(event) {
    event.preventDefault();
    const id = +new Date();
    const createdAt = new Date(id).toISOString();
    const toSubmit = {
      ...this.state,
      id,
      createdAt,
    };
    // eslint-disable-next-line no-console
    console.log(toSubmit);
  }

  render() {
    const { message, body } = this.state;
    return (
      <form className="py-2 px-6 w-full max-w-lg bg-orange-note-color mx-auto rounded-lg" onSubmit={this.onSubmit}>
        <label htmlFor="judulCatatan">
          <span className="sr-only">Judul Catatan</span>
          <input className="block placeholder-black placeholder-opacity-50 bg-transparent border border-button-border-color my-2 w-full rounded-lg p-2 text-black-text-color" type="text" id="judulCatatan" value={message} maxLength="20" onChange={this.onTitleChange} placeholder="Judul Catatan" />
        </label>
        <textarea className="block w-full my-2 border border-button-border-color bg-transparent p-2 placeholder-black placeholder-opacity-50 rounded-lg" rows="8" placeholder="tulis catatan disini" onChange={this.onBodyChange} />
        <SubmitButton text="Submit" value={body} />
      </form>
    );
  }
}

export default NewNoteForm;
