import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';

import { shapes } from './shapes.js';

// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 1); // Black background
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

// Particle Settings
const particleCount = 5000;
const particleSize = 0.02;
const particlesGeometry = new THREE.BufferGeometry();
const particlesMaterial = new THREE.PointsMaterial({
    size: particleSize,
    color: 0xffffff, // Start with white
    transparent: true,
    blending: THREE.AdditiveBlending
});

// Create the particles mesh
const positions = new Float32Array(particleCount * 3);
particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);


// Generate Target Positions for Transition
let targetPositions = new Float32Array(particleCount * 3);

// Function to get positions of particles for a specific shape
function generateTargetShapePositions(shape) {
    if (shape === 'sphere') {
        shapes.sphere(particlesGeometry,particleCount);
    } else if (shape === 'cube') {
        shapes.cube(particlesGeometry,particleCount);
    } else if (shape === 'torus') {
        shapes.torus(particlesGeometry,particleCount);
    } else if (shape === 'dodecahedron') {
        shapes.dodecahedron(particlesGeometry,particleCount);
    } else if (shape === 'icosahedron') {
        shapes.icosahedron(particlesGeometry,particleCount);
    } else if (shape === 'octahedron') {
        shapes.octahedron(particlesGeometry,particleCount);
    } else if (shape === 'pyramid') {
        shapes.pyramid(particlesGeometry,particleCount);
    } else if (shape === 'cone') {
        shapes.cone(particlesGeometry,particleCount);
    } else if (shape === 'star') {
        shapes.star(particlesGeometry,particleCount);
    } else if (shape === 'spiral') {
        shapes.spiral(particlesGeometry,particleCount);
    } else if (shape === 'heart') {
        shapes.heart(particlesGeometry,particleCount);
    } else if (shape === 'mobius') {
        shapes.mobius(particlesGeometry,particleCount);
    }

    targetPositions.set(particlesGeometry.attributes.position.array); // Store target positions
}

// Color Changing Function
function changeParticleColor() {
    const randomColor = new THREE.Color(Math.random(), Math.random(), Math.random());
    particlesMaterial.color.set(randomColor);
}

// Interpolate particle positions from one shape to another
function interpolateShapeTransition(fromShape, toShape, duration) {
    const startPositions = new Float32Array(particleCount * 3);
    const currentPositions = particlesGeometry.attributes.position.array;
    startPositions.set(currentPositions);

    generateTargetShapePositions(toShape); // Get target shape positions

    // Smoothly transition each particle's position from start to target
    gsap.to(startPositions, {
        duration: duration,
        ease: "power2.inOut",
        endArray: targetPositions,
        onUpdate: () => {
            for (let i = 0; i < particleCount * 3; i++) {
                currentPositions[i] = startPositions[i];
            }
            particlesGeometry.attributes.position.needsUpdate = true; // Mark the geometry as needing update
        }
    });
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate Particles for a dynamic effect
    particles.rotation.x += 0.001;
    particles.rotation.y += 0.001;

    renderer.render(scene, camera);
}

// Cycle Between Shapes Periodically
let currentShapeIndex = 0;
const shapeKeys = ['dodecahedron','morbius', 'icosahedron', 'octahedron', 'pyramid','sphere', 'cube','torus', 'cone', 'star', 'spiral', 'heart'];

setInterval(() => {
    const fromShape = shapeKeys[currentShapeIndex];
    const toShape = shapeKeys[(currentShapeIndex + 1) % shapeKeys.length];
    interpolateShapeTransition(fromShape, toShape, 2.8); // Transition over 3 seconds
    currentShapeIndex = (currentShapeIndex + 1) % shapeKeys.length;
    setInterval(changeParticleColor, 2500);
}, 3000); // Change shape every 5 seconds

// Handle Window Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start Animation
animate();