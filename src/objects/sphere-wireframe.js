import { SphereGeometry, Mesh, MeshBasicMaterial } from 'three';

const geometry = new SphereGeometry(4);
const material = new MeshBasicMaterial( {
  color: 0x00ff00,
  wireframe: true,
});
const sphere = new Mesh( geometry, material );

export default sphere;
