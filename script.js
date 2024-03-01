import * as THREE from "three";

// CANVAS
const canvas = document.querySelector('canvas.webgl');

// SCENE
const scene = new THREE.Scene();

// OBJECT
const geo = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: '#23f76b'});
const mesh = new THREE.Mesh(geo, material);

scene.add(mesh);

// CAMERA
const camera = new THREE.PerspectiveCamera(35, 800/600);
camera.position.z = 7;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera);

// RENDERER
const renderer = new THREE.WebGLRenderer({canvas: canvas});

renderer.setSize(800, 600);
renderer.render(scene, camera);