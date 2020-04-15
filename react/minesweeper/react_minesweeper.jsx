import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Game from './Game';

function Root(props) {
  return (
    <div>
      <App name="David" />
      <Game />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
