import * as THREE from 'three'

/**
 * CURSOR
 */
let coords = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove', (event) => {
    coords.x = event.x / sizes.width - 0.5;
    coords.y = event.y / sizes.height - 0.5;
    console.log(event);
});

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

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
// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 4;
camera.lookAt(mesh.position)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const main = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // mesh.rotation.y = elapsedTime;

    // camera
    camera.position.x = Math.cos(coords.x * Math.PI * 2) * 3;
    camera.position.z = Math.sin(coords.x * Math.PI * 2) * 3;
    camera.position.y = coords.y * 3;
    camera.lookAt(mesh.position)

    // Render
    renderer.render(scene, camera)

    // Call main again on the next frame
    window.requestAnimationFrame(main)
}

main()