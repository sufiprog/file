

//All elemets will be hid initaally
gsap.set('.hero .left h1', { opacity: 0, y: -50 });
gsap.set('.hero .left p', { opacity: 0, y: 50 });
gsap.set('.hero .right img', { opacity: 0, scale: 1.5 });

gsap.set('.review img', { opacity: 0, scale: 1.2 });
gsap.set('.review .info', { opacity: 0, y: 50 });

gsap.set('.news-title', { opacity: 0, y: -50 });
gsap.set('.news-card', { opacity: 0, y: 100 });

gsap.set('.admission-container .admission', { opacity: 0, y: 100 });

gsap.set('.gallery-item', { opacity: 0, y: 100 });

gsap.set('.footer-content', { opacity: 0, y: 50 });
gsap.set('.bottom-bar', { opacity: 0, y: 50 });

// Hero Section Animation
gsap.to('.hero .left h1', {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.hero',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
  }
});

gsap.to('.hero .left p', {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.hero',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
  }
});

gsap.to('.hero .right img', {
  opacity: 1,
  scale: 1,
  duration: 1,
  scrollTrigger: {
    trigger: '.hero',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
  }
});

// Review Section Animation
gsap.to('.review img', {
  opacity: 1,
  scale: 1,
  duration: 1,
  scrollTrigger: {
    trigger: '.review',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
  }
});

gsap.to('.review .info', {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.review',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
  }
});

// News Section Animation
gsap.to('.news-title', {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.news-section',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
  }
});

gsap.to('.news-card', {
  opacity: 1,
  y: 0,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: '.news-section',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
  }
});

// Admission Section Animation
gsap.to('.admission-container .admission', {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.admission-container',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
  }
});

// Gallery Section Animation
gsap.to('.gallery-item', {
  opacity: 1,
  y: 0,
  stagger: 0.3,
  duration: 1,
  scrollTrigger: {
    trigger: '.gallery-container',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
  }
});

// Footer Animation
gsap.to('.footer-content', {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: 'footer',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
  }
});

gsap.to('.bottom-bar', {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: 'footer',
    start: 'top center',
    end: 'bottom center',
    scrub: true,
  }
});
