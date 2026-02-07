// Example: log video events, auto‑play if user interaction occurs
const vid = document.getElementById('videoPlayer');

// 1. Log some events
vid.addEventListener('play', () => console.log('Video started'));
vid.addEventListener('pause', () => console.log('Video paused'));
vid.addEventListener('ended', () => console.log('Video finished'));

// 2. Auto‑play after first user interaction (click, touch, or key)
function enableAutoplay() {
  vid.play().catch(() => {
    // Autoplay failed – likely because of a user‑gesture policy.
    console.warn('Autoplay blocked; user interaction required.');
  });
  // Remove listeners after the first trigger
  window.removeEventListener('click', enableAutoplay);
  window.removeEventListener('keydown', enableAutoplay);
  window.removeEventListener('touchstart', enableAutoplay);
}

window.addEventListener('click', enableAutoplay);
window.addEventListener('keydown', enableAutoplay);
window.addEventListener('touchstart', enableAutoplay);