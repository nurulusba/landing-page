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

          <Col xs="12">
            <div className="footer-btns">
              <Button variant="outline-primary" id="footer-left-btn">
                <svg
                  width={12}
                  height={14}
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5399e-08 7L12 0.0717966L12 13.9282L9.5399e-08 7Z"
                    fill="#64CEB5"
                  />
                </svg>
              </Button>
              <Button variant="outline-primary" id="footer-right-btn">
                <svg
                  width={12}
                  height={14}
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 7L-1.48308e-06 13.9282L-1.06481e-07 0.0717957L12 7Z"
                    fill="#64CEB5"
                  />
                </svg>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default FooterSection;
