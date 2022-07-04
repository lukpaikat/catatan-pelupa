import React from 'react';
import SearchButton from './SearchButton';
import SearchBox from './SearchBox';

class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowSearchbox: false };
    this.openSearchBox = this.openSearchBox.bind(this);
    this.closeSearchBox = this.closeSearchBox.bind(this);
  }

  openSearchBox() {
    this.setState(() => ({ isShowSearchbox: true }));
  }

  closeSearchBox() {
    this.setState(() => ({ isShowSearchbox: false }));
  }

  render() {
    const { isShowSearchbox } = this.state;
    const titleDisplayClass = isShowSearchbox ? 'hidden' : 'block';
    return (
      <header className="px-3 py-1 w-full flex items-center justify-between min-h-[44px]">
        <h1 className={`text-lg font-bold text-white-text-color ${titleDisplayClass}`}>Catatan Pelupa</h1>
        {isShowSearchbox
          ? <SearchBox closeSearchBox={this.closeSearchBox} />
          : <SearchButton onClick={this.openSearchBox} />}
      </header>
    );
  }
}

export default AppBar;
