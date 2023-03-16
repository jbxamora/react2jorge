import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // Load the computer model using the useGLTF hook
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    // Create a mesh to hold the computer model
    <mesh>
      {/* Add a hemisphere light with intensity and ground color */}
      <hemisphereLight intensity={0.15} groundColor="black" />

      {/* Add a spot light with position, angle, penumbra, intensity, and shadow properties */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      {/* Add a point light with intensity */}
      <pointLight intensity={1} />

      {/* Add the computer model as a primitive with scale, position, and rotation */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75} // Set scale based on isMobile prop
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} // Set position based on isMobile prop
        rotation={[-0.01, -0.2, -0.1]} // Set rotation
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    // Create a Canvas component with the following properties:
    <Canvas
      frameloop="demand" // Set the frameloop property to "demand"
      shadows // Enable shadows
      dpr={[1, 2]} // Set device pixel ratio to 1 or 2
      camera={{ position: [20, 3, 5], fov: 25 }} // Set camera position and field of view
      gl={{ preserveDrawingBuffer: true }} // Enable the preserveDrawingBuffer property
    >
      {/* Set up a fallback component while the data is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Add the OrbitControls component */}
        <OrbitControls
          enableZoom={false} // Disable zooming
          maxPolarAngle={Math.PI / 2} // Set max polar angle
          minPolarAngle={Math.PI / 2} // Set min polar angle
        />
        {/* Add the Computers component with the isMobile property */}
        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Preload all assets */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
