import React from "react";
import { Link } from "react-router-dom";
const CTA = () => {
  return /*#__PURE__*/React.createElement("section", {
    className: "cta"
  }, /*#__PURE__*/React.createElement("p", {
    className: "cta-text"
  }, "Have a project in mind?", /*#__PURE__*/React.createElement("br", {
    className: "sm:block hidden"
  }), "Let's build something together!"), /*#__PURE__*/React.createElement(Link, {
    to: "/contact",
    className: "btn"
  }, "Contact"));
};
export default CTA;