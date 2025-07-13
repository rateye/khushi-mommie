const images = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    }
  });
}, {
  threshold: 0.1
});

images.forEach(img => {
  observer.observe(img);
});
