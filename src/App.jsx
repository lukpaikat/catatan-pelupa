import React from 'react';
import { getInitialData, showFormattedDate } from './utils/index';

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
        <h1 className="text-xl font-bold">Initial data content</h1>
        {notes.map((note) => <p>{showFormattedDate(note.createdAt)}</p>)}
      </>
    );
  }
}

export default App;
