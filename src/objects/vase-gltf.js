import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

export default () => new Promise((resolve, reject) => {
  loader.load(
    '/models/vase-gltf/scene.gltf',
    gltf => resolve(gltf),
    undefined,
    error => reject(error)
  );
});
