import image from "../../../assets/Landing.jpg";
import Button from "../../../components/button";
import { useState, useRef } from "react";
import { SplideTrack, Splide, SplideSlide } from "@splidejs/react-splide";
import picture1 from "../../../assets/picture1.jpg";
import picture2 from "../../../assets/picture2.jpg";
import picture3 from "../../../assets/picture3.jpg";
import ProgressBar from "./progressBar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const images = [image, picture1, picture2, picture3];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRefs = useRef([]);
  const splideRef = useRef(null);

  // Reset animation when active index changes
  useGSAP(() => {
    const currentImage = imageRefs.current[activeIndex];

    if (currentImage) {
      // Reset previous animation
      gsap.set(currentImage, { scale: 1.05 });

      // Create new animation
      gsap.to(currentImage, {
        scale: 1,
        duration: 3,
        ease: "power2.out",
      });
    }
  }, [activeIndex]);

  const navigate = (index) => {
    if (splideRef.current) {
      splideRef.current.splide.go(index);
    }
  };

  return (
    <section className="">
      <div className="w-full h-[calc(100vh-6.375rem)] relative">
        <Splide
          ref={splideRef}
          options={{
            type: "loop",
            perPage: 1,
            pagination: false,
            arrows: false,
            interval: 5000,
            autoplay: true,
            keyboard: true,
            pauseOnHover: false,
          }}
          aria-label="Main Slider"
          hasTrack={false}
          onMove={(splide) => {
            setActiveIndex(splide.index);
          }}
          onMounted={() => {
            setActiveIndex(0);
          }}
        >
          <SplideTrack>
            {images.map((image, index) => (
              <SplideSlide key={index}>
                <div className="h-[calc(100vh-6.375rem)]">
                  <img
                    className="w-full object-cover object-center h-full"
                    src={image}
                    alt="current-item"
                    ref={(el) => (imageRefs.current[index] = el)}
                  />
                  <div className="absolute inset-0 bg-[white] opacity-3"></div>
                  <div className="container">
                    <div className="absolute bottom-40 flex flex-col gap-8 items-start">
                      <h4 className="text-5xl uppercase font-normal">
                        Enamel Pins
                      </h4>
                      <Button
                        className="py-3 min-w-[14rem]"
                        variant="secondary"
                      >
                        Shop Now
                      </Button>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
        <div className="flex gap-2 w-full justify-center absolute z-50000 bottom-8 items-end">
          {images.map((image, index) => (
            <button
              key={index}
              className={`cursor-pointer bg-gray-100 transition-all duration-300 ${
                index === activeIndex
                  ? "w-[3rem] h-[0.75rem]"
                  : "w-[3rem] h-[0.5rem]"
              }`}
              onClick={() => navigate(index)}
            >
              {index === activeIndex ? (
                <ProgressBar />
              ) : (
                <span className="w-full h-full bg-gray-400 block"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
