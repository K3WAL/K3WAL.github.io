import { NavLink } from "react-router-dom";
import { kewal } from "../assets/images";
import { logo } from "../assets/images";
import { Designer } from "../assets/images";
const Navbar = () => {
  return /*#__PURE__*/React.createElement("header", {
    className: "header"
  }, /*#__PURE__*/React.createElement(NavLink, {
    to: "/"
  }, /*#__PURE__*/React.createElement("img", {
    src: Designer,
    alt: "logo",
    className: "w-16 h-16 object-contain"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "flex text-lg gap-7 font-medium"
  }, /*#__PURE__*/React.createElement(NavLink, {
    to: "/about",
    className: ({
      isActive
    }) => isActive ? "text-blue-600" : "text-black"
  }, "About"), /*#__PURE__*/React.createElement(NavLink, {
    to: "/projects",
    className: ({
      isActive
    }) => isActive ? "text-blue-600" : "text-black"
  }, "Projects")));
};
export default Navbar;