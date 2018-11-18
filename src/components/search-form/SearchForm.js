// React
import React from 'react';

// Redux Form
import { reduxForm, Field } from 'redux-form';

export class SearchForm extends React.Component {
  render() {
    return (
      <section>
        <form>
          <label htmlFor="search">Search: </label>

          <Field
            name="search"
            type="text"
            placeholder="Search HackerNews"
            component="input"
          />

          <button
            type="submit"
            onClick={event => {
              event.preventDefault();
            }}
          >
            Search
          </button>
        </form>
      </section>
    );
  }
}

export default reduxForm({
  form: 'search'
})(SearchForm);
