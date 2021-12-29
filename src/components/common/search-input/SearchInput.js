import React from "react";
import { Button } from "react-bootstrap";
import "../style.scss";

const SearchInput = ({ value, onChangeHandler }) => {
  return (
    <div id="hero-searchbar">
      <input
        type="text"
        className="form-control"
        placeholder="Enter your home address"
        value={value}
        onChange={(e) => onChangeHandler(e)}
      />
      <Button className="hero-btn" variant="primary">
        <span className="ds-btn">Get Instant Quote</span>
        <span className="mb-btn">Get Quote</span>
      </Button>
    </div>
  );
};

export default SearchInput;
