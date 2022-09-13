import React from 'react';
import PropTypes from 'prop-types';
import CloseSearchButton from './CloseSearchButton';
import 'animate.css';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchKey: '' };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onCloseHandler = this.onCloseHandler.bind(this);
  }

  onChangeHandler(event) {
    const { onSearchNote } = this.props;
    const { value } = event.target;
    this.setState(() => ({ searchKey: value }));
    onSearchNote(value);
  }

  onCloseHandler() {
    const { onSearchNote } = this.props;
    this.setState(() => ({ searchKey: '' }));
    onSearchNote('');
  }

  render() {
    const { searchKey } = this.state;

    return (
      <form className="flex items-center w-full justify-end animate__animated animate__fadeIn">
        <label htmlFor="searchBox" className="w-full sm:max-w-xs">
          <span className="sr-only">SearchBox</span>
          <input type="text" id="searchBox" placeholder="cari" onChange={this.onChangeHandler} value={searchKey} className="2xl:text-lg block w-full bg-white-text-color min-h-[44px] pl-2 rounded-l-lg" />
        </label>
        <CloseSearchButton onClick={this.onCloseHandler} />
      </form>
    );
  }
}

SearchBox.propTypes = {
  onSearchNote: PropTypes.func.isRequired,
};

export default SearchBox;
