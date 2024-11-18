import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./sidebar/sidebar";
import DynamicButton from "../components/button";

import HireBanner from "../assets/images/hire/hire-banner.svg";
import Sparkle from "../assets/images/hire/sparkle.svg";
import ArrowLink from "../assets/images/hire/arrow-link.svg";
import PlayCircle from "../assets/images/hire/play-circle.svg";

import Click from "../assets/images/queue/click.svg";
import Epam from "../assets/images/queue/epam.svg";
import Exadel from "../assets/images/queue/exadel.svg";

import GlobalIcon from "../assets/images/header/global.svg";

import Vector from "../assets/images/candidates/vector.svg";
import IconLeft from "../assets/images/candidates/icon-left.svg";
import IconRight from "../assets/images/candidates/icon-right.svg";

import FirstCandidates from "../assets/images/candidates/firts-candidate.svg";
import Clock from "../assets/images/candidates/clock.svg";
import LevelUp from "../assets/images/candidates/level-up.svg";

import Hash from "../assets/images/steps/hash.svg";
import GreenHash from "../assets/images/steps/green-hash.svg";
import BlueHash from "../assets/images/steps/blue-hash.svg";

import Verify from "../assets/images/badge/verify.svg";

import FooterIcon from "../assets/images/footer/footer-icon.svg";
import Call from "../assets/images/footer/call.svg";
import Instagram from "../assets/images/footer/instagram.svg";
import LinkedIn from "../assets/images/footer/linkedIn.svg";
import Telegram from "../assets/images/footer/telegram.svg";
import Sms from "../assets/images/footer/sms.svg";

