import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Steps from "../../components/confirm-address-forms/Steps";
import GoogleMap from "../../components/common/google-map/GoogleMap";
import lightBuilding1 from "../../assets/address/light-building1.svg";
import lightBuilding2 from "../../assets/address/light-building2.svg";

const PropertyDetails = (props) => {
  return (
    <section className="property-details-section">
      {/* Background Image */}
      <div className="property-details-img">
        <div className="building1">
          <img src={lightBuilding1} />
        </div>

        <div className="building2">
          <img src={lightBuilding2} />
        </div>
      </div>

      {/* Form */}
      <Container>
        <Row className="justify-content-center">
          <Col xs="12" sm="12" md="10" lg="6" xl="6" className="p-form">
            <h1>Please Check Property Details</h1>
            <Row className="justify-content-start">
              <Col xs="12">
                <Form className="confirm-address-form">
                  <Row>
                    <Col xs="12" sm="6">
                      <Form.Group
                        className="confirm-address-field"
                        controlId="formBasicEmail"
                      >
                        <Form.Label className="confirm-address-label">
                          Square footage
                        </Form.Label>
                        <Form.Control
                          className="confirm-address-input"
                          type="text"
                          placeholder=""
                        />
                      </Form.Group>
                    </Col>
                    <Col xs="12" sm="6">
                      <Form.Group
                        controlId="formBasicPassword"
                        className="confirm-address-field"
                      >
                        <Form.Label className="confirm-address-label">
                          Year built
                        </Form.Label>
                        <Form.Control
                          className="confirm-address-input"
                          type="text"
                          placeholder=""
                        />
                      </Form.Group>
                    </Col>
                    <Col xs="12" sm="6">
                      <Form.Group
                        className="confirm-address-field"
                        controlId="formBasicPassword"
                      >
                        <Form.Label className="confirm-address-label">
                          Number of stories
                        </Form.Label>
                        <Form.Control
                          className="confirm-address-input"
                          type="number"
                          placeholder=""
                        />
                      </Form.Group>
                    </Col>
                    <Col xs="12" sm="6">
                      <Form.Group className="confirm-address-field">
                        <Form.Label className="confirm-address-label">
                          Construction type
                        </Form.Label>
                        <Form.Select className="confirm-address-input">
                          <option>Select</option>
                          <option value="a">A</option>
                          <option value="b">B</option>
                          <option value="c">C</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs="12" sm="6">
                      <Form.Group
                        className="confirm-address-field"
                        controlId="formBasicEmail"
                      >
                        <Form.Label className="confirm-address-label">
                          Usage
                        </Form.Label>
                        <Form.Control
                          className="confirm-address-input"
                          type="text"
                          placeholder=""
                        />
                      </Form.Group>
                    </Col>
                    <Col xs="12" sm="6">
                      <Form.Group className="confirm-address-field">
                        <Form.Label className="confirm-address-label">
                          Roof type
                        </Form.Label>
                        <Form.Select className="confirm-address-input">
                          <option>Select</option>
                          <option value="a">A</option>
                          <option value="b">B</option>
                          <option value="c">C</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs="12" sm="6">
                      <Form.Group
                        className="confirm-address-field"
                        controlId="formBasicEmail"
                      >
                        <Form.Label className="confirm-address-label">
                          Size of encloure
                        </Form.Label>
                        <Form.Control
                          className="confirm-address-input"
                          type="text"
                          placeholder=""
                        />
                      </Form.Group>
                    </Col>
                    <Col xs="12">
                      <div className="form-map">
                        <GoogleMap />
                      </div>
                    </Col>
                    <Col xs="12" className="form-btns">
                    <Steps step={1} {...props} />
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PropertyDetails;
