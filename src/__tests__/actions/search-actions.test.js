import {
  searchHNRequest,
  SEARCH_HN_REQUEST,
  searchHNSuccess,
  SEARCH_HN_SUCCESS,
  searchHNError,
  SEARCH_HN_ERROR
} from '../../actions/search-actions';

describe('Search request action', () => {
  it('Should return the search request action', () => {
    const action = searchHNRequest();

    expect(action).toEqual({
      type: SEARCH_HN_REQUEST
    });
  });
});

describe('Search success action', () => {
  it('Should return the search success action', () => {
    const action = searchHNSuccess();

    expect(action).toEqual({
      type: SEARCH_HN_SUCCESS
    });
  });
});

describe('Search error action', () => {
  it('Should return the search error action', () => {
    const action = searchHNError();

    expect(action).toEqual({
      type: SEARCH_HN_ERROR
    });
  });
});