const ChatLayout = () => {
  const [queueImages] = useState([
    { id: 1, image: Exadel },
    { id: 2, image: Epam },
    { id: 3, image: Click }
  ]);
  const [cardVariants] = useState([
    { id: 1, text: "Available candidates", number: "200+", icon: IconLeft, animation: "slideLeft", duration: 1 },
    { id: 2, text: "Hired candidates", number: "140+", icon: IconRight, animation: "slideLeft", duration: 1 },
    { id: 3, text: "Recruiters", number: "50+", icon: IconLeft, animation: "slideRight", duration: 1.5 },
    { id: 4, text: "Interviews", number: "400+", icon: IconRight, animation: "slideRight", duration: 1.5 }
  ]);
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
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "Can I hire developer in one day?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      isOpen: false
    },
    {
      id: 2,
      question: "Can I hire developer in one day?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      isOpen: false
    },
    {
      id: 3,
      question: "Can I hire developer in one day?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      isOpen: false
    },
    {
      id: 4,
      question: "Can I hire developer in one day?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      isOpen: false
    }
  ]);

  const toggleFaq = (id) => {
    setFaqs((prevFaqs) => prevFaqs.map((faq) => (faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq)));
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.4, duration: 0.8 }
    })
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.4, duration: 0.8 }
    })
  };

  // TODO
  useEffect(() => {
    const toBottomScroller = () => {
      const reveals = document.querySelectorAll(".reveal");

      const handleScroll = () => {
        const windowHeight = window.innerHeight;

        reveals.forEach((reveal) => {
          const revealTop = reveal.getBoundingClientRect().top;
          const revealPoint = 50;

          if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add("aktiv", "line");
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
    <div className="">
      <Sidebar className="chat-sidebar container" />
      <section className="hire container animation">
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
                padding="25px 15px"
                className="button secondary"
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
                padding="11px 15px"
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
      <section className="marqueue container">
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
      <section className="candidates container ">
        {cardVariants.map((item, index) => (
          <div key={item.id} className="candidates-container reveal " style={{ "--i": item.id - 1.5 }}>
            <h1 className="candidates-container__header ">{item.text}</h1>
            <img src={Vector} alt="background vector" className="candidates-container__vector" />
            <img src={item.icon} alt="arrow" className="candidates-container__icon" />
            <h1 className="candidates-container__number">{item.number}</h1>
          </div>
        ))}
      </section>
      <section className="steps container">
        <div className="steps-header reveal" style={{ "--i": 0.3 }}>
          <h2 className="steps-header__subtitle">Get candidate in 3 steps</h2>
          <p className="steps-header__desc">
            Find and hire the right candidate in 3 simple steps – fast and hassle-free!
          </p>
        </div>
        <div className="steps-wrapper reveal" style={{ "--i": 0.5 }}>
          <div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="steps-wrapper__container dark"
          >
            <img className="steps-wrapper__container-image" src={Hash} alt="image bg" aria-label="image stapes" />
            <h1 className="steps-wrapper__container-title">Login</h1>
            <p className="steps-wrapper__container-desc">Login your account</p>
            <h1 className="steps-wrapper__container-ways">1</h1>
          </div>
          <div className="steps-wrapper__container blue">
            <img className="steps-wrapper__container-image" src={BlueHash} alt="image bg" aria-label="image stapes" />
            <h1 className="steps-wrapper__container-title">Choose</h1>
            <p className="steps-wrapper__container-desc">Choose one of candidates</p>
            <h1 className="steps-wrapper__container-ways">2</h1>
          </div>
          <div className="steps-wrapper__container green">
            <img className="steps-wrapper__container-image" src={GreenHash} alt="image bg" aria-label="image stapes" />
            <h1 className="steps-wrapper__container-title">Hire</h1>
            <p className="steps-wrapper__container-desc">Hire best Candidate</p>
            <h1 className="steps-wrapper__container-ways">3</h1>
          </div>
        </div>
      </section>
      <section className="available container">
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
          className="button"
          backgroundColor="inherit"
          textColor="#0d92f4"
          border="1px solid #0d92f4"
          onClick={() => console.log("Navigate Button Clicked")}
        />
      </section>
      <section className="development container">
        <div className="development-container">
          <div className="development-container__content">
            <h1 className="development-container__content-title">
              Are you <br /> Professional Developer?
            </h1>
            <p className="development-container__content-desc">
              Looking for skilled developers? Hire experienced professionals to bring your projects to life.
            </p>
          </div>
          <DynamicButton
            text="Get your job"
            padding="10px 24px"
            className="button primary"
            onClick={() => console.log("Navigate Button Clicked")}
          />
        </div>
      </section>
      <section className="faq-section container">
        <header className="available-header  reveal" style={{ "--i": 0.5 }}>
          <h1 className="available-header__title">FAQ</h1>
        </header>
        <div className="faq-section__list">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`faq-section__item reveal ${faq.isOpen ? "open" : ""}`}
              style={{ "--i": faq.id - 1.5 }}
              onClick={() => toggleFaq(faq.id)}
            >
              <div className="faq-section__question">
                <h3 className="faq-section__question-title">{faq.question}</h3>
                <span className="faq-section__arrow"></span>
              </div>
              <div className="faqcard__body">
                <p className="faq-section__answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-container__logo">
            <img src={FooterIcon} alt="footer-icon" aria-lable="footer icon" />
          </div>
          <div className="footer-container__links">
            <div className="footer-container__links-wrapper">
              <div className="footer-container__column">
                <h3>Careers</h3>
                <a href="#">Developers FAQ</a>
              </div>
              <div className="footer-container__column">
                <h3>Candidates</h3>
                <a href="#">Clients FAQ</a>
              </div>
              <div className="footer-container__column">
                <h3>Info</h3>
                <a href="#">Why us</a>
                <a href="#">About us</a>
              </div>
              <div className="footer-container__column">
                <h3>Services</h3>
              </div>
            </div>
            <div className="footer-container__column number">
              <h3>Contacts</h3>
              <a href="tel:+998991234565">
                <img src={Call} alt="call" /> +998 99 123 4565
              </a>
              <div className="footer-socials">
                <a href="#">
                  <img src={Instagram} alt="Instagram" />
                </a>
                <a href="#">
                  <img src={Telegram} alt="Telegram" />
                </a>
                <a href="#">
                  <img src={LinkedIn} alt="LinkedIn" />
                </a>
                <a href="#">
                  <img src={Sms} alt="Sms" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>All rights reserved 2024</p>
          <p>Developed by ITIC</p>
        </div>
      </footer>
    </div>
  );
};

export default ChatLayout;
