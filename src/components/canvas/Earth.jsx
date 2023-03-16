import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Create a component to hold the Earth model
const Earth = () => {
  // Load the Earth model using the useGLTF hook
  const earth = useGLTF("./planet/scene.gltf");

  // Return the model as a primitive with a set scale and position
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} position-x={0} />
  );
};

// Create a component to hold the canvas
const EarthCanvas = () => {
  // Return the canvas with shadows, frameloop, camera, and OrbitControls
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      {/* Add a loading spinner while the Earth model is being loaded */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate // Enable auto rotation
          enableZoom={false} // Disable zoom
          maxPolarAngle={Math.PI / 2} // Set max polar angle
          minPolarAngle={Math.PI / 2}
        />{" "}
        {/* Set min polar angle */}
        {/* Add the Earth model */}
        <Earth />
        {/* Preload all assets */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
