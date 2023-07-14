import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import modelUrl from '../models/vase-gltf/scene.gltf';

const loader = new GLTFLoader();

export default () => new Promise((resolve, reject) => {
  loader.load(
    modelUrl,
    gltf => resolve(gltf),
    undefined,
    error => reject(error)
  );
});
