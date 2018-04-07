import React from 'react';
import ReactDOM from 'react-dom';
import {title} from './LeftMenu/title.js';

class LeftMenu extends React.Component{
	render() {
		return (
			<div>
				<h1>{ title}</h1><br/>
				<p>Left Menu</p>
			</div>
		)
	};
}

ReactDOM.render(
	<LeftMenu />,
	document.getElementById('lmenu')
);
