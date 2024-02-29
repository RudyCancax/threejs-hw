import * as THREE from "three";

// SCENE
const scene = new THREE.Scene();

// GEOMETRY
const geo = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: '#0d0d1d'})
const mesh = new THREE.Mesh(geo, material);

console.log('js working!!! ', THREE);