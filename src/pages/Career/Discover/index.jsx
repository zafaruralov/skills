import DynamicButton from "../../../components/button";
import FirstCandidates from "../../../assets/images/candidates/firts-candidate.svg";

import clock from "../../../assets/images/filter/clock.svg";
import global from "../../../assets/images/filter/global.svg";

const Discover = () => {
  return (
    <div className="discovers">
      <div className="discover container">
        <div className="discover-subtitle">
          <div className="discover-subtitle__wrapper">
            <h1 className="discover-subtitle__title">Discover top career opportunities</h1>
            <p className="discover-subtitle__desc">
              Explore roles that match your skills and advance your career today.
            </p>
          </div>
          <div className="discover-subtitle__action">
            <DynamicButton
              className=" button secondary sm"
              text="Become a Talent"
              onClick={() => console.log("Navigate Button Clicked")}
            />
          </div>
        </div>
        <div className="discover-wrapper">
          <div className="discover-container">
            <div className="discover-container__navbar">
              <div className="discover-container__navbar-user">
                <img src={FirstCandidates} alt="FirstCandidates" className="discover-container__navbar-image" />
                <div className="discover-container__navbar-username">
                  <h2 className="discover-container__navbar-name">Akbarali Khasanov</h2>
                  <p className="discover-container__navbar-job">.Net Developer</p>
                </div>
              </div>
              <div className="discover-container__price">14,000,000 UZS</div>
            </div>
            <p className="discover-container__desc">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
            </p>
            <div className="discover-container__actions">
              <div className="discover-container__action">
                <img src={global} alt="" className="discover-container__action-image" />
                <p className="discover-container__action-title">English</p>
                <p className="discover-container__action-level">B2</p>
              </div>
              <div className="discover-container__action">
                <img src={clock} alt="verify" className="discover-container__action-image" />
                <p className="discover-container__action-title">7 yrs</p>
                <p className="discover-container__action-level">Senior</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Discover;
