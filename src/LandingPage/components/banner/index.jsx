/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useRef, useEffect, useState } from "react";
import { gsap, useGSAP } from "../../../utils/gsap";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const Banner = ({ announcements }) => {
  const container = useRef(null);
  const announcementRef = useRef(null);
  const [announcementWidth, setannouncementWidth] = useState(0);
  const [totalWidth, setTotalWidth] = useState(0);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(1);

  const { contextSafe } = useGSAP({ scope: container });

  useEffect(() => {
    if (announcementRef?.current) {
      setannouncementWidth(announcementRef.current.offsetWidth);
      setTotalWidth(announcementRef.current.offsetWidth * 4);
    }
  }, [announcements]);

  const duplicateItem = () => {
    const scrollerInner = announcementRef?.current;
    const scrollerContent = Array.from(scrollerInner?.children);

    // Duplicate each item
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.style.width = `${announcementWidth}px`;
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  };

  const clearPrevItem = () => {
    const scrollerInner = announcementRef?.current;
    for (let i = 0; i < 4; i++) {
      if (scrollerInner.children.length > 0) {
        // Ensure there are items to remove
        scrollerInner.removeChild(scrollerInner.children[0]);
      }
    }
  };

  const onClickNext = contextSafe(() => {
    if (announcementWidth * currentAnnouncement == totalWidth) {
      duplicateItem();
    }
    gsap.to(".announcement", {
      x: `-${announcementWidth * currentAnnouncement}`,
    });
    setCurrentAnnouncement((prev) => prev + 1);
  });

  //   useEffect(() => {
  //     duplicateItem();
  //   }, []);

  return (
    <div className="bg-secondary w-full py-2" ref={container}>
      <div className="container flex">
        <div
          className="w-[80%] flex flex-nowrap overflow-hidden"
          ref={announcementRef}
        >
          {announcements.map((h, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{ width: `${announcementWidth}px` }} // Dynamically apply width using inline styles
            >
              <p className="announcement text-xs text-primary font-light tracking-wider">
                {h}
              </p>
            </div>
          ))}
        </div>
        <div className="ml-auto flex gap-4 text-primary text-sm font-light">
          <button className="cursor-pointer">
            <FaChevronLeft />
          </button>
          <button onClick={onClickNext} className="cursor-pointer">
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
