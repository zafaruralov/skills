import React, { useState } from "react";

import Vector from "../../../assets/images/candidates/vector.svg";
import IconLeft from "../../../assets/images/candidates/icon-left.svg";
import IconRight from "../../../assets/images/candidates/icon-right.svg";

const Candidates = () => {
  const [cardVariants] = useState([
    { id: 1, text: "Available candidates", number: "200+", icon: IconLeft, animation: "slideLeft", duration: 1 },
    { id: 2, text: "Hired candidates", number: "140+", icon: IconRight, animation: "slideLeft", duration: 1 },
    { id: 3, text: "Recruiters", number: "50+", icon: IconLeft, animation: "slideRight", duration: 1.5 },
    { id: 4, text: "Interviews", number: "400+", icon: IconRight, animation: "slideRight", duration: 1.5 }
  ]);
  return (
    <section className="candidates">
      {cardVariants.map((item, index) => (
        <div key={item.id} className="candidates-container reveal " style={{ "--i": item.id - 1.5 }}>
          <h1 className="candidates-container__header ">{item.text}</h1>
          <img src={Vector} alt="background vector" className="candidates-container__vector" />
          <img src={item.icon} alt="arrow" className="candidates-container__icon" />
          <h1 className="candidates-container__number">{item.number}</h1>
        </div>
      ))}
    </section>
  );
};
export default Candidates;
