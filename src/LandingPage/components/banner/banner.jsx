/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useRef, useEffect, useState } from "react";
import { gsap, useGSAP } from "../../../utils/gsap";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const Banner = ({ announcements }) => {
  const announcementRef = useRef(null);
  const [announcementWidth, setannouncementWidth] = useState(0);
  const [allowShift, setAllowShift] = useState(true);
  const [index, setCurrentIndex] = useState(0);
  const [announcementOffset, setAnnouncementOffset] = useState(0);

  const { contextSafe } = useGSAP({ scope: announcementRef });

  const duplicateItem = () => {
    const scrollerInner = announcementRef.current;
    const scrollerContent = Array.from(scrollerInner.children);
    console.log(scrollerContent);

    if (scrollerContent.length === 0) return;

    const firstSlide = scrollerContent[0];
    const lastSlide = scrollerContent[scrollerContent.length - 1];
    if (scrollerInner.dataset.cloned) return;
    scrollerInner.dataset.cloned = "true";

    const cloneFirst = firstSlide.cloneNode(true);
    const cloneLast = lastSlide.cloneNode(true);

    scrollerInner.appendChild(cloneFirst);
    scrollerInner.insertBefore(cloneLast, firstSlide);
  };

  useEffect(() => {
    if (announcementRef?.current) {
      setannouncementWidth(announcementRef.current.offsetWidth);
    //   duplicateItem();
    }
  }, []);

  const shiftSlide = contextSafe((dir) => {
    const posInitial = gsap.getProperty(announcementRef.current, "x") || 0;

    const newPos =
      dir === 1
        ? posInitial - announcementWidth
        : posInitial + announcementWidth;

    console.log("New Position:", newPos);
    console.log("Current Offset:", announcementOffset);

    gsap.to(announcementRef.current, {
      x: newPos,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        setCurrentIndex((prevIndex) => prevIndex + dir);
        checkIndex(index); // ✅ Correctly update offset after animation completes
      },
    });
  });

  const checkIndex = (newIndex) => {
    const slidesLength = announcements.length;

    if (newIndex < 0) {
      setTimeout(() => {
        gsap.set(announcementRef.current, {
          x: -slidesLength * announcementWidth,
        });
        setCurrentIndex(slidesLength - 1);
      });
    } else if (newIndex >= slidesLength) {
      setTimeout(() => {
        gsap.set(announcementRef.current, { x: -announcementWidth });
        setCurrentIndex(0);
      });
    }

    setAllowShift(true);
  };

  return (
    <div className="bg-secondary w-full py-4">
      <div className="container flex overflow-hidden">
        <div className="flex w-full flex-nowrap relative" ref={announcementRef}>
          {announcementWidth > 0 &&
            announcements.map((h, i) => (
              <div
                key={i}
                className="announcement flex-shrink-0 relative"
                style={{ width: `${announcementWidth}px` }}
              >
                <p className="text-xs text-primary font-light tracking-widest">
                  {h}
                </p>
              </div>
            ))}
        </div>
        <div className="flex justify-end gap-4 text-primary text-sm font-light absolute bg-secondary w-[40%] right-11">
          <button className="cursor-pointer" onClick={() => shiftSlide(-1)}>
            <FaChevronLeft />
          </button>
          <button className="cursor-pointer" onClick={() => shiftSlide(1)}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  announcement: PropTypes.string,
};

export default Banner;
