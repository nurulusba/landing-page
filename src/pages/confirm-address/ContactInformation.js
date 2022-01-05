import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Steps from "../../components/confirm-address-forms/Steps";
import lightBg1 from "../../assets/address/light-bg.svg";
import lightBg2 from "../../assets/address/light-building2.svg";

const ContactInformation = (props) => {
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
          <Col xs="12" sm="12" md="10" lg="6" xl="6" className="p-form">
            <Row className="justify-content-center" id="contact-info-div">
              <Col xs="10">
                <h1>Please Add your contact information</h1>
                <Row className="justify-content-start">
                  <Col xs="12">
                    <Form className="confirm-address-form">
                      <Row>
                        <Col xs="12">
                          <Form.Group
                            className="confirm-address-field"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="confirm-address-label">
                              Full Name
                            </Form.Label>
                            <Form.Control
                              className="confirm-address-input"
                              type="text"
                              placeholder="Enter your name"
                            />
                          </Form.Group>
                        </Col>
                        <Col xs="12">
                          <Form.Group
                            controlId="formBasicPassword"
                            className="confirm-address-field"
                          >
                            <Form.Label className="confirm-address-label">
                              Email
                            </Form.Label>
                            <Form.Control
                              className="confirm-address-input"
                              type="email"
                              placeholder="Enter Email"
                            />
                          </Form.Group>
                        </Col>
                        <Col xs="12">
                          <Form.Group
                            className="confirm-address-field"
                            controlId="formBasicPassword"
                          >
                            <Form.Label className="confirm-address-label">
                              Phone Number
                            </Form.Label>
                            <Form.Control
                              className="confirm-address-input"
                              type="number"
                              placeholder="+51XXXXXXXXXX"
                            />
                          </Form.Group>
                        </Col>
                        <Col xs="12" className="form-btns">
                          <Steps step={3} {...props} />
                        </Col>
                      </Row>
                    </Form>
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

export default ContactInformation;
