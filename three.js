import * as THREE from 'three';
import './index.css';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/**
 * DDOWN
 */
// Get the dropdown element
const dropdown = document.getElementById('myDropdown');

// Add an event listener to the dropdown for the 'change' event
dropdown.addEventListener('change', function() {
  // Get the selected value
  const selectedValue = dropdown.value;

  // Do something based on the selected value
  scene.clear();
  switch(selectedValue) {
    case 'box':
        scene.add(new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true })
        ));
        break;
    case 'sphere':
        scene.add(new THREE.Mesh(
            new THREE.SphereGeometry(1),
            new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true })
        ));
        break;
    case 'bsphere':
        scene.add(new THREE.Mesh(
            new THREE.SphereGeometry(5),
            new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true })
        ));
        break;
    case 'cone':
        scene.add(new THREE.Mesh(
            new THREE.ConeGeometry(1, 3),
            new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true })
        ));
      break;
    case 'ring':
        scene.add(new THREE.Mesh(
            new THREE.RingGeometry(0.5, 1),
            new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true })
        ));
      break;
    case 'tube':
        scene.add(new THREE.Mesh(
            new THREE.TubeGeometry(),
            new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true })
        ));
      break;
    case 'extrude':
        scene.add(new THREE.Mesh(
            new THREE.ExtrudeGeometry(),
            new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true })
        ));
      break;
    case 'late':
        scene.add(new THREE.Mesh(
            new THREE.LatheGeometry(),
            new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true })
        ));
      break;
    case 'plane':
        scene.add(new THREE.Mesh(
            new THREE.PlaneGeometry,
            new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true })
        ));
      break;
    case 'shape':
        scene.add(new THREE.Mesh(
            new THREE.ShapeGeometry,
            new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true })
        ));
      break;
    case 'torus':
        scene.add(new THREE.Mesh(
            new THREE.TorusGeometry(2),
            new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true })
        ));
      break;
    case 'circle':
        scene.add(new THREE.Mesh(
            new THREE.CircleGeometry(2),
            new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true })
        ));
      break;
    case 'capsule':
        scene.add(new THREE.Mesh(
            new THREE.CapsuleGeometry(2, 3),
            new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true })
        ));
      break;
    case 'cilinder':
        scene.add(new THREE.Mesh(
            new THREE.CylinderGeometry(0, 2, 3, 10),
            new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true })
        ));
      break;
    case 'torusk':
        scene.add(new THREE.Mesh(
            new THREE.TorusKnotGeometry(),
            new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true })
        ));
      break;
    case 'octa':
        scene.add(new THREE.Mesh(
            new THREE.OctahedronGeometry(),
            new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true })
        ));
      break;
    default:
      // Code to execute when no option is selected
      console.log('No option selected');
  }
  camera.updateProjectionMatrix();
});


/**
 * END DDOWN
 */

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
});

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');
const button = document.getElementById('resetb');


// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', ()=>{
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
});

window.addEventListener('dblclick', ()=>{
    console.log('double cl');
    if(!document.fullscreenElement){
        canvas.requestFullscreen()
    } else{
        document.exitFullscreen();
    }

});

button.addEventListener('click', ()=> {
    controls.reset();
});

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true })
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
renderer.setSize(sizes.width, sizes.height);
renderer.setClearColor(0x0d1332);
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));

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