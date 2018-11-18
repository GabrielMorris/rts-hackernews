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

serviceWorker.unregister();
