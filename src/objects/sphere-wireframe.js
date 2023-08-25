import { SphereGeometry, Mesh, MeshBasicMaterial } from 'three';

const geometry = new SphereGeometry(0.5);
const material = new MeshBasicMaterial( {
  color: 0x00ff00,
  wireframe: true,
});
const sphere = new Mesh( geometry, material );
sphere.position.x = 2;

export default sphere;
