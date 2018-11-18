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

    // Send a GET request to the API with the plussed search term and dispatch the response to the reducer
    return (
      fetch(`${SEARCH_URI}${plussedSearchTerm}`)
        .then(response => response.json())
        .then(response => response.hits)
        .then(searchResultsArray =>
          dispatch(searchHNSuccess(searchResultsArray, searchTerm))
        )
        // Catch any errors and dispatch them to the reducer
        .catch(error => dispatch(searchHNError(error)))
    );
  } else {
    // If no search term is provided dispatch a relevant error to the reducer
    dispatch(searchHNError('Error: No search term provided'));
  }
};

// Sync
// Request
export const SEARCH_HN_REQUEST = 'SEARCH_HN_REQUEST';
export const searchHNRequest = () => ({
  type: SEARCH_HN_REQUEST
});

// Success
export const SEARCH_HN_SUCCESS = 'SEARCH_HN_SUCCESS';
export const searchHNSuccess = (searchResults, searchTerm) => ({
  type: SEARCH_HN_SUCCESS,
  searchResults,
  searchTerm
});

// Error
export const SEARCH_HN_ERROR = 'SEARCH_HN_ERROR';
export const searchHNError = error => ({
  type: SEARCH_HN_ERROR,
  error
});
