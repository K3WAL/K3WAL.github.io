function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { useRef, useEffect } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
const Plane = ({
  isRotating,
  ...props
}) => {
  const ref = useRef();
  const {
    scene,
    animations
  } = useGLTF(planeScene);
  const {
    actions
  } = useAnimations(animations, ref);
  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);
  return /*#__PURE__*/React.createElement("mesh", _extends({}, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("primitive", {
    object: scene
  }));
};
export default Plane;