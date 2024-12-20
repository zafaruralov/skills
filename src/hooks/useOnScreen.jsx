import { useState, useEffect, useRef } from "react";

const useOnScreen = (ref, threshold = 0.3) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), { threshold });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, threshold]);

  return isIntersecting;
};
export default useOnScreen;
