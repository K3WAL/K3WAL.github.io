import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import skyScene from "../assets/3d/sky.glb";
const Sky = ({
  isRotating
}) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta;
    }
  });
  return /*#__PURE__*/React.createElement("mesh", {
    ref: skyRef
  }, /*#__PURE__*/React.createElement("primitive", {
    object: sky.scene
  }));
};
export default Sky;