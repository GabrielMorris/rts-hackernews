// React
import React from 'react';

// Actions
import { fetchSearchResults } from '../../actions/search-actions';

// Redux Form
import { reduxForm, Field } from 'redux-form';

export class SearchForm extends React.Component {
  onSubmit(values) {
    this.props.dispatch(fetchSearchResults(values.search));
  }

  render() {
    return (
      <section>
        <form
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          <label htmlFor="search">Search: </label>

          <Field
            name="search"
            type="text"
            placeholder="Search HackerNews"
            component="input"
          />

          <button type="submit">Search</button>
        </form>
      </section>
    );
  }
}

export default reduxForm({
  form: 'search'
})(SearchForm);
