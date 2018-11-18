import React from 'react';
import { shallow } from 'enzyme';

import SearchResultsCard from '../../components/search-results/SearchResultsCard';

describe('<SearchResultsCard />', () => {
  it('Should render without crashing', () => {
    shallow(<SearchResultsCard result={{}} />);
  });
});
