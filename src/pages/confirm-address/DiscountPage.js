import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Steps from "../../components/confirm-address-forms/Steps";
import lightBg1 from "../../assets/address/light-bg.svg";
import lightBg2 from "../../assets/address/light-building2.svg";

const DiscountPage = (props) => {
  return (
    <section className="property-details-section">
      {/* Background Image */}
      <div className="property-details-img">
        <div className="building1">
          <img src={lightBg1} />
        </div>

        <div className="building2">
          <img src={lightBg2} />
        </div>
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
