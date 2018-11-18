import React from 'react';
import { shallow } from 'enzyme';

import { SearchResults } from '../../components/search-results/SearchResults';

describe('<SearchResults />', () => {
  it('Should render without crashing', () => {
    shallow(<SearchResults searchResults={[]} />);
  });
});
