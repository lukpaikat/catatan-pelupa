import React from 'react';
import PropTypes from 'prop-types';
import CloseSearchButton from './CloseSearchButton';

// class ini menerima fungsi handler. Fungsi handler menerima argumen dari state searchKey

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchKey: '' };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onCloseHandler = this.onCloseHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState(() => ({ searchKey: event.target.value }));
    // tambahkan fungsi dari props kesini
    // fungsi yang menerima searchKey state
  }

  onCloseHandler() {
    const { closeSearchBox } = this.props;
    this.setState(() => ({ searchKey: '' }));
    closeSearchBox();
  }

  render() {
    const { searchKey } = this.state;

    return (
      <form className="flex items-center w-full justify-end">
        <label htmlFor="searchBox" className="w-full max-w-xs">
          <span className="sr-only">SearchBox</span>
          <input type="text" id="searchBox" placeholder="cari" onChange={this.onChangeHandler} value={searchKey} className="block w-full bg-white-text-color min-h-[44px] pl-2 rounded-l-lg" />
        </label>
        <CloseSearchButton onClick={this.onCloseHandler} />
      </form>
    );
  }
}

SearchBox.propTypes = {
  closeSearchBox: PropTypes.func.isRequired,
};

export default SearchBox;
