// Toggle dark mode
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Show only one section at a time
function toggleSection(id) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (section.id === id) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}
