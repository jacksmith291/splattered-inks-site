// script.js
gsap.registerPlugin(ScrollTrigger);

// 1. Dynamic Asset Loading
fetch('assets.json')
  .then(response => response.json())
  .then(assets => {
    const gallery = document.querySelector('.gallery');
    if (assets.length > 0 && gallery) {
      gallery.innerHTML = ''; // Clear placeholders
      assets.forEach(asset => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        if (asset.type === 'video') {
          item.innerHTML = `
                        <video src="${asset.src}" autoplay muted loop playsinline></video>
                     `;
        } else {
          item.innerHTML = `<img src="${asset.src}" alt="${asset.alt}">`;
        }
        gallery.appendChild(item);
      });
      // Refresh ScrollTrigger for new content
      ScrollTrigger.refresh();
    }
  })
  .catch(err => console.log('No dynamic assets found, using placeholders.'));


// 2. Hero Animations
const heroTimeline = gsap.timeline();

heroTimeline
  .from(".hero__title", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out"
  })
  .from(".hero__subtitle", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=1")
  .from(".hero__button", {
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    ease: "back.out(1.7)"
  }, "-=0.5");


// 3. Bento Grid Hover & Reveal
gsap.utils.toArray('.glass-card').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.1,
    ease: "power2.out"
  });
});


// 4. Section Headers
gsap.utils.toArray('h2').forEach(header => {
  gsap.from(header, {
    scrollTrigger: {
      trigger: header,
      start: "top 80%"
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
});