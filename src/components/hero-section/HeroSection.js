import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SearchInput from "../common/search-input/SearchInput";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";
import "./hero-section.scss";

const HeroSection = () => {
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const theme =
    document.body.getAttribute("data-theme") === "dark-theme" ? true : false;

  return (
    <section className="hero-section">
      <div className="hero-section-div">
        <Container>
          <Row className="justify-content-center">
            <Col xs="12" sm="12" md="12" lg="6" xl="6">
              <div className="hero-section-headings">
                <h6 className="h-1">Get your instant Quote</h6>

                <h2>Fast Free Florida Quotes in 3 Easy Steps</h2>
                <SearchInput value={search} onChangeHandler={onChangeHandler} />
              </div>
            </Col>
          </Row>
        </Container>

        {theme ? <DarkTheme /> : <LightTheme />}
      </div>
    </section>
  );
};

export default HeroSection;
