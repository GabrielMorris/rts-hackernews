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
      return Object.assign({}, state, {
        loading: true,
        searchError: null
      });
    }

    case SEARCH_HN_SUCCESS: {
      const searchTerms = [action.searchTerm];

      if (state.searchTerms.length > 0) {
        searchTerms.push(...state.searchTerms);
      }

      return Object.assign({}, state, {
        searchResults: action.searchResults,
        searchTerms: searchTerms,
        loading: false,
        searchError: null
      });
    }

    case SEARCH_HN_ERROR: {
      return Object.assign({}, state, {
        searchError: action.error,
        loading: null
      });
    }

    default:
      return state;
  }
}
