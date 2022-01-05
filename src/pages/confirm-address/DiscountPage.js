import React, { Fragment } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Steps from "../../components/confirm-address-forms/Steps";
import lightBg1 from "../../assets/address/light-bg.svg";
import lightBg2 from "../../assets/address/light-building2.svg";
import hills from "../../assets/dark-hills.svg";
import tree from "../../assets/tree.svg";

const DiscountPage = (props) => {
  const theme =
    document.body.getAttribute("data-theme") === "dark-theme" ? true : false;

  return (
    <section className="property-details-section">
      {/* Background Image */}
      <div className="property-details-img">
        {theme ? (
          <Fragment>
            <div
              className="long-wave"
              style={{
                width: "100%",
                objectFit: "cover",
                position: "absolute",
                bottom: 0,
              }}
            >
              <img style={{ width: "100%" }} src={hills} />
            </div>
            <div style={{ position: "absolute", bottom: "50%", right: "20px" }}>
              <img src={tree} />
            </div>
            <div style={{ position: "absolute", left: "10px", top: "20%" }}>
              <svg
                width={56}
                height={15}
                viewBox="0 0 56 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.2"
                  d="M56 14.7944C52.7869 12.8966 46.9175 3.60178 44.5 6.14895C37.4617 13.6406 35.8033 -6.78154 27.235 4.20623C18.6667 15.194 3.67213 2.7079 0 14.6946C0 14.6946 36.3541 14.5447 56 14.7944Z"
                  fill="url(#paint0_linear_674_7797)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_674_7797"
                    x1={28}
                    y1="16.6012"
                    x2={28}
                    y2="-4.5762"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BFD6D0" />
                    <stop offset="0.989583" stopColor="#FEF9E5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div style={{ position: "absolute", left: 0, top: "10%" }}>
              <svg
                width={69}
                height={15}
                viewBox="0 0 69 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  d="M15.2956 3.91227C10.8768 -1.31451 4.62266 0.564396 0 3.19487V14.5025H69C64.5813 6.64522 46.5665 14.5025 39.0887 6.64522C31.6108 -1.21203 23.1133 13.136 15.2956 3.91227Z"
                  fill="url(#paint0_linear_674_7794)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_674_7794"
                    x1="34.5"
                    y1="16.2569"
                    x2="34.5"
                    y2="-4.30628"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#B9CBC2" />
                    <stop offset={1} stopColor="#D2FDFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="building1">
              <img src={lightBg1} />
            </div>

            <div className="building2">
              <img src={lightBg2} />
            </div>
          </Fragment>
        )}
      </div>

      {/* Form */}
      <Container>
        <Row className="justify-content-center">
          <Col xs="12" sm="12" md="10" lg="6" xl="6" className="discount-form">
            <h1>Please Answer All Discount Related Questions</h1>
            <Row className="justify-content-start">
              <Col xs="12">
                <Row>
                  <Col xs="12">
                    <div className="discount-form-row">
                      <p>Are you 55 years older?</p>
                      <div className="discount-form-actions">
                        <span>No</span>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          className="discount-form-switch"
                          label=""
                          defaultChecked={true}
                        />
                        <span>Yes</span>
                      </div>
                    </div>
                  </Col>
                  <Col xs="12">
                    <div className="discount-form-row">
                      <p>Does the property have a central alarm?</p>
                      <div className="discount-form-actions">
                        <span>No</span>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          className="discount-form-switch"
                          label=""
                          defaultChecked={true}
                        />
                        <span>Yes</span>
                      </div>
                    </div>
                  </Col>
                  <Col xs="12">
                    <div className="discount-form-row">
                      <p>Does the property have a central burglar alarm?</p>
                      <div className="discount-form-actions">
                        <span>No</span>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          className="discount-form-switch"
                          label=""
                          defaultChecked={true}
                        />
                        <span>Yes</span>
                      </div>
                    </div>
                  </Col>
                  <Col xs="12">
                    <div className="discount-form-row">
                      <p>Have you had any prior claim?</p>
                      <div className="discount-form-actions">
                        <span>No</span>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          className="discount-form-switch"
                          label=""
                        />
                        <span>Yes</span>
                      </div>
                    </div>
                  </Col>
                  <Col xs="12" className="form-btns">
                    <Steps step={2} {...props} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DiscountPage;
