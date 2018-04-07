import React from 'react';
import ReactDOM from 'react-dom';
//import { Knight } from './Knight.js';
import { Square } from './Square.js';

class Board extends React.Component{
	renderSquare(i) {
		return (
			<Square/>
		);
	}

	render() {
		const squares = [];
		for (let i = 0; i < (10*30); i++) {
			squares.push(this.renderSquare(i));
		}

		return (
			<div style={{width: '100%',
			             height: '100%',
								   display: 'flex',
								   flexWrap: 'wrap'}}>
				{squares}
			</div>
		)
	};
}

ReactDOM.render(
	<Board />,
	document.getElementById('app')
);
