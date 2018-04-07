import React from 'react';
import ReactDOM from 'react-dom';

class RightMenu extends React.Component{
	render() {
		return (
			<div>
				<h1>Right Menu</h1><br/>
				<p>Right Menu</p>
			</div>
		)
	};
}

ReactDOM.render(
	<RightMenu />,
	document.getElementById('rmenu')
);
