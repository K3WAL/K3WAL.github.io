import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Projects, Contact } from "./pages";
const App = () => {
  return /*#__PURE__*/React.createElement("main", {
    className: "bg-slate-300/20"
  }, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/about",
    element: /*#__PURE__*/React.createElement(About, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/projects",
    element: /*#__PURE__*/React.createElement(Projects, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/contact",
    element: /*#__PURE__*/React.createElement(Contact, null)
  }))));
};
export default App;