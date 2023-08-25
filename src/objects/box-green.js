import { BoxGeometry, Mesh, MeshBasicMaterial, TextureLoader } from 'three';
import wave from '../images/wave.jpg';

const geometry = new BoxGeometry( 1, 1, 1 );
const material = new MeshBasicMaterial({
  map: new TextureLoader().load(wave),
});
const cube = new Mesh( geometry, material );

export default cube;
