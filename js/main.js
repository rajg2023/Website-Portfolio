// Select the dark mode toggle button
const toggleBtn = document.querySelector('.toggle-btn');

// Toggle dark mode css class on body and change button text
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Change the button text based on current theme
  toggleBtn.textContent =
    document.body.classList.contains('dark') ? "Light Mode" : "Dark Mode";
});

// Animate skill bars when they enter viewport using IntersectionObserver API
const skillBars = document.querySelectorAll('.skill-bar-fill');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Animate width to the value in data attribute
      const bar = entry.target;
      bar.style.width = bar.getAttribute('data-skill');
    }
  });
}, { threshold: 0.5 });  // trigger when 50% of element is visible

// Start observing all skill bar fills
skillBars.forEach(bar => observer.observe(bar));

// Project filter buttons functionality
const filterButtons = document.querySelectorAll('.filter-btns button');
const projects = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    projects.forEach(card => {
      // Show card if filter is 'all' or if card has matching data-category
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
