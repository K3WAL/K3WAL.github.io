import React from "react";
import { skills, experiences } from "../constants";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
const About = () => {
  return /*#__PURE__*/React.createElement("section", {
    className: "max-container"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "head-text"
  }, "Hello, I'm", " ", /*#__PURE__*/React.createElement("span", {
    className: "blue-gradient_text font-semibold drop-shadow"
  }, "Kewal")), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 flex flex-col gap-3 text-slate-500"
  }, /*#__PURE__*/React.createElement("p", null, "Graguate from Bachelor in Information and Communication Technology.")), /*#__PURE__*/React.createElement("div", {
    className: "py-10 flex flex-col"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "subhead-text"
  }, "My skills"), /*#__PURE__*/React.createElement("div", {
    className: "mt-16 flex flex-wrap gap-12"
  }, skills.map((skill, index) => {
    return /*#__PURE__*/React.createElement("div", {
      className: "block-container w-20 h-20",
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: "btn-black rounded-xl"
    }), /*#__PURE__*/React.createElement("div", {
      className: "btn-front rounded-xl flex justify-center items-center"
    }, /*#__PURE__*/React.createElement("img", {
      src: skill.imageUrl,
      alt: skill.name,
      className: "w-1/2 h-1/2 object-contain"
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "py-16"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "shubhed-text"
  }, "Worked Experience"), /*#__PURE__*/React.createElement("div", {
    className: "mt-5 flex flex-col gap-3 text-slate-500"
  }, /*#__PURE__*/React.createElement("p", null, "I've worked on many project, leveling up my skills and teaming up with smart people. Here's the rundown:")), /*#__PURE__*/React.createElement("div", {
    className: "mt-12 flex"
  }, /*#__PURE__*/React.createElement(VerticalTimeline, null, experiences.map(experience => /*#__PURE__*/React.createElement(VerticalTimelineElement, {
    key: experience.company_name,
    date: experience.date,
    icon: /*#__PURE__*/React.createElement("div", {
      className: "flex justify-center items-center w-full h-full"
    }, /*#__PURE__*/React.createElement("img", {
      src: experience.icon,
      alt: experience.company_name,
      className: "2-[60%] h-[60%] object-contain"
    })),
    iconStyle: {
      background: experience.iconBg
    },
    contentStyle: {
      borderBottom: "8px",
      borderStyle: "solid",
      borderBottomColor: experience.iconBg,
      boxShadow: "none"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-black text-xl font-poppins font-semibold"
  }, experience.title), /*#__PURE__*/React.createElement("p", {
    className: "text-black-500 font-medium font-base",
    style: {
      margin: 0
    }
  }, experience.company_name)), /*#__PURE__*/React.createElement("ul", {
    className: "my-5 list-disc ml-5 space-y-2"
  }, experience.points.map((point, index) => /*#__PURE__*/React.createElement("li", {
    key: `experience-point-${index}`,
    className: "text-black-500/50 font-normal pl-1 text-sm"
  }, point)))))))), /*#__PURE__*/React.createElement("hr", {
    className: "border-slate-200"
  }), /*#__PURE__*/React.createElement(CTA, null));
};
export default About;