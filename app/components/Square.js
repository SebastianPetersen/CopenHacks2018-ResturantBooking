import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state = {color : 'grey'}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState({ color : 'white' });
  };

  render() {
    //const bg = this.props.bg;
    //const color = (bg == "1") ? 'grey' : 'white';

    return(
     <div style={{
      border: '1px solid black',
      backgroundColor: this.state.color,
      width: '30px',
      height: '30px'
     }}
       onClick={this.handleClick}>
     </div>
    );
  };
}
