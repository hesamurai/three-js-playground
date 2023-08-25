import { SphereGeometry, Mesh, MeshStandardMaterial } from 'three';
import { COLOURS } from '../config.js';

const geometry = new SphereGeometry(0.5);
const material = new MeshStandardMaterial( {
  color: COLOURS.SPHERE,
  wireframe: true,
});
const sphere = new Mesh( geometry, material );
sphere.position.x = 2;

export default sphere;
