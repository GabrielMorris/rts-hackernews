import React from 'react';
import { shallow } from 'enzyme';

import SearchForm from '../../components/search-form/SearchForm';

describe('<SearchForm />', () => {
  it('Should render without crashing', () => {
    shallow(<SearchForm />);
  });
});
