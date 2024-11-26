import React, { useEffect } from "react";
import Potential from "../pages/Career/Potential";
import HowItWorks from "../pages/Career/Work";
import Discover from "../pages/Career/Discover";
import Faq from "../pages/Career/Faq";
import Evaluate from "../pages/Career/Evaluate";

const CareerLayout = () => {
  // TODO
  useEffect(() => {
    const toBottomScroller = () => {
      const reveals = document.querySelectorAll(".reveal");

      const handleScroll = () => {
        const windowHeight = window.innerHeight;

        reveals.forEach((reveal) => {
          const revealTop = reveal.getBoundingClientRect().top;
          const revealPoint = 50;
          if (revealTop < windowHeight - revealPoint || reveal.classList.contains("open")) {
            reveal.classList.add("active", "line");
          }
        });
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };

    toBottomScroller();
  }, []);

  return (
    <div>
      <Potential />
      <HowItWorks />
      <Discover />
      <Faq />
      <Evaluate />
    </div>
  );
};

export default CareerLayout;
