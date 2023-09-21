// import React, { useState } from 'react';
// import Image from './image';
// import images from './imageData';
// import './index.css';
// import { DragDropContext, Droppable } from 'react-beautiful-dnd';

// const ImageGallery = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredImages, setFilteredImages] = useState(images);
//   const [tagNotFound, setTagNotFound] = useState(false);


//   // const handleSearch = (e) => {
//   //   const term = e.target.value.toLowerCase();
//   //   setSearchTerm(term);

//   //   if (term === '') {
//   //     setFilteredImages(images);
//   //   } else {
//   //     const filtered = images.filter((image) =>
//   //       image.tags.some((tag) => tag.toLowerCase().includes(term))
//   //     );
//   //     setFilteredImages(filtered);
//   //   }
    
//   // };
//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);

//     if (term === '') {
//       setFilteredImages(images);
//       setTagNotFound(false);
//     } else {
//       const filtered = images.filter((image) =>
//         image.tags.some((tag) => tag.toLowerCase().includes(term))
//       );

//       setFilteredImages(filtered);
//       setTagNotFound(filtered.length === 0);
//     }
//   };

//   const onDragEnd = (result) => {
//     if (!result.destination) return;  

//     const updatedImages = [...filteredImages];
//     const [draggedImage] = updatedImages.splice(result.source.index, 1);
//     updatedImages.splice(result.destination.index, 0, draggedImage);

//     setFilteredImages(updatedImages);
//   };

//   return (
//     <div className="gallery">
//      
//       <div>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="imageGallery" direction="horizontal">
//           {(provided) => (
//             <div
//               className="imageGrid"
//               ref={provided.innerRef}
//               {...provided.droppableProps}
//             >
//               {filteredImages.map((image, index) => (
//                 <Image
//                   key={image.id}
//                   id={image.id}
//                   index={index}
//                   url={image.url}
//                 />
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//       </div>
      
//     </div>
//   );
// };

// export default ImageGallery;

// ImageGallery.js

import React, { useState } from 'react';
import Image from './image';
import images from './imageData';
import './index.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useAuth0 } from '@auth0/auth0-react';


const ImageGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredImages, setFilteredImages] = useState(images);
  const [tagNotFound, setTagNotFound] = useState(false);

  const { isAuthenticated, loginWithRedirect } = useAuth0();


  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === '') {
      setFilteredImages(images);
      setTagNotFound(false);
    } else {
      const filtered = images.filter((image) =>
        image.tags.some((tag) => tag.toLowerCase().includes(term))
      );

      setFilteredImages(filtered);
      setTagNotFound(filtered.length === 0);
    }
  };
  const onDragEnd = (result) => {
    if (!result.destination) return; // Dragged outside the list
  
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
  
    const updatedImages = [...filteredImages];
    const [draggedImage] = updatedImages.splice(sourceIndex, 1);
    updatedImages.splice(destinationIndex, 0, draggedImage);
  
    setFilteredImages(updatedImages);
  };
  
  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }

  return (
    <div className="gallery">
       <header>
        <h1>Photos</h1>
         <div className='searchbox'>
         <input
         type="text"
         placeholder="Search by tag"
         value={searchTerm}
         onChange={handleSearch}
       />
         <img src={require ('./assets/Search.svg').default} />
         </div>

      </header>
      <div >
  {tagNotFound && <div className="tagNotFound">Tag not found.</div>}
  <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="imageGallery" direction="horizontal">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="imageGridContent"
        >
          <div className="imageGrid">
          {filteredImages.map((image, index) => (
            <Image key={image.id} id={image.id} index={index} url={image.url} />
          ))} </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
</div>
    </div>
  );
};

export default ImageGallery;
