import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { searchTerm } from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.searchTerm = _.debounce((term) => {
      this.props.searchTerm(term);
    }, 300);
  }

  handleChange(e) {
    this.searchTerm(e.target.value);
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

function mapStateToProps(state) {
  return {
    term: state.term,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    searchTerm,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
