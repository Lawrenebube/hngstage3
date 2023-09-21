import React, { useState } from 'react';
import Imaged from './image';
import images from './imageData';

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredImages = images.filter((image) =>
    image.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
  );

  return (
    <div className="gallery">
      <input
        type="text"
        placeholder="Search by tag"
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredImages.map((image) => (
        <Imaged key={image.id} src={image.url.default} tags={image.tags} />
      ))}
    </div>
  );
};

export default Gallery;
