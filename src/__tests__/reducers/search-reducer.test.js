import { searchReducer, initialState } from '../../reducers/search-reducer';
import {
  SEARCH_HN_REQUEST,
  SEARCH_HN_SUCCESS,
  SEARCH_HN_ERROR
} from '../../actions/search-actions';

describe('Search reducer state tests', () => {
  it('Should set state for request', () => {
    const state = {};

    const action = {
      type: SEARCH_HN_REQUEST
    };

    const newState = searchReducer(state, action);

    expect(newState).toEqual({
      loading: true,
      searchError: null
    });
  });

  it('Should set state correctly for success', () => {
    const searchResults = ['test'];
    const searchTerm = 'hello';
    const state = initialState;
    const action = {
      type: SEARCH_HN_SUCCESS,
      searchResults,
      searchTerm
    };

    const newState = searchReducer(state, action);

    expect(newState).toEqual({
      searchResults,
      searchTerms: [searchTerm],
      searchError: null,
      loading: false
    });
  });

  it('Should set state correctly for an error', () => {
    const error = 'Error';
    const state = {};
    const action = {
      type: SEARCH_HN_ERROR,
      error
    };

    const newState = searchReducer(state, action);

    expect(newState).toEqual({
      searchError: error,
      loading: null
    });
  });

  it('Should set the default state if no action type is provided', () => {
    const state = {};
    const action = {
      type: 'PEANUT_BUTTER_IS_GREAT' // Its nutritious and delicious!
    };

    const newState = searchReducer(state, action);

    expect(newState).toEqual(state);
  });
});
