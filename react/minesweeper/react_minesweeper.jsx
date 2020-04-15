import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

function Root(props) {
  return (
    <div>
      Hello
      <App name="David" />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
