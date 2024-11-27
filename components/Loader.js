import React from "react";
import { Html } from "@react-three/drei";
const Loader = () => {
  return /*#__PURE__*/React.createElement(Html, null, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin"
  })));
};
export default Loader;