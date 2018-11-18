// React
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Store from './store/store';

// Redux
import { Provider } from 'react-redux';

// Components
import App from './App';

// Styles
import './index.css';

ReactDOM.render(
  <div>
    <Provider store={Store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
-components
--search form
--search results
---search result
*/
