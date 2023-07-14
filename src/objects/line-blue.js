import { BufferGeometry, Line, LineBasicMaterial, Vector3 } from 'three';

const points = [
  new Vector3(-2, 0, 0),
  new Vector3(0, 2, 0),
  new Vector3(2, 0, 0),
];

const geometry = new BufferGeometry().setFromPoints(points);
const material = new LineBasicMaterial( { color: 0x0000ff } );
const line = new Line(geometry, material);

export default line;
