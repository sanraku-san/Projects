import React, { useState } from 'react';
import '../styles/imageslider.css';
import image1 from '../media/image1.png'
import image2 from '../media/image2.png'
import image3 from '../media/image3.png'

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: image1,
      caption: 'Caption Text',
    },
    {
      src: image2,
      caption: 'Caption Text',
    },
    {
      src: image3,
      caption: 'Caption Text',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div className={`mySlides fade ${index === currentSlide ? 'active' : ''}`} key={index}>
          <div className="numbertext">{index + 1} / {images.length}</div>
          <img src={image.src} style={{ width: '25%' }} alt={`Slide ${index + 1}`} />
          <div className="text">{image.caption}</div>
        </div>
      ))}

      <a className="prev" onClick={prevSlide}>&#10094;</a>
      <a className="next" onClick={nextSlide}>&#10095;</a>

      <div style={{ textAlign: 'center' }}>
        {images.map((_, index) => (
          <span key={index} className="dot" onClick={() => goToSlide(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;