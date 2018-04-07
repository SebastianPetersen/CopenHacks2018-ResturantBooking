var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)

/*import ReactDOM from 'react-dom';
import Knight from './components/Knight';
import Square from './components/Square';

ReactDOM.render(
  <Square black>
    <Knight />
  </Square>,
  document.getElementById('app')
);*/
