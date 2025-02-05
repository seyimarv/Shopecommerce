import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { gsap, useGSAP } from "../../utils/gsap";

const LinkDropdown = ({ title, dropdownList, path }) => {
  const container = useRef(null);
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // GSAP animation setup
  useGSAP(
    () => {
      // Initial hidden state
      gsap.set(dropdownRef.current, {
        opacity: 0,
        y: -1,
        display: "none",
      });
    },
    { scope: container }
  );

  useGSAP(
    () => {
      if (isOpen) {
        gsap.to(dropdownRef.current, {
          opacity: 1,
          y: 0,
          display: "flex",
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(dropdownRef.current, {
          opacity: 0,
          y: -1,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(dropdownRef.current, { display: "none" });
          },
        });
      }
    },
    { dependencies: [isOpen], scope: container }
  );

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={container}
    >
      <a href={path} className="">
        {title}
      </a>
      <div
        ref={dropdownRef}
        className="dropdown flex flex-col bg-background absolute top-8 min-w-20 shadow-sm py-4 px-4"
      >
        {dropdownList?.map(({ title, path }, i) => (
          <a
            key={i}
            href={path}
            className="px-2 py-2 whitespace-nowrap text-sm"
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  );
};

LinkDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  dropdownList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  path: PropTypes.string.isRequired,
};

export default LinkDropdown;
