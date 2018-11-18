/* Actions for searching HN API */
import { SEARCH_URI } from '../config';

/* === Fetch search results === */
// Async
export const fetchSearchResults = searchTerm => dispatch => {};

// Sync
export const SEARCH_HN_REQUEST = 'SEARCH_HN_REQUEST';
export const searchHNRequest = () => ({
  type: SEARCH_HN_REQUEST
});

export const SEARCH_HN_SUCCESS = 'SEARCH_HN_SUCCESS';
export const searchHNSuccess = () => ({
  type: SEARCH_HN_SUCCESS
});

export const SEARCH_HN_ERROR = 'SEARCH_HN_ERROR';
export const searchHNError = () => ({
  type: SEARCH_HN_ERROR
});
