import Hash from "../../../assets/images/steps/hash.svg";
import GreenHash from "../../../assets/images/steps/green-hash.svg";
import BlueHash from "../../../assets/images/steps/blue-hash.svg";

const Steps = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.4, duration: 0.8 }
    })
  };
  return (
    <section className="steps">
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
  );
};
export default Steps;
