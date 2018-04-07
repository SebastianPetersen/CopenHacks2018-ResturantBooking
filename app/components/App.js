import React from 'react';
import ReactDOM from 'react-dom';
import { Knight } from './Knight.js';
import { Square } from './Square.js';

class Board extends React.Component{
	render() {
		return (
			<Square></Square>
			)
	};
}

ReactDOM.render(
	<Board />,
	document.getElementById('app')
);
