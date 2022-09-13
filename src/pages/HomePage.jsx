import React from 'react';
import NoteList from '../components/NoteList';
import { getAllNotes } from '../utils/local-data';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      // keyword: '',
    };
  }

  render() {
    const { notes } = this.state;
    return (
      <>
        {/* Note type title */}
        {/* search Bar */}
        <NoteList
          notes={notes}
        />
      </>
    );
  }
}

export default HomePage;
