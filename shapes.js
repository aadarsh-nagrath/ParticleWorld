// Shape Functions
export const shapes = {
    sphere: (particlesGeometry,particleCount) => {
        const positions = particlesGeometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const r = 2;

            const index = i * 3;
            positions[index] = r * Math.sin(phi) * Math.cos(theta); // X
            positions[index + 1] = r * Math.sin(phi) * Math.sin(theta); // Y
            positions[index + 2] = r * Math.cos(phi); // Z
        }
    },
    cube: (particlesGeometry,particleCount) => {
        const positions = particlesGeometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
            const index = i * 3;
            positions[index] = (Math.random() - 0.5) * 4; // X
            positions[index + 1] = (Math.random() - 0.5) * 4; // Y
            positions[index + 2] = (Math.random() - 0.5) * 4; // Z
        }
    },
    torus: (particlesGeometry,particleCount) => {
        const positions = particlesGeometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI * 2;
            const r = 2;
            const radius = 1;

            const index = i * 3;
            positions[index] = (radius + r * Math.cos(phi)) * Math.cos(theta); // X
            positions[index + 1] = (radius + r * Math.cos(phi)) * Math.sin(theta); // Y
            positions[index + 2] = r * Math.sin(phi); // Z
        }
    },
    dodecahedron: (particlesGeometry,particleCount) => {
        const positions = particlesGeometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            const r = 2;

            const index = i * 3;
            positions[index] = r * Math.sin(phi) * Math.cos(theta); // X
            positions[index + 1] = r * Math.sin(phi) * Math.sin(theta); // Y
            positions[index + 2] = r * Math.cos(phi); // Z
        }
    },
    icosahedron: (particlesGeometry,particleCount) => {
        const positions = particlesGeometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            const r = 2;

            const index = i * 3;
            positions[index] = r * Math.sin(phi) * Math.cos(theta); // X
            positions[index + 1] = r * Math.sin(phi) * Math.sin(theta); // Y
            positions[index + 2] = r * Math.cos(phi); // Z
        }
    },
    octahedron: (particlesGeometry,particleCount) => {
        const positions = particlesGeometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            const r = 2;

            const index = i * 3;
            positions[index] = r * Math.sin(phi) * Math.cos(theta); // X
            positions[index + 1] = r * Math.sin(phi) * Math.sin(theta); // Y
            positions[index + 2] = r * Math.cos(phi); // Z
        }
    },
    pyramid: (particlesGeometry,particleCount) => {
        const positions = particlesGeometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
            const x = (Math.random() - 0.5) * 4;
            const y = Math.random() * 2;
            const z = (Math.random() - 0.5) * 4;

            const index = i * 3;
            positions[index] = x;
            positions[index + 1] = y;
            positions[index + 2] = z;
        }
    },
    cone: (particlesGeometry,particleCount) => {
        const positions = particlesGeometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI * 0.5;
            const r = 2;
            const height = 2;

            const index = i * 3;
            positions[index] = r * Math.sin(phi) * Math.cos(theta); // X
            positions[index + 1] = height * Math.cos(phi); // Y
            positions[index + 2] = r * Math.sin(phi) * Math.sin(theta); // Z
        }
    },
    star: (particlesGeometry,particleCount) => {
        const positions = particlesGeometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            const r = 2;

            const index = i * 3;
            positions[index] = r * Math.sin(phi) * Math.cos(theta); // X
            positions[index + 1] = r * Math.sin(phi) * Math.sin(theta); // Y
            positions[index + 2] = r * Math.cos(phi); // Z
        }
    },
    spiral: (particlesGeometry,particleCount) => {
        const positions = particlesGeometry.attributes.position.array;
        const radius = 1;
        const turns = 10;

        for (let i = 0; i < particleCount; i++) {
            const t = i / particleCount * turns * Math.PI * 2;
            const x = radius * Math.cos(t);
            const y = i / particleCount * 4 - 2; // Scale height
            const z = radius * Math.sin(t);

            const index = i * 3;
            positions[index] = x;
            positions[index + 1] = y;
            positions[index + 2] = z;
        }
    },
    heart: (particlesGeometry,particleCount) => {
        const positions = particlesGeometry.attributes.position.array;
        const a = 1;
        const b = 1;

        for (let i = 0; i < particleCount; i++) {
            const t = (i / particleCount) * (Math.PI * 2);
            const x = a * Math.sin(t) * Math.cos(t);
            const y = b * Math.sin(t) * Math.sin(t);
            const z = (i / particleCount) * 2 - 1;

            const index = i * 3;
            positions[index] = x;
            positions[index + 1] = y;
            positions[index + 2] = z;
        }
    },
    mobius: (particlesGeometry,particleCount) => {
        const positions = particlesGeometry.attributes.position.array;

        for (let i = 0; i < particleCount; i++) {
            // Randomly distribute particles along the Möbius strip
            const t = Math.random() * Math.PI * 2;  // t goes from 0 to 2π (full rotation)
            const v = (Math.random() - 0.5) * 0.5; // v goes from -0.25 to 0.25 for width variation

            const x = (1 + v * Math.cos(t / 2)) * Math.cos(t);
            const y = (1 + v * Math.cos(t / 2)) * Math.sin(t);
            const z = v * Math.sin(t / 2);

            const index = i * 3;
            positions[index] = x;        // X position
            positions[index + 1] = y;    // Y position
            positions[index + 2] = z;    // Z position
        }
    },
};
