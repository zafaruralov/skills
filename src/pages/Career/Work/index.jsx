import { useState } from "react";

import containerIcon from "../../../assets/images/career/container-icon.svg";

const HowItWorks = () => {
  const [queueImages] = useState([
    { id: 1, title: "Registration", desc: "Sign up and connect your LinkedIn to bring in your experience seamlessly." },
    { id: 2, title: "Build Your CV", desc: "Create a professional CV using our customizable templates in minutes." },
    {
      id: 3,
      title: "Pass assessments",
      desc: "Complete skill assessments to verify your expertise and boost credibility."
    },
    { id: 4, title: "Wait for job matches", desc: "No need to search—let jobs find you based on your verified skills." }
  ]);
  return (
    <section className="work">
      <div className="container works">
        <div className="works-subtitle">
          <h1 className="works-subtitle__title reveal">How it works</h1>
          <p className="works-subtitle__desc reveal">
            Bridging talent with leading companies, HR professionals, and career opportunities.
          </p>
        </div>
        <div className="works-containers reveal">
          {queueImages.map((item) => (
            <div className="works-container" key={item.id}>
              <img src={containerIcon} alt="" className="works-container__icon" />
              <div className="works-container__wrapper">
                <p className="works-container__navbar">0{item.id}.</p>
                <div className="works-container__subtitle">
                  <h1 className="works-container__title">{item.title}</h1>
                  <p className="works-container__desc">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
