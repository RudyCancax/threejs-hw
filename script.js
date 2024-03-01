import * as THREE from "three";

// CANVAS
const canvas = document.querySelector('canvas.webgl');

// SCENE
const scene = new THREE.Scene();

// OBJECT
const geo = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: '#23f76b'});
const mesh = new THREE.Mesh(geo, material);
/**
 * MESH POSITION 
 * OPTION 1: by axis ->  mesh.position.x or y or z
 * OPTION 2: by using -> mesh.position.set(x, y, z)
 * 
 */

// mesh.position.z = 0.7;
// mesh.position.y = -0.6;
// mesh.position.x = 1;

mesh.position.set(1, -0.6, 0.7);

/**
 * CHANGE MESH DIMENSIONS
 * OPTION 1: use of mesh.scale.x or y or z
 * OPTION 2: mesh.scale.set(x, y, z)
 */
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
mesh.scale.set(2, 0.5, 0.5);



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