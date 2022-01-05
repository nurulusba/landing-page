import React from "react";
import { Container, Row, Col, Form, Table, Button } from "react-bootstrap";
import Slider from "rc-slider";
import Steps from "../../components/confirm-address-forms/Steps";
import rect1 from "../../assets/address/rectangle1.svg";
import rect2 from "../../assets/address/rectangle2.svg";
import "rc-slider/assets/index.css";

const PricingPage = (props) => {
  const { Range } = Slider;

  return (
    <section className="pricing-details-section">
      {/* Background Image */}
      <div className="property-details-img">
        <div className="rect1">
          <img src={rect1} />
        </div>

        <div className="rect2">
          <img src={rect1} />
        </div>

        <div className="rect3">
          <img src={rect2} />
        </div>
      </div>

      {/* Form */}
      <Container>
        <Row className="justify-content-center">
          <Col
            xs="12"
            sm="12"
            md="12"
            lg="4"
            xl="4"
            className="pricing-page-heading"
          >
            <h5>Buy Your Plan</h5>
            <div className="pricing-page-actions">
              <p>Bill Monthly</p>
              <div>
                {" "}
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  className="discount-form-switch"
                  label=""
                  defaultChecked={true}
                />
              </div>
              <p>Bill Annualy</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            xs="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
            className="pricing-table-main"
          >
            <Table responsive borderless className="pricing-table">
              <thead>
                <tr>
                  <th>
                    <div className="pay-plan-col-main">
                      <span style={{ visibility: "hidden" }}>dfdfdf</span>
                      <h5>
                        Bill To: <span>Polholder</span>
                      </h5>
                      <div className="pay-plan-col">
                        <span className="pay-plan-h">Pay Plan</span>
                        <div style={{ width: "60%", paddingRight: "2rem" }}>
                          <Range
                            min={20}
                            marks={{
                              20: "2 Pay",
                              40: "4 Pay",
                              100: "Full Pay",
                            }}
                            trackStyle={{ backgroundColor: "#E1AB3" }}
                            handleStyle={[
                              { backgroundColor: "#E1AB37" },
                              { backgroundColor: "white" },
                            ]}
                            railStyle={{ backgroundColor: "#E1AB37" }}
                          />
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div>
                      <h5>Basic</h5>
                      <span className="per-month">
                        $200/<span>m</span>
                      </span>
                      <br />
                      <span className="per-year">$3000 /Year</span>
                    </div>
                  </th>
                  <th>
                    <div>
                      <h5>Recommended</h5>
                      <span className="per-month">
                        $200/<span>m</span>
                      </span>
                      <br />
                      <span className="per-year">$3000 /Year</span>
                    </div>
                  </th>
                  <th>
                    {" "}
                    <div>
                      <h5>Recommended</h5>
                      <span className="per-month">
                        $200/<span>m</span>
                      </span>
                      <br />
                      <span className="per-year">$3000 /Year</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="special-row">
                  <td>Property coverage</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>dwelling (Coverage A)</td>
                  <td>$350,000</td>
                  <td>$350,000</td>
                  <td className="range-col">
                    $350,000
                    <div className="slider">
                      <Slider min={0} max={20} defaultValue={20} />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Other Structures (Coverage B)</td>
                  <td>$7,000</td>
                  <td>$7,000</td>
                  <td className="range-col">
                    $7,000
                    <div className="slider">
                      <Slider min={0} max={20} defaultValue={20} />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Personal property (Coverage A)</td>
                  <td>$52,500</td>
                  <td>$52,500</td>
                  <td className="range-col">
                    $52,500
                    <div className="slider">
                      <Slider min={0} max={20} defaultValue={20} />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Loss of Use (Coverage A)</td>
                  <td>$350,000</td>
                  <td>$350,000</td>
                  <td className="range-col">
                    $350,000
                    <div className="slider">
                      <Slider min={0} max={20} defaultValue={20} />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Personal Liability (Coverage A)</td>
                  <td>$100,000</td>
                  <td>$100,000</td>
                  <td className="range-col">
                    $100,000
                    <div className="slider">
                      <Slider min={0} max={20} defaultValue={20} />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Medical Pauyments (Coverage A) Copy</td>
                  <td>$1,000</td>
                  <td>$1,000</td>
                  <td className="range-col">
                    $1,000
                    <div className="slider">
                      <Slider min={0} max={20} defaultValue={20} />
                    </div>
                  </td>
                </tr>

                <tr className="special-row">
                  <td>Property coverage</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Hurrican</td>
                  <td>2%</td>
                  <td>2%</td>
                  <td className="range-col">
                    2%
                    <div className="slider">
                      <Slider min={0} max={20} defaultValue={20} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Non Hurrican</td>
                  <td>0.5%</td>
                  <td>0.5%</td>
                  <td className="range-col">
                    0.5%
                    <div className="slider">
                      <Slider min={0} max={20} defaultValue={20} />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td>
                    <Button className="buy-btn"> Buy Now </Button>
                  </td>
                  <td>
                    {" "}
                    <Button className="buy-btn"> Buy Now </Button>
                  </td>
                  <td className="range-col">
                    <Button className="buy-btn"> Buy Now </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="pricing-btns">
            <Steps step={4} {...props} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PricingPage;
