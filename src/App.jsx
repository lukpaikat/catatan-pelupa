import React from 'react';
import { Masonry } from 'masonic';
import { getInitialData } from './utils/index';
import AppBar from './components/AppBar';
import NoteCard from './components/NoteCard';

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
        <div className="px-2">
          <h1 className="text-xl font-bold text-white-text-color">Initial data content</h1>
          <Masonry items={notes} render={NoteCard} columnGutter={8} columnWidth={300} />
        </div>
      </>
    );
  }
}

export default App;
