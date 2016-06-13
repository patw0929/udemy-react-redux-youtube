import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    this.props.onSearchTermChange(e.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <input className="form-control"
          defaultValue={this.props.term}
          onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
