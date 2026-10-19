// Optional 3D hero (only with ?3d=1 in Creative mode): a slow swell under a row of low waterfront blocks.
// Colours are DGA SA-flag greens / white; geometry is tiny (one plane + 7 boxes) to keep GPU cost low.
export function buildCoast(THREE, { scene, camera, reduced }) {
  camera.position.set(0, 3.2, 7.5); camera.lookAt(0, 0, 0);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x14573a, 1.6));
  const sun = new THREE.DirectionalLight(0xffffff, 1.2); sun.position.set(3, 6, 4); scene.add(sun);
  const water = new THREE.Mesh(new THREE.PlaneGeometry(16, 8, 48, 24), new THREE.MeshStandardMaterial({ color: 0x1b8354, flatShading: true, roughness: 0.6 }));
  water.rotation.x = -Math.PI / 2; scene.add(water);
  const base = water.geometry.attributes.position.array.slice();
  const blocks = new THREE.Group();
  const blockMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
  [[-4.5, 1.1], [-3.4, 1.6], [-2.2, 0.9], [-0.6, 1.9], [0.9, 1.2], [2.4, 1.5], [3.8, 1.0]].forEach(([positionX, height]) => {
    const block = new THREE.Mesh(new THREE.BoxGeometry(0.7, height, 0.7), blockMaterial); block.position.set(positionX, height / 2 + 0.2, -2.4); blocks.add(block);
  });
  scene.add(blocks);
  const positions = water.geometry.attributes.position;
  const swell = (elapsedMs) => { for (let i = 0; i < positions.count; i++) { const vertexX = base[i * 3]; const vertexY = base[i * 3 + 1]; positions.array[i * 3 + 2] = Math.sin(vertexX * 0.9 + elapsedMs * 0.0012) * 0.12 + Math.cos(vertexY * 1.3 + elapsedMs * 0.0009) * 0.08; } positions.needsUpdate = true; };
  swell(0);
  return reduced ? null : (elapsedMs) => swell(elapsedMs);
}
