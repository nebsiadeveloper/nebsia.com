document.addEventListener('DOMContentLoaded', () => {
  const serviceCards = document.querySelectorAll('.service-card');

  serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
  });
});
