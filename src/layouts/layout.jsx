import React, { useEffect } from "react";
import Hire from "../pages/Home/Hire/hire";
import Marqueue from "../pages/Home/Marqueue/marqueue";
import Candidates from "../pages/Home/Candidates/candidates";
import Steps from "../pages/Home/Steps/steps";
import Available from "../pages/Home/Available/available";
import Development from "../pages/Home/Development/development";
import Faq from "../pages/Home/Faq/faq";

const Layout = () => {
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
    <div className="container">
      <Hire />
      <Marqueue />
      <Candidates />
      <Steps />
      <Available />
      <Development />
      <Faq />
    </div>
  );
};

export default Layout;
