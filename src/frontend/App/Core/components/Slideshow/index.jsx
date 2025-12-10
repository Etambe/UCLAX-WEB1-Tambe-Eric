import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// components
import Slide from "./Slide";

// component
const Slideshow = ({ slides }) => {
    return (
        <Carousel showThumbs={false} autoplay={true}>
            {slides.map((slide) => {
                return <Slide key={slide.id} slide={slide} />;
            })}
        </Carousel>
    );
};

Slideshow.propTypes = {
    slides: PropTypes.array.isRequired,
};

export default Slideshow;
