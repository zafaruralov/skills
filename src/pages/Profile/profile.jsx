import { useState } from "react";
import ProfileIcon from "../../assets/images/profile/user-profile.svg";

import SmsIcon from "../../assets/images/profile/sms.svg";
import Call from "../../assets/images/profile/call.svg";
import Calendar from "../../assets/images/profile/calendar.svg";
import Twitter from "../../assets/images/profile/Twitter.svg";

import Eye from "../../assets/images/profile/eye.svg";
import Save from "../../assets/images/profile/save.svg";
import DocumentDownload from "../../assets/images/profile/document-download.svg";
import Location from "../../assets/images/profile/location.svg";
import House from "../../assets/images/profile/house.svg";

const Profile = () => {
  const [details, setDetails] = useState([
    {
      id: 1,
      image: Calendar,
      desc: "Birth date:",
      title: "12.04.2001"
    },
    {
      id: 2,
      image: SmsIcon,
      title: "durdona@gmail.com",
      desc: "Email:"
    },
    {
      id: 3,
      image: Call,
      title: "+998931257623",
      desc: "Phone:"
    },
    {
      id: 4,
      image: Location,
      title: "Tashkent, Uzbekistan",
      desc: "Location:"
    }
  ]);
  const [cv, setCv] = useState([
    {
      id: 1,
      icon: DocumentDownload,
      title: "CV ni PDF shaklida yuklash"
    },
    {
      id: 2,
      icon: DocumentDownload,
      title: "Portfolio ni PDF shaklida yuklash"
    },
    {
      id: 3,
      icon: DocumentDownload,
      title: "Awards/Certificates ni PDF shaklida yuklash"
    }
  ]);
  const [skills, setSkills] = useState([
    {
      id: 1,
      title: "Figma"
    },
    {
      id: 2,
      title: "UI design"
    },
    {
      id: 3,
      title: "UX design"
    },
    {
      id: 4,
      title: "Mobile App design"
    },
    {
      id: 5,
      title: "Landing Page design"
    },
    {
      id: 6,
      title: "Web design"
    },
    {
      id: 7,
      title: "Web design"
    }
  ]);

  return (
    <div className="profile">
      <section className="profile-section">
        <div className="container profile-gap">
          <div className="profile-about">
            <div className="profile-about__wrapper">
              <div className="profile-about__user">
                <img src={ProfileIcon} alt="user image" className="profile-about__user-image" />
                <div className="profile-about__user-name">
                  <h2 className="profile-about__user-name-username">Alisher Pardayev</h2>
                  <p className="profile-about__user-name-work">UI/UX Designer</p>
                </div>
                <div className="profile-about__user-media">
                  <div className="profile-about__user-media-wrapper">
                    <img src={SmsIcon} alt="social media" className="profile-about__user-media-image" />
                  </div>
                  <div className="profile-about__user-media-wrapper">
                    <img src={Call} alt="social media" className="profile-about__user-media-image" />
                  </div>
                  <div className="profile-about__user-media-wrapper">
                    <img src={Twitter} alt="social media" className="profile-about__user-media-image" />
                  </div>
                </div>
              </div>
              <div className="profile-about__statistics">
                <div className="profile-about__statistics-navbar">
                  <p className="profile-about__statistics-navbar-title">Statistics</p>
                  <div className="profile-about__statistics-navbar-wrapper">
                    <img src={Calendar} alt="icon" className="profile-about__statistics-navbar-icon" />
                    <p className="profile-about__statistics-navbar-desc">Permanent</p>
                  </div>
                </div>
                <div className="profile-about__statistics-actions">
                  <div className="profile-about__statistics-action">
                    <img src={Eye} alt="" className="profile-about__statistics-action-icon" />
                    <p className="profile-about__statistics-action-title">200</p>
                  </div>
                  <div className="profile-about__statistics-action">
                    <img src={Save} alt="" className="profile-about__statistics-action-icon" />
                    <p className="profile-about__statistics-action-title">300</p>
                  </div>
                  <div className="profile-about__statistics-action">
                    <img src={DocumentDownload} alt="" className="profile-about__statistics-action-icon" />
                    <p className="profile-about__statistics-action-title">32</p>
                  </div>
                </div>
              </div>
              <div className="profile-about__detail">
                <h2 className="profile-about__detail-navbar">Detail</h2>
                <div className="profile-about__detail-wrapper">
                  {details.map((item) => (
                    <div className="profile-about__detail-subtitle" key={item.id}>
                      <img src={item.image} alt="detail image" />
                      <div className="profile-about__detail-subtitle-wrapper">
                        <p className="profile-about__detail-subtitle-desc">{item.desc}</p>
                        <p className="profile-about__detail-subtitle-title">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="profile-about__downloads">
              <h1 className="profile-about__downloads-title">Download</h1>
              {cv.map((item) => (
                <div className="profile-about__downloads-wrapper" key={item.id}>
                  <img src={item.icon} alt="itme icon" />
                  <p className="profile-about__downloads-desc">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="profile-cv">
            <div className="profile-cv__title">
              <h2 className="profile-cv__navbar">About me</h2>
              <p className="profile-cv__subtitle">
                Lorem ipsum dolor sit amet consectetur. At sollicitudin phasellus cursus enim euismod mattis. Lectus
                mattis euismod duis in. Id scelerisque tellus pharetra viverra varius. Cras nec dolor dictum convallis
                nisi morbi facilisis non ullamcorper. Donec pellentesque sit proin nullam vulputate vestibulum tempus.
                Eget in interdum elit laoreet nunc cras sed sapien. Mauris ante enim condimentum gravida vivamus. Eget
                viverra at sed pellentesque nunc elementum ipsum consequat congue.
              </p>
            </div>
            <div className="profile-cv__title">
              <h2 className="profile-cv__navbar">Language</h2>
              <div className="profile-cv__language">
                <p>English - B1 Pre-Intermediate</p>
              </div>
            </div>
            <div className="profile-cv__title">
              <h2 className="profile-cv__navbar">Educations</h2>
              <div className="profile-cv__education">
                <div className="profile-cv__education-container">
                  <img src={House} alt="container icon" className="profile-cv__education-icon" />
                  <div className="profile-cv__education-container-wrapper">
                    <div className="profile-cv__education-container-navbar">
                      <div className="profile-cv__education-container-subtitle">
                        <h2 className="profile-cv__education-company">ICT Academy</h2>
                        <p className="profile-cv__education-time">2023 Nov - 2024 Feb</p>
                      </div>
                      <p className="profile-cv__education-experience">UX/UI Design</p>
                    </div>
                    <p className="profile-cv__education-container-desc">
                      Lorem ipsum dolor sit amet consectetur. Est commodo hac sed curabitur integer viverra arcu
                      vestibulum.
                    </p>
                  </div>
                </div>
                <div className="profile-cv__education-container">
                  <img src={House} alt="container icon" className="profile-cv__education-icon" />
                  <div className="profile-cv__education-container-wrapper">
                    <div className="profile-cv__education-container-navbar">
                      <div className="profile-cv__education-container-subtitle">
                        <h2 className="profile-cv__education-company">ICT Academy</h2>
                        <p className="profile-cv__education-time">2023 Nov - 2024 Feb</p>
                      </div>
                      <p className="profile-cv__education-experience">UX/UI Design</p>
                    </div>
                    <p className="profile-cv__education-container-desc">
                      Lorem ipsum dolor sit amet consectetur. Est commodo hac sed curabitur integer viverra arcu
                      vestibulum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-cv__title">
              <h2 className="profile-cv__navbar">Experiences</h2>
              <div className="profile-cv__experience">
                <div className="profile-cv__experience-navbar">
                  <h2 className="profile-cv__experience-title">UI/UX Designer</h2>
                  <p className="profile-cv__experience-work">It Investments Center 2024 November- 2024 February</p>
                </div>
                <p className="profile-cv__experience-desc">
                  Lorem ipsum dolor sit amet consectetur. Est commodo hac sed curabitur integer viverra arcu vestibulum.
                </p>
              </div>
            </div>
            <div className="profile-cv__title">
              <h2 className="profile-cv__navbar">Skills</h2>
              <div className="profile-cv__skill-wrapper">
                {skills.map((item) => (
                  <div className="profile-cv__skill" key={item.id}>
                    <p className="profile-cv__skill-title">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="profile-cv__title">
              <h2 className="profile-cv__navbar">Expected salary</h2>
              <div className="profile-cv__language">
                <p>14 000 000 UZS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Profile;
