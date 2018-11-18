# RTS Hackernews search

React application for searching the Hackernews Algolia API per the following specs:

- Build an application that lets the user search the Hacker News Algolia API and displays a list of results (https://hn.algolia.com/api)
- Save the user's search terms in the Redux state (don't need to persist across sessions)

## Technologies

- React
  - React Spinners
- Redux
  - Redux Form
  - Redux Thunk

### Test suite

- Jest
- Enzyme

## Folder structure

```
/
  README.md
  package.json

  public/
    Static project template

  src/
    __tests__/
      Jest and Enzyme tests for actions, components, and reducers
    actions/
      Redux actions
    components/
      React components
    reducers/
      Redux reducers
    store/
      Redux store

    App.js - App container component
    config.js - Application configuration variables
    index.js - App entry point
    setupTests.js - Enzyme testing setup
```
