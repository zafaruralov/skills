import React from "react";
import DynamicButton from "../../../components/button";

import HireBanner from "../../../assets/images/hire/hire-banner.svg";
import Sparkle from "../../../assets/images/hire/sparkle.svg";
import ArrowLink from "../../../assets/images/hire/arrow-link.svg";
import PlayCircle from "../../../assets/images/hire/play-circle.svg";

const Hire = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.4, duration: 0.8 }
    })
  };

  return (
    <section className="hire  animation">
      <div className="hire__wrapper">
        <div className="hire__subtitle">
          <div className="hire__subtitle-ai">
            <img src={Sparkle} alt="ai image" aria-label="ai ask image" />
            <p className="hire__subtitle-title">Find your candidate easily</p>
          </div>
          <div className="hire__subtitle-link">
            <p className="hire__subtitle-desc">why you should use IT Skills</p>
            <img src={ArrowLink} alt="link go image" aria-label="link" />
          </div>
        </div>

        <div className="hire__title">
          <div className="hire__title-wrapper">
            <h1 className="hire__title-title">
              <span className="hire__title-subtitle">HIRE</span>
              TOP talent today
            </h1>
            <p className="hire__title-desc">
              Don’t waste your time to seek candidates instead <br /> of building excellent product
            </p>
          </div>
          <div className="hire__actions">
            <DynamicButton
              text="Find a Developer"
              backgroundColor="#0d92f4"
              gap="10px"
              onClick={() => console.log("Navigate Button Clicked")}
            />
            <DynamicButton
              text="Play promo video"
              leftIcon={
                <img
                  src={PlayCircle}
                  alt="play icon"
                  aria-label="play icon"
                  style={{ width: "24px", height: "24px" }}
                />
              }
              textColor="#0d92f4"
              backgroundColor="#fff"
              borderRadius="10px"
              gap="10px"
              border="1px solid #0D92F4"
              onClick={() => console.log("Navigate Button Clicked")}
            />
          </div>
        </div>
      </div>

      <img
        custom={1}
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        src={HireBanner}
        alt="Banner image for hire icon"
        className="hire__icon"
      />
    </section>
  );
};
export default Hire;
