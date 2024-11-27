import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [cusrrentAnimation, setcurrentAnimation] = useState("mixamo.com");
  const {
    alert,
    showAlert,
    hideAlert
  } = useAlert();
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const handleFocus = () => setcurrentAnimation("Hip Hop Dancing");
  const handleBlur = () => setcurrentAnimation("mixamo.com");
  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    setcurrentAnimation("Running");
    emailjs.send(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, {
      name: form.name,
      to_name: "Kewal",
      email: form.email,
      to_email: "kewaluchiha@gmail.com",
      message: form.message
    }, import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY).then(() => {
      setIsLoading(false);
      showAlert({
        show: true,
        text: "Message sent successfully!",
        type: "success"
      });
      setTimeout(() => {
        hideAlert();
        setcurrentAnimation("mixamo.com");
      }, [900]);
      setForm({
        name: "",
        email: "",
        message: ""
      });
    }).catch(error => {
      setIsLoading(false);
      setcurrentAnimation("mixamo.com");
      console.log(error);
      showAlert({
        show: true,
        text: "I didnot receive your message",
        type: "danger"
      });
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "relative flex lg:flex-row flex-col max-container h-[100vh]"
  }, alert.show && /*#__PURE__*/React.createElement(Alert, alert), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-[50%] flex flex-col"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "head-text"
  }, "Get in Touch"), /*#__PURE__*/React.createElement("form", {
    className: "w-full flex flex-col gap-7 mt-14",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-black-500 font-semibold"
  }, "Name", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    className: "input",
    placeholder: "Uchiha",
    required: true,
    value: form.name,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur
  })), /*#__PURE__*/React.createElement("label", {
    className: "text-black-500 font-semibold"
  }, "Email", /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    className: "input",
    placeholder: "example@gmail.com",
    required: true,
    value: form.email,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur
  })), /*#__PURE__*/React.createElement("label", {
    className: "text-black-500 font-semibold"
  }, "Your Message", /*#__PURE__*/React.createElement("textarea", {
    name: "message",
    rows: 4,
    className: "textarea",
    placeholder: "Send me message",
    required: true,
    value: form.message,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn",
    onFocus: handleFocus,
    onBlur: handleBlur,
    disabled: isLoading
  }, isLoading ? "Sending..." : "Send Message"))), /*#__PURE__*/React.createElement("div", {
    className: "lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]",
    style: {
      marginTop: "80px"
    }
  }, /*#__PURE__*/React.createElement(Canvas, {
    camera: {
      position: [0, 0, 5],
      fov: 70,
      near: 0.1,
      far: 1000
    }
  }, /*#__PURE__*/React.createElement("directionalLight", {
    intensity: 2.5,
    position: [0, 0, 1]
  }), /*#__PURE__*/React.createElement("ambientLight", {
    intensity: 0.5
  }), /*#__PURE__*/React.createElement("pointLight", {
    position: [5, 10, 0],
    intensity: 2
  }), /*#__PURE__*/React.createElement("spotLight", {
    position: [10, 10, 10],
    angle: 0.15,
    penumbra: 1,
    intensity: 2
  }), /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement(Loader, null)
  }, /*#__PURE__*/React.createElement(Fox, {
    currentAnimation: cusrrentAnimation,
    position: [0.0000041253, -2.0234598603, 0.1178159442],
    rotation: [0, 0, 0],
    scale: [-2, 1.7, 0.5134029317]
  })))));
};
export default Contact;