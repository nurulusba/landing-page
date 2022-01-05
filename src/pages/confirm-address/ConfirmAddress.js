import React, { Fragment } from "react";
import StepWizard from "react-step-wizard";
import PropertyDetails from "./PropertyDetails";
import DiscountPage from "./DiscountPage";
import ContactInformation from "./ContactInformation";
import "./confirm-address.scss";
import "../../components/hero-section/hero-section.scss";
import PricingPage from "./PricingPage";

const ConfirmAddress = () => {
  return (
    <Fragment>
      <StepWizard>
        <PropertyDetails />
        <DiscountPage />
        <ContactInformation />
        <PricingPage />
      </StepWizard>
    </Fragment>
  );
};

export default ConfirmAddress;
