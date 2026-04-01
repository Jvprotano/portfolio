// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// Scroll reveal
const revealElements = document.querySelectorAll(
  '.section-title, .about-text, .about-skills, .timeline-item, .project-card, .contact-container'
);

revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

revealElements.forEach(el => observer.observe(el));

// Nav background on scroll
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > 100) {
    nav.style.borderBottomColor = 'var(--border)';
  } else {
    nav.style.borderBottomColor = 'transparent';
  }

  lastScroll = currentScroll;
});

// Smooth active link highlighting
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--text-primary)';
    }
  });
});
