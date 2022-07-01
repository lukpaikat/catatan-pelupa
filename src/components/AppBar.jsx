import React from 'react';
import SearchButton from './SearchButton';

class AppBar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { isSearching: false };
    this.onToggleSearch = this.onToggleSearch.bind(this);
  }

  onToggleSearch() {
    this.setState((prevState) => !prevState);
  }

  render() {
    return (
      <header className="px-3 py-1 w-full flex justify-between">
        <h1>Catatan Pelupa</h1>
        <SearchButton />
      </header>
    );
  }
}

export default AppBar;
