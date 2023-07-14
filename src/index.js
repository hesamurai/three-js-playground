import './style.css'

import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import cube from './objects/box-green';
import line from './objects/line-blue.js';

const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 0, 5 );
camera.lookAt( 0, 0, 0 );

const renderer = new WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

scene.add(cube);
scene.add(line);

function animate() {
  requestAnimationFrame( animate );
  cube.rotation.x += 0.002;
  cube.rotation.y += 0.005;
  line.rotation.x += 0.03;
  renderer.render( scene, camera );
}

if (WebGL.isWebGLAvailable()) {
  document.body.appendChild( renderer.domElement );
  animate();
} else {
  console.log(WebGL.getWebGLErrorMessage());
  document.querySelector('body').appendChild(WebGL.getWebGLErrorMessage());
}
