var React = require('react');
var ReactDOM = require('react-dom');

class Rip extends React.Component{
	render() {
		return <h1>rip</h1>
	};
}

ReactDOM.render(
	<Rip />,
	document.getElementById('app')
);