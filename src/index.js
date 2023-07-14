import './style.css'

import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

const geometry = new BoxGeometry( 1, 1, 1 );
const material = new MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new Mesh( geometry, material );
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame( animate );
  cube.rotation.x += 0.002;
  cube.rotation.y += 0.005;
  renderer.render( scene, camera );
}

if (WebGL.isWebGLAvailable()) {
  document.body.appendChild( renderer.domElement );
  animate();
} else {
  console.log(WebGL.getWebGLErrorMessage());
  document.querySelector('body').appendChild(WebGL.getWebGLErrorMessage());
}
