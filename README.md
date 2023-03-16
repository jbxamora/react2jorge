# React Portfolio

Built using React.js + Three.js

## Description

This is a portfolio I built from scratch meant to showcase skills, projects, work experience and my tech stack/ capabilities.

### User Story
```
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```
### Acceptance Criteria
```
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```
## Take A Look!

https://react2jorge.com/

#### Repo Links

There a GitHub icons on each project card, click on them to be send to that projects repository
![Picture of Redirect Link](./src/assets/github.png)

## Code Snippets

### Tech Stack
The code snippet is defining a React functional component called `BallCanvas`, which is responsible for rendering a 3D sphere with a texture image mapped onto it. The component is using the `Canvas` component from the `@react-three/fiber` library to create a WebGL canvas.

The `frameloop` property of the `Canvas` component is set to `"demand"`, which means the canvas will only update when needed, resulting in better performance. The `dpr` property is set to `[1, 2]`, which defines the device pixel ratio, ensuring that the canvas looks sharp on high-resolution screens. The `gl` property is set to `{ preserveDrawingBuffer: true }`, which enables the canvas to be saved as an image.

The component is using the `Suspense` component from React to provide a fallback component while the 3D model and texture are being loaded. Inside the `Suspense` component, the `OrbitControls` component from the `@react-three/drei` library is used to allow for rotating the 3D sphere. Finally, the `Ball` component is rendered with the `imgUrl` prop set to the `icon` value, which is the URL of the texture image.

The `Preload` component from `@react-three/drei` is used to preload all assets, which can improve performance by reducing load times.

```js
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
```
Then

```js
const Tech = () => {
  // Returning a flex container with each technology rendered as a BallCanvas component
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};
```

### Earth
The `EarthCanvas` component renders a 3D model of Earth using Three.js and the `useGLTF` hook from `@react-three/drei`. The `Canvas` element provides the Three.js rendering context and camera, and the `OrbitControls` component enables interactive camera controls. The `Earth` component loads the 3D model using the `useGLTF` hook and renders it using the `primitive` component.
```js
const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');
  return (
    <primitive 
    object={earth.scene}
    scale={2.5}
    position-y={0}
    position-x={0}/>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
    shadows
    frameloop='demand'
    gl={{ preserveDrawingBuffer: true }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6],
     }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2} />
        <Earth />
        </Suspense>
    </Canvas>
  )
}

```
## Features

1. React
2. TailWindCSS
3. Custom Domain
4. Accessability
5. Three.js
6. Email.js

## Sources

This project uses the following libraries and tools:

- [Three.js](https://threejs.org/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [React Render Props](https://reactjs.org/docs/render-props.html)
- [Netlify](https://docs.netlify.com/get-started/)
- [Vite](https://vitejs.dev/guide/)
- [PostCSS](https://postcss.org/)
- [JavaScript Mastery](https://www.jsmastery.pro/resources)
- [Framer Motion](https://www.framer.com/motion/?utm_source=motion-readme-docs)
- [Maath](https://www.npmjs.com/package/maath?activeTab=explore)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [Drei](https://github.com/pmndrs/drei)

## License

MIT License

Copyright (c) [2022] [Jorge Zamora]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


Please refer to the documentation of each library/tool for more information on their usage and licensing.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. If the issue goes unresolved for more than a week feel free to contact me at any of the links listed below. Be sure to add me on LinkedIn and Follow me on GitHub to view my course progression. You can also visit the deployed site and sent a message through the contact form.

[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/jbxamora)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](https://www.linkedin.com/in/jorge-zamora-786945250//)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg' alt='instagram' height='40'>](https://www.instagram.com/jbxamora/)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg' alt='stackoverflow' height='40'>](https://stackoverflow.com/users/20023706/jbxamora)