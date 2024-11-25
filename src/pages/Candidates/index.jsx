import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import usePagination from "../../components/pagination";
import CDfilterSkeleton from "../../components/CDfilterSkeleton";
import candidateFilter from "../../assets/images/filter/candidate-filter.svg";
import arrowUp from "../../assets/images/filter/arrow-up.svg";
import search from "../../assets/images/filter/search.svg";
import money from "../../assets/images/filter/moneys.svg";
import arrowLeft from "../../assets/images/filter/arrow-left.svg";
import arrowRight from "../../assets/images/filter/arrow-right.svg";
import candidateImage from "../../assets/images/filter/candidate-image.svg";
import global from "../../assets/images/filter/global.svg";
import verify from "../../assets/images/filter/verify.svg";
import clock from "../../assets/images/filter/clock.svg";

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
      checkbox: ["Less than $100 ", "$100 to $500", "$500 - $1K", "$1K - $5K", "$5K"],
      isOpen: true,
      more: false
    }
  ]);
  const [salery, setSalery] = useState(true);
  const navigate = useNavigate();

  const [content, setContent] = useState([
    {
      id: 1,
      name: "Akbarali Khasanov",
      desc: ".Net Developer",
      price: "14,000,000 UZS",
      inShort:
        "Creating an interface that is as convenient and intuitive as possible for the user is my main goal. You need to figure out how to hook the user before he even thinks about it. To do this, I pay attention even to those details that at first glance do not matter.",
      actions: [
        {
          id: 1,
          title: "English - B2",
          img: global
        },
        {
          id: 2,
          title: "7 years",
          img: clock
        },
        {
          id: 3,
          title: "Senior",
          img: verify
        }
      ]
    },
    {
      id: 2,
      name: "Akbarali Khasanov",
      desc: ".Net Developer",
      price: "14,000,000 UZS",
      inShort:
        "Creating an interface that is as convenient and intuitive as possible for the user is my main goal. You need to figure out how to hook the user before he even thinks about it. To do this, I pay attention even to those details that at first glance do not matter.",
      actions: [
        {
          id: 1,
          title: "English - B2",
          img: global
        },
        {
          id: 2,
          title: "7 years",
          img: clock
        },
        {
          id: 3,
          title: "Senior",
          img: verify
        }
      ]
    },
    {
      id: 3,
      name: "Akbarali Khasanov",
      desc: ".Net Developer",
      price: "14,000,000 UZS",
      inShort:
        "Creating an interface that is as convenient and intuitive as possible for the user is my main goal. You need to figure out how to hook the user before he even thinks about it. To do this, I pay attention even to those details that at first glance do not matter.",
      actions: [
        {
          id: 1,
          title: "English - B2",
          img: global
        },
        {
          id: 2,
          title: "7 years",
          img: clock
        },
        {
          id: 3,
          title: "Senior",
          img: verify
        }
      ]
    },
    {
      id: 4,
      name: "Akbarali Khasanov",
      desc: ".Net Developer",
      price: "14,000,000 UZS",
      inShort:
        "Creating an interface that is as convenient and intuitive as possible for the user is my main goal. You need to figure out how to hook the user before he even thinks about it. To do this, I pay attention even to those details that at first glance do not matter.",
      actions: [
        {
          id: 1,
          title: "English - B2",
          img: global
        },
        {
          id: 2,
          title: "7 years",
          img: clock
        },
        {
          id: 3,
          title: "Senior",
          img: verify
        }
      ]
    },
    {
      id: 5,
      name: "Akbarali Khasanov",
      desc: ".Net Developer",
      price: "14,000,000 UZS",
      inShort:
        "Creating an interface that is as convenient and intuitive as possible for the user is my main goal. You need to figure out how to hook the user before he even thinks about it. To do this, I pay attention even to those details that at first glance do not matter.",
      actions: [
        {
          id: 1,
          title: "English - B2",
          img: global
        },
        {
          id: 2,
          title: "7 years",
          img: clock
        },
        {
          id: 3,
          title: "Senior",
          img: verify
        }
      ]
    },
    {
      id: 6,
      name: "Akbarali Khasanov",
      desc: ".Net Developer",
      price: "14,000,000 UZS",
      inShort:
        "Creating an interface that is as convenient and intuitive as possible for the user is my main goal. You need to figure out how to hook the user before he even thinks about it. To do this, I pay attention even to those details that at first glance do not matter.",
      actions: [
        {
          id: 1,
          title: "English - B2",
          img: global
        },
        {
          id: 2,
          title: "7 years",
          img: clock
        },
        {
          id: 3,
          title: "Senior",
          img: verify
        }
      ]
    }
  ]);
  const [isLoading, setIsLoading] = useState(true);

  const handleContainerClick = (id) => {
    navigate(`/candidates/${id}`);
  };

  const toggleFilter = (id) => {
    setFilter((prevFilter) =>
      prevFilter.map((filter) => (filter.id === id ? { ...filter, isOpen: !filter.isOpen } : filter))
    );

    const target = document.querySelector(`.faq-section__item:nth-child(${id})`);
    if (target) {
      target.classList.toggle("opened");
    }
  };
  const toggleSalery = () => {
    setSalery(!salery);
  };
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000000);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1); // Prevent overlap
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1); // Prevent overlap
    setMaxValue(value);
  };

  // TODO ---------------------------------------------------------------------------------------
  let totalPages = 10;
  const { currentPage, setCurrentPage, getPages, hasNext, hasPrev } = usePagination(totalPages);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);
  return isLoading ? (
    <CDfilterSkeleton />
  ) : (
    // return (
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
                <button className="button secondary cdfilter-filter__choosen-button">
                  Full-time
                  <div className="cdfilter-filter__choosen-button-x" />
                </button>
                <button className="button secondary cdfilter-filter__choosen-button">
                  Less than 5
                  <div className="cdfilter-filter__choosen-button-x" />
                </button>
                <button className="button secondary cdfilter-filter__choosen-button">
                  Less than $100 
                  <div className="cdfilter-filter__choosen-button-x" />
                </button>
              </div>
            </div>
            <div className="cdfilter-filter__items">
              {filter.map((item) => (
                <div className={`cdfilter-filter__item  ${item.isOpen ? "open" : ""}`} key={item.id}>
                  <div className="cdfilter-filter__navbar" onClick={() => toggleFilter(item.id)}>
                    <h1 className="cdfilter-filter__navbar-title">{item.title}</h1>
                    <img src={arrowUp} alt="arrow drop-down" className="cdfilter-filter__navbar-arrow" />
                  </div>
                  <div className="cdfilter-filter__body">
                    {item.checkbox.map((check, index) => (
                      <div key={index} className="cdfilter-filter__body-checkbox">
                        <label htmlFor={check + index} className="cdfilter-filter__body-label">
                          <input type="checkbox" id={check + index} />
                          <p className="cdfilter-filter__body-label-title">{check}</p>
                        </label>
                      </div>
                    ))}
                    {item.more && (
                      <div className="cdfilter-filter__body-checkbox-wrapper">
                        <img src={candidateFilter} alt="candidate add filter" />
                        <p className="cdfilter-filter__body-checkbox-more">View more</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className={`cdfilter-filter__salery ${salery ? "open" : ""}`}>
              <div className="cdfilter-filter__navbar" onClick={toggleSalery}>
                <h1 className="cdfilter-filter__navbar-title">Salary Range</h1>
                <img src={arrowUp} alt="arrow drop-down" className="cdfilter-filter__navbar-arrow" />
              </div>
              <div className="cdfilter-filter__salery-wrapper">
                <div className="cdfilter-filter__salery-container">
                  <input
                    type="range"
                    min="0"
                    max="10000000"
                    step="100000"
                    value={minValue}
                    onChange={handleMinChange}
                    className="thumb thumb-left"
                  />
                  <input
                    type="range"
                    min="0"
                    max="10000000"
                    step="100000"
                    value={maxValue}
                    onChange={handleMaxChange}
                    className="thumb thumb-right"
                  />
                  <div
                    className="cdfilter-filter__salery-track"
                    style={{
                      left: `${(minValue / 10000000) * 100}%`,
                      right: `${100 - ((maxValue - 1000000) / 9000000) * 100}%`
                    }}
                  ></div>
                </div>
                <div className="cdfilter-filter__salery-values">
                  <h2 className="cdfilter-filter__salery-text">{minValue.toLocaleString()} UZS</h2>
                  <h2 className="cdfilter-filter__salery-text">{maxValue.toLocaleString()} UZS</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="cdfilter-wrapper">
            <div className="cdfilter-search">
              <label form="cdfilter-name" className="cdfilter-name">
                <img src={search} alt="search-icon" />
                <input
                  className="cdfilter-search__field"
                  id="cdfilter-name"
                  aria-describedby="cdfilter-name-error"
                  required
                  placeholder="Search candidates"
                />
              </label>
            </div>
            <div className="cdfilter-content">
              <p className="cdfilter-content__navbar">5,512 talents available</p>
              {content.map((con) => (
                <div className="cdfilter-content__section" onClick={() => handleContainerClick(con.id)}>
                  <div className="cdfilter-content__section-navbar">
                    <div className="cdfilter-content__section-navbar-wrapper">
                      <img src={candidateImage} alt="canidadate name" />
                      <div className="cdfilter-content__section-navbar-info">
                        <h2 className="cdfilter-content__section-navbar-name">{con.name}</h2>
                        <p className="cdfilter-content__section-navbar-desc">{con.desc}</p>
                      </div>
                    </div>
                    <div className="cdfilter-content__section-navbar-price">
                      <img src={money} alt="money-icon" />
                      <p>{con.price}</p>
                    </div>
                  </div>
                  <p className="cdfilter-content__section-desc">{con.inShort}</p>
                  <div className="cdfilter-content__section-actions">
                    {con.actions.map((act) => (
                      <div key={act.id} className="cdfilter-content__section-action">
                        <img src={act.img} alt="image" />
                        <p className="cdfilter-content__section-action-title">{act.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="cdfilter-pagination">
              <ul className="cdfilter-pagination__page">
                <button
                  className={`cdfilter-pagination__page-button ${!hasPrev ? "noactive" : ""}`}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={!hasPrev}
                >
                  <img src={arrowLeft} alt="arrow-left" />
                  Previous
                </button>

                {getPages().map((p, index) =>
                  p === "..." ? (
                    <li className="cdfilter-pagination__page-empty" key={index}>
                      <span>...</span>
                    </li>
                  ) : (
                    <li
                      onClick={() => setCurrentPage(p)}
                      key={index}
                      className={`cdfilter-pagination__page-number ${p === currentPage ? "active" : ""}`}
                    >
                      {p}
                    </li>
                  )
                )}

                <li
                  className={`cdfilter-pagination__page-button ${!hasPrev ? "noactive" : ""}`}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                  <img src={arrowRight} alt="arrow-right" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CandidatesFilter;
