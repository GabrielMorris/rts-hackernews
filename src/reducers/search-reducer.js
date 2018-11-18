// Actions
import {
  SEARCH_HN_REQUEST,
  SEARCH_HN_SUCCESS,
  SEARCH_HN_ERROR
} from '../actions/search-actions';

// Initial state
export const initialState = {
  searchResults: [],
  searchTerms: [],
  searchError: null,
  loading: null
};

export function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_HN_REQUEST: {
      // Set loading to true to display a loading spinner and reset the search error, if any
      return Object.assign({}, state, {
        loading: true,
        searchError: null
      });
    }

    case SEARCH_HN_SUCCESS: {
      const searchTerms = [action.searchTerm];

      /* Push the previous state, if any, to a new array per:
      Save the user's search terms in the Redux state (don't need to persist across sessions) */
      if (state.searchTerms.length > 0) {
        searchTerms.push(...state.searchTerms);
      }

      // Set search results, search terms, reset loading spinner and error
      return Object.assign({}, state, {
        searchResults: action.searchResults,
        searchTerms: searchTerms,
        loading: false,
        searchError: null
      });
    }

    case SEARCH_HN_ERROR: {
      // Set the error and reset loading spinner
      return Object.assign({}, state, {
        searchError: action.error,
        loading: null
      });
    }

    default:
      return state;
  }
}
