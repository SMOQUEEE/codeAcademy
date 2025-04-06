// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });

  // Add solution toggle functionality
  document.querySelectorAll('.show-solution').forEach(button => {
    button.addEventListener('click', () => {
      const codePreview = button.nextElementSibling;
      const isHidden = codePreview.classList.contains('hidden');
      
      codePreview.classList.toggle('hidden');
      button.textContent = isHidden ? 'Hide Solution' : 'Show Solution';
    });
  });
});

// Add hover effect to exercise cards
const cards = document.querySelectorAll('.exercise-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Add smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    if (href !== '#') {
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});