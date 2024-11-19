import React, { useState } from "react";

const CandidatesFilter = () => {
  const [filter, setFilter] = useState([
    {
      id: 1,
      title: "Location",
      checkbox: ["Tashkent", "Jizzakh", "Fergana", "Namangan"],
      isOpen: true,
      more: true
    },
    {
      id: 2,
      title: "Position",
      checkbox: ["UX/UI designer", "Backend developer", "Fronted developer", "Graphic designer  "],
      isOpen: true,
      more: true
    },
    {
      id: 3,
      title: "Price",
      checkbox: ["Less than $100 ", "$100 to $500", "$500 - $1K", "$1K - $5K", "$1K - $5K"],
      isOpen: true,
      more: false
    }
  ]);

  const toggleFilter = (id) => {
    setFilter((prevFilter) =>
      prevFilter.map((filter) => (filter.id === id ? { ...filter, isOpen: !filter.isOpen } : filter))
    );

    const target = document.querySelector(`.faq-section__item:nth-child(${id})`);
    if (target) {
      target.classList.toggle("opened");
    }
  };
  return (
    <div className="cdfilter ">
      <section className="cdfilter-section">
        <div className="container cdfilter-gap">
          <div className="cdfilter-filter">
            <div className="cdfilter-filter__choosen">
              <div className="cdfilter-filter__choosen-navbar">
                <h1 className="cdfilter-filter__choosen-title">Advanced filter</h1>
                <p className="cdfilter-filter__choosen-clear">Clear</p>
              </div>
              <div className="cdfilter-filter__choosen-actions">
                <button className="button secondary cdfilter-filter__choosen-button">Full-time</button>
                <button className="button secondary cdfilter-filter__choosen-button">Less than 5</button>
                <button className="button secondary cdfilter-filter__choosen-button">Less than $100 </button>
              </div>
            </div>
            <div className="cdfilter-filter__items">
              {filter.map((item) => (
                <div className={`cdfilter-filter__item  ${item.isOpen ? "open" : ""}`} key={item.id}>
                  <div className="cdfilter-filter__navbar" onClick={() => toggleFilter(item.id)}>
                    <h1 className="cdfilter-filter__navbar-title">{item.title}</h1>
                    <img src="" alt="arrow drop-down" className="cdfilter-filter__navbar-arrow" />
                  </div>
                  <div className="cdfilter-filter__body">
                    {item.checkbox.map((check, index) => (
                      <div key={index} className="cdfilter-filter__body-checkbox">
                        <label for={"check" + index} className="cdfilter-filter__body-label">
                          <input type="checkbox" id={"check" + index} />
                          <p className="cdfilter-filter__body-label-title">{check}</p>
                        </label>
                      </div>
                    ))}
                    {item.more && <p className="cdfilter-filter__body-checkbox-more">View more</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cdfilter-wrapper">
            <div className="cdfilter-search">
              <input type="text" />
            </div>
            <div className="cdfilter-content">
              <h1>content</h1>
            </div>
            <div className="cdfilter-pagination">
              <h2>pagination</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CandidatesFilter;
