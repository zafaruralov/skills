import React from "react";
import FooterIcon from "../../assets/images/footer/footer-icon.svg";
import Call from "../../assets/images/footer/call.svg";
import Instagram from "../../assets/images/footer/instagram.svg";
import LinkedIn from "../../assets/images/footer/linkedIn.svg";
import Telegram from "../../assets/images/footer/telegram.svg";
import Sms from "../../assets/images/footer/sms.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container__logo">
          <img src={FooterIcon} alt="footer-icon" />
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
  );
};

export default Footer;
