import React from 'react';
import ReactDOM from 'react-dom';
import { DragSource } from 'react-dnd';

const ItemTypes = {
  KNIGHT: 'knight'
};

const knightSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

@DragSource(ItemTypes.KNIGHT, knightSource, collect)
export class Knight extends React.Component{
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  render() {
    const { connectDragSource, isDragging} = this.props;
    return connectDragSource(
      <div style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          cursor: 'move'
        }}>
        x
      </div>
    );
  }
}

/*ReactDOM.render(
  <Knight/>,
  document.getElementById('app')
);*/
