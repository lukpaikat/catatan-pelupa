import React from 'react';
import { getInitialData, showFormattedDate } from './utils/index';
import AppBar from './components/AppBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };
  }

  render() {
    const { notes } = this.state;

    return (
      <>
        <AppBar />
        <h1 className="text-xl font-bold text-white-text-color">Initial data content</h1>
        {notes.map((note) => <p className="text-white-text-color" key={note.id}>{showFormattedDate(note.createdAt)}</p>)}
      </>
    );
  }
}

export default App;
