/**
 * Three.js DNA Helix Technology Visualization
 * Interactive 3D DNA helix where technologies form the base pairs/rungs
 * Represents the interconnected nature of the tech ecosystem
 */

function createThreeViz(containerId, portfolioData) {
  // Check if Three.js is loaded
  if (typeof THREE === 'undefined') {
    console.warn('Three.js is not loaded. Visualization will not be available.');
    return null;
  }
  
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`Container ${containerId} not found. Visualization will not be available.`);
    return null;
  }

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ 
    alpha: true, 
    antialias: true,
    canvas: container.querySelector('canvas') || null
  });
  
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  // Add canvas if it doesn't exist
  if (!container.querySelector('canvas')) {
    container.appendChild(renderer.domElement);
  }

  // Enhanced lighting for DNA helix
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);
  
  const pointLight1 = new THREE.PointLight(0x9b59b6, 1.2, 100);
  pointLight1.position.set(10, 10, 10);
  scene.add(pointLight1);
  
  const pointLight2 = new THREE.PointLight(0x3498db, 1.2, 100);
  pointLight2.position.set(-10, -10, -10);
  scene.add(pointLight2);
  
  const pointLight3 = new THREE.PointLight(0xe74c3c, 0.8, 80);
  pointLight3.position.set(0, 15, 0);
  scene.add(pointLight3);

  // Extract technologies from portfolio data
  // Handle both data structures: { statistics, projects } or direct { statistics: {...}, projects: [...] }
  const stats = portfolioData?.statistics || portfolioData;
  const technologies = stats?.byTechnology || {};
  const techEntries = Object.entries(technologies)
    .filter(([tech]) => !tech.includes('extension') && tech !== 'csv' && tech !== 'pyc' && tech !== 'no-extension')
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20); // Top 20 technologies for helix

  // DNA Helix parameters
  const helixRadius = 2.5; // Distance from center to each strand
  const helixHeight = 12; // Total height of helix
  const turns = 3; // Number of full rotations
  const techSpacing = helixHeight / techEntries.length; // Vertical spacing between tech pairs

  // Create DNA helix structure
  const helixGroup = new THREE.Group();
  const techNodes = [];
  const strandGroup1 = new THREE.Group(); // Left strand
  const strandGroup2 = new THREE.Group(); // Right strand
  const rungsGroup = new THREE.Group(); // Connecting rungs/base pairs

  // Create the two strands (backbone)
  const strandMaterial = new THREE.MeshPhongMaterial({
    color: 0x9b59b6,
    emissive: 0x9b59b6,
    emissiveIntensity: 0.2,
    shininess: 100
  });

  const strandGeometry = new THREE.SphereGeometry(0.15, 16, 16);
  const strandPoints1 = [];
  const strandPoints2 = [];

  // Generate strand backbone points
  for (let i = 0; i <= 100; i++) {
    const t = i / 100;
    const angle = t * Math.PI * 2 * turns;
    const height = (t - 0.5) * helixHeight;
    
    // First strand
    const x1 = Math.cos(angle) * helixRadius;
    const z1 = Math.sin(angle) * helixRadius;
    strandPoints1.push(new THREE.Vector3(x1, height, z1));
    
    // Second strand (opposite side)
    const x2 = Math.cos(angle + Math.PI) * helixRadius;
    const z2 = Math.sin(angle + Math.PI) * helixRadius;
    strandPoints2.push(new THREE.Vector3(x2, height, z2));
    
    // Create backbone spheres every few points
    if (i % 3 === 0) {
      const sphere1 = new THREE.Mesh(strandGeometry, strandMaterial);
      sphere1.position.set(x1, height, z1);
      strandGroup1.add(sphere1);
      
      const sphere2 = new THREE.Mesh(strandGeometry, strandMaterial);
      sphere2.position.set(x2, height, z2);
      strandGroup2.add(sphere2);
    }
  }

  // Add strands to helix
  helixGroup.add(strandGroup1);
  helixGroup.add(strandGroup2);

  // Create technology nodes as base pairs (rungs)
  techEntries.forEach(([tech, count], index) => {
    const t = index / techEntries.length;
    const angle = t * Math.PI * 2 * turns;
    const height = (t - 0.5) * helixHeight;
    
    // Position on first strand
    const x1 = Math.cos(angle) * helixRadius;
    const z1 = Math.sin(angle) * helixRadius;
    
    // Position on second strand (opposite)
    const x2 = Math.cos(angle + Math.PI) * helixRadius;
    const z2 = Math.sin(angle + Math.PI) * helixRadius;
    
    // Size based on usage count
    const nodeRadius = 0.25 + (count / 25) * 0.3;
    
    // Color based on technology type
    let color = 0x9b59b6; // Purple default
    if (tech.toLowerCase().includes('laravel') || tech.toLowerCase().includes('php')) {
      color = 0xe74c3c; // Red
    } else if (tech.toLowerCase().includes('docker') || tech.toLowerCase().includes('github')) {
      color = 0x3498db; // Blue
    } else if (tech.toLowerCase().includes('node') || tech.toLowerCase().includes('javascript') || tech.toLowerCase().includes('fastify')) {
      color = 0xf39c12; // Orange
    } else if (tech.toLowerCase().includes('filament')) {
      color = 0x2ecc71; // Green
    }
    
    // Create technology node on first strand
    const nodeGeometry = new THREE.SphereGeometry(nodeRadius, 24, 24);
    const nodeMaterial = new THREE.MeshPhongMaterial({
      color,
      emissive: color,
      emissiveIntensity: 0.4,
      shininess: 150,
      transparent: true,
      opacity: 0.9
    });
    
    const techNode1 = new THREE.Mesh(nodeGeometry, nodeMaterial);
    techNode1.position.set(x1, height, z1);
    techNode1.userData = { tech, count, strand: 1 };
    
    // Create technology node on second strand (can be different or same tech)
    // For now, pair technologies: if odd number, duplicate on second strand
    // Otherwise, alternate or pair related techs
    const techNode2 = new THREE.Mesh(nodeGeometry, nodeMaterial);
    techNode2.position.set(x2, height, z2);
    techNode2.userData = { tech, count, strand: 2 };
    
    // Create text sprite for technology name
    const createTextSprite = (text, position) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 512;
      canvas.height = 128;
      
      context.fillStyle = 'rgba(0, 0, 0, 0)';
      context.fillRect(0, 0, 512, 128);
      
      context.font = 'Bold 40px Arial';
      // Convert color number to hex string
      const hexColor = '#' + color.toString(16).padStart(6, '0');
      context.fillStyle = hexColor;
      context.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      context.lineWidth = 3;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.strokeText(text, 256, 64);
      context.fillText(text, 256, 64);
      
      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.8
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.scale.set(2, 0.5, 1);
      sprite.position.copy(position);
      sprite.position.y += nodeRadius + 0.5;
      return sprite;
    };
    
    const textSprite1 = createTextSprite(tech, techNode1.position);
    const textSprite2 = createTextSprite(tech, techNode2.position);
    
    // Create rung (base pair connection) between strands
    const rungGeometry = new THREE.CylinderGeometry(0.03, 0.03, helixRadius * 2, 8);
    const rungMaterial = new THREE.MeshPhongMaterial({
      color: 0x888888,
      emissive: color,
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.6
    });
    
    const rung = new THREE.Mesh(rungGeometry, rungMaterial);
    
    // Position rung between the two nodes
    const midX = (x1 + x2) / 2;
    const midZ = (z1 + z2) / 2;
    rung.position.set(midX, height, midZ);
    
    // Orient rung to connect the two nodes
    const direction = new THREE.Vector3(x2 - x1, 0, z2 - z1).normalize();
    rung.lookAt(midX + direction.x, height, midZ + direction.z);
    rung.rotateX(Math.PI / 2);
    
    // Store node data
    const nodeData = {
      node1: techNode1,
      node2: techNode2,
      rung: rung,
      text1: textSprite1,
      text2: textSprite2,
      tech,
      count,
      angle,
      height,
      basePosition: { x1, z1, x2, z2 }
    };
    
    techNodes.push(nodeData);
    
    // Add to groups
    helixGroup.add(techNode1);
    helixGroup.add(techNode2);
    helixGroup.add(textSprite1);
    helixGroup.add(textSprite2);
    rungsGroup.add(rung);
  });

  helixGroup.add(rungsGroup);
  scene.add(helixGroup);

  // Camera position - view the helix from an angle
  const initialCameraRadius = 12;
  const initialCameraHeight = 6;
  const initialCameraAngle = Math.PI / 4; // 45 degrees
  camera.position.set(
    Math.cos(initialCameraAngle) * initialCameraRadius,
    initialCameraHeight,
    Math.sin(initialCameraAngle) * initialCameraRadius
  );
  camera.lookAt(0, 0, 0);

  // Animation variables
  let animationId = null;
  let mouseX = 0;
  let mouseY = 0;
  let time = 0;
  let targetRotation = 0;
  let currentRotation = 0;
  let cameraAngle = initialCameraAngle;
  let isPaused = false;
  let raycaster = new THREE.Raycaster();
  let mouse = new THREE.Vector2();
  
  // Callback function for when a technology is clicked
  let onTechClickCallback = null;
  
  // Mouse movement for rotation
  const handleMouseMove = (event) => {
    if (isPaused) return; // Don't update rotation if paused
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    targetRotation = mouseX * 0.5;
    
    // Update mouse position for raycasting
    mouse.x = (event.clientX / container.clientWidth) * 2 - 1;
    mouse.y = -(event.clientY / container.clientHeight) * 2 + 1;
  };
  
  // Mouse click handler
  const handleClick = (event) => {
    if (isPaused) return; // Ignore clicks when paused
    
    // Calculate mouse position in normalized device coordinates
    const rect = container.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    // Update raycaster with camera and mouse position
    raycaster.setFromCamera(mouse, camera);
    
    // Check for intersections with technology nodes
    const allNodes = [];
    techNodes.forEach(nodeData => {
      allNodes.push(nodeData.node1);
      allNodes.push(nodeData.node2);
    });
    
    const intersects = raycaster.intersectObjects(allNodes, false);
    
    if (intersects.length > 0) {
      const clickedObject = intersects[0].object;
      const nodeData = techNodes.find(nd => nd.node1 === clickedObject || nd.node2 === clickedObject);
      
      if (nodeData && onTechClickCallback) {
        // Pause rotation
        isPaused = true;
        targetRotation = 0;
        currentRotation = 0;
        
        // Call the callback with technology info
        onTechClickCallback({
          tech: nodeData.tech,
          count: nodeData.count
        });
      }
    }
  };
  
  window.addEventListener('mousemove', handleMouseMove);
  container.addEventListener('click', handleClick);
  
  // Function to resume animation
  const resumeAnimation = () => {
    isPaused = false;
  };
  
  // Function to set click callback
  const setClickCallback = (callback) => {
    onTechClickCallback = callback;
  };

  // Animation loop
  function animate() {
    animationId = requestAnimationFrame(animate);
    
    if (!isPaused) {
      time += 0.01;
      
      // Smooth rotation interpolation
      currentRotation += (targetRotation - currentRotation) * 0.05;
      
      // Rotate the entire helix slowly
      helixGroup.rotation.y += 0.0025 + currentRotation * 0.005;
      
      // Camera slight orbit (optional - creates more dynamic view)
      cameraAngle = initialCameraAngle + time * 0.025; // Slow orbit
      camera.position.x = Math.cos(cameraAngle) * initialCameraRadius;
      camera.position.y = initialCameraHeight + Math.sin(time * 0.3) * 1; // Slight vertical movement
      camera.position.z = Math.sin(cameraAngle) * initialCameraRadius;
      camera.lookAt(0, 0, 0);
    }
    
    // Slight vertical bobbing
    helixGroup.position.y = Math.sin(time * 0.5) * 0.2;
    
    // Pulse effect on technology nodes
    techNodes.forEach((nodeData, index) => {
      const pulse = 1 + Math.sin(time * 2 + index * 0.5) * 0.15;
      nodeData.node1.scale.set(pulse, pulse, pulse);
      nodeData.node2.scale.set(pulse, pulse, pulse);
      
      // Gentle rotation of text sprites to face camera
      const cameraDirection = new THREE.Vector3();
      camera.getWorldDirection(cameraDirection);
      nodeData.text1.lookAt(
        nodeData.text1.position.x + cameraDirection.x,
        nodeData.text1.position.y + cameraDirection.y,
        nodeData.text1.position.z + cameraDirection.z
      );
      nodeData.text2.lookAt(
        nodeData.text2.position.x + cameraDirection.x,
        nodeData.text2.position.y + cameraDirection.y,
        nodeData.text2.position.z + cameraDirection.z
      );
      
      // Animate rung connection (subtle pulse)
      const rungScale = 1 + Math.sin(time * 3 + index) * 0.1;
      nodeData.rung.scale.y = rungScale;
    });
    
    // Rotate strands slightly for extra movement (only when not paused)
    if (!isPaused) {
      strandGroup1.rotation.y += 0.001;
      strandGroup2.rotation.y -= 0.001;
    }
    
    renderer.render(scene, camera);
  }
  
  // Start animation
  animate();

  // Handle window resize
  const handleResize = () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
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
      container.removeEventListener('click', handleClick);
      renderer.dispose();
      scene.clear();
    },
    resume: resumeAnimation,
    setClickCallback: setClickCallback
  };
}

// Export for global use
window.createThreeViz = createThreeViz;
