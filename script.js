// GSAP is a suggested library, include if you want to use it for more advanced animations.
// import {gsap} from "gsap";


// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // Optionally remove class when element is out of view
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden'); // Add class "hidden" to elements you want to animate on scroll
hiddenElements.forEach((el) => observer.observe(el));


// Portfolio Hover Effects (Color & Scale)
const portfolioItems = document.querySelectorAll('#portfolio .asset-container > *'); // Select asset container children - portfolio images

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('hovered'); // Add class for scaling and color transition
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('hovered'); // Remove class when not hovering
    });
});



// Three.js Boilerplate (Optional - if you choose to use Three.js)
// Add a canvas element to your HTML with id="three-canvas"
//
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//
// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector('#three-canvas'),
//   alpha: true // Make background transparent
// });
//
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setZ(30);
//
// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const material = new THREE.MeshBasicMaterial({ color: 0xFF5F1F, wireframe: true });
// const torus = new THREE.Mesh(geometry, material);
//
// scene.add(torus);
//
// function animate() {
//   requestAnimationFrame(animate);
//
//   torus.rotation.x += 0.01;
//   torus.rotation.y += 0.005;
//   torus.rotation.z += 0.01;
//
//   renderer.render(scene, camera);
// }
//
// animate();
//
// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });


//Basic video handling
document.addEventListener("DOMContentLoaded", function() {
    const heroVideo = document.querySelector("#hero video");

    if(heroVideo) {
        heroVideo.muted = true; // Ensure video is muted
        heroVideo.loop = true; // Ensure video loops
        heroVideo.play().catch(error => {
            // Autoplay was prevented. This might happen on some browsers.
            console.error("Autoplay prevented:", error);
            // Optionally add a button to allow the user to play the video manually.
        });
    }
});