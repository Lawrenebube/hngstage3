
import React from 'react';
import './index.css';
import { Draggable } from 'react-beautiful-dnd';

const Image = ({ url, id, index }) => {
  return (
    <Draggable draggableId={`imageDrag-${id}`} index={index}>
      {(provided) => (
        <div
          className="images"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <img src={url} alt="Image" loading='lazy' />
        </div>
      )}
    </Draggable>
  );
};

export default Image;
