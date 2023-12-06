import * as THREE from "three";
import { useControls } from "leva";
import React, { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, GodRays } from "@react-three/postprocessing";
import "./App.css";
import { Room } from "./room";
import { OrbitControls } from "@react-three/drei";

const useController = () => {
  const datas = useControls("godray", {
    enabled: true,
    samples: {
      value: 128,
      min: 10,
      max: 200,
      step: 10,
    },
    density: {
      value: 0.96,
      min: 0,
      max: 1,
      step: 0.01,
    },
    decay: {
      value: 0.98,
      min: 0,
      max: 1,
      step: 0.01,
    },
    weight: {
      value: 0.3,
      min: 0,
      max: 1,
      step: 0.01,
    },
    exposure: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.01,
    },
    blur: {
      value: 0.01,
      min: 0,
      max: 1,
      step: 0.01,
    },
    autoRotate: {
      value: true,
    },
    color: "#555555",
  });
  return datas;
};

const Knot = () => {
  const knotRef = useRef();

  // useFrame(() => {
  //   knotRef.current.rotation.y += -0.005;
  //   knotRef.current.rotation.z += -0.005;
  // });

  return (
    <mesh ref={knotRef}>
      <torusKnotGeometry args={[4, 0.4, 256, 64, 1, 6]} />
      <meshPhysicalMaterial
        color={"#FFFFFF"}
        roughness={0}
        metalness={0}
        clearcoat={1}
      />
    </mesh>
  );
};

const Light = () => {
  const meshRef = useRef();
  const { scene } = useThree();
  const datas = useController();

  useEffect(() => {
    if (!scene.userData.refs) scene.userData.refs = {};
    scene.userData.refs.lightMesh = meshRef;
  }, [scene.userData]);

  useEffect(() => {
    meshRef.current.lookAt(0, 0, 0);
  }, []);

  return (
    <mesh ref={meshRef} position={[-0.8, -1.2, -5]}>
      <planeGeometry args={[1.9, 3.4]} />
      <meshBasicMaterial color={datas.color} side={THREE.DoubleSide} />
      <pointLight color={datas.color} intensity={1000} />
    </mesh>
  );
};

const Effects = () => {
  const { scene } = useThree();
  const [lightMesh, setLightMesh] = useState();
  const datas = useController();

  useEffect(() => {
    if (scene.userData.refs && scene.userData.refs.lightMesh) {
      const lightMeshRef = scene.userData.refs.lightMesh;
      setLightMesh(lightMeshRef);
    }
  }, [scene.userData.refs]);

  return (
    <>
      <Light />
      {lightMesh && datas.enabled && (
        <EffectComposer multisampling={0}>
          <GodRays sun={lightMesh.current} {...datas} />
        </EffectComposer>
      )}
    </>
  );
};

const App = () => {
  const datas = useController();
  return (
    <div className="w-screen h-screen">
      <Canvas
        camera={{ position: [0, 8, 15] }}
        dpr={window.devicePixelRatio}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color("#000000"));
        }}
        shadows
      >
        <OrbitControls autoRotate={datas.autoRotate} />
        <pointLight position={[20, 20, 20]} intensity={200} />
        <Suspense fallback={null}>
          <Room position={[0, -3, 0]} />
        </Suspense>
        <Effects />
      </Canvas>
    </div>
  );
};

export default App;
