// Redux/thunk
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Reducers

// Redux form
import { reducer as formReducer } from 'redux-form';

// export default createStore(
//   combineReducers({ form: formReducer }),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunk)
// );

export default createStore(
  combineReducers({
    form: formReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
