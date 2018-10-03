import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

require('./styles/base.scss');

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
