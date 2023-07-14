import { BufferGeometry, Line, LineBasicMaterial, Vector3 } from 'three';

const material = new LineBasicMaterial( { color: 0x0000ff } );

const points = [];
points.push(new Vector3(-3, 0, 0));
points.push(new Vector3(0, 3, 0));
points.push(new Vector3(3, 0, 0));

const geometry = new BufferGeometry().setFromPoints(points);

const line = new Line(geometry, material);

export default line;
