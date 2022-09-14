import React from 'react';
import ContentEditable from 'react-contenteditable';
import getNoteColorClassName from '../utils/getNoteColorClassName';
import { addNote } from '../utils/local-data';
import ActionButton from '../components/ActionButton';

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
    addNote(this.state);
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
        <ContentEditable
          className="new-note-body block w-full min-h-[360px] h-[79vh] my-2 p-2 rounded-lg text-lg xl:text-xl"
          innerRef={this.contentEditable}
          html={body}
          data-placeholder="tulis catatan disini"
          onChange={this.onBodyChange}
        />
        <div className="flex gap-2 fixed bottom-8 right-8">
          <ActionButton title="save" onClick={this.onSubmit} />
        </div>
      </section>
    );
  }
}

export default NewNotePage;
