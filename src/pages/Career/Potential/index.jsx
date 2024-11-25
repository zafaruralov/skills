import { useState } from "react";
import DynamicButton from "../../../components/button";

import Sparkle from "../../../assets/images/hire/sparkle.svg";
import rightIcon from "../../../assets/images/career/right-icon.svg";
import playIcon from "../../../assets/images/career/play-icon.svg";

import TAFU from "../../../assets/images/career/TAFU.svg";
import mohirdev from "../../../assets/images/career/mohirdev.svg";
import t4data from "../../../assets/images/career/t4data.svg";
import venkon from "../../../assets/images/career/venkon.svg";

const Potential = () => {
  const [queueImages] = useState([
    { id: 1, image: TAFU },
    { id: 2, image: mohirdev },
    { id: 3, image: t4data },
    { id: 4, image: venkon }
  ]);
  return (
    <section className="potentials">
      <div className="container potential">
        <div className="potential-wrapper">
          <div className="potential-ai">
            <img src={Sparkle} alt="ai icon" className="potential-ai-icon" />
            <p className="potential-ai-link">267 Active Recruiters are looking for candidates</p>
          </div>
          <div className="potential-subtitle">
            <h1 className="potential-title">
              Unlock your <span>potential</span> and seize growth opportunities!
            </h1>
            <p className="potential-desc">
              Specialists, showcase your expertise. Employers, find the right candidate for your projects. Collaborate
              and achieve success together!
            </p>
          </div>
          <div className="potential-actions">
            <DynamicButton
              className="button secondary sm"
              text="Assess yourself"
              rightIcon={
                <img
                  src={rightIcon}
                  alt="play icon"
                  aria-label="right icon"
                  style={{ width: "24px", height: "24px" }}
                />
              }
              gap="10px"
              onClick={() => console.log("Navigate Button Clicked")}
            />
            <DynamicButton
              text="Watch the video"
              leftIcon={
                <img src={playIcon} alt="play icon" aria-label="play icon" style={{ width: "24px", height: "24px" }} />
              }
              className="button primary sm"
              borderRadius="10px"
              gap="10px"
              onClick={() => console.log("Navigate Button Clicked")}
            />
          </div>
        </div>
        <div className="potential-image">
          {Array(3)
            .fill()
            .map((_, index) => (
              <div className="potential-image-wrapper" key={index}>
                <div className="potential-image-group">
                  {queueImages.map((item) => (
                    <div className="potential-image-husk">
                      <img key={item.id} src={item.image} alt="queue-images" aria-label="supports image" />
                    </div>
                  ))}
                </div>
                <div aria-hidden="true" className="potential-image-group">
                  {queueImages.map((item) => (
                    <div className="potential-image-husk">
                      <img key={item.id} src={item.image} alt="queue-images" aria-label="supports image" />
                    </div>
                  ))}
                </div>
                <div aria-hidden="true" className="potential-image-group">
                  {queueImages.map((item) => (
                    <div className="potential-image-husk">
                      <img key={item.id} src={item.image} alt="queue-images" aria-label="supports image" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
export default Potential;
