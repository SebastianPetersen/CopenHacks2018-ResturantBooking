//var React = require('react');
//var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import { Knight } from './Knight.js';
import { Square } from './Square.js';


class Rip extends React.Component{
	render() {
		return (
			<Square></Square>
			)
	};
}



ReactDOM.render(
	<Rip />,
	document.getElementById('app')
);
