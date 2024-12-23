import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
import sakura from "../assets/sakura.mp3";
import { soundoff } from "../assets/icons";
import { soundon } from "../assets/icons";
const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition];
  };
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return /*#__PURE__*/React.createElement("section", {
    className: "w-full h-screen relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-28 left-0 right-0 z-10 flex items-center justify-center"
  }, currentStage && /*#__PURE__*/React.createElement(HomeInfo, {
    currentStage: currentStage
  })), /*#__PURE__*/React.createElement(Canvas, {
    className: `w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`,
    camera: {
      near: 0.1,
      far: 1000
    }
  }, /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement(Loader, null)
  }, /*#__PURE__*/React.createElement("directionalLight", {
    position: [1, 1, 1],
    intensity: 2
  }), /*#__PURE__*/React.createElement("ambientLight", {
    intensity: 0.5
  }), /*#__PURE__*/React.createElement("pointLight", {
    position: [10, 5, 10],
    intensity: 2
  }), /*#__PURE__*/React.createElement("spotLight", {
    position: [0, 50, 10],
    angle: 0.15,
    penumbra: 1,
    intensity: 2
  }), /*#__PURE__*/React.createElement("hemisphereLight", {
    skyColor: "#b1e1ff",
    groundColor: "#000000",
    intensity: 1
  }), " ", /*#__PURE__*/React.createElement(Bird, null), /*#__PURE__*/React.createElement(Sky, {
    isRotating: isRotating
  }), /*#__PURE__*/React.createElement(Island, {
    position: islandPosition,
    scale: islandScale,
    isrotation: islandRotation,
    isRotating: isRotating,
    setIsRotating: setIsRotating,
    setCurrentStage: setCurrentStage,
    rotation: [0.1, 4.7077, 0]
  }), /*#__PURE__*/React.createElement(Plane, {
    isRotating: isRotating,
    Scale: planeScale,
    Position: planePosition,
    rotation: [0, 20, 0]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-2 left-2"
  }, /*#__PURE__*/React.createElement("img", {
    src: !isPlayingMusic ? soundoff : soundon,
    alt: "sound",
    className: "w-10 h-10 cursor-pointer object-contain",
    onClick: () => setIsPlayingMusic(!isPlayingMusic)
  })));
};
export default Home;