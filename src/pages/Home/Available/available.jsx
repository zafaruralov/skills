import React, { useState } from "react";
import DynamicButton from "../../../components/button";

import GlobalIcon from "../../../assets/images/header/global.svg";
import FirstCandidates from "../../../assets/images/candidates/firts-candidate.svg";
import Clock from "../../../assets/images/candidates/clock.svg";
import LevelUp from "../../../assets/images/candidates/level-up.svg";

import Verify from "../../../assets/images/badge/verify.svg";

const Available = () => {
  const [candidateVariants] = useState([
    {
      id: 1,
      name: "Akbarali Khasanov",
      technology: ".Net Developer",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      salery: "1,000,000 UZS/h",
      image: FirstCandidates,
      animation: "slideLeft",
      duration: 1
    },
    {
      id: 2,
      name: "Jasur Hamroyev",
      technology: ".Net Developer",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      salery: "1,000,000 UZS/h",
      image: FirstCandidates,
      animation: "slideLeft",
      duration: 1
    },
    {
      id: 3,
      name: "Dilshod Jabborov",
      technology: ".Net Developer",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      salery: "1,000,000 UZS/h",
      image: FirstCandidates,
      animation: "slideRight",
      duration: 1.5
    },
    {
      id: 4,
      name: "Alisher Pardayev",
      technology: ".Net Developer",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      salery: "1,000,000 UZS/h",
      image: FirstCandidates,
      animation: "slideRight",
      duration: 1.5
    }
  ]);
  return (
    <section className="available">
      <header className="available-header reveal" style={{ "--i": 0.3 }}>
        <h1 className="available-header__title">Currently available candidates</h1>
        <p className="available-header__desc">Browse top candidates available to hire today.</p>
      </header>
      <div className="available-wrapper">
        {candidateVariants.map((item) => (
          <div key={item.id} className="available-wrapper__container reveal" style={{ "--i": item.id - 1.5 }}>
            <div className="available-wrapper__container-img">
              <div className="available-wrapper__container-badge">
                <img src={Verify} alt="Verify" className="available-wrapper__container-badge-icon" />
                <p className="available-wrapper__container-badge-title">Passed test</p>
              </div>
              <img
                src={item.image}
                alt="available candidates image"
                aria-label="available candidates image"
                className="available-wrapper__container-image"
              />
            </div>
            <div className="available-wrapper__container-content">
              <div className="available-wrapper__container-header">
                <div className="available-wrapper__container-subtitle">
                  <h1 className="available-wrapper__container-title">{item.name}</h1>
                  <p className="available-wrapper__container-tech">{item.technology}</p>
                </div>
                <p className="available-wrapper__container-desc">{item.desc}</p>
              </div>
              <div className="available-wrapper__container-datas">
                <div className="available-wrapper__container-data">
                  <img
                    className="available-wrapper__container-data-icon"
                    src={GlobalIcon}
                    alt="available candidates experience"
                  />
                  <h2 className="available-wrapper__container-data-text">English - B2</h2>
                </div>
                <div className="available-wrapper__container-data">
                  <img
                    className="available-wrapper__container-data-icon"
                    src={Clock}
                    alt="available candidates experience"
                  />
                  <h2 className="available-wrapper__container-data-text">7 yrs</h2>
                </div>
                <div className="available-wrapper__container-data">
                  <img
                    className="available-wrapper__container-data-icon"
                    src={LevelUp}
                    alt="available candidates experience"
                  />
                  <h2 className="available-wrapper__container-data-text">Senior</h2>
                </div>
              </div>
              <h1 className="available-wrapper__container-salery">{item.salery}</h1>
            </div>
          </div>
        ))}
      </div>
      <DynamicButton
        text="View all"
        padding="10px 24px"
        className="button primary sm"
        onClick={() => console.log("Navigate Button Clicked")}
      />
    </section>
  );
};
export default Available;
