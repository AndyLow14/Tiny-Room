import * as THREE from "three";
import { useControls } from "leva";
import React, { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { EffectComposer, GodRays } from "@react-three/postprocessing";
import { OrbitControls } from "@react-three/drei";
import { AphroditeModel } from "../Models";
import { BackButton } from "../Components";

const Aphrodite = () => {
  const useController = () => {
    const datas = useControls("godray", {
      enabled: true,
      samples: {
        value: 140,
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
        value: 0.5,
        min: 0,
        max: 1,
        step: 0.01,
      },
      blur: {
        value: 0.0,
        min: 0,
        max: 1,
        step: 0.01,
      },
      autoRotate: false,
      color: "#6b466c",
    });
    return datas;
  };

  const Light = () => {
    const meshRef = useRef();
    const meshRef2 = useRef();
    const { scene } = useThree();
    const datas = useController();

    useEffect(() => {
      if (!scene.userData.refs) scene.userData.refs = { lightMesh: [] };
      scene.userData.refs.lightMesh[0] = meshRef;
      scene.userData.refs.lightMesh[1] = meshRef2;
    }, [scene.userData]);

    return (
      <>
        <mesh ref={meshRef} position={[-0.1, -1.1, -5.19]}>
          <planeGeometry args={[2.6, 1.4]} />
          <meshBasicMaterial color={datas.color} side={THREE.DoubleSide} />
          <pointLight color={datas.color} intensity={500} />
        </mesh>
        <mesh ref={meshRef2} position={[-3.0, -1.1, -5.19]}>
          <planeGeometry args={[2.6, 1.4]} />
          <meshBasicMaterial color={datas.color} side={THREE.DoubleSide} />
          <pointLight color={datas.color} intensity={500} />
        </mesh>
      </>
    );
  };

  const Effects = () => {
    const { scene } = useThree();
    const [lightMesh, setLightMesh] = useState();
    const [lightMesh2, setLightMesh2] = useState();
    const datas = useController();

    useEffect(() => {
      if (scene.userData.refs && scene.userData.refs.lightMesh[0]) {
        const lightMeshRef = scene.userData.refs.lightMesh[0];
        setLightMesh(lightMeshRef);
      }
      if (scene.userData.refs && scene.userData.refs.lightMesh[1]) {
        const lightMeshRef2 = scene.userData.refs.lightMesh[1];
        setLightMesh2(lightMeshRef2);
      }
    }, [scene.userData.refs]);

    return (
      <>
        <Light />
        {lightMesh && lightMesh2 && datas.enabled && (
          <EffectComposer multisampling={0}>
            <GodRays sun={lightMesh.current} {...datas} />
            <GodRays sun={lightMesh2.current} {...datas} />
          </EffectComposer>
        )}
      </>
    );
  };

  const datas = useController();

  return (
    <div className="w-screen h-screen">
      <BackButton />
      <Canvas
        orthographic
        camera={{
          position: [20, 20, 20],
          zoom: 38,
        }}
        dpr={window.devicePixelRatio}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color("#000000"));
        }}
        shadows
      >
        <OrbitControls autoRotate={datas.autoRotate} autoRotateSpeed={0.5} />
        <pointLight position={[20, 20, 20]} intensity={200} />
        <Suspense fallback={null}>
          <AphroditeModel position={[0, -6, 0]} />
        </Suspense>
        <Effects />
      </Canvas>
    </div>
  );
};

export default Aphrodite;
