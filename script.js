// script.js

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); //Comment out this line to make the animation only play once.
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// GSAP (if you choose to use it for more complex animations)
// Example:
// gsap.from(".hero-text", {opacity: 0, duration: 1, delay: 0.5, y: 50});

// Three.js (Basic Boilerplate - adjust as needed for your ink splatter effect)
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById('hero').appendChild(renderer.domElement); // Append to hero section
// renderer.setClearColor(0xffffff, 0); // Make the background transparent
//
// // Example: Create a basic sphere (replace with your ink splatter geometry)
// const geometry = new THREE.SphereGeometry( 1, 32, 32 );
// const material = new THREE.MeshBasicMaterial( { color: 0x6200EE, wireframe: true } );
// const sphere = new THREE.Mesh( geometry, material );
// scene.add( sphere );
//
// camera.position.z = 5;
//
// function animate() {
// 	requestAnimationFrame( animate );
//   sphere.rotation.x += 0.01;
//   sphere.rotation.y += 0.01;
// 	renderer.render( scene, camera );
// }
// animate();
//
// window.addEventListener( 'resize', function() {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   renderer.setSize( width, height );
//   camera.aspect = width / height;
//   camera.updateProjectionMatrix();
// } );


// Hover effects (example for Bento Grid cards)
const bentoCards = document.querySelectorAll('.bento-card');

bentoCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
    // Add any other hover effects you want here (e.g., change box-shadow)
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.transition = 'transform 0.3s ease';
  });
});