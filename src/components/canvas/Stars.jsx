// Importing necessary modules from React and three.js libraries
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// Importing a module for generating random numbers
import * as random from "maath/random/dist/maath-random.esm";

// Defining a functional component for rendering stars
const Stars = (props) => {
  // Creating a reference to the Points object to access it later
  const ref = useRef();
  // Generating an array of random 3D coordinates within a sphere using maath-random library
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  // Adding a frame update hook to rotate the group of stars
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  // Returning the Points object with PointMaterial for rendering stars
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Defining a functional component for rendering stars in a canvas
const StarsCanvas = () => {
  // Returning a Canvas component from the react-three/fiber library with a camera
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        {/* Preloading assets for better performance */}
        <Preload all />
      </Canvas>
    </div>
  );
};

// Exporting the StarsCanvas component as the default export
export default StarsCanvas;
