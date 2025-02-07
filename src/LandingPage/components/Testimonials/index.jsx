import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useRef, useState } from "react";
import { GrNext } from "react-icons/gr";
import picture1 from "../../../assets/picture1.jpg";
import picture2 from "../../../assets/picture2.jpg";
import picture3 from "../../../assets/picture3.jpg";
import picture4 from "../../../assets/picture4.jpg";
import StarRating from "../../../components/StarRating";

const testimonials = [
  {
    url: picture1,
    alt: "Beautiful nature",
    name: "John Doe",
    quote: "This service is absolutely amazing! Highly recommended.",
    rating: 5,
  },
  {
    url: picture2,
    alt: "City skyline",
    name: "Jane Smith",
    quote: "I've never experienced such great quality and professionalism.",
    rating: 4,
  },
  {
    url: picture3,
    alt: "Ocean waves",
    name: "Emily Johnson",
    quote: "A truly wonderful experience from start to finish.",
    rating: 5,
  },
  {
    url: picture4,
    alt: "Mountain view",
    name: "Michael Brown",
    quote: "Fantastic! Will definitely come back again.",
    rating: 4,
  },
  {
    url: picture2,
    alt: "Dense forest",
    name: "Sophia Williams",
    quote: "Exceeded all my expectations. 5 stars!",
    rating: 5,
  },
  {
    url: picture3,
    alt: "Desert landscape",
    name: "Daniel Martinez",
    quote: "I am blown away by the attention to detail.",
    rating: 4,
  },
];

const ArrowButton = ({ children, className }) => {
  return (
    <button
      className={`${className} absolute !-top-1/2 -translate-y-1/2 text-xl !bg-white p-2 rounded-full shadow-xl`}
    >
      {children}
    </button>
  );
};

const Testimonials = () => {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  console.log(activeIndex);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current) {
      const mainSplide = mainRef.current.splide;
      const thumbsSplide = thumbsRef.current.splide;

      mainSplide.sync(thumbsSplide);
      thumbsSplide.sync(mainSplide);
      //   mainSplide.on("move", (newIndex) => {
      //     setActiveIndex(newIndex);
      //   });
    }
  }, []);

  return (
    <div className="gallery-with-thumbs relative container max-w-6xl mx-auto">
      <h4 className="text-center text-3xl tracking-wider uppercase -mb-4">
        Our Customers love us
      </h4>

      {/* Thumbnail Navigation */}
      <div className="py-8 max-w-2xl mx-auto relative w-full">
        <Splide
          ref={thumbsRef}
          options={{
            type: "loop",
            fixedWidth: 120,
            fixedHeight: 120,
            gap: 20,
            pagination: false,
            arrows: false,
            interval: 3000,
            isNavigation: true,
            focus: "center",
          }}
          aria-label="Thumbnails"
          hasTrack={false}
          className="w-full"
          onMove={(splide) => {
            console.log("here");
            console.log(splide.index);
            setActiveIndex(splide.index);
          }}
          //   onMounted={(splide) => {
          //     splide.sync(mainRef.current?.splide);
          //   }}
        >
          <SplideTrack>
            {testimonials.map((image, index) => (
              <SplideSlide
                key={index}
                className="!border-none flex items-center justify-center"
              >
                <img
                  src={image.url}
                  alt={`Thumbnail - ${image.alt}`}
                  className={`w-[60px] h-[60px] rounded-lg transition-all duration-300 object-cover object-center
                    ${index === activeIndex ? "scale-125" : "opacity-50"}`}
                />
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </div>

      {/* Main Carousel */}
      <div className="mt-4 w-full">
        <Splide
          ref={mainRef}
          options={{
            type: "loop",
            perPage: 1,
            pagination: false,
            arrows: true,
            interval: 3000,
            pauseOnHover: true,
            keyboard: true,
          }}
          aria-label="Main Slider"
          hasTrack={false}
          //   onMounted={(splide) => {
          //     splide.sync(thumbsRef.current);
          //   }}
        >
          <SplideTrack>
            {testimonials.map((image, index) => (
              <SplideSlide key={index}>
                <div className="max-w-lg mx-auto flex justify-center items-center flex-col font-light text-md">
                  <StarRating rating={image?.rating} />
                  <span className=" italic tracking-wider text-center mb-2">
                    {image.quote}
                  </span>
                  <div className="flex items-center">
                    <span className="w-4 h-[2px] bg-gray-500 inline-block"></span>
                    <span className="text-sm text-gray-500 uppercase ml-2">
                      {image.name}
                    </span>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows">
            <ArrowButton className="splide__arrow splide__arrow--prev left-4 top-1/2">
              <GrNext fill="black" stroke="black" />
            </ArrowButton>

            <ArrowButton className="splide__arrow splide__arrow--next right-4 top-1/2">
              <GrNext fill="black" stroke="black" />
            </ArrowButton>
          </div>
        </Splide>
      </div>
    </div>
  );
};

export default Testimonials;
