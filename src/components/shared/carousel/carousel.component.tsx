import React from "react";
import "./carousel.component.scss";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            className="carousel-item"
            key={index}
            style={{
              /*animationDelay: `${30 / images.length * index }s`,*/
              animationDelay: `${
                (30 / images.length) * (images.length - index) - 1
              }s`,
            }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="carouselImage"
            />
          </div>
        ))}
        {images.map((image, index) => (
          <div
            className="carousel-item"
            key={index}
            style={{
              /*animationDelay: `${30 / images.length * index }s`,*/
              animationDelay: `${
                (30 / images.length) * (images.length - index) - 1
              }s`,
            }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="carouselImage"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
