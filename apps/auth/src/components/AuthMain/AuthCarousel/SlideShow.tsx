import {useEffect, useState} from "react";

function SlideShow() {
  const images = [
    '/img.png',
    '/img_1.png',
    '/img_2.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <div className="carousel-wrapper">
      <div className="slideshow">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slideshow__slide ${index === currentIndex ? 'slideshow__slide--active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default SlideShow