import { useState, useEffect } from "react";

const useInView = (ref) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust this if needed
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isInView;
};

export default useInView;
