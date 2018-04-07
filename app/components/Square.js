import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export class Square extends React.Component {
  render() {
    const { black } = this.props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';


    return(

     <div style={{
      backgroundColor: 'black',
      color: 'black',
      width: '100%',
      height: '100%'
    }}>
      test{this.props.children}
    </div>
    );
  }
}

Square.propTypes = {
  black: PropTypes.bool
};
