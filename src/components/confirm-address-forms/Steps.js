import React from "react";
import { Button } from "react-bootstrap";
import "../common/style.scss";

const Steps = ({ nextStep, previousStep, totalSteps, step }) => (
  <div className="steps-btn" style={{ display: "flex", justifyContent: "center" }}>
    <Button
      variant="outline-dark"
      onClick={previousStep}
      className="previous-btn"
      disabled={step === 1 && true}
    >
      Previous
    </Button>

    <Button
      onClick={nextStep}
      className="next-btn"
      disabled={step >= totalSteps && true}
    >
      Next
    </Button>
  </div>
);

export default Steps;
