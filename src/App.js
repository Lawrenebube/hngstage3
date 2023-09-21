import React from 'react';
import ImageGallery from './imageGallery';
import { DragDropContext, Droppable,Draggable } from 'react-beautiful-dnd';
const App = () => {
  return (
    <div className="App">
      {/* <DragDropContext> */}
        <ImageGallery />
      {/* </DragDropContext> */}
    </div>
  );
};

export default App;
// App.js


// export default App;
// App.js
// import React from 'react';
// import { DragDropContext } from 'react-beautiful-dnd';
// import images from './imageData';
// import DroppableArea from './drop';
// import Gallery from './search';
// import imageGallery from './imageGallery';

// const App = () => {
//   const handleDragEnd = (result) => {
//     // Handle the drag and drop logic here
//     // e.g., update the image order based on the result
//     console.log(result);
//   };

//   return (
//     // <Gallery/>
//     // <DragDropContext onDragEnd={handleDragEnd}>
//     //   <DroppableArea images={images} />
//     // </DragDropContext>
//     <imageGallery/>
//   );
// };

// export default App;


