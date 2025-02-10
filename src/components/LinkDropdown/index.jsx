import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { gsap, useGSAP } from "../../utils/gsap";

const LinkDropdown = ({ title, dropdownList, path }) => {
  const container = useRef(null);
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId = useRef(null);

  // GSAP animation setup
  useGSAP(
    () => {
      gsap.set(dropdownRef.current, {
        opacity: 0,
        y: -10, // Slightly more movement for better animation
        display: "none",
      });
      return () => {
        gsap.killTweensOf(dropdownRef.current);
      };
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
          y: -10,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            if (!isOpen) gsap.set(dropdownRef.current, { display: "none" });
          },
        });
      }
    },
    { dependencies: [isOpen], scope: container }
  );

  const handleMouseEnter = () => {
    clearTimeout(timeoutId.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      if (
        !container.current.matches(":hover") &&
        !dropdownRef.current.matches(":hover")
      ) {
        setIsOpen(false);
      }
    }, 100); // Add slight delay to avoid flickering
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={container}
    >
      <a href={path} className="uppercase">
        {title}
      </a>
      <div className="relative">
        <div
          ref={dropdownRef}
          className="dropdown flex flex-col bg-background absolute top-2 min-w-full shadow-sm py-4 px-4 z-1000"
          onMouseEnter={handleMouseEnter} // Prevents closing if hovering inside dropdown
          onMouseLeave={handleMouseLeave} // Ensures it closes when fully out
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
