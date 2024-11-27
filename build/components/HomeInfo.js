import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
const InfoBox = ({
  text,
  link,
  btnText
}) => /*#__PURE__*/React.createElement("div", {
  className: "info-box"
}, /*#__PURE__*/React.createElement("p", {
  className: "font-medium sm:text-xl text-center"
}, text), /*#__PURE__*/React.createElement(Link, {
  to: link,
  className: "neo-brutalism-white neo-btn"
}, btnText, /*#__PURE__*/React.createElement("img", {
  src: arrow,
  alt: "arrow",
  className: "w-4 h-4 object-contain"
})));
const renderContent = {
  1: /*#__PURE__*/React.createElement("h1", {
    className: "sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5"
  }, "Hi, I am ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold mx-2 text-white"
  }, "Kewal"), "\uD83D\uDC4B", /*#__PURE__*/React.createElement("br", null), "A Frontend Developer from Nepal"),
  2: /*#__PURE__*/React.createElement(InfoBox, {
    text: "Free to assist and open for the opportunities",
    link: "/about",
    btnText: "Learn More"
  }),
  3: /*#__PURE__*/React.createElement(InfoBox, {
    text: "Free to assist and open for the opportunities",
    link: "/project",
    btnText: "Visit my Project"
  }),
  4: /*#__PURE__*/React.createElement(InfoBox, {
    text: "Need a project done or looking for a dev? I'm just a few keystrokes away",
    link: "/contact",
    btnText: "Let's talk"
  })
};
const HomeInfo = ({
  currentStage
}) => {
  return renderContent[currentStage] || null;
};
export default HomeInfo;