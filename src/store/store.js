// Redux/thunk
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Reducers
import { searchReducer } from '../reducers/search-reducer';

// Redux form
import { reducer as formReducer } from 'redux-form';

export default createStore(
  combineReducers({
    form: formReducer,
    search: searchReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
