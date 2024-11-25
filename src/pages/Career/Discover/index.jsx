import DynamicButton from "../../../components/button";

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
        <div className="discover-wrapper"></div>
      </div>
    </div>
  );
};
export default Discover;
