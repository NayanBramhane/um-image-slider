import { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ImageSlider = ({ sliderImages, autoSlideInterval=null }) => {
  const [activeImageNum, setCurrent] = useState(0);
  const length = sliderImages.length;

  const nextSlide = () => {
    setCurrent((activeImageNum + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((activeImageNum - 1 + length) % length);
  };

  if (autoSlideInterval) {
    useEffect(() => {
      const autoSlideTimer = setInterval(nextSlide, autoSlideInterval);

      return () => {
        clearInterval(autoSlideTimer);
      };
    }, [activeImageNum]);
  }

  if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
    return null;
  }

  return (
    <div>
      <section className="image-slider">
        <div className="left">
          <ArrowBackIosIcon onClick={prevSlide} />
        </div>
        <div className="right">
          <ArrowForwardIosIcon onClick={nextSlide} />
        </div>
        {sliderImages.map((currentSlide, ind) => {
          return (
            <div
              className={
                ind === activeImageNum ? "currentSlide active" : "currentSlide"
              }
              key={ind}
            >
              {ind === activeImageNum && (
                <img
                  src={currentSlide.url}
                  className="image"
                  alt={`Image ${ind}`}
                />
              )}
            </div>
          );
        })}
      </section>
      <div className="indicator">
        {sliderImages.map((_, index) => (
          <span
            key={index}
            className={index === activeImageNum ? "active-dot" : "dot"}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
