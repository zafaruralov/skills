import DynamicButton from "../../../components/button";

const Development = () => {
  return (
    <section className="development">
      <div className="development-container">
        <div className="development-container__content">
          <h1 className="development-container__content-title reveal">
            Are you <br /> Professional Developer?
          </h1>
          <p className="development-container__content-desc reveal">
            Looking for skilled developers? Hire experienced professionals to bring your projects to life.
          </p>
        </div>
        <DynamicButton
          text="Get your job"
          padding="10px 24px"
          className="button primary reveal"
          onClick={() => console.log("Navigate Button Clicked")}
        />
      </div>
    </section>
  );
};
export default Development;
