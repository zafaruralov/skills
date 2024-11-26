import DynamicButton from "../../../components/button";

const Evaluate = () => {
  return (
    <div className="evaluates">
      <div className="evaluate container">
        <div className="evaluate-container">
          <div className="evaluate-wrapper">
            <div className="evaluate-content">
              <h1 className="evaluate-content__title reveal">Evaluate your skills and find a job</h1>
              <p className="evaluate-content__desc reveal">
                The IT Skills platform marks the starting point for opportunities, linking talented specialists with
                potential employers
              </p>
            </div>
            <DynamicButton
              text="Join now"
              className="button primary reveal md"
              onClick={() => console.log("Navigate Button Clicked")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Evaluate;
