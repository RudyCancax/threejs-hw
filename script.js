import * as THREE from "three";

// CANVAS
const canvas = document.querySelector('canvas.webgl');

// SCENE
const scene = new THREE.Scene();

// OBJECT
const geo = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: '#23f76b'});
const mesh = new THREE.Mesh(geo, material);
// ----------------------
// Move Mesh position

// mesh.position.z = 0.7;
// mesh.position.y = -0.6;
// mesh.position.x = 1;

// Move mesh position by function position.set(x, y, z);
mesh.position.set(1, -0.6, 0.7);
// ----------------------
scene.add(mesh);

/**
 * AXIS HELPER
 */
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);



// CAMERA
const camera = new THREE.PerspectiveCamera(35, 800/600);
// camera.position.z = 10;
// camera.position.x = 2;
// camera.position.y = 1;
camera.position.set(2, 1, 10);
scene.add(camera);

// RENDERER
const renderer = new THREE.WebGLRenderer({canvas: canvas});

renderer.setSize(800, 600);
renderer.render(scene, camera);