/**
 * AOS (Animate on Scroll) Configuration
 * Customized for Venkata Akhil Mettu's Portfolio
 */

// AOS default options
let aosOptions = {
  offset: 150, // Offset (in px) from the original trigger point
  delay: 100, // Values from 0 to 3000, with step 50ms
  duration: 600, // Values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // Default easing for AOS animations
  once: true, // Whether animation should happen only once - while scrolling down
  mirror: false, // Whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
};

// Initialize AOS with customized options
AOS.init(aosOptions);

// Refresh AOS on window resize and orientation change
window.addEventListener('resize', () => {
  AOS.refresh();
});

window.addEventListener('orientationchange', () => {
  AOS.refresh();
});

// Additional AOS customizations
document.querySelectorAll('[data-aos]').forEach((element) => {
  // Apply custom animation classes based on your portfolio's content
  if (element.classList.contains('portfolio-item')) {
    element.setAttribute('data-aos', 'fade-up');
  } else if (element.classList.contains('resume-item')) {
    element.setAttribute('data-aos', 'fade-right');
  }

  // Adjust animation delay based on the order of elements
  const delay = element.dataset.aosDelay || 0;
  element.style.animationDelay = `${parseInt(delay, 10) * 100}ms`;
});

// Accessibility improvements
document.querySelectorAll('[data-aos]').forEach((element) => {
  element.setAttribute('tabindex', '0');
  element.setAttribute('role', 'region');
  element.setAttribute('aria-live', 'polite');
});

// Performance optimization
const throttledRefresh = throttle(() => {
  AOS.refresh();
}, 100);

window.addEventListener('scroll', throttledRefresh);
