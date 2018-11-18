// React
import React from 'react';
import { connect } from 'react-redux';

// Components
import SearchResultsCard from './SearchResultsCard';
import { BeatLoader } from 'react-spinners';

// Styles
import './SearchResults.css';

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
    // Display a spinner if we're loading results
    if (this.props.loading) {
      return (
        <div className="sweet-loading">
          <BeatLoader loading={this.props.loading} />
        </div>
      );
    }

    // Otherwise generate and return the search results
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
