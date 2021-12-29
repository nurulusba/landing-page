import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./banner-section.scss";

const BannerSection = () => {
  return (
    <Navbar className="banner-section">
      <div className="banner-section-div">
        <Navbar.Collapse className="justify-content-end" id="banner-headings">
          <Navbar.Text className="banner-text">
            <svg
              id="phone-svg"
              width={15.67}
              height={15.99}
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2876 3.81923C11.0201 3.9648 11.6934 4.3297 12.2211 4.86723C12.7489 5.40477 13.1071 6.09047 13.2501 6.83659M10.2876 0.763672C11.8095 0.93588 13.2288 1.63006 14.3123 2.73222C15.3957 3.83438 16.0791 5.27903 16.2501 6.82895M15.5001 12.9248V15.2164C15.5009 15.4292 15.4581 15.6398 15.3745 15.8347C15.2908 16.0296 15.168 16.2046 15.0141 16.3484C14.8602 16.4923 14.6785 16.6017 14.4806 16.6699C14.2828 16.7381 14.0731 16.7634 13.8651 16.7442C11.5572 16.4888 9.34032 15.6856 7.39257 14.3991C5.58044 13.2263 4.04407 11.6614 2.89257 9.81575C1.62506 7.82292 0.836254 5.55401 0.590072 3.19284C0.57133 2.9816 0.595978 2.7687 0.662447 2.56769C0.728916 2.36668 0.83575 2.18198 0.976146 2.02533C1.11654 1.86868 1.28743 1.74352 1.47792 1.65782C1.6684 1.57212 1.87433 1.52776 2.08257 1.52756H4.33257C4.69655 1.52391 5.04942 1.65519 5.32539 1.89693C5.60137 2.13866 5.78163 2.47436 5.83257 2.84145C5.92754 3.57483 6.10366 4.29492 6.35757 4.98798C6.45848 5.26139 6.48032 5.55854 6.4205 5.8442C6.36069 6.12987 6.22172 6.39209 6.02007 6.59978L5.06757 7.56992C6.13524 9.48235 7.68991 11.0658 9.56757 12.1533L10.5201 11.1831C10.724 10.9777 10.9814 10.8362 11.2619 10.7753C11.5424 10.7143 11.8341 10.7366 12.1026 10.8394C12.783 11.098 13.49 11.2774 14.2101 11.3741C14.5744 11.4264 14.9071 11.6133 15.145 11.8993C15.3828 12.1852 15.5092 12.5502 15.5001 12.9248Z"
                stroke="#64D6CD"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>813-514-0333</span>
          </Navbar.Text>
          <Nav.Link href="#stream-season" className="banner-text">
            {" "}
            Strom Season 2021{" "}
          </Nav.Link>

          <Nav.Link href="#new-customer" className="banner-text">
            New Customer
          </Nav.Link>
          <Nav.Link
            href="#current-customer"
            className="banner-text"
            id="cc-text"
          >
            Current Customer
          </Nav.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default BannerSection;
