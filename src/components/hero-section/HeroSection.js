import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import home from "../../assets/home.svg";
import hills from "../../assets/hills.svg";
import tree from "../../assets/tree.svg";
import table from "../../assets/table.svg";
import tree1 from "../../assets/tree1.svg";
import "./hero-section.scss";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section-div">
        <Container>
          <Row className="justify-content-center">
            <Col xs="12" sm="12" md="12" lg="6" xl="6">
              <div className="hero-section-headings">
                <h6 className="h-1">Get your instant Quote</h6>

                <h2>Fast Free Florida Quotes in 3 Easy Steps</h2>
                <div id="hero-searchbar">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your home address"
                  />
                  <Button className="hero-btn" variant="primary">
                    <span className="ds-btn">Get Instant Quote</span>
                    <span className="mb-btn">Get Quote</span>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="cloud1">
          <svg
            width={198}
            height={41}
            viewBox="0 0 198 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 9.72122C27 -5.57878 8.6 -0.0787783 -5 7.62122V40.7212H198C185 17.7212 132 40.7212 110 17.7212C88 -5.27878 63 36.7212 40 9.72122Z"
              fill="url(#paint0_linear_322_10824)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_322_10824"
                x1="96.5"
                y1="45.8569"
                x2="96.5"
                y2="-14.3364"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFF9E2" />
                <stop offset={1} stopColor="#FFEBB7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="cloud2">
          <svg
            width={112}
            height={29}
            viewBox="0 0 112 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M112 28.1589C105.574 24.3172 93.835 5.50273 89 10.6587C74.9235 25.8233 71.6066 -15.5151 54.4699 6.72626C37.3333 28.9677 7.34426 3.69334 0 27.9567C0 27.9567 72.7082 27.6534 112 28.1589Z"
              fill="url(#paint0_linear_328_11820)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_328_11820"
                x1={56}
                y1="31.8161"
                x2={56}
                y2="-11.0511"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E0D7B6" />
                <stop offset="0.989583" stopColor="#FEF9E5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="cloud3">
          <svg
            width={112}
            height={29}
            viewBox="0 0 112 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M112 5.44434C105.574 1.60265 99.0863 0.389477 94.2514 5.54544C80.1749 20.71 71.6066 -14.674 54.4699 7.56738C37.3333 29.8088 7.34426 4.53447 0 28.7978C0 28.7978 72.7082 28.4945 112 29V5.44434Z"
              fill="url(#paint0_linear_322_11286)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_322_11286"
                x1={56}
                y1="32.6574"
                x2={56}
                y2="-10.2098"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFF9E2" />
                <stop offset={1} stopColor="#FFEBB7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="birds">
          <svg
            width={164}
            height={33}
            viewBox="0 0 164 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51 27.1192C51 27.1192 39.495 22.351 34 27.1192C34 27.1192 44.6465 25.6887 51 33C57.3535 25.6887 68 27.1192 68 27.1192C62.3333 22.351 51 27.1192 51 27.1192Z"
              fill="#A38E5A"
            />
            <path
              d="M6 0.819881C6 0.819881 2.05714 -0.857149 0 0.819881C0 0.819881 3.77143 0.316752 6 3C8.22857 0.316752 12 0.819881 12 0.819881C9.94286 -1.02485 6 0.819881 6 0.819881Z"
              fill="#A38E5A"
            />
            <path
              d="M158.5 0.810812C158.5 0.810812 154.719 -1.01352 153 0.810812C153 0.810812 156.438 0.263508 158.5 3C160.562 0.263508 164 0.810812 164 0.810812C162.281 -1.01352 158.5 0.810812 158.5 0.810812Z"
              fill="#A38E5A"
            />
          </svg>
        </div>
        <div className="sun">
          <svg
            width={119}
            height={119}
            viewBox="0 0 119 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M59.5 119C92.3609 119 119 92.3609 119 59.5C119 26.6391 92.3609 0 59.5 0C26.6391 0 0 26.6391 0 59.5C0 92.3609 26.6391 119 59.5 119Z"
              fill="url(#paint0_radial_322_11278)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_322_11278"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(59.5 59.5) rotate(90) scale(59.5)"
              >
                <stop stopColor="#FCC777" />
                <stop offset={1} stopColor="#FDECC2" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div
          className="long-wave"
          style={{ width: "100%", objectFit: "cover" }}
        >
          <img style={{ width: "100%" }} alt="hills" src={hills} />
        </div>
        <div className="tree">
          <img src={tree1} alt='tree' />
        </div>

        <div className="table">
          <img src={table} alt="table" />
        </div>

        <div className="tree2">
          <img src={tree} alt="tree2" />
        </div>
        <div className="home">
          <img src={home} alt="home" />
        </div>
        <div
          className="brick"
          style={{ width: "100%", position: "absolute", bottom: 0, zIndex: 1 }}
        >
          <svg
            width={1323}
            height={52}
            viewBox="0 0 1323 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1311.96 33.9444L467.089 52H0L37.1263 21.5869L55.1877 0H102.85H362.232L401.058 6.67616L419.928 21.5869H1264.03V14H1323V33.9444H1311.96Z"
              fill="url(#paint0_linear_350_7869)"
              fillOpacity="0.9"
            />
            <defs>
              <linearGradient
                id="paint0_linear_350_7869"
                x1="1337.88"
                y1="7.7081"
                x2="4.10563"
                y2="-43.8664"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DAD3A9" />
                <stop offset={1} stopColor="#AEC6B4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="bottom-bar"></div>
      </div>
    </section>
  );
};

export default HeroSection;
