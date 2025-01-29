import { useEffect, useState } from 'react'

function SlideShow() {
  const images = [
    'http://localhost:3001/img.png',
    'http://localhost:3001/img_1.png',
    'http://localhost:3001/img_2.png',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds
    return () => clearInterval(interval)
  }, [images.length])

  return (
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
  )
}

export default SlideShow
