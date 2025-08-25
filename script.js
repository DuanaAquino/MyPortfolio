const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // opcional: remove após animar
    }
  });
}, {
  threshold: 0.1
});

const items = document.querySelectorAll('.reveal-left, .reveal-right');
items.forEach((item, index) => {
  // Adiciona delay para efeito em cascata (zigzag mais fluido)
  item.style.transitionDelay = `${index * 0.2}s`;
  observer.observe(item);
});