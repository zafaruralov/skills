import React, { useState } from "react";

import Click from "../../../assets/images/queue/click.svg";
import Epam from "../../../assets/images/queue/epam.svg";
import Exadel from "../../../assets/images/queue/exadel.svg";

const Marqueue = () => {
  const [queueImages] = useState([
    { id: 1, image: Exadel },
    { id: 2, image: Epam },
    { id: 3, image: Click }
  ]);
  return (
    <section className="marqueue">
      <div className="marqueue-wrapper">
        <div className="marqueue-group">
          {queueImages.map((item) => (
            <img key={item.id} src={item.image} alt="queue-images" aria-label="supports image" />
          ))}
        </div>
        <div aria-hidden="true" className="marqueue-group">
          {queueImages.map((item) => (
            <img key={item.id} src={item.image} alt="queue-images" aria-label="supports image" />
          ))}
        </div>
        <div aria-hidden="true" className="marqueue-group">
          {queueImages.map((item) => (
            <img key={item.id} src={item.image} alt="queue-images" aria-label="supports image" />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Marqueue;
