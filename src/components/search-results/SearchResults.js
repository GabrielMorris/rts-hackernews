// React
import React from 'react';
import { connect } from 'react-redux';

// Components
import SearchResultsCard from './SearchResultsCard';

export class SearchResults extends React.Component {
  generateSearchResults() {
    // If we have an error in the state we'll return that
    if (this.props.searchError) {
      return <div className="search-error">{this.props.searchError}</div>;
    }

    // Otherwise map over the results and create result components
    return this.props.searchResults.map(result => {
      return <SearchResultsCard result={result} />;
    });
  }

  render() {
    return (
      <div>
        <ul>{this.generateSearchResults()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.search.searchResults,
  searchError: state.search.searchError,
  loading: state.search.loading
});

export default connect(mapStateToProps)(SearchResults);
