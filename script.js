import * as THREE from "three";

// CANVAS
const canvas = document.querySelector('canvas.webgl');

/**
 * ===================================
 * SCENE
 * ===================================
 */
const scene = new THREE.Scene();

/**
 * ===================================
 * GROUP
 * ===================================
 */
const group = new THREE.Group();
group.position.y = 1;
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: '#23f76b'})
);
group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: '#ffca28'})
);
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: '#13abec', wireframe: true})
);
cube3.position.x = 2;
group.add(cube3);



/**
 * AXIS HELPER
 */
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);


// CAMERA
const camera = new THREE.PerspectiveCamera(35, 800/600);
camera.position.set(1, 1, 7);
camera.lookAt(cube1.position)


// RENDERER
const renderer = new THREE.WebGLRenderer({canvas: canvas});

renderer.setSize(800, 600);

/**
 * ANIMATIONS
*/

const clock = new THREE.Clock();
const main = () => {

    const time = clock.getElapsedTime();

    cube1.rotation.x = time * Math.PI;
    cube2.rotation.y = Math.sin(time);
    cube2.rotation.x = Math.cos(time);
    cube3.rotation.x = Math.sin(time);
    renderer.render(scene, camera);
    window.requestAnimationFrame(main);
}

main();