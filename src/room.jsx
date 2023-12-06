/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Room(props) {
  const { nodes, materials } = useGLTF("/room-open.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node.geometry}
        material={materials.palette}
      />
    </group>
  );
}

useGLTF.preload("/room-open.gltf");
