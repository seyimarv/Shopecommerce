import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  FaChevronRight,
  FaChevronLeft,
  FaPause,
  FaPlay,
} from "react-icons/fa6";

const Banner = ({ announcements }) => {
  const splideRef = useRef(null);
  const [autoPlay, setAutoPlay] = useState(true);

  const goNext = () => {
    if (splideRef.current) {
      splideRef.current.splide.go("+1");
    }
  };

  const goPrev = () => {
    if (splideRef.current) {
      splideRef.current.splide.go("-1");
    }
  };

  const toggleAutoplay = () => {
    if (splideRef.current) {
      const splide = splideRef.current.splide;
      const { Autoplay } = splide.Components;
      if (autoPlay) {
        Autoplay.pause();
      } else {
        Autoplay.play();
      }
      setAutoPlay(!autoPlay);
    }
  };

  return (
    <div className="bg-secondary w-full py-4 relative">
      <div className="container flex">
        <Splide
          ref={splideRef} // Store Splide instance
          options={{
            type: "loop",
            perPage: 1,
            autoplay: autoPlay,
            interval: 3000,
            pauseOnHover: true,
            speed: 500,
            arrows: false,
            pagination: false,
          }}
        >
          {announcements.map((h, i) => (
            <SplideSlide key={i}>
              <p className="text-xs text-primary font-light tracking-widest">
                {h}
              </p>
            </SplideSlide>
          ))}
        </Splide>
        <div className="flex justify-end gap-4 text-primary text-sm font-light">
          <button className="cursor-pointer" onClick={goPrev}>
            <FaChevronLeft />
          </button>
          <button className="cursor-pointer" onClick={toggleAutoplay}>
            {autoPlay ? <FaPause /> : <FaPlay />}
          </button>
          <button className="cursor-pointer" onClick={goNext}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  announcements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Banner;
