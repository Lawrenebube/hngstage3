import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import DraggableImage from './draggable';

const DroppableArea = ({ images }) => {
  return (
    <Droppable droppableId="imageGallery">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {images.map((image, index) => (
            <DraggableImage key={image.id} image={image} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DroppableArea;
