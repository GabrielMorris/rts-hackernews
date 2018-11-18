/* Actions for searching HN API */
import { SEARCH_URI } from '../config';

/* === Fetch search results === */
// Async
export const fetchSearchResults = searchTerm => dispatch => {
  dispatch(searchHNRequest());

  if (searchTerm) {
    // Replace spaces with plus signs
    const plussedSearchTerm = searchTerm
      ? searchTerm.toLowerCase().replace(/ /g, '+', -1)
      : '';

    return fetch(`${SEARCH_URI}${plussedSearchTerm}`)
      .then(response => response.json())
      .then(response => response.hits)
      .then(searchResultsArray =>
        dispatch(searchHNSuccess(searchResultsArray, searchTerm))
      )
      .catch(error => dispatch(searchHNError(error)));
  } else {
    dispatch(searchHNError('Error: No search term provided'));
  }
};

// Sync
export const SEARCH_HN_REQUEST = 'SEARCH_HN_REQUEST';
export const searchHNRequest = () => ({
  type: SEARCH_HN_REQUEST
});

export const SEARCH_HN_SUCCESS = 'SEARCH_HN_SUCCESS';
export const searchHNSuccess = (searchResults, searchTerm) => ({
  type: SEARCH_HN_SUCCESS,
  searchResults,
  searchTerm
});

export const SEARCH_HN_ERROR = 'SEARCH_HN_ERROR';
export const searchHNError = error => ({
  type: SEARCH_HN_ERROR,
  error
});
