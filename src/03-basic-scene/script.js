// Create the scene where the object will live in
const scene = new THREE.Scene();

// Create a red cube (geometry and material combined as mesh)
const geometry = new THREE.BoxGeometry(1, 1, 1);    // parameters width, height, and depth
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

// Add mesh (red cube) to scene
scene.add(mesh);

// Create an aspect ratio (width & height of the render)
const size = {
    width: 800,
    height: 600
};

// Add a camera and position it further back
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);     // 75° view angle (fov = field of view) and aspect ratio
camera.position.z = 3;
scene.add(camera);

// Add a renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

// set the size of the renderer and render the scene
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);