function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/*Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: ItsYaBoi798 (https://sketchfab.com/ItsYaBoi798)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/naruto-sage-mode-d278dfc8fe7f44c1907c69a44464a71e
Title: Naruto Sage Mode
*/

import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import scene from "../assets/3d/naruto.glb";
const Fox = ({
  currentAnimation,
  ...props
}) => {
  const group = useRef();
  const {
    nodes,
    materials,
    animations
  } = useGLTF(scene);
  const {
    actions
  } = useAnimations(animations, group);
  useEffect(() => {
    Object.values(actions).forEach(action => action.stop());
    console.log(actions);
    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);
  return /*#__PURE__*/React.createElement("group", _extends({
    ref: group
  }, props, {
    dispose: null
  }), /*#__PURE__*/React.createElement("group", {
    name: "Sketchfab_Scene"
  }, /*#__PURE__*/React.createElement("group", {
    name: "Sketchfab_model",
    rotation: [-Math.PI / 2, 0, 0],
    scale: 179.231
  }, /*#__PURE__*/React.createElement("group", {
    name: "fbx_mergefbx",
    rotation: [Math.PI / 2, 0, 0],
    scale: 0.01
  }, /*#__PURE__*/React.createElement("group", {
    name: "Object_2"
  }, /*#__PURE__*/React.createElement("group", {
    name: "RootNode"
  }, /*#__PURE__*/React.createElement("group", {
    name: "Object_4"
  }, /*#__PURE__*/React.createElement("primitive", {
    object: nodes._rootJoint
  }), /*#__PURE__*/React.createElement("skinnedMesh", {
    name: "Object_7",
    geometry: nodes.Object_7.geometry,
    material: materials["nr2_tex01.pngmat"],
    skeleton: nodes.Object_7.skeleton
  }), /*#__PURE__*/React.createElement("skinnedMesh", {
    name: "Object_8",
    geometry: nodes.Object_8.geometry,
    material: materials["nr2_tex02.pngmat"],
    skeleton: nodes.Object_8.skeleton
  }), /*#__PURE__*/React.createElement("skinnedMesh", {
    name: "Object_9",
    geometry: nodes.Object_9.geometry,
    material: materials["nr2_eye.pngmat"],
    skeleton: nodes.Object_9.skeleton
  }), /*#__PURE__*/React.createElement("group", {
    name: "Object_6"
  }), /*#__PURE__*/React.createElement("group", {
    name: "mesh18"
  }))))))));
};
export default Fox;