import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/**
 * CURSOR
 */
let coords = {
    x: 0,
    y: 0
}

let s = {
    w: window.screen.width,
    h: window.screen.height
}

window.addEventListener('mousemove', (event) => {
    coords.x = event.x / sizes.width - 0.5;
    coords.y = event.y / sizes.height - 0.5;
    console.log(window.screen.height);

});

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');
const button = document.getElementById('resetb');


// Sizes
const sizes = {
    width: window.screen.width * 0.97,
    height: window.screen.height * 0.8
}

button.addEventListener('click', ()=> {
    controls.reset();
});

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 3, 3, 3),
    new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(65, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 4;
scene.add(camera)


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()


const controls = new OrbitControls( camera, canvas );
controls.enableDamping = true;

const main = () =>
{
    const elapsedTime = clock.getElapsedTime()

    controls.update();

    // Render
    renderer.render(scene, camera)

    // Call main again on the next frame
    window.requestAnimationFrame(main)
}

main()