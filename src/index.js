import './style.css'

import {
  AxesHelper,
  AmbientLight,
  GridHelper,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three';
import * as dat from 'dat.gui';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
import WebGL from 'three/addons/capabilities/WebGL.js';
import cube from './objects/box-green';
import line from './objects/line-blue';
import sphere from './objects/sphere-wireframe';
import loadVaseGLTFModel from './objects/vase-gltf';
import { COLOURS } from './config.js';

const renderer = new WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 1, 2, 5 );
camera.lookAt( 0, 0, 0 );

// add mouse control
const orbitControl = new OrbitControls(camera, renderer.domElement)
// orbitControl.update(); // the video tutorial said this line is needed, but it does not seem so

// add some light
const color = 0xFFFFFF;
const intensity = 1;
const light = new AmbientLight(color, intensity);
scene.add(light);

// add axes helper
const axesHelper = new AxesHelper(5);
scene.add(axesHelper);

// add grid helper
const gridHelper = new GridHelper(10);
scene.add(gridHelper);

loadVaseGLTFModel()
  .then(gltfModel => {
    scene.add(gltfModel.scene)
  })
  .catch(error => console.log(error));
scene.add(cube);
scene.add(line);
scene.add(sphere);

let animationStep = 0;

function animate() {
  requestAnimationFrame( animate );
  cube.rotation.x += 0.002;
  cube.rotation.y += 0.005;
  line.rotation.x += 0.01;

  // sphere bouncing
  animationStep += options['Bouncing Speed'];
  sphere.position.y = 2 * Math.abs(Math.sin(animationStep));

  renderer.render( scene, camera );
}

// build the options GUI
const gui = new dat.GUI();
const options = {
  'Bouncing Speed': 0.01,
  'Sphere Colour': COLOURS.SPHERE,
  'Sphere Wireframe': true,
};
gui.add(options, 'Bouncing Speed', 0, 0.1).onChange((number) => options['Bouncing Speed'] = number);
gui.addColor(options, 'Sphere Colour').onChange((colourCode) => sphere.material.color.set(colourCode));
gui.add(options, 'Sphere Wireframe').onChange((bool) => sphere.material.wireframe = bool);

if (WebGL.isWebGLAvailable()) {
  document.body.appendChild( renderer.domElement );
  animate();
} else {
  console.log(WebGL.getWebGLErrorMessage());
  document.querySelector('body').appendChild(WebGL.getWebGLErrorMessage());
}
