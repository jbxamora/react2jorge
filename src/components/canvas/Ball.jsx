import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Decal,
  Float,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

// Define a Ball component that accepts a texture URL as a prop
const Ball = (props) => {
  // Load the texture using useTexture from drei
  const [decal] = useTexture([props.imgUrl]);

  // Return a mesh with an icosahedronGeometry
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Add a Decal component to the mesh, using the loaded texture */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// Define a BallCanvas component that renders a Canvas from @react-three/fiber
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Add OrbitControls to allow for rotating the Ball */}
        <OrbitControls enableZoom={false} />
        {/* Render the Ball component, passing the icon prop as the texture URL */}
        <Ball imgUrl={icon} />
      </Suspense>

      {/* Use Preload from drei to preload all assets */}
      <Preload all />
    </Canvas>
  );
};

// Export the BallCanvas component as the default export
export default BallCanvas;
