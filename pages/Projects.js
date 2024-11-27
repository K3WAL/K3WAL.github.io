import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
const Projects = () => {
  return /*#__PURE__*/React.createElement("section", {
    className: "max-container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "head-text"
  }, "My", " ", /*#__PURE__*/React.createElement("span", {
    className: "blue-gradient_text font-semibold drop-shadow"
  }, "Projects")), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 flex flex-col gap-3 text-slate-500"
  }, /*#__PURE__*/React.createElement("p", null, "I've undertaken several projects over time, and some hold a special place in my heart. Many of these projects are open-source, inviting anyone intrigued to delve into their codebase and share ideas for further improvements. Your collaboration and contributions are genuinely appreciated if something catches your interest!")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap my-20 gap-16"
  }, projects.map(project => /*#__PURE__*/React.createElement("div", {
    className: "lg:w-[400px] w-full",
    key: project.name
  }, /*#__PURE__*/React.createElement("div", {
    className: "block-container w-12 h-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: `btn-back rounded-xl ${project.theme}`
  }), /*#__PURE__*/React.createElement("div", {
    className: "btn-front rounded-xl flex justify-center items-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: project.iconUrl,
    alt: "threads",
    className: "w-1/2 h-1/2 object-contain"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 flex flex-col"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-2xl font-poppins font-semibold"
  }, project.name), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-slate-500"
  }, project.description), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 flex items-center gap-2 font-poppins"
  }, /*#__PURE__*/React.createElement(Link, {
    to: project.link,
    target: "_black",
    rel: "noopener noreferrer",
    className: "font-semibold text-blue-600"
  }, "Live Link"), /*#__PURE__*/React.createElement("img", {
    src: arrow,
    alt: "arrow",
    className: "w-4 h-4 object-contain"
  })))))), /*#__PURE__*/React.createElement("hr", {
    className: "border-slate-200"
  }), /*#__PURE__*/React.createElement(CTA, null));
};
export default Projects;