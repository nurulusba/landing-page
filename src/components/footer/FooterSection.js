import React from "react";
import { Row, Col, Button, Card, Image } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/bbb_a_plus.png";
import img3 from "../../assets/google_reviews.png";
import profile from "../../assets/profile.png";
import "./footer.scss";

function FooterSection() {
  return (
    <footer className="home-footer">
      <div className="footer-section">
        <Row className="justify-content-center" id="footer-section-row">
          <Col xs="12" sm="12" md="12" lg="6" xl="6">
            <div className="review-section">
              <h3>
                Find out rating by Google Reviews and Certified by Florida
                Property Insurers
              </h3>
              <p>You can review our rating given by our clients </p>
              <div className="reviews-images">
                <img src={img1} className="img1" alt="img1" />
                <img src={img2} className="img2" alt="img2" />
                <img src={img3} className="img3" alt="img3" />
              </div>
            </div>
          </Col>

          <Col xs="12" sm="12" md="12" lg="6" xl="6">
            <Row className="justify-content-end">
              <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <Card className="review-card-main">
                  <Card.Body>
                    <div className="review-card">
                      <Image src={profile} roundedCircle />
                      <div className="review-card-info">
                        <p className="name">
                          Amir Khan <br /> <span>CEO, Avito</span>
                        </p>
                        <StarRatings
                          rating={5}
                          starRatedColor="#E1AB37"
                          numberOfStars={5}
                          name="rating"
                          starDimension="15px"
                          starSpacing="1px"
                        />
                        <span className="desc">
                          Devid was extremly hepful and got me the information i
                          needed very quickly no questions asked. Very impresive
                          indeed
                        </span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="12" sm="12" md="6" lg="6" xl="6">
                <Card className="review-card-main">
                  <Card.Body>
                    <div className="review-card">
                      <Image src={profile} roundedCircle />
                      <div className="review-card-info">
                        <p className="name">
                          Amir Khan <br /> <span>CEO, Avito</span>
                        </p>
                        <StarRatings
                          rating={5}
                          starRatedColor="#E1AB37"
                          numberOfStars={5}
                          name="rating"
                          starDimension="15px"
                          starSpacing="1px"
                        />
                        <span className="desc">
                          Devid was extremly hepful and got me the information i
                          needed very quickly no questions asked. Very impresive
                          indeed
                        </span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Row className="justify-content-end">
            <Col xs="6">
              <div className="footer-btns">
                <svg
                  width={38}
                  height={10}
                  viewBox="0 0 38 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={19} cy={5} r={5} fill="#64D6CD" />
                  <circle cx="3.5" cy="5.5" r="3.5" fill="#64D6CD" />
                  <circle cx="34.5" cy="5.5" r="3.5" fill="#64D6CD" />
                </svg>
              </div>
            </Col>
          </Row>
        </Row>
      </div>
    </footer>
  );
}

export default FooterSection;
