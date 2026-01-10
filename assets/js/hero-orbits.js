/**
 * Three.js Orbiting Objects for Hero Section
 * Creates orbiting 3D objects with text/images representing experience and technologies
 */

function createHeroOrbits(containerId, portfolioData) {
  // Check if Three.js is loaded
  if (typeof THREE === 'undefined') {
    console.warn('Three.js is not loaded. Orbiting objects will not be available.');
    return null;
  }
  
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`Container ${containerId} not found.`);
    return null;
  }

  // Scene setup
  const scene = new THREE.Scene();
  const width = container.clientWidth;
  const height = container.clientHeight;
  const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ 
    alpha: true, 
    antialias: true 
  });
  
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  renderer.domElement.style.pointerEvents = 'none';
  container.appendChild(renderer.domElement);

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);
  
  const pointLight1 = new THREE.PointLight(0x9b59b6, 1, 50);
  pointLight1.position.set(5, 5, 5);
  scene.add(pointLight1);
  
  const pointLight2 = new THREE.PointLight(0x3498db, 1, 50);
  pointLight2.position.set(-5, -5, -5);
  scene.add(pointLight2);

  // Get technologies and stats from portfolio data
  const stats = portfolioData?.statistics || {};
  const techStats = stats.byTechnology || {};
  
  // Create orbiting objects with text/sprites
  const orbitingObjects = [];
  const orbitGroup = new THREE.Group();
  
  // Top technologies for orbiting objects (increased to show more)
  const topTechs = Object.entries(techStats)
    .filter(([tech]) => !tech.includes('extension') && tech !== 'csv' && tech !== 'pyc' && tech !== 'no-extension')
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15); // Top 15 technologies (increased from 8)
  
  // Create sprite text objects for each technology
  topTechs.forEach(([tech, count], index) => {
    // Create canvas for text sprite
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 128;
    
    context.fillStyle = 'rgba(0, 0, 0, 0)';
    context.fillRect(0, 0, 256, 128);
    
    context.font = 'Bold 36px Arial';
    context.fillStyle = '#9b59b6';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(tech, 128, 64);
    
    // Create texture from canvas
    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ 
      map: texture,
      transparent: true,
      opacity: 0.8
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(1.5, 0.75, 1);
    
    // Position in orbit (create more varied orbits for more objects)
    const orbitRing = Math.floor(index / 5); // Group into rings of ~5 objects
    const radius = 2.5 + orbitRing * 0.8; // Multiple orbit rings
    const angle = (index / topTechs.length) * Math.PI * 2;
    const height = ((index % 5) - 2) * 0.8; // Varying heights within each ring
    
    sprite.position.x = Math.cos(angle) * radius;
    sprite.position.y = height;
    sprite.position.z = Math.sin(angle) * radius;
    
    // Store orbit data
    const orbitData = {
      sprite,
      angle,
      radius,
      height,
      speed: 0.003 + (index % 3) * 0.002, // Varying speeds
      rotationSpeed: 0.01 + (index % 3) * 0.005
    };
    
    orbitingObjects.push(orbitData);
    orbitGroup.add(sprite);
  });
  
  // Add more geometric shapes for variety (increased from 3 to 6)
  const shapes = [
    { type: 'box', color: 0x3498db },
    { type: 'cylinder', color: 0xe74c3c },
    { type: 'sphere', color: 0xf39c12 },
    { type: 'octahedron', color: 0x2ecc71 },
    { type: 'tetrahedron', color: 0xe67e22 },
    { type: 'torus', color: 0x9b59b6 }
  ];
  
  shapes.forEach((shape, index) => {
    let geometry;
    if (shape.type === 'box') {
      geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    } else if (shape.type === 'cylinder') {
      geometry = new THREE.CylinderGeometry(0.2, 0.2, 0.4, 8);
    } else if (shape.type === 'sphere') {
      geometry = new THREE.SphereGeometry(0.25, 16, 16);
    } else if (shape.type === 'octahedron') {
      geometry = new THREE.OctahedronGeometry(0.25);
    } else if (shape.type === 'tetrahedron') {
      geometry = new THREE.TetrahedronGeometry(0.25);
    } else if (shape.type === 'torus') {
      geometry = new THREE.TorusGeometry(0.2, 0.1, 8, 16);
    } else {
      geometry = new THREE.SphereGeometry(0.25, 16, 16);
    }
    
    const material = new THREE.MeshPhongMaterial({ 
      color: shape.color,
      emissive: shape.color,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.7
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    
    // Position in orbit for shapes (outer ring)
    const radius = 4.5 + (index % 2) * 0.5;
    const angle = (index / shapes.length) * Math.PI * 2;
    const height = -3 + (index % 3) * 1.5;
    
    mesh.position.x = Math.cos(angle) * radius;
    mesh.position.y = height;
    mesh.position.z = Math.sin(angle) * radius;
    
    orbitingObjects.push({
      sprite: mesh,
      angle,
      radius,
      height,
      speed: 0.005,
      rotationSpeed: 0.02
    });
    
    orbitGroup.add(mesh);
  });
  
  scene.add(orbitGroup);

  // Camera position
  camera.position.z = 8;
  camera.lookAt(0, 0, 0);

  // Animation variables
  let animationId = null;
  let mouseX = 0;
  let mouseY = 0;
  let time = 0;
  
  // Mouse movement for slight interaction
  const handleMouseMove = (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  };
  
  window.addEventListener('mousemove', handleMouseMove);

  // Animation loop
  function animate() {
    animationId = requestAnimationFrame(animate);
    time += 0.01;
    
    // Update orbiting objects
    orbitingObjects.forEach((orbit, index) => {
      // Update angle for orbital motion
      orbit.angle += orbit.speed;
      
      // Calculate new position
      orbit.sprite.position.x = Math.cos(orbit.angle) * orbit.radius;
      orbit.sprite.position.z = Math.sin(orbit.angle) * orbit.radius;
      orbit.sprite.position.y = orbit.height + Math.sin(time * 2 + index) * 0.3; // Gentle vertical bob
      
      // Rotate objects
      if (orbit.sprite.rotation) {
        orbit.sprite.rotation.x += orbit.rotationSpeed;
        orbit.sprite.rotation.y += orbit.rotationSpeed;
      }
    });
    
    // Rotate entire group slowly
    orbitGroup.rotation.y += 0.002;
    
    // Slight camera movement based on mouse
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
    
    renderer.render(scene, camera);
  }
  
  // Start animation
  animate();

  // Handle window resize
  const handleResize = () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };
  
  window.addEventListener('resize', handleResize);

  // Cleanup function
  return {
    destroy: () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.clear();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    }
  };
}

// Export for global use
window.createHeroOrbits = createHeroOrbits;
