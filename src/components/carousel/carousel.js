// Carousel.js
import React, { useState } from 'react';
import './carousel.css';

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <button onClick={prevImage} className="carousel-button left">&#10094;</button>
      <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} className="carousel-image" />
      <button onClick={nextImage} className="carousel-button right">&#10095;</button>
    </div>
  );
};

export default Carousel;
