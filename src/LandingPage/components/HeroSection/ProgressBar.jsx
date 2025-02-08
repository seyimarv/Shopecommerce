import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const ProgressBar = () => {
  const progressRef = useRef(null);

  useGSAP(() => {
    gsap.to(progressRef.current, {
      width: "100%",
      duration: 5,
      repeat: -1, // Infinite repeats
      ease: "none",
      immediateRender: false,
    });
  }, []); // Empty dependency array means this runs once

  return (
    <div className="w-full bg-gray-400 h-full overflow-hidden">
      <div ref={progressRef} className="h-full bg-gray-900 w-0"></div>
    </div>
  );
};

export default ProgressBar;
