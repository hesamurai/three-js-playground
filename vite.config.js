import gltf from 'vite-plugin-gltf';

export default {
  root: 'src',
  build: {
    emptyOutDir: true,
    outDir: '../dist',
    sourcemap: true,
  },
  plugins: [
    gltf(),
  ],
  resolve: {
    preserveSymlinks: true,
  },
}
